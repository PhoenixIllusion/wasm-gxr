"use strict";
var context, canvas, gl;
var previousT = -1;
var keyboardBuffer = [];

var p1XY = new Float32Array([ 0, 0.75, 180 ]);
var p2XY = new Float32Array([ 0, 0.75, 180 ]);

var KEY_A = 65;
var KEY_S = 83;
var KEY_D = 68;
var KEY_W = 87;

var fragment_shader_src = "precision mediump float;"
		+ "precision mediump int;"
		+ "uniform sampler2D uSampler;"
		+ "varying vec2 vTextureCoord;"
		+ "void main(void)"
		+ "{"
		+ "  vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, 1.0 - vTextureCoord.t));"
		+ "  gl_FragColor = textureColor;"
		// + " gl_FragColor = vec4(1.,1.,1.,0);"
		+ "}";

var vertext_shader_src = "precision mediump float;"
		+ "precision mediump int;  "

		+ "attribute vec3 aVertexPosition;" + "attribute vec2 aTextureCoord;"

		+ "uniform mat4 uMVMatrix;" + "uniform mat4 uPMatrix;"

		+ "varying vec2 vTextureCoord;"

		+ "void main(void)" + "{"
		+ "  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);"
		+ "  vTextureCoord = aTextureCoord;" + "}";

function GL_Texture(linear) {
	this.TEXTURE_ID = gl.createTexture();
	this.src = "";
	this.bind = function(uSamplerIDX, channel, channel_index) {
		gl.activeTexture(channel);
		gl.bindTexture(gl.TEXTURE_2D, this.TEXTURE_ID);
		gl.uniform1i(uSamplerIDX, channel_index);
	}
	var TEXID = this.TEXTURE_ID;
	this.load = function(IMG) {
		this.src = IMG.src;
		gl.bindTexture(gl.TEXTURE_2D, TEXID);
		gl
				.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
						gl.UNSIGNED_BYTE, IMG);
		// gl.generateMipmap(gl.TEXTURE_2D);
		if (linear == null)
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		else
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
	};
}

function initGL(canvas) {
	try {
		gl = canvas.getContext("experimental-webgl");
		gl.enable(gl.DEPTH_TEST);
		gl.viewportWidth = canvas.width;
		gl.viewportHeight = canvas.height;
	} catch (e) {
	}
	if (!gl) {
		alert("Could not initialise WebGL, sorry :-(");
	}
}
function getShader(gl, shaderScript, type) {
	var shader = gl.createShader(type);

	gl.shaderSource(shader, shaderScript);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(gl.getShaderInfoLog(shader));
		return null;
	}
	return shader;
}
var shaderProgram;
function initShaders() {
	var fragmentShader = getShader(gl, fragment_shader_src, gl.FRAGMENT_SHADER);
	var vertexShader = getShader(gl, vertext_shader_src, gl.VERTEX_SHADER);
	shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);
	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		alert("Could not initialise shaders");
	}
	gl.useProgram(shaderProgram);
	shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram,
			"aVertexPosition");
	shaderProgram.vertexTextureAttribute = gl.getAttribLocation(shaderProgram,
			"aTextureCoord");

	gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
	gl.enableVertexAttribArray(shaderProgram.vertexTextureAttribute);

	shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram,
			"uPMatrix");
	shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram,
			"uMVMatrix");
	shaderProgram.textureSampler = gl.getUniformLocation(shaderProgram,
			"uSampler")
}

function gameKeyDown(e) {
	keyboardBuffer[e.keyCode] = true;
}

function gameKeyUp(e) {
	keyboardBuffer[e.keyCode] = false;
}

function updateLogic(deltaT) {
	var updatedPos = false;
	var updatedRot = false;
	var velocity = 0;
	var gamePad = null;
	for ( var v in window.gamepads) {
		gamePad = window.gamepads[v];
	}
	if (!gamePad) {
		if (keyboardBuffer[KEY_A]) {
			p1XY[2] += 2;
			updatedRot = true;
		}
		if (keyboardBuffer[KEY_D]) {
			p1XY[2] -= 2;
			updatedRot = true;
		}
		if (keyboardBuffer[KEY_W]) {
			velocity += .750;
			updatedPos = true;
		}
		if (keyboardBuffer[KEY_S]) {
			velocity -= .750;
			updatedPos = true;
		}
	} else {
		var axisX = 0;
		if(gamePad.axes && gamePad.axes[0]) {
			axisX = gamePad.axes[0];
		}
		var axisY = 0;
		if(gamePad.axes && gamePad.axes[1]) {
			axisY = gamePad.axes[1];
		}
		if (Math.abs(axisX) > 0.1) {
			p1XY[2] -= 2 * axisX;
			updatedRot = true;
		}
		if (Math.abs(axisY) > 0.1) {
			velocity += .750 * -axisY;
			updatedPos = true;
		}
	}
	var dX = Math.cos(p1XY[2] / 180 * Math.PI);
	var dY = Math.sin(p1XY[2] / 180 * Math.PI);

	var nextX = p1XY[0] + dX * velocity * deltaT;
	var nextY = p1XY[1] + dY * velocity * deltaT;
	var dist = nextX * nextX + nextY * nextY;
	if (dist < 1 && dist > 0.25) {
		p1XY[0] = nextX;
		p1XY[1] = nextY;
	} else {
		updatedPos = false;
	}
	return updatedRot || updatedPos;
}

var world = {};
var ship = {};

var sky = {};

function initBuf(array_buffer, scale) {
	var obj = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, obj);

	var index = 0;
	for ( var i = 0; i < array_buffer.length/5; i++) {

		for ( var j = 0; j < 3; j++) {
			array_buffer[index++] *= scale;
		}
    index+=2;
	}

	gl.bufferData(gl.ARRAY_BUFFER, array_buffer, gl.STATIC_DRAW);
	return obj;
}

function initModels() {
  return loadModel("data/map.bin.lzma", "data/map.jpg", 1).
    then(function(model) {
      world = model;
      return loadModel("data/ship.bin.lzma", "data/ship_tex.png", 1);
    }).then(function(model) {
	    ship = model;
      return loadModel("data/skybox.bin.lzma", "data/Morning.jpg", 1);
    }).then(function(model) {
	    sky = model;
    });
}


function loadModel(obj, img_src, scale) {
	var response = {};
  return Reader.getLZMA(obj, "").then(function(binary) {
    binary = new Float32Array(binary.buffer);
	  response.buf = initBuf( binary , scale);
	  response.num_vertex = binary.length / 6;
	  response.tex = new GL_Texture(false);
    return Reader.getImage(img_src, "");
  }).then(function(img) {
		response.tex.load(img);
    return response;
  });
}
