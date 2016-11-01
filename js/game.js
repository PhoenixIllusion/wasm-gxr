var heap = new ArrayBuffer(0x10000);
var heapF32 = new Float32Array(heap); 
var gxr;

function heapObj(count,size) {
  var offset = gxr._mem_alloc(count,size);
  var subset = heapF32.subarray(offset/4, (offset/4)+count);
  return {offset:offset, array: subset};
}

function initGlobals() {
  window.camera = gxr._mem_alloc(16,4);
  window.mvMatrix = gxr._mem_alloc(16,4);
  window.mvMatrix_array = heapF32.subarray(mvMatrix/4, (mvMatrix/4)+16);
  window.pMatrix = gxr._mem_alloc(16,4);
  window.pMatrix_array = heapF32.subarray(pMatrix/4, (pMatrix/4)+16);

  window.scaler = heapObj(3,4);

  window.cameraParts = { eye: heapObj(3,4),center:heapObj(3,4),up:heapObj(3,4)};
  window.cameraParts.up.array[0] = 0;
  window.cameraParts.up.array[1] = 0;
  window.cameraParts.up.array[2] = 1;
}

function drawMap() {
	gxr._mat4_identity(mvMatrix);
  scaler.array[0] = scaler.array[1] = scaler.array[2] = 2;
	gxr._mat4_scale(mvMatrix, mvMatrix,  scaler.offset );
	gxr._mat4_multiply(mvMatrix, camera, mvMatrix);

	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix_array);

	gl.bindTexture(gl.TEXTURE_2D, world.tex);
	gl.drawArrays(gl.TRIANGLES, world.offset, world.size);

	gxr._mat4_identity(mvMatrix);
  scaler.array[0] = scaler.array[1] = scaler.array[2] = 1.75;
	gxr._mat4_scale(mvMatrix, mvMatrix,  scaler.offset );
	gxr._mat4_rotateX(mvMatrix, mvMatrix, 90 / 180 * Math.PI);
	gxr._mat4_translate_xyz(mvMatrix, mvMatrix,  0, 0, -.125 );
	gxr._mat4_multiply(mvMatrix, camera, mvMatrix);

	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix_array);

	gl.bindTexture(gl.TEXTURE_2D, sky.tex);
	gl.drawArrays(gl.TRIANGLES, sky.offset, sky.size);
}

function drawObj(dat) {
	gxr._mat4_identity(mvMatrix);
  scaler.array[0] = scaler.array[1] = scaler.array[2] = .02;
	gxr._mat4_translate_xyz(mvMatrix, mvMatrix,  dat[0], dat[1], 0.00 );
	gxr._mat4_scale(mvMatrix, mvMatrix,  scaler.offset );
	gxr._mat4_rotate(mvMatrix, mvMatrix, (dat[2] - 90) / 180 * Math.PI, cameraParts.up.offset);
	gxr._mat4_multiply(mvMatrix, camera, mvMatrix);

	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix_array);

	gl.bindTexture(gl.TEXTURE_2D, ship.tex);
	gl.drawArrays(gl.TRIANGLES, ship.offset, ship.size);
}

"use strict";
function gameDraw(t) {

  var deltaT = 0;
	if (previousT > 0) {
		deltaT = t - previousT;
		updateLogic(deltaT / 1000)
	}
	previousT = t;

	gl.viewportWidth = canvas.width;
	gl.viewportHeight = canvas.height;
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	gxr._mat4_perspective(pMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.01,
			300.0);
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix_array);

	var dX = Math.cos(p1XY[2] / 180 * Math.PI) * 0.16;
	var dY = Math.sin(p1XY[2] / 180 * Math.PI) * 0.16;

  cameraParts.eye.array[0] = p1XY[0] - dX;
  cameraParts.eye.array[1] = p1XY[1] - dY;
  cameraParts.eye.array[2] = .05;

  cameraParts.center.array[0] = p1XY[0] + dX;
  cameraParts.center.array[1] = p1XY[1] + dY;
  cameraParts.center.array[2] = 0;

	gxr._mat4_lookAt(camera, cameraParts.eye.offset, cameraParts.center.offset, cameraParts.up.offset)

	drawMap();
	drawObj(p1XY);
	drawObj(p2XY);

	requestAnimationFrame(gameDraw);
}
function instantiateWasm(url, imports) {
  return fetch("js/out.wasm")
  .then(function(resp){ return resp.arrayBuffer();})
  .then(function(bytes) { return WebAssembly.compile(bytes);})
  .then(function(m){ return new WebAssembly.Instance(m, imports);});
}
function setupGame() {
  initGlobals();
	canvas = document.getElementById("canvas");
  canvas.width=document.body.clientWidth/4;
  canvas.height=document.body.clientHeight/4;
	initGL(canvas);
	initShaders();
	initModels().then(function() {
	  requestAnimationFrame(gameDraw);
  });
}

if(!window.WebAssembly || !window.WebAssembly.compile) {
  console.log("WASM Not Supported");
  gxr = Module["asm"](window, {_roundf:Math.round,_fminf:Math.min,_fmaxf:Math.max}, heap);
  console.log("ASMJS Loaded");
  setupGame();
} else {
  var TABLE_SIZE = 0;
  var importObj = {
      "global.Math": Math,
      "asm2wasm": {
        "i32u-rem": function(x, y) {
                      return ((x >>> 0) % (y >>> 0)) >>> 0;
                    }
      },
      env:{
        memory: new WebAssembly.Memory({initial:10, maximum:100}), memoryBase: 0,
        table: new WebAssembly.Table({ initial: TABLE_SIZE, maximum: TABLE_SIZE, element: 'anyfunc' }), tableBase: 0,
        _roundf:Math.round,
        _fminf:Math.min,
        _fmaxf:Math.max}
  };
  instantiateWasm("js/out.wasm",importObj).then(function(instance) {
    gxr = instance.exports;
    heap = importObj.env.memory.buffer;
    heapF32 = new Float32Array(heap);
    console.log("WASM Loaded");
    setupGame(); 
  }).catch(function(err) {
    console.log("WASM Failed: "+err);
  });
}
