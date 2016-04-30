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

  window.cameraParts = { eye: heapObj(3,4),center:heapObj(3,4),up:heapObj(3,4)};
  window.cameraParts.up.array[0] = 0;
  window.cameraParts.up.array[1] = 0;
  window.cameraParts.up.array[2] = 1;
}

function drawMap() {
	gxr._mat4_identity(mvMatrix);
	gxr._mat4_multiply(mvMatrix, camera, mvMatrix);

	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix_array);

	gl.bindBuffer(gl.ARRAY_BUFFER, world.pos);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT,
			false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, world.uv);
	gl.vertexAttribPointer(shaderProgram.vertexTextureAttribute, 2, gl.FLOAT,
			false, 0, 0);

	world.tex.bind(shaderProgram.textureSampler, gl.TEXTURE0, 0);
	gl.drawArrays(gl.TRIANGLES, 0, world.num_vertex);

	gxr._mat4_identity(mvMatrix);
	gxr._mat4_rotateX(mvMatrix, mvMatrix, 90 / 180 * Math.PI);
	gxr._mat4_translate_xyz(mvMatrix, mvMatrix,  0, 0, -.125 );
	gxr._mat4_multiply(mvMatrix, camera, mvMatrix);

	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix_array);

	gl.bindBuffer(gl.ARRAY_BUFFER, sky.pos);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT,
			false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, sky.uv);
	gl.vertexAttribPointer(shaderProgram.vertexTextureAttribute, 2, gl.FLOAT,
			false, 0, 0);

	sky.tex.bind(shaderProgram.textureSampler, gl.TEXTURE0, 0);
	gl.drawArrays(gl.TRIANGLES, 0, sky.num_vertex);
}

function drawObj(dat) {
	gxr._mat4_identity(mvMatrix);
	gxr._mat4_translate_xyz(mvMatrix, mvMatrix,  dat[0], dat[1], 0.00 );
	gxr._mat4_rotate(mvMatrix, mvMatrix, (dat[2] - 90) / 180 * Math.PI, cameraParts.up.offset);
	gxr._mat4_multiply(mvMatrix, camera, mvMatrix);

	world.tex.bind(shaderProgram.textureSampler, gl.TEXTURE0, 0);
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix_array);

	gl.bindBuffer(gl.ARRAY_BUFFER, ship.pos);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT,
			false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, ship.uv);
	gl.vertexAttribPointer(shaderProgram.vertexTextureAttribute, 2, gl.FLOAT,
			false, 0, 0);
	ship.tex.bind(shaderProgram.textureSampler, gl.TEXTURE0, 0);
	gl.drawArrays(gl.TRIANGLES, 0, ship.num_vertex);
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

function setupGame() {
  initGlobals();
	document.onkeydown = gameKeyDown;
	document.onkeyup = gameKeyUp;
	canvas = document.getElementById("canvas");
	initGL(canvas);
	initShaders();
	initModels();
	requestAnimationFrame(gameDraw);
}

if(!window.Wasm || !window.Wasm.instantiateModule) {
  gxr = Module["asm"](window, {_roundf:Math.round,_fminf:Math.min,_fmaxf:Math.max}, heap);
  setupGame();
} else {
  fetch("js/out.wasm").then(function(response) {
    return response.arrayBuffer();
  }).then(function(buffer) {
    gxr = Wasm.instantiateModule(new Uint8Array(buffer), {"global.Math": Math, env:{_roundf:Math.round,_fminf:Math.min,_fmaxf:Math.max}}, heap).exports;  
    setupGame(); 
  });
}
