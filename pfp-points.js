(() => {
  const root = document.querySelector("#team-pfp");
  const canvas = document.querySelector("#team-pfp-canvas");
  if (!root || !canvas) return;

  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  if (!gl) return;

  const createShader = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
    return shader;
  };

  const vertexShader = createShader(gl.VERTEX_SHADER, `
    attribute vec3 aPosition;
    uniform float uPitch;
    uniform mat4 uProjection;
    uniform float uPointSize;
    uniform float uRoll;
    uniform float uScale;
    uniform float uYaw;

    void main() {
      float cy = cos(uYaw);
      float sy = sin(uYaw);
      float cp = cos(uPitch);
      float sp = sin(uPitch);
      float cr = cos(uRoll);
      float sr = sin(uRoll);
      vec3 source = aPosition * uScale;
      vec3 point = vec3(
        cy * source.x + sy * source.z,
        source.y,
        -sy * source.x + cy * source.z
      );
      point = vec3(cr * point.x - sr * point.y, sr * point.x + cr * point.y, point.z);
      point = vec3(point.x, cp * point.y - sp * point.z, sp * point.y + cp * point.z);
      point.z -= 8.6;
      gl_Position = uProjection * vec4(point, 1.0);
      gl_PointSize = uPointSize * (8.8 / -point.z);
    }
  `);
  const fragmentShader = createShader(gl.FRAGMENT_SHADER, `
    precision mediump float;

    void main() {
      vec2 center = gl_PointCoord - 0.5;
      if (dot(center, center) > 0.25) discard;
      gl_FragColor = vec4(1.0, 0.035, 0.02, 0.92);
    }
  `);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));

  const projection = new Float32Array(16);
  const positionLocation = gl.getAttribLocation(program, "aPosition");
  const pitchLocation = gl.getUniformLocation(program, "uPitch");
  const pointSizeLocation = gl.getUniformLocation(program, "uPointSize");
  const projectionLocation = gl.getUniformLocation(program, "uProjection");
  const rollLocation = gl.getUniformLocation(program, "uRoll");
  const scaleLocation = gl.getUniformLocation(program, "uScale");
  const yawLocation = gl.getUniformLocation(program, "uYaw");
  const modelSources = {
    alexey: "./assets/team/alexey-points.bin?v=1",
    human: "./assets/team/rustam-points.bin?v=1",
    maxim: "./assets/team/maxim-points.bin?v=1",
  };
  const modelYaw = {
    alexey: 27 * Math.PI / 180,
    human: 172 * Math.PI / 180,
    maxim: -22 * Math.PI / 180,
  };
  const modelScale = {
    alexey: 1,
    human: 1,
    maxim: 1.35,
  };
  const modelRoll = {
    alexey: 0,
    human: 0,
    maxim: 7 * Math.PI / 180,
  };
  const modelYawDirection = {
    alexey: 1,
    human: -1,
    maxim: 1,
  };
  const modelPitchDirection = {
    alexey: 1,
    human: -1,
    maxim: 1,
  };
  const modelBuffers = new Map();
  const pointBuffer = gl.createBuffer();
  let activeModel = "";
  let pointCount = 0;
  let pointerInWindow = false;
  let pointerPitch = 0;
  let pointerYaw = 0;
  let targetPitch = 0;
  let targetYaw = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(canvas.clientWidth * ratio));
    const height = Math.max(1, Math.round(canvas.clientHeight * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    gl.viewport(0, 0, width, height);
    const fieldOfView = Math.PI / 11.8;
    const f = 1 / Math.tan(fieldOfView / 2);
    const aspect = width / height;
    const near = 0.1;
    const far = 10;
    projection.set([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) / (near - far), -1,
      0, 0, (2 * far * near) / (near - far), 0,
    ]);
  };

  window.addEventListener("pointermove", (event) => {
    pointerInWindow = true;
    const x = Math.max(0, Math.min(1, event.clientX / window.innerWidth));
    const y = Math.max(0, Math.min(1, event.clientY / window.innerHeight));
    targetYaw = (x - 0.5) * Math.PI / 3;
    targetPitch = (y - 0.5) * Math.PI * 2 / 9;
  });
  document.addEventListener("pointerout", (event) => {
    if (event.relatedTarget) return;
    pointerInWindow = false;
    targetPitch = 0;
  });
  window.addEventListener("blur", () => {
    pointerInWindow = false;
    targetPitch = 0;
  });

  const draw = (time) => {
    requestAnimationFrame(draw);
    if (!pointCount || root.offsetParent === null) return;
    resize();
    if (!pointerInWindow) targetYaw = Math.sin(time * 0.00042) * Math.PI / 6;
    pointerYaw += (targetYaw - pointerYaw) * 0.045;
    pointerPitch += (targetPitch - pointerPitch) * 0.045;
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.uniformMatrix4fv(projectionLocation, false, projection);
    gl.uniform1f(pitchLocation, pointerPitch * modelPitchDirection[activeModel]);
    gl.uniform1f(rollLocation, modelRoll[activeModel]);
    gl.uniform1f(yawLocation, pointerYaw * modelYawDirection[activeModel] + modelYaw[activeModel]);
    gl.uniform1f(scaleLocation, modelScale[activeModel]);
    gl.uniform1f(pointSizeLocation, Math.min(window.devicePixelRatio || 1, 2) * 0.82);
    gl.drawArrays(gl.POINTS, 0, pointCount);
  };

  gl.clearColor(0, 0, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  requestAnimationFrame(draw);

  const fetchModel = (model) => {
    if (!modelBuffers.has(model)) {
      modelBuffers.set(model, fetch(modelSources[model])
        .then((response) => {
          if (!response.ok) throw new Error(`Point cloud request failed: ${response.status}`);
          return response.arrayBuffer();
        }));
    }
    return modelBuffers.get(model);
  };

  const loadModel = (model) => {
    if (!modelSources[model] || model === activeModel) return;
    activeModel = model;
    root.classList.remove("loaded");
    fetchModel(model).then((buffer) => {
      if (model !== activeModel) return;
      const view = new DataView(buffer);
      pointCount = view.getUint32(0, true);
      const points = new Float32Array(buffer, 4, pointCount * 3);
      gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);
      gl.useProgram(program);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
      root.classList.add("loaded");
    })
    .catch((error) => console.error(error));
  };

  window.addEventListener("team-pfp-model-change", (event) => loadModel(event.detail.model));
  loadModel(root.dataset.model || "alexey");
})();
