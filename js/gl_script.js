"use strict";
var context, canvas, gl;
var previousT = -1;
var keyboardBuffer = [];
var gyro = null;

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

function initGL(canvas) {
	try {
		gl = canvas.getContext("experimental-webgl");
		gl.enable(gl.DEPTH_TEST);
		gl.viewportWidth = canvas.width;
		gl.viewportHeight = canvas.height;
	} catch (e) {
	}

  window.onkeydown = gameKeyDown;
  window.onkeyup = gameKeyUp;
  window.addEventListener('deviceorientation', devOrientHandler, false);
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

function devOrientHandler(e) {
	if(event.alpha != null)
	gyro = [event.gamma,  event.beta, event.alpha ];
}

function updateLogic(deltaT) {
	var updatedPos = false;
	var updatedRot = false;
	var velocity = 0;
	var gamePad = null;
	for ( var v in window.gamepads) {
		gamePad = window.gamepads[v];
	}
  if(gyro) {
    if(gyro[1] < 30) {
      if(gyro[1]<-15) {
        keyboardBuffer[KEY_A] = 1;
      } else {
        keyboardBuffer[KEY_A] = 0;
      }

      if(gyro[1]>15) {
        keyboardBuffer[KEY_D] = 1;
      } else {
        keyboardBuffer[KEY_D] = 0;
      }
     
      if(gyro[1]>-40) {
        keyboardBuffer[KEY_W] = 1;
      } else {
        keyboardBuffer[KEY_W] = 0;
      }

      if(gyro[1]<-50) {
        keyboardBuffer[KEY_S] = 1;
      } else {
        keyboardBuffer[KEY_S] = 0;
      }
    } else {
      if(gyro[0]<-20) {
        keyboardBuffer[KEY_A] = 1;
      } else {
        keyboardBuffer[KEY_A] = 0;
      }

      if(gyro[0]>20) {
        keyboardBuffer[KEY_D] = 1;
      } else {
        keyboardBuffer[KEY_D] = 0;
      }
     
      if(gyro[1]<45) {
        keyboardBuffer[KEY_W] = 1;
      } else {
        keyboardBuffer[KEY_W] = 0;
      }

      if(gyro[1]>50) {
        keyboardBuffer[KEY_S] = 1;
      } else {
        keyboardBuffer[KEY_S] = 0;
      }
    }
 
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

var vbo;
var world = {};
var ship = {};
var sky = {};

function hasExtension(name) {
  var allExts = gl.getSupportedExtensions();
  var selected = [];
  allExts.forEach(function(o,i){if(o.indexOf(name)>=0){
    selected.push(o);
  }});
  return gl.getExtension(selected[0])
}

function parsePak(buffer){
  var resp = {};
  var U8 = new Uint8Array(buffer);
  var I32 = new Int32Array(buffer);
  var index=0;
  var count = I32[index++];
  resp.entries = [];
  resp.U8 = U8;
  resp.I32 = I32;
  for(var i=0;i<count;i++) {
    var entry = {};
    entry.type = I32[index++];
    entry.width = I32[index++];
    entry.height = I32[index++];
    entry.offset = I32[index++];
    entry.size = I32[index++];
    entry.data = new Uint8Array(buffer, entry.offset, entry.size);
    resp.entries.push(entry);
  }
  resp.F32 = new Float32Array(buffer, resp.entries[0].offset);
  return resp;
}
function getSupportedTexture() {
  if(hasExtension('compressed_texture_s3tc'))
    return "dxt1";
  if(hasExtension('compressed_texture_pvrtc'))
    return "pvrtc";
  if(hasExtension('compressed_texture_etc1'))
    return "etc1";
  return "raw";
}

function parseTexture(entry) {
	var texId = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texId);

  if(entry.type == 0){
	  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, entry.width, entry.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, entry.data);
  } else {
		gl.compressedTexImage2D(gl.TEXTURE_2D, 0, entry.type, entry.width, entry.height, 0, entry.data);
  }

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  return texId;
}

function initModels() {
  return Promise.all(["data/model.pak","data/"+getSupportedTexture()+".tex_pak"].
    map(function(url){
      return fetch(url).then(function(resp){
        return resp.arrayBuffer();
      }).then(function(arraybuffer){
        return parsePak(arraybuffer);
      });
    })).then(function(paks) {
        vbo = gl.createBuffer();
	      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	      gl.bufferData(gl.ARRAY_BUFFER, paks[0].F32, gl.STATIC_DRAW);
	      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT,
			      false, 32, 0);
	      gl.vertexAttribPointer(shaderProgram.vertexTextureAttribute, 2, gl.FLOAT,
			      false, 32, 12);
        var texmap = [2,0,1];
        [world, ship, sky].map(function(o,i) {
            o.tex = parseTexture(paks[1].entries[texmap[i]])
            o.offset = (paks[0].entries[i].offset-paks[0].entries[0].offset)/32;
            o.size = paks[0].entries[i].size/32;
        });
        return [world, ship, sky];
    });
}
