Module["asm"] = (function(global, env, buffer) {
 "use asm";
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var Math_floor = global.Math.floor;
 var Math_abs = global.Math.abs;
 var Math_sqrt = global.Math.sqrt;
 var Math_cos = global.Math.cos;
 var Math_sin = global.Math.sin;
 var Math_tan = global.Math.tan;
 var Math_acos = global.Math.acos;
 var Math_ceil = global.Math.ceil;
 var Math_imul = global.Math.imul;
 var _roundf = env._roundf;
 var _fminf = env._fminf;
 var _fmaxf = env._fmaxf;
 function _mat4_invert(i16, i1) {
  i16 = i16 | 0;
  i1 = i1 | 0;
  var d2 = 0.0, d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d17 = 0.0, d18 = 0.0, d19 = 0.0, d20 = 0.0, d21 = 0.0, d22 = 0.0, d23 = 0.0, d24 = 0.0, d25 = 0.0, d26 = 0.0, d27 = 0.0, d28 = 0.0, d29 = 0.0, d30 = 0.0, d31 = 0.0;
  d22 = +HEAPF32[i1 >> 2];
  d29 = +HEAPF32[i1 + 4 >> 2];
  d30 = +HEAPF32[i1 + 8 >> 2];
  d31 = +HEAPF32[i1 + 12 >> 2];
  d17 = +HEAPF32[i1 + 16 >> 2];
  d18 = +HEAPF32[i1 + 20 >> 2];
  d19 = +HEAPF32[i1 + 24 >> 2];
  d20 = +HEAPF32[i1 + 28 >> 2];
  d21 = +HEAPF32[i1 + 32 >> 2];
  d23 = +HEAPF32[i1 + 36 >> 2];
  d24 = +HEAPF32[i1 + 40 >> 2];
  d25 = +HEAPF32[i1 + 44 >> 2];
  d26 = +HEAPF32[i1 + 48 >> 2];
  d27 = +HEAPF32[i1 + 52 >> 2];
  d28 = +HEAPF32[i1 + 56 >> 2];
  d2 = +HEAPF32[i1 + 60 >> 2];
  d3 = d22 * d18 - d29 * d17;
  d4 = d22 * d19 - d30 * d17;
  d5 = d22 * d20 - d31 * d17;
  d6 = d29 * d19 - d30 * d18;
  d7 = d29 * d20 - d31 * d18;
  d8 = d30 * d20 - d31 * d19;
  d9 = d21 * d27 - d23 * d26;
  d10 = d21 * d28 - d24 * d26;
  d11 = d21 * d2 - d25 * d26;
  d12 = d23 * d28 - d24 * d27;
  d13 = d23 * d2 - d25 * d27;
  d14 = d24 * d2 - d25 * d28;
  d15 = d8 * d9 + (d6 * d11 + (d5 * d12 + (d3 * d14 - d4 * d13)) - d7 * d10);
  if (!(d15 != 0.0)) return;
  d15 = 1.0 / d15;
  HEAPF32[i16 >> 2] = (d20 * d12 + (d18 * d14 - d19 * d13)) * d15;
  HEAPF32[i16 + 4 >> 2] = (d30 * d13 - d29 * d14 - d31 * d12) * d15;
  HEAPF32[i16 + 8 >> 2] = (d8 * d27 - d7 * d28 + d6 * d2) * d15;
  HEAPF32[i16 + 12 >> 2] = (d7 * d24 - d23 * d8 - d6 * d25) * d15;
  HEAPF32[i16 + 16 >> 2] = (d19 * d11 - d17 * d14 - d20 * d10) * d15;
  HEAPF32[i16 + 20 >> 2] = (d31 * d10 + (d22 * d14 - d30 * d11)) * d15;
  HEAPF32[i16 + 24 >> 2] = (d5 * d28 - d8 * d26 - d4 * d2) * d15;
  HEAPF32[i16 + 28 >> 2] = (d21 * d8 - d5 * d24 + d4 * d25) * d15;
  HEAPF32[i16 + 32 >> 2] = (d20 * d9 + (d17 * d13 - d18 * d11)) * d15;
  HEAPF32[i16 + 36 >> 2] = (d29 * d11 - d22 * d13 - d31 * d9) * d15;
  HEAPF32[i16 + 40 >> 2] = (d7 * d26 - d5 * d27 + d3 * d2) * d15;
  HEAPF32[i16 + 44 >> 2] = (d23 * d5 - d21 * d7 - d3 * d25) * d15;
  HEAPF32[i16 + 48 >> 2] = (d18 * d10 - d17 * d12 - d19 * d9) * d15;
  HEAPF32[i16 + 52 >> 2] = (d30 * d9 + (d22 * d12 - d29 * d10)) * d15;
  HEAPF32[i16 + 56 >> 2] = (d4 * d27 - d6 * d26 - d3 * d28) * d15;
  HEAPF32[i16 + 60 >> 2] = (d21 * d6 - d4 * d23 + d3 * d24) * d15;
  return;
 }
 function _mat4_lookAt(i16, i1, i6, i2) {
  i16 = i16 | 0;
  i1 = i1 | 0;
  i6 = i6 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d17 = 0.0, d18 = 0.0, d19 = 0.0;
  d17 = +HEAPF32[i1 >> 2];
  d18 = +HEAPF32[i1 + 4 >> 2];
  d15 = +HEAPF32[i1 + 8 >> 2];
  d9 = +HEAPF32[i2 >> 2];
  d8 = +HEAPF32[i2 + 4 >> 2];
  d7 = +HEAPF32[i2 + 8 >> 2];
  d3 = +HEAPF32[i6 + 8 >> 2];
  d4 = d17 - +HEAPF32[i6 >> 2];
  d5 = d18 - +HEAPF32[i6 + 4 >> 2];
  if (+Math_abs(+d4) < 1.0e-6) if (+Math_abs(+d5) < 1.0e-6) if (+Math_abs(+(d15 - d3)) < 1.0e-6) {
   HEAPF32[i16 >> 2] = 1.0;
   i6 = i16 + 4 | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   HEAP32[i6 + 8 >> 2] = 0;
   HEAP32[i6 + 12 >> 2] = 0;
   HEAPF32[i16 + 20 >> 2] = 1.0;
   i6 = i16 + 24 | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   HEAP32[i6 + 8 >> 2] = 0;
   HEAP32[i6 + 12 >> 2] = 0;
   HEAPF32[i16 + 40 >> 2] = 1.0;
   i6 = i16 + 44 | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   HEAP32[i6 + 8 >> 2] = 0;
   HEAP32[i6 + 12 >> 2] = 0;
   HEAPF32[i16 + 60 >> 2] = 1.0;
  }
  d3 = d15 - d3;
  d13 = 1.0 / +Math_sqrt(+(d4 * d4 + d5 * d5 + d3 * d3));
  d14 = d4 * d13;
  d12 = d5 * d13;
  d13 = d3 * d13;
  d5 = d8 * d13 - d7 * d12;
  d7 = d7 * d14 - d9 * d13;
  d4 = d9 * d12 - d8 * d14;
  d3 = +Math_sqrt(+(d4 * d4 + (d5 * d5 + d7 * d7)));
  if (d3 != 0.0) {
   d9 = 1.0 / d3;
   d11 = d9 * d5;
   d10 = d9 * d7;
   d9 = d9 * d4;
  } else {
   d11 = 0.0;
   d10 = 0.0;
   d9 = 0.0;
  }
  d3 = d12 * d9 - d13 * d10;
  d7 = d13 * d11 - d14 * d9;
  d8 = d14 * d10 - d12 * d11;
  d4 = +Math_sqrt(+(d8 * d8 + (d3 * d3 + d7 * d7)));
  if (d4 != 0.0) {
   d19 = 1.0 / d4;
   d5 = d3 * d19;
   d4 = d7 * d19;
   d3 = d8 * d19;
  } else {
   d5 = 0.0;
   d4 = 0.0;
   d3 = 0.0;
  }
  HEAPF32[i16 >> 2] = d11;
  HEAPF32[i16 + 4 >> 2] = d5;
  HEAPF32[i16 + 8 >> 2] = d14;
  HEAPF32[i16 + 12 >> 2] = 0.0;
  HEAPF32[i16 + 16 >> 2] = d10;
  HEAPF32[i16 + 20 >> 2] = d4;
  HEAPF32[i16 + 24 >> 2] = d12;
  HEAPF32[i16 + 28 >> 2] = 0.0;
  HEAPF32[i16 + 32 >> 2] = d9;
  HEAPF32[i16 + 36 >> 2] = d3;
  HEAPF32[i16 + 40 >> 2] = d13;
  HEAPF32[i16 + 44 >> 2] = 0.0;
  HEAPF32[i16 + 48 >> 2] = -(d15 * d9 + (d18 * d10 + d17 * d11));
  HEAPF32[i16 + 52 >> 2] = -(d15 * d3 + (d18 * d4 + d17 * d5));
  HEAPF32[i16 + 56 >> 2] = -(d15 * d13 + (d17 * d14 + d18 * d12));
  HEAPF32[i16 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_multiply(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d16 = 0.0, d17 = 0.0, d18 = 0.0, d19 = 0.0, d20 = 0.0, d21 = 0.0, d22 = 0.0, d23 = 0.0;
  d23 = +HEAPF32[i2 >> 2];
  d19 = +HEAPF32[i2 + 4 >> 2];
  d15 = +HEAPF32[i2 + 8 >> 2];
  d11 = +HEAPF32[i2 + 12 >> 2];
  d22 = +HEAPF32[i2 + 16 >> 2];
  d18 = +HEAPF32[i2 + 20 >> 2];
  d14 = +HEAPF32[i2 + 24 >> 2];
  d9 = +HEAPF32[i2 + 28 >> 2];
  d21 = +HEAPF32[i2 + 32 >> 2];
  d17 = +HEAPF32[i2 + 36 >> 2];
  d13 = +HEAPF32[i2 + 40 >> 2];
  d7 = +HEAPF32[i2 + 44 >> 2];
  d20 = +HEAPF32[i2 + 48 >> 2];
  d16 = +HEAPF32[i2 + 52 >> 2];
  d12 = +HEAPF32[i2 + 56 >> 2];
  d5 = +HEAPF32[i2 + 60 >> 2];
  d4 = +HEAPF32[i3 >> 2];
  d6 = +HEAPF32[i3 + 4 >> 2];
  d8 = +HEAPF32[i3 + 8 >> 2];
  d10 = +HEAPF32[i3 + 12 >> 2];
  HEAPF32[i1 >> 2] = d23 * d4 + d22 * d6 + d21 * d8 + d20 * d10;
  HEAPF32[i1 + 4 >> 2] = d19 * d4 + d18 * d6 + d17 * d8 + d16 * d10;
  HEAPF32[i1 + 8 >> 2] = d15 * d4 + d14 * d6 + d13 * d8 + d12 * d10;
  HEAPF32[i1 + 12 >> 2] = d11 * d4 + d9 * d6 + d7 * d8 + d5 * d10;
  d10 = +HEAPF32[i3 + 16 >> 2];
  d8 = +HEAPF32[i3 + 20 >> 2];
  d6 = +HEAPF32[i3 + 24 >> 2];
  d4 = +HEAPF32[i3 + 28 >> 2];
  HEAPF32[i1 + 16 >> 2] = d23 * d10 + d22 * d8 + d21 * d6 + d20 * d4;
  HEAPF32[i1 + 20 >> 2] = d19 * d10 + d18 * d8 + d17 * d6 + d16 * d4;
  HEAPF32[i1 + 24 >> 2] = d15 * d10 + d14 * d8 + d13 * d6 + d12 * d4;
  HEAPF32[i1 + 28 >> 2] = d11 * d10 + d9 * d8 + d7 * d6 + d5 * d4;
  d4 = +HEAPF32[i3 + 32 >> 2];
  d6 = +HEAPF32[i3 + 36 >> 2];
  d8 = +HEAPF32[i3 + 40 >> 2];
  d10 = +HEAPF32[i3 + 44 >> 2];
  HEAPF32[i1 + 32 >> 2] = d23 * d4 + d22 * d6 + d21 * d8 + d20 * d10;
  HEAPF32[i1 + 36 >> 2] = d19 * d4 + d18 * d6 + d17 * d8 + d16 * d10;
  HEAPF32[i1 + 40 >> 2] = d15 * d4 + d14 * d6 + d13 * d8 + d12 * d10;
  HEAPF32[i1 + 44 >> 2] = d11 * d4 + d9 * d6 + d7 * d8 + d5 * d10;
  d10 = +HEAPF32[i3 + 48 >> 2];
  d8 = +HEAPF32[i3 + 52 >> 2];
  d6 = +HEAPF32[i3 + 56 >> 2];
  d4 = +HEAPF32[i3 + 60 >> 2];
  HEAPF32[i1 + 48 >> 2] = d23 * d10 + d22 * d8 + d21 * d6 + d20 * d4;
  HEAPF32[i1 + 52 >> 2] = d19 * d10 + d18 * d8 + d17 * d6 + d16 * d4;
  HEAPF32[i1 + 56 >> 2] = d15 * d10 + d14 * d8 + d13 * d6 + d12 * d4;
  HEAPF32[i1 + 60 >> 2] = d11 * d10 + d9 * d8 + d7 * d6 + d5 * d4;
  return;
 }
 function _mat4_adjoint(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d16 = 0.0, d17 = 0.0, d18 = 0.0, d19 = 0.0, d20 = 0.0, d21 = 0.0, d22 = 0.0, d23 = 0.0, d24 = 0.0;
  d6 = +HEAPF32[i2 >> 2];
  d14 = +HEAPF32[i2 + 4 >> 2];
  d12 = +HEAPF32[i2 + 8 >> 2];
  d5 = +HEAPF32[i2 + 12 >> 2];
  d4 = +HEAPF32[i2 + 16 >> 2];
  d7 = +HEAPF32[i2 + 20 >> 2];
  d13 = +HEAPF32[i2 + 24 >> 2];
  d20 = +HEAPF32[i2 + 28 >> 2];
  d8 = +HEAPF32[i2 + 32 >> 2];
  d3 = +HEAPF32[i2 + 36 >> 2];
  d16 = +HEAPF32[i2 + 40 >> 2];
  d15 = +HEAPF32[i2 + 44 >> 2];
  d11 = +HEAPF32[i2 + 48 >> 2];
  d9 = +HEAPF32[i2 + 52 >> 2];
  d17 = +HEAPF32[i2 + 56 >> 2];
  d18 = +HEAPF32[i2 + 60 >> 2];
  d24 = d16 * d18 - d15 * d17;
  d23 = d13 * d18 - d20 * d17;
  d19 = d13 * d15 - d20 * d16;
  HEAPF32[i1 >> 2] = d9 * d19 + (d7 * d24 - d3 * d23);
  d22 = d12 * d18 - d5 * d17;
  d21 = d12 * d15 - d5 * d16;
  HEAPF32[i1 + 4 >> 2] = -(d9 * d21 + (d14 * d24 - d3 * d22));
  d10 = d12 * d20 - d5 * d13;
  HEAPF32[i1 + 8 >> 2] = d10 * d9 + (d14 * d23 - d7 * d22);
  HEAPF32[i1 + 12 >> 2] = -(d3 * d10 + (d14 * d19 - d7 * d21));
  HEAPF32[i1 + 16 >> 2] = -(d11 * d19 + (d4 * d24 - d8 * d23));
  HEAPF32[i1 + 20 >> 2] = d11 * d21 + (d6 * d24 - d8 * d22);
  HEAPF32[i1 + 24 >> 2] = -(d10 * d11 + (d6 * d23 - d4 * d22));
  HEAPF32[i1 + 28 >> 2] = d8 * d10 + (d6 * d19 - d4 * d21);
  d21 = d3 * d18 - d15 * d9;
  d19 = d7 * d18 - d20 * d9;
  d10 = d7 * d15 - d20 * d3;
  HEAPF32[i1 + 32 >> 2] = d11 * d10 + (d4 * d21 - d8 * d19);
  d18 = d14 * d18 - d5 * d9;
  d15 = d14 * d15 - d5 * d3;
  HEAPF32[i1 + 36 >> 2] = -(d11 * d15 + (d6 * d21 - d8 * d18));
  d5 = d14 * d20 - d5 * d7;
  HEAPF32[i1 + 40 >> 2] = d5 * d11 + (d6 * d19 - d4 * d18);
  HEAPF32[i1 + 44 >> 2] = -(d8 * d5 + (d6 * d10 - d4 * d15));
  d15 = d3 * d17 - d16 * d9;
  d10 = d7 * d17 - d13 * d9;
  d5 = d7 * d16 - d13 * d3;
  HEAPF32[i1 + 48 >> 2] = -(d11 * d5 + (d4 * d15 - d8 * d10));
  d9 = d14 * d17 - d12 * d9;
  d3 = d14 * d16 - d12 * d3;
  HEAPF32[i1 + 52 >> 2] = d11 * d3 + (d6 * d15 - d8 * d9);
  d7 = d14 * d13 - d12 * d7;
  HEAPF32[i1 + 56 >> 2] = -(d7 * d11 + (d6 * d10 - d4 * d9));
  HEAPF32[i1 + 60 >> 2] = d8 * d7 + (d6 * d5 - d4 * d3);
  return;
 }
 function _mat4_rotate(i4, i5, d6, i1) {
  i4 = i4 | 0;
  i5 = i5 | 0;
  d6 = +d6;
  i1 = i1 | 0;
  var d2 = 0.0, d3 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d16 = 0.0, d17 = 0.0, d18 = 0.0, d19 = 0.0, d20 = 0.0, d21 = 0.0, d22 = 0.0, d23 = 0.0, d24 = 0.0, d25 = 0.0, d26 = 0.0, d27 = 0.0, d28 = 0.0;
  d7 = +HEAPF32[i1 >> 2];
  d8 = +HEAPF32[i1 + 4 >> 2];
  d3 = +HEAPF32[i1 + 8 >> 2];
  d2 = +Math_sqrt(+(d7 * d7 + d8 * d8 + d3 * d3));
  if (+Math_abs(+d2) < 1.0e-6) return;
  d25 = 1.0 / d2;
  d19 = d7 * d25;
  d27 = d8 * d25;
  d25 = d3 * d25;
  d3 = +Math_sin(+d6);
  d26 = +Math_cos(+d6);
  d7 = 1.0 - d26;
  d18 = +HEAPF32[i5 >> 2];
  d15 = +HEAPF32[i5 + 4 >> 2];
  d12 = +HEAPF32[i5 + 8 >> 2];
  d2 = +HEAPF32[i5 + 12 >> 2];
  d17 = +HEAPF32[i5 + 16 >> 2];
  d14 = +HEAPF32[i5 + 20 >> 2];
  d11 = +HEAPF32[i5 + 24 >> 2];
  d6 = +HEAPF32[i5 + 28 >> 2];
  d16 = +HEAPF32[i5 + 32 >> 2];
  d13 = +HEAPF32[i5 + 36 >> 2];
  d10 = +HEAPF32[i5 + 40 >> 2];
  d8 = +HEAPF32[i5 + 44 >> 2];
  d24 = d26 + d19 * d19 * d7;
  d20 = d27 * d19 * d7;
  d21 = d25 * d3;
  d23 = d21 + d20;
  d9 = d25 * d19 * d7;
  d28 = d27 * d3;
  d22 = d9 - d28;
  d21 = d20 - d21;
  d20 = d26 + d27 * d27 * d7;
  d27 = d25 * d27 * d7;
  d3 = d19 * d3;
  d19 = d3 + d27;
  d9 = d28 + d9;
  d3 = d27 - d3;
  d7 = d26 + d25 * d25 * d7;
  HEAPF32[i4 >> 2] = d18 * d24 + d23 * d17 + d22 * d16;
  HEAPF32[i4 + 4 >> 2] = d15 * d24 + d23 * d14 + d22 * d13;
  HEAPF32[i4 + 8 >> 2] = d12 * d24 + d23 * d11 + d22 * d10;
  HEAPF32[i4 + 12 >> 2] = d24 * d2 + d23 * d6 + d22 * d8;
  HEAPF32[i4 + 16 >> 2] = d18 * d21 + d20 * d17 + d19 * d16;
  HEAPF32[i4 + 20 >> 2] = d15 * d21 + d20 * d14 + d19 * d13;
  HEAPF32[i4 + 24 >> 2] = d12 * d21 + d20 * d11 + d19 * d10;
  HEAPF32[i4 + 28 >> 2] = d21 * d2 + d20 * d6 + d19 * d8;
  HEAPF32[i4 + 32 >> 2] = d18 * d9 + d3 * d17 + d7 * d16;
  HEAPF32[i4 + 36 >> 2] = d15 * d9 + d3 * d14 + d7 * d13;
  HEAPF32[i4 + 40 >> 2] = d12 * d9 + d3 * d11 + d7 * d10;
  HEAPF32[i4 + 44 >> 2] = d9 * d2 + d3 * d6 + d7 * d8;
  if ((i5 | 0) == (i4 | 0)) return;
  HEAP32[i4 + 48 >> 2] = HEAP32[i5 + 48 >> 2];
  HEAP32[i4 + 52 >> 2] = HEAP32[i5 + 52 >> 2];
  HEAP32[i4 + 56 >> 2] = HEAP32[i5 + 56 >> 2];
  HEAP32[i4 + 60 >> 2] = HEAP32[i5 + 60 >> 2];
  return;
 }
 function _mat4_translate(i6, i7, i1) {
  i6 = i6 | 0;
  i7 = i7 | 0;
  i1 = i1 | 0;
  var d2 = 0.0, d3 = 0.0, d4 = 0.0, d5 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d16 = 0.0, d17 = 0.0, d18 = 0.0;
  d8 = +HEAPF32[i1 >> 2];
  d9 = +HEAPF32[i1 + 4 >> 2];
  d4 = +HEAPF32[i1 + 8 >> 2];
  d5 = +HEAPF32[i7 >> 2];
  d2 = +HEAPF32[i7 + 16 >> 2];
  d3 = +HEAPF32[i7 + 32 >> 2];
  if ((i7 | 0) == (i6 | 0)) {
   i1 = i7 + 48 | 0;
   HEAPF32[i1 >> 2] = +HEAPF32[i1 >> 2] + (d8 * d5 + d9 * d2 + d4 * d3);
   i1 = i7 + 52 | 0;
   HEAPF32[i1 >> 2] = +HEAPF32[i1 >> 2] + (d8 * +HEAPF32[i7 + 4 >> 2] + d9 * +HEAPF32[i7 + 20 >> 2] + d4 * +HEAPF32[i7 + 36 >> 2]);
   i1 = i7 + 56 | 0;
   HEAPF32[i1 >> 2] = +HEAPF32[i1 >> 2] + (d8 * +HEAPF32[i7 + 8 >> 2] + d9 * +HEAPF32[i7 + 24 >> 2] + d4 * +HEAPF32[i7 + 40 >> 2]);
   d9 = +HEAPF32[i7 + 60 >> 2] + (d8 * +HEAPF32[i7 + 12 >> 2] + d9 * +HEAPF32[i7 + 28 >> 2] + d4 * +HEAPF32[i7 + 44 >> 2]);
   i7 = i6 + 60 | 0;
   HEAPF32[i7 >> 2] = d9;
   return;
  } else {
   d18 = +HEAPF32[i7 + 4 >> 2];
   d15 = +HEAPF32[i7 + 8 >> 2];
   d12 = +HEAPF32[i7 + 12 >> 2];
   d17 = +HEAPF32[i7 + 20 >> 2];
   d14 = +HEAPF32[i7 + 24 >> 2];
   d11 = +HEAPF32[i7 + 28 >> 2];
   d16 = +HEAPF32[i7 + 36 >> 2];
   d13 = +HEAPF32[i7 + 40 >> 2];
   d10 = +HEAPF32[i7 + 44 >> 2];
   HEAPF32[i6 >> 2] = d5;
   HEAPF32[i6 + 4 >> 2] = d18;
   HEAPF32[i6 + 8 >> 2] = d15;
   HEAPF32[i6 + 12 >> 2] = d12;
   HEAPF32[i6 + 16 >> 2] = d2;
   HEAPF32[i6 + 20 >> 2] = d17;
   HEAPF32[i6 + 24 >> 2] = d14;
   HEAPF32[i6 + 28 >> 2] = d11;
   HEAPF32[i6 + 32 >> 2] = d3;
   HEAPF32[i6 + 36 >> 2] = d16;
   HEAPF32[i6 + 40 >> 2] = d13;
   HEAPF32[i6 + 44 >> 2] = d10;
   HEAPF32[i6 + 48 >> 2] = d8 * d5 + d9 * d2 + d4 * d3 + +HEAPF32[i7 + 48 >> 2];
   HEAPF32[i6 + 52 >> 2] = d8 * d18 + d9 * d17 + d4 * d16 + +HEAPF32[i7 + 52 >> 2];
   HEAPF32[i6 + 56 >> 2] = d8 * d15 + d9 * d14 + d4 * d13 + +HEAPF32[i7 + 56 >> 2];
   d9 = d8 * d12 + d9 * d11 + d4 * d10 + +HEAPF32[i7 + 60 >> 2];
   i7 = i6 + 60 | 0;
   HEAPF32[i7 >> 2] = d9;
   return;
  }
 }
 function _mat4_translate_xyz(i1, i2, d4, d5, d6) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  d4 = +d4;
  d5 = +d5;
  d6 = +d6;
  var d3 = 0.0, d7 = 0.0, d8 = 0.0, i9 = 0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d16 = 0.0, d17 = 0.0, d18 = 0.0;
  d7 = +HEAPF32[i2 >> 2];
  d8 = +HEAPF32[i2 + 16 >> 2];
  d3 = +HEAPF32[i2 + 32 >> 2];
  if ((i2 | 0) == (i1 | 0)) {
   i9 = i2 + 48 | 0;
   HEAPF32[i9 >> 2] = +HEAPF32[i9 >> 2] + (d7 * d4 + d8 * d5 + d3 * d6);
   i9 = i2 + 52 | 0;
   HEAPF32[i9 >> 2] = +HEAPF32[i9 >> 2] + (+HEAPF32[i2 + 4 >> 2] * d4 + +HEAPF32[i2 + 20 >> 2] * d5 + +HEAPF32[i2 + 36 >> 2] * d6);
   i9 = i2 + 56 | 0;
   HEAPF32[i9 >> 2] = +HEAPF32[i9 >> 2] + (+HEAPF32[i2 + 8 >> 2] * d4 + +HEAPF32[i2 + 24 >> 2] * d5 + +HEAPF32[i2 + 40 >> 2] * d6);
   d8 = +HEAPF32[i2 + 60 >> 2] + (+HEAPF32[i2 + 12 >> 2] * d4 + +HEAPF32[i2 + 28 >> 2] * d5 + +HEAPF32[i2 + 44 >> 2] * d6);
   i2 = i1 + 60 | 0;
   HEAPF32[i2 >> 2] = d8;
   return;
  } else {
   d18 = +HEAPF32[i2 + 4 >> 2];
   d15 = +HEAPF32[i2 + 8 >> 2];
   d12 = +HEAPF32[i2 + 12 >> 2];
   d17 = +HEAPF32[i2 + 20 >> 2];
   d14 = +HEAPF32[i2 + 24 >> 2];
   d11 = +HEAPF32[i2 + 28 >> 2];
   d16 = +HEAPF32[i2 + 36 >> 2];
   d13 = +HEAPF32[i2 + 40 >> 2];
   d10 = +HEAPF32[i2 + 44 >> 2];
   HEAPF32[i1 >> 2] = d7;
   HEAPF32[i1 + 4 >> 2] = d18;
   HEAPF32[i1 + 8 >> 2] = d15;
   HEAPF32[i1 + 12 >> 2] = d12;
   HEAPF32[i1 + 16 >> 2] = d8;
   HEAPF32[i1 + 20 >> 2] = d17;
   HEAPF32[i1 + 24 >> 2] = d14;
   HEAPF32[i1 + 28 >> 2] = d11;
   HEAPF32[i1 + 32 >> 2] = d3;
   HEAPF32[i1 + 36 >> 2] = d16;
   HEAPF32[i1 + 40 >> 2] = d13;
   HEAPF32[i1 + 44 >> 2] = d10;
   HEAPF32[i1 + 48 >> 2] = d7 * d4 + d8 * d5 + d3 * d6 + +HEAPF32[i2 + 48 >> 2];
   HEAPF32[i1 + 52 >> 2] = d18 * d4 + d17 * d5 + d16 * d6 + +HEAPF32[i2 + 52 >> 2];
   HEAPF32[i1 + 56 >> 2] = d15 * d4 + d14 * d5 + d13 * d6 + +HEAPF32[i2 + 56 >> 2];
   d8 = d12 * d4 + d11 * d5 + d10 * d6 + +HEAPF32[i2 + 60 >> 2];
   i9 = i1 + 60 | 0;
   HEAPF32[i9 >> 2] = d8;
   return;
  }
 }
 function _mat4_transpose(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
  if ((i1 | 0) == (i2 | 0)) {
   i10 = i1 + 4 | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   i6 = i1 + 8 | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   i14 = i1 + 12 | 0;
   i7 = HEAP32[i14 >> 2] | 0;
   i4 = i1 + 24 | 0;
   i9 = HEAP32[i4 >> 2] | 0;
   i12 = i1 + 28 | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   i8 = i1 + 44 | 0;
   i3 = HEAP32[i8 >> 2] | 0;
   i2 = i1 + 16 | 0;
   HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
   i10 = i1 + 32 | 0;
   HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
   i6 = i1 + 48 | 0;
   HEAP32[i14 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i2 >> 2] = i13;
   i2 = i1 + 36 | 0;
   HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
   i4 = i1 + 52 | 0;
   HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i10 >> 2] = i11;
   HEAP32[i2 >> 2] = i9;
   i2 = i1 + 56 | 0;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i6 >> 2] = i7;
   HEAP32[i4 >> 2] = i5;
   HEAP32[i2 >> 2] = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 16 >> 2];
   HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 32 >> 2];
   HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 48 >> 2];
   HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
   HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 36 >> 2];
   HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 52 >> 2];
   HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 24 >> 2];
   HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
   HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 56 >> 2];
   HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 12 >> 2];
   HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 28 >> 2];
   HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 44 >> 2];
   HEAP32[i1 + 60 >> 2] = HEAP32[i2 + 60 >> 2];
   return;
  }
 }
 function _mat4_fromRotationTranslationScaleOrigin(i1, i2, i3, i4, i5) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  i4 = i4 | 0;
  i5 = i5 | 0;
  var d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d16 = 0.0, d17 = 0.0, d18 = 0.0, d19 = 0.0, d20 = 0.0, d21 = 0.0, d22 = 0.0;
  d21 = +HEAPF32[i2 >> 2];
  d20 = +HEAPF32[i2 + 4 >> 2];
  d13 = +HEAPF32[i2 + 8 >> 2];
  d10 = +HEAPF32[i2 + 12 >> 2];
  d12 = d21 + d21;
  d15 = d20 + d20;
  d16 = d13 + d13;
  d19 = d21 * d12;
  d22 = d21 * d15;
  d21 = d21 * d16;
  d18 = d20 * d15;
  d20 = d20 * d16;
  d13 = d13 * d16;
  d12 = d12 * d10;
  d15 = d15 * d10;
  d16 = d10 * d16;
  d10 = +HEAPF32[i4 >> 2];
  d8 = +HEAPF32[i4 + 4 >> 2];
  d6 = +HEAPF32[i4 + 8 >> 2];
  d11 = +HEAPF32[i5 >> 2];
  d9 = +HEAPF32[i5 + 4 >> 2];
  d7 = +HEAPF32[i5 + 8 >> 2];
  d17 = d10 * (1.0 - (d18 + d13));
  HEAPF32[i1 >> 2] = d17;
  d14 = d10 * (d22 + d16);
  HEAPF32[i1 + 4 >> 2] = d14;
  d10 = d10 * (d21 - d15);
  HEAPF32[i1 + 8 >> 2] = d10;
  HEAPF32[i1 + 12 >> 2] = 0.0;
  d16 = (d22 - d16) * d8;
  HEAPF32[i1 + 16 >> 2] = d16;
  d13 = d8 * (1.0 - (d19 + d13));
  HEAPF32[i1 + 20 >> 2] = d13;
  d8 = (d20 + d12) * d8;
  HEAPF32[i1 + 24 >> 2] = d8;
  HEAPF32[i1 + 28 >> 2] = 0.0;
  d15 = (d21 + d15) * d6;
  HEAPF32[i1 + 32 >> 2] = d15;
  d12 = (d20 - d12) * d6;
  HEAPF32[i1 + 36 >> 2] = d12;
  d6 = (1.0 - (d19 + d18)) * d6;
  HEAPF32[i1 + 40 >> 2] = d6;
  HEAPF32[i1 + 44 >> 2] = 0.0;
  HEAPF32[i1 + 48 >> 2] = d11 + +HEAPF32[i3 >> 2] - (d11 * d17 + d9 * d16 + d7 * d15);
  HEAPF32[i1 + 52 >> 2] = d9 + +HEAPF32[i3 + 4 >> 2] - (d11 * d14 + d9 * d13 + d7 * d12);
  HEAPF32[i1 + 56 >> 2] = d7 + +HEAPF32[i3 + 8 >> 2] - (d11 * d10 + d9 * d8 + d7 * d6);
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_getRotation(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0;
  d3 = +HEAPF32[i2 >> 2];
  d4 = +HEAPF32[i2 + 20 >> 2];
  d5 = +HEAPF32[i2 + 40 >> 2];
  d6 = d3 + d4 + d5;
  if (d6 > 0.0) {
   d6 = +Math_sqrt(+(d6 + 1.0)) * 2.0;
   HEAPF32[i1 + 12 >> 2] = d6 * .25;
   HEAPF32[i1 >> 2] = (+HEAPF32[i2 + 24 >> 2] - +HEAPF32[i2 + 36 >> 2]) / d6;
   HEAPF32[i1 + 4 >> 2] = (+HEAPF32[i2 + 32 >> 2] - +HEAPF32[i2 + 8 >> 2]) / d6;
   HEAPF32[i1 + 8 >> 2] = (+HEAPF32[i2 + 4 >> 2] - +HEAPF32[i2 + 16 >> 2]) / d6;
   return;
  }
  if (d3 > d4 & d3 > d5) {
   d6 = +Math_sqrt(+(d3 + 1.0 - d4 - d5)) * 2.0;
   HEAPF32[i1 + 12 >> 2] = (+HEAPF32[i2 + 24 >> 2] - +HEAPF32[i2 + 36 >> 2]) / d6;
   HEAPF32[i1 >> 2] = d6 * .25;
   HEAPF32[i1 + 4 >> 2] = (+HEAPF32[i2 + 4 >> 2] + +HEAPF32[i2 + 16 >> 2]) / d6;
   HEAPF32[i1 + 8 >> 2] = (+HEAPF32[i2 + 32 >> 2] + +HEAPF32[i2 + 8 >> 2]) / d6;
   return;
  }
  if (d4 > d5) {
   d6 = +Math_sqrt(+(d4 + 1.0 - d3 - d5)) * 2.0;
   HEAPF32[i1 + 12 >> 2] = (+HEAPF32[i2 + 32 >> 2] - +HEAPF32[i2 + 8 >> 2]) / d6;
   HEAPF32[i1 >> 2] = (+HEAPF32[i2 + 4 >> 2] + +HEAPF32[i2 + 16 >> 2]) / d6;
   HEAPF32[i1 + 4 >> 2] = d6 * .25;
   HEAPF32[i1 + 8 >> 2] = (+HEAPF32[i2 + 24 >> 2] + +HEAPF32[i2 + 36 >> 2]) / d6;
   return;
  } else {
   d6 = +Math_sqrt(+(d5 + 1.0 - d3 - d4)) * 2.0;
   HEAPF32[i1 + 12 >> 2] = (+HEAPF32[i2 + 4 >> 2] - +HEAPF32[i2 + 16 >> 2]) / d6;
   HEAPF32[i1 >> 2] = (+HEAPF32[i2 + 32 >> 2] + +HEAPF32[i2 + 8 >> 2]) / d6;
   HEAPF32[i1 + 4 >> 2] = (+HEAPF32[i2 + 24 >> 2] + +HEAPF32[i2 + 36 >> 2]) / d6;
   HEAPF32[i1 + 8 >> 2] = d6 * .25;
   return;
  }
 }
 function _quat_fromMat3(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
  d3 = +HEAPF32[i2 >> 2];
  d4 = +HEAPF32[i2 + 16 >> 2];
  d5 = +HEAPF32[i2 + 32 >> 2];
  d6 = d3 + d4 + d5;
  if (d6 > 0.0) {
   d6 = +Math_sqrt(+(d6 + 1.0));
   HEAPF32[i1 + 12 >> 2] = d6 * .5;
   d6 = .5 / d6;
   HEAPF32[i1 >> 2] = d6 * (+HEAPF32[i2 + 20 >> 2] - +HEAPF32[i2 + 28 >> 2]);
   HEAPF32[i1 + 4 >> 2] = d6 * (+HEAPF32[i2 + 24 >> 2] - +HEAPF32[i2 + 8 >> 2]);
   HEAPF32[i1 + 8 >> 2] = d6 * (+HEAPF32[i2 + 4 >> 2] - +HEAPF32[i2 + 12 >> 2]);
   return;
  } else {
   i11 = d4 > d3;
   i9 = i11 & 1;
   i9 = d5 > +HEAPF32[i2 + ((i11 ? 3 : 0) + i9 << 2) >> 2] ? 2 : i9;
   i11 = ((i9 + 1 | 0) >>> 0) % 3 | 0;
   i7 = ((i9 + 2 | 0) >>> 0) % 3 | 0;
   i8 = i9 * 3 | 0;
   i12 = i11 * 3 | 0;
   i10 = i7 * 3 | 0;
   d6 = +Math_sqrt(+(+HEAPF32[i2 + (i9 << 2 << 2) >> 2] - +HEAPF32[i2 + (i11 << 2 << 2) >> 2] - +HEAPF32[i2 + (i7 << 2 << 2) >> 2] + 1.0));
   HEAPF32[i1 + (i9 << 2) >> 2] = d6 * .5;
   d6 = .5 / d6;
   HEAPF32[i1 + 12 >> 2] = d6 * (+HEAPF32[i2 + (i12 + i7 << 2) >> 2] - +HEAPF32[i2 + (i10 + i11 << 2) >> 2]);
   HEAPF32[i1 + (i11 << 2) >> 2] = d6 * (+HEAPF32[i2 + (i12 + i9 << 2) >> 2] + +HEAPF32[i2 + (i11 + i8 << 2) >> 2]);
   HEAPF32[i1 + (i7 << 2) >> 2] = d6 * (+HEAPF32[i2 + (i10 + i9 << 2) >> 2] + +HEAPF32[i2 + (i7 + i8 << 2) >> 2]);
   return;
  }
 }
 function _mat4_multiplyScalarAndAdd(i1, i2, i3, d4) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  d4 = +d4;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] + +HEAPF32[i3 >> 2] * d4;
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] + +HEAPF32[i3 + 4 >> 2] * d4;
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] + +HEAPF32[i3 + 8 >> 2] * d4;
  HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2] + +HEAPF32[i3 + 12 >> 2] * d4;
  HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 16 >> 2] + +HEAPF32[i3 + 16 >> 2] * d4;
  HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 20 >> 2] + +HEAPF32[i3 + 20 >> 2] * d4;
  HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2] + +HEAPF32[i3 + 24 >> 2] * d4;
  HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2] + +HEAPF32[i3 + 28 >> 2] * d4;
  HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2] + +HEAPF32[i3 + 32 >> 2] * d4;
  HEAPF32[i1 + 36 >> 2] = +HEAPF32[i2 + 36 >> 2] + +HEAPF32[i3 + 36 >> 2] * d4;
  HEAPF32[i1 + 40 >> 2] = +HEAPF32[i2 + 40 >> 2] + +HEAPF32[i3 + 40 >> 2] * d4;
  HEAPF32[i1 + 44 >> 2] = +HEAPF32[i2 + 44 >> 2] + +HEAPF32[i3 + 44 >> 2] * d4;
  HEAPF32[i1 + 48 >> 2] = +HEAPF32[i2 + 48 >> 2] + +HEAPF32[i3 + 48 >> 2] * d4;
  HEAPF32[i1 + 52 >> 2] = +HEAPF32[i2 + 52 >> 2] + +HEAPF32[i3 + 52 >> 2] * d4;
  HEAPF32[i1 + 56 >> 2] = +HEAPF32[i2 + 56 >> 2] + +HEAPF32[i3 + 56 >> 2] * d4;
  HEAPF32[i1 + 60 >> 2] = +HEAPF32[i2 + 60 >> 2] + +HEAPF32[i3 + 60 >> 2] * d4;
  return;
 }
 function _mat4_fromRotationTranslationScale(i1, i2, i3, i4) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  i4 = i4 | 0;
  var d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d16 = 0.0;
  d11 = +HEAPF32[i2 >> 2];
  d9 = +HEAPF32[i2 + 4 >> 2];
  d13 = +HEAPF32[i2 + 8 >> 2];
  d16 = +HEAPF32[i2 + 12 >> 2];
  d8 = d11 + d11;
  d10 = d9 + d9;
  d14 = d13 + d13;
  d7 = d11 * d8;
  d15 = d11 * d10;
  d11 = d11 * d14;
  d6 = d9 * d10;
  d9 = d9 * d14;
  d13 = d13 * d14;
  d8 = d8 * d16;
  d10 = d10 * d16;
  d14 = d16 * d14;
  d16 = +HEAPF32[i4 >> 2];
  d12 = +HEAPF32[i4 + 4 >> 2];
  d5 = +HEAPF32[i4 + 8 >> 2];
  HEAPF32[i1 >> 2] = d16 * (1.0 - (d6 + d13));
  HEAPF32[i1 + 4 >> 2] = d16 * (d15 + d14);
  HEAPF32[i1 + 8 >> 2] = d16 * (d11 - d10);
  HEAPF32[i1 + 12 >> 2] = 0.0;
  HEAPF32[i1 + 16 >> 2] = (d15 - d14) * d12;
  HEAPF32[i1 + 20 >> 2] = d12 * (1.0 - (d7 + d13));
  HEAPF32[i1 + 24 >> 2] = (d9 + d8) * d12;
  HEAPF32[i1 + 28 >> 2] = 0.0;
  HEAPF32[i1 + 32 >> 2] = (d11 + d10) * d5;
  HEAPF32[i1 + 36 >> 2] = (d9 - d8) * d5;
  HEAPF32[i1 + 40 >> 2] = (1.0 - (d7 + d6)) * d5;
  HEAPF32[i1 + 44 >> 2] = 0.0;
  HEAP32[i1 + 48 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_subtract(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] - +HEAPF32[i3 >> 2];
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] - +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] - +HEAPF32[i3 + 8 >> 2];
  HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2] - +HEAPF32[i3 + 12 >> 2];
  HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 16 >> 2] - +HEAPF32[i3 + 16 >> 2];
  HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 20 >> 2] - +HEAPF32[i3 + 20 >> 2];
  HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2] - +HEAPF32[i3 + 24 >> 2];
  HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2] - +HEAPF32[i3 + 28 >> 2];
  HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2] - +HEAPF32[i3 + 32 >> 2];
  HEAPF32[i1 + 36 >> 2] = +HEAPF32[i2 + 36 >> 2] - +HEAPF32[i3 + 36 >> 2];
  HEAPF32[i1 + 40 >> 2] = +HEAPF32[i2 + 40 >> 2] - +HEAPF32[i3 + 40 >> 2];
  HEAPF32[i1 + 44 >> 2] = +HEAPF32[i2 + 44 >> 2] - +HEAPF32[i3 + 44 >> 2];
  HEAPF32[i1 + 48 >> 2] = +HEAPF32[i2 + 48 >> 2] - +HEAPF32[i3 + 48 >> 2];
  HEAPF32[i1 + 52 >> 2] = +HEAPF32[i2 + 52 >> 2] - +HEAPF32[i3 + 52 >> 2];
  HEAPF32[i1 + 56 >> 2] = +HEAPF32[i2 + 56 >> 2] - +HEAPF32[i3 + 56 >> 2];
  HEAPF32[i1 + 60 >> 2] = +HEAPF32[i2 + 60 >> 2] - +HEAPF32[i3 + 60 >> 2];
  return;
 }
 function _mat4_rotateZ(i10, i11, d1) {
  i10 = i10 | 0;
  i11 = i11 | 0;
  d1 = +d1;
  var d2 = 0.0, d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d12 = 0.0;
  d12 = +Math_sin(+d1);
  d6 = +Math_cos(+d1);
  d7 = +HEAPF32[i11 >> 2];
  d8 = +HEAPF32[i11 + 4 >> 2];
  d9 = +HEAPF32[i11 + 8 >> 2];
  d1 = +HEAPF32[i11 + 12 >> 2];
  d2 = +HEAPF32[i11 + 16 >> 2];
  d3 = +HEAPF32[i11 + 20 >> 2];
  d4 = +HEAPF32[i11 + 24 >> 2];
  d5 = +HEAPF32[i11 + 28 >> 2];
  if ((i11 | 0) != (i10 | 0)) {
   HEAP32[i10 + 32 >> 2] = HEAP32[i11 + 32 >> 2];
   HEAP32[i10 + 36 >> 2] = HEAP32[i11 + 36 >> 2];
   HEAP32[i10 + 40 >> 2] = HEAP32[i11 + 40 >> 2];
   HEAP32[i10 + 44 >> 2] = HEAP32[i11 + 44 >> 2];
   HEAP32[i10 + 48 >> 2] = HEAP32[i11 + 48 >> 2];
   HEAP32[i10 + 52 >> 2] = HEAP32[i11 + 52 >> 2];
   HEAP32[i10 + 56 >> 2] = HEAP32[i11 + 56 >> 2];
   HEAP32[i10 + 60 >> 2] = HEAP32[i11 + 60 >> 2];
  }
  HEAPF32[i10 >> 2] = d6 * d7 + d12 * d2;
  HEAPF32[i10 + 4 >> 2] = d6 * d8 + d12 * d3;
  HEAPF32[i10 + 8 >> 2] = d6 * d9 + d12 * d4;
  HEAPF32[i10 + 12 >> 2] = d6 * d1 + d12 * d5;
  HEAPF32[i10 + 16 >> 2] = d6 * d2 - d12 * d7;
  HEAPF32[i10 + 20 >> 2] = d6 * d3 - d12 * d8;
  HEAPF32[i10 + 24 >> 2] = d6 * d4 - d12 * d9;
  HEAPF32[i10 + 28 >> 2] = d6 * d5 - d12 * d1;
  return;
 }
 function _mat4_rotateY(i10, i11, d1) {
  i10 = i10 | 0;
  i11 = i11 | 0;
  d1 = +d1;
  var d2 = 0.0, d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d12 = 0.0;
  d12 = +Math_sin(+d1);
  d6 = +Math_cos(+d1);
  d7 = +HEAPF32[i11 >> 2];
  d8 = +HEAPF32[i11 + 4 >> 2];
  d9 = +HEAPF32[i11 + 8 >> 2];
  d1 = +HEAPF32[i11 + 12 >> 2];
  d2 = +HEAPF32[i11 + 32 >> 2];
  d3 = +HEAPF32[i11 + 36 >> 2];
  d4 = +HEAPF32[i11 + 40 >> 2];
  d5 = +HEAPF32[i11 + 44 >> 2];
  if ((i11 | 0) != (i10 | 0)) {
   HEAP32[i10 + 16 >> 2] = HEAP32[i11 + 16 >> 2];
   HEAP32[i10 + 20 >> 2] = HEAP32[i11 + 20 >> 2];
   HEAP32[i10 + 24 >> 2] = HEAP32[i11 + 24 >> 2];
   HEAP32[i10 + 28 >> 2] = HEAP32[i11 + 28 >> 2];
   HEAP32[i10 + 48 >> 2] = HEAP32[i11 + 48 >> 2];
   HEAP32[i10 + 52 >> 2] = HEAP32[i11 + 52 >> 2];
   HEAP32[i10 + 56 >> 2] = HEAP32[i11 + 56 >> 2];
   HEAP32[i10 + 60 >> 2] = HEAP32[i11 + 60 >> 2];
  }
  HEAPF32[i10 >> 2] = d6 * d7 - d12 * d2;
  HEAPF32[i10 + 4 >> 2] = d6 * d8 - d12 * d3;
  HEAPF32[i10 + 8 >> 2] = d6 * d9 - d12 * d4;
  HEAPF32[i10 + 12 >> 2] = d6 * d1 - d12 * d5;
  HEAPF32[i10 + 32 >> 2] = d12 * d7 + d6 * d2;
  HEAPF32[i10 + 36 >> 2] = d12 * d8 + d6 * d3;
  HEAPF32[i10 + 40 >> 2] = d12 * d9 + d6 * d4;
  HEAPF32[i10 + 44 >> 2] = d12 * d1 + d6 * d5;
  return;
 }
 function _mat4_rotateX(i10, i11, d1) {
  i10 = i10 | 0;
  i11 = i11 | 0;
  d1 = +d1;
  var d2 = 0.0, d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d12 = 0.0;
  d12 = +Math_sin(+d1);
  d7 = +Math_cos(+d1);
  d8 = +HEAPF32[i11 + 16 >> 2];
  d9 = +HEAPF32[i11 + 20 >> 2];
  d1 = +HEAPF32[i11 + 24 >> 2];
  d2 = +HEAPF32[i11 + 28 >> 2];
  d3 = +HEAPF32[i11 + 32 >> 2];
  d4 = +HEAPF32[i11 + 36 >> 2];
  d5 = +HEAPF32[i11 + 40 >> 2];
  d6 = +HEAPF32[i11 + 44 >> 2];
  if ((i11 | 0) != (i10 | 0)) {
   HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   HEAP32[i10 + 48 >> 2] = HEAP32[i11 + 48 >> 2];
   HEAP32[i10 + 52 >> 2] = HEAP32[i11 + 52 >> 2];
   HEAP32[i10 + 56 >> 2] = HEAP32[i11 + 56 >> 2];
   HEAP32[i10 + 60 >> 2] = HEAP32[i11 + 60 >> 2];
  }
  HEAPF32[i10 + 16 >> 2] = d7 * d8 + d12 * d3;
  HEAPF32[i10 + 20 >> 2] = d7 * d9 + d12 * d4;
  HEAPF32[i10 + 24 >> 2] = d7 * d1 + d12 * d5;
  HEAPF32[i10 + 28 >> 2] = d7 * d2 + d12 * d6;
  HEAPF32[i10 + 32 >> 2] = d7 * d3 - d12 * d8;
  HEAPF32[i10 + 36 >> 2] = d7 * d4 - d12 * d9;
  HEAPF32[i10 + 40 >> 2] = d7 * d5 - d12 * d1;
  HEAPF32[i10 + 44 >> 2] = d7 * d6 - d12 * d2;
  return;
 }
 function _mat4_add(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] + +HEAPF32[i3 >> 2];
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] + +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] + +HEAPF32[i3 + 8 >> 2];
  HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2] + +HEAPF32[i3 + 12 >> 2];
  HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 16 >> 2] + +HEAPF32[i3 + 16 >> 2];
  HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 20 >> 2] + +HEAPF32[i3 + 20 >> 2];
  HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2] + +HEAPF32[i3 + 24 >> 2];
  HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2] + +HEAPF32[i3 + 28 >> 2];
  HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2] + +HEAPF32[i3 + 32 >> 2];
  HEAPF32[i1 + 36 >> 2] = +HEAPF32[i2 + 36 >> 2] + +HEAPF32[i3 + 36 >> 2];
  HEAPF32[i1 + 40 >> 2] = +HEAPF32[i2 + 40 >> 2] + +HEAPF32[i3 + 40 >> 2];
  HEAPF32[i1 + 44 >> 2] = +HEAPF32[i2 + 44 >> 2] + +HEAPF32[i3 + 44 >> 2];
  HEAPF32[i1 + 48 >> 2] = +HEAPF32[i2 + 48 >> 2] + +HEAPF32[i3 + 48 >> 2];
  HEAPF32[i1 + 52 >> 2] = +HEAPF32[i2 + 52 >> 2] + +HEAPF32[i3 + 52 >> 2];
  HEAPF32[i1 + 56 >> 2] = +HEAPF32[i2 + 56 >> 2] + +HEAPF32[i3 + 56 >> 2];
  HEAPF32[i1 + 60 >> 2] = +HEAPF32[i2 + 60 >> 2] + +HEAPF32[i3 + 60 >> 2];
  return;
 }
 function _mat4_exactEquals(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  if (+HEAPF32[i1 >> 2] == +HEAPF32[i2 >> 2]) if (+HEAPF32[i1 + 4 >> 2] == +HEAPF32[i2 + 4 >> 2]) if (+HEAPF32[i1 + 8 >> 2] == +HEAPF32[i2 + 8 >> 2]) if (+HEAPF32[i1 + 12 >> 2] == +HEAPF32[i2 + 12 >> 2]) if (+HEAPF32[i1 + 16 >> 2] == +HEAPF32[i2 + 16 >> 2]) if (+HEAPF32[i1 + 20 >> 2] == +HEAPF32[i2 + 20 >> 2]) if (+HEAPF32[i1 + 24 >> 2] == +HEAPF32[i2 + 24 >> 2]) if (+HEAPF32[i1 + 28 >> 2] == +HEAPF32[i2 + 28 >> 2]) if (+HEAPF32[i1 + 32 >> 2] == +HEAPF32[i2 + 32 >> 2]) if (+HEAPF32[i1 + 36 >> 2] == +HEAPF32[i2 + 36 >> 2]) if (+HEAPF32[i1 + 40 >> 2] == +HEAPF32[i2 + 40 >> 2]) if (+HEAPF32[i1 + 44 >> 2] == +HEAPF32[i2 + 44 >> 2]) if (+HEAPF32[i1 + 48 >> 2] == +HEAPF32[i2 + 48 >> 2]) if (+HEAPF32[i1 + 52 >> 2] == +HEAPF32[i2 + 52 >> 2]) if (+HEAPF32[i1 + 56 >> 2] == +HEAPF32[i2 + 56 >> 2]) i1 = +HEAPF32[i1 + 60 >> 2] == +HEAPF32[i2 + 60 >> 2]; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0; else i1 = 0;
  return i1 & 1 | 0;
 }
 function _mat4_fromRotation(i4, d5, i1) {
  i4 = i4 | 0;
  d5 = +d5;
  i1 = i1 | 0;
  var d2 = 0.0, d3 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0;
  d6 = +HEAPF32[i1 >> 2];
  d7 = +HEAPF32[i1 + 4 >> 2];
  d3 = +HEAPF32[i1 + 8 >> 2];
  d2 = +Math_sqrt(+(d6 * d6 + d7 * d7 + d3 * d3));
  if (+Math_abs(+d2) < 1.0e-6) return;
  d12 = 1.0 / d2;
  d10 = d6 * d12;
  d2 = d7 * d12;
  d6 = d3 * d12;
  d3 = +Math_sin(+d5);
  d5 = +Math_cos(+d5);
  d7 = 1.0 - d5;
  HEAPF32[i4 >> 2] = d5 + d10 * d10 * d7;
  d12 = d2 * d10 * d7;
  d11 = d6 * d3;
  HEAPF32[i4 + 4 >> 2] = d11 + d12;
  d8 = d6 * d10 * d7;
  d9 = d2 * d3;
  HEAPF32[i4 + 8 >> 2] = d8 - d9;
  HEAPF32[i4 + 12 >> 2] = 0.0;
  HEAPF32[i4 + 16 >> 2] = d12 - d11;
  HEAPF32[i4 + 20 >> 2] = d5 + d2 * d2 * d7;
  d2 = d6 * d2 * d7;
  d3 = d10 * d3;
  HEAPF32[i4 + 24 >> 2] = d3 + d2;
  HEAPF32[i4 + 28 >> 2] = 0.0;
  HEAPF32[i4 + 32 >> 2] = d9 + d8;
  HEAPF32[i4 + 36 >> 2] = d2 - d3;
  HEAPF32[i4 + 40 >> 2] = d5 + d6 * d6 * d7;
  i1 = i4 + 44 | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAPF32[i4 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_fromRotationTranslation(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0;
  d9 = +HEAPF32[i2 >> 2];
  d7 = +HEAPF32[i2 + 4 >> 2];
  d10 = +HEAPF32[i2 + 8 >> 2];
  d13 = +HEAPF32[i2 + 12 >> 2];
  d6 = d9 + d9;
  d8 = d7 + d7;
  d11 = d10 + d10;
  d5 = d9 * d6;
  d12 = d9 * d8;
  d9 = d9 * d11;
  d4 = d7 * d8;
  d7 = d7 * d11;
  d10 = d10 * d11;
  d6 = d6 * d13;
  d8 = d8 * d13;
  d11 = d13 * d11;
  HEAPF32[i1 >> 2] = 1.0 - (d4 + d10);
  HEAPF32[i1 + 4 >> 2] = d12 + d11;
  HEAPF32[i1 + 8 >> 2] = d9 - d8;
  HEAPF32[i1 + 12 >> 2] = 0.0;
  HEAPF32[i1 + 16 >> 2] = d12 - d11;
  HEAPF32[i1 + 20 >> 2] = 1.0 - (d5 + d10);
  HEAPF32[i1 + 24 >> 2] = d7 + d6;
  HEAPF32[i1 + 28 >> 2] = 0.0;
  HEAPF32[i1 + 32 >> 2] = d9 + d8;
  HEAPF32[i1 + 36 >> 2] = d7 - d6;
  HEAPF32[i1 + 40 >> 2] = 1.0 - (d5 + d4);
  HEAPF32[i1 + 44 >> 2] = 0.0;
  HEAP32[i1 + 48 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_scale(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0;
  d6 = +HEAPF32[i3 >> 2];
  d5 = +HEAPF32[i3 + 4 >> 2];
  d4 = +HEAPF32[i3 + 8 >> 2];
  HEAPF32[i1 >> 2] = d6 * +HEAPF32[i2 >> 2];
  HEAPF32[i1 + 4 >> 2] = d6 * +HEAPF32[i2 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = d6 * +HEAPF32[i2 + 8 >> 2];
  HEAPF32[i1 + 12 >> 2] = d6 * +HEAPF32[i2 + 12 >> 2];
  HEAPF32[i1 + 16 >> 2] = d5 * +HEAPF32[i2 + 16 >> 2];
  HEAPF32[i1 + 20 >> 2] = d5 * +HEAPF32[i2 + 20 >> 2];
  HEAPF32[i1 + 24 >> 2] = d5 * +HEAPF32[i2 + 24 >> 2];
  HEAPF32[i1 + 28 >> 2] = d5 * +HEAPF32[i2 + 28 >> 2];
  HEAPF32[i1 + 32 >> 2] = d4 * +HEAPF32[i2 + 32 >> 2];
  HEAPF32[i1 + 36 >> 2] = d4 * +HEAPF32[i2 + 36 >> 2];
  HEAPF32[i1 + 40 >> 2] = d4 * +HEAPF32[i2 + 40 >> 2];
  HEAPF32[i1 + 44 >> 2] = d4 * +HEAPF32[i2 + 44 >> 2];
  HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
  HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
  HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
  HEAP32[i1 + 60 >> 2] = HEAP32[i2 + 60 >> 2];
  return;
 }
 function _mat4_fromQuat(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0;
  d10 = +HEAPF32[i2 >> 2];
  d3 = +HEAPF32[i2 + 4 >> 2];
  d9 = +HEAPF32[i2 + 8 >> 2];
  d13 = +HEAPF32[i2 + 12 >> 2];
  d4 = d10 + d10;
  d7 = d3 + d3;
  d11 = d9 + d9;
  d12 = d3 * d4;
  d3 = d3 * d7;
  d8 = d4 * d9;
  d6 = d9 * d7;
  d9 = d9 * d11;
  d5 = d4 * d13;
  d7 = d7 * d13;
  d11 = d13 * d11;
  HEAPF32[i1 >> 2] = 1.0 - d3 - d9;
  HEAPF32[i1 + 4 >> 2] = d12 + d11;
  HEAPF32[i1 + 8 >> 2] = d8 - d7;
  HEAPF32[i1 + 12 >> 2] = 0.0;
  HEAPF32[i1 + 16 >> 2] = d12 - d11;
  d4 = 1.0 - d10 * d4;
  HEAPF32[i1 + 20 >> 2] = d4 - d9;
  HEAPF32[i1 + 24 >> 2] = d6 + d5;
  HEAPF32[i1 + 28 >> 2] = 0.0;
  HEAPF32[i1 + 32 >> 2] = d8 + d7;
  HEAPF32[i1 + 36 >> 2] = d6 - d5;
  HEAPF32[i1 + 40 >> 2] = d4 - d3;
  i2 = i1 + 44 | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 0;
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_determinant(i1) {
  i1 = i1 | 0;
  var d2 = 0.0, d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0, d16 = 0.0, d17 = 0.0;
  d17 = +HEAPF32[i1 >> 2];
  d9 = +HEAPF32[i1 + 4 >> 2];
  d15 = +HEAPF32[i1 + 8 >> 2];
  d7 = +HEAPF32[i1 + 12 >> 2];
  d14 = +HEAPF32[i1 + 16 >> 2];
  d6 = +HEAPF32[i1 + 20 >> 2];
  d16 = +HEAPF32[i1 + 24 >> 2];
  d8 = +HEAPF32[i1 + 28 >> 2];
  d5 = +HEAPF32[i1 + 32 >> 2];
  d13 = +HEAPF32[i1 + 36 >> 2];
  d3 = +HEAPF32[i1 + 40 >> 2];
  d11 = +HEAPF32[i1 + 44 >> 2];
  d2 = +HEAPF32[i1 + 48 >> 2];
  d10 = +HEAPF32[i1 + 52 >> 2];
  d4 = +HEAPF32[i1 + 56 >> 2];
  d12 = +HEAPF32[i1 + 60 >> 2];
  return +((d15 * d8 - d7 * d16) * (d5 * d10 - d13 * d2) + ((d9 * d16 - d15 * d6) * (d5 * d12 - d11 * d2) + ((d17 * d8 - d7 * d14) * (d13 * d4 - d3 * d10) + ((d17 * d6 - d9 * d14) * (d3 * d12 - d11 * d4) - (d17 * d16 - d15 * d14) * (d13 * d12 - d11 * d10))) - (d9 * d8 - d7 * d6) * (d5 * d4 - d3 * d2)));
 }
 function _quat_slerp(i11, i1, i3, d10) {
  i11 = i11 | 0;
  i1 = i1 | 0;
  i3 = i3 | 0;
  d10 = +d10;
  var d2 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d12 = 0.0, d13 = 0.0, d14 = 0.0, d15 = 0.0;
  d12 = +HEAPF32[i1 >> 2];
  d13 = +HEAPF32[i1 + 4 >> 2];
  d14 = +HEAPF32[i1 + 8 >> 2];
  d9 = +HEAPF32[i1 + 12 >> 2];
  d2 = +HEAPF32[i3 >> 2];
  d7 = +HEAPF32[i3 + 4 >> 2];
  d5 = +HEAPF32[i3 + 8 >> 2];
  d6 = +HEAPF32[i3 + 12 >> 2];
  d4 = d12 * d2 + d13 * d7 + d14 * d5 + d9 * d6;
  if (d4 < 0.0) {
   d8 = -d2;
   d4 = -d4;
   d7 = -d7;
   d6 = -d6;
   d5 = -d5;
  } else d8 = d2;
  if (1.0 - d4 > 1.0e-6) {
   d15 = +Math_acos(+d4);
   d2 = +Math_sin(+d15);
   d4 = +Math_sin(+(d15 * d10)) / d2;
   d2 = +Math_sin(+((1.0 - d10) * d15)) / d2;
  } else {
   d4 = d10;
   d2 = 1.0 - d10;
  }
  HEAPF32[i11 >> 2] = d12 * d2 + d8 * d4;
  HEAPF32[i11 + 4 >> 2] = d13 * d2 + d7 * d4;
  HEAPF32[i11 + 8 >> 2] = d14 * d2 + d5 * d4;
  HEAPF32[i11 + 12 >> 2] = d9 * d2 + d6 * d4;
  return;
 }
 function _mat4_multiplyScalar(i1, i2, d3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  d3 = +d3;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] * d3;
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] * d3;
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] * d3;
  HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2] * d3;
  HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 16 >> 2] * d3;
  HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 20 >> 2] * d3;
  HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2] * d3;
  HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2] * d3;
  HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2] * d3;
  HEAPF32[i1 + 36 >> 2] = +HEAPF32[i2 + 36 >> 2] * d3;
  HEAPF32[i1 + 40 >> 2] = +HEAPF32[i2 + 40 >> 2] * d3;
  HEAPF32[i1 + 44 >> 2] = +HEAPF32[i2 + 44 >> 2] * d3;
  HEAPF32[i1 + 48 >> 2] = +HEAPF32[i2 + 48 >> 2] * d3;
  HEAPF32[i1 + 52 >> 2] = +HEAPF32[i2 + 52 >> 2] * d3;
  HEAPF32[i1 + 56 >> 2] = +HEAPF32[i2 + 56 >> 2] * d3;
  HEAPF32[i1 + 60 >> 2] = +HEAPF32[i2 + 60 >> 2] * d3;
  return;
 }
 function _mat4_frustum(i1, d2, d3, d4, d5, d6, d7) {
  i1 = i1 | 0;
  d2 = +d2;
  d3 = +d3;
  d4 = +d4;
  d5 = +d5;
  d6 = +d6;
  d7 = +d7;
  var d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, i12 = 0;
  d10 = 1.0 / (d3 - d2);
  d9 = 1.0 / (d5 - d4);
  d8 = 1.0 / (d6 - d7);
  d11 = d6 * 2.0;
  HEAPF32[i1 >> 2] = d10 * d11;
  i12 = i1 + 4 | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  HEAP32[i12 + 8 >> 2] = 0;
  HEAP32[i12 + 12 >> 2] = 0;
  HEAPF32[i1 + 20 >> 2] = d11 * d9;
  HEAPF32[i1 + 24 >> 2] = 0.0;
  HEAPF32[i1 + 28 >> 2] = 0.0;
  HEAPF32[i1 + 32 >> 2] = (d2 + d3) * d10;
  HEAPF32[i1 + 36 >> 2] = (d4 + d5) * d9;
  HEAPF32[i1 + 40 >> 2] = (d6 + d7) * d8;
  HEAPF32[i1 + 44 >> 2] = -1.0;
  HEAPF32[i1 + 48 >> 2] = 0.0;
  HEAPF32[i1 + 52 >> 2] = 0.0;
  HEAPF32[i1 + 56 >> 2] = d6 * d7 * 2.0 * d8;
  HEAPF32[i1 + 60 >> 2] = 0.0;
  return;
 }
 function _mat4_copy(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
  HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
  HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
  HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
  HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
  HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
  HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
  HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
  HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
  HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
  HEAP32[i1 + 60 >> 2] = HEAP32[i2 + 60 >> 2];
  return;
 }
 function _mat4_ortho(i1, d2, d3, d4, d5, d6, d7) {
  i1 = i1 | 0;
  d2 = +d2;
  d3 = +d3;
  d4 = +d4;
  d5 = +d5;
  d6 = +d6;
  d7 = +d7;
  var d8 = 0.0, d9 = 0.0, d10 = 0.0, i11 = 0;
  d10 = 1.0 / (d2 - d3);
  d9 = 1.0 / (d4 - d5);
  d8 = 1.0 / (d6 - d7);
  HEAPF32[i1 >> 2] = d10 * -2.0;
  i11 = i1 + 4 | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  HEAP32[i11 + 8 >> 2] = 0;
  HEAP32[i11 + 12 >> 2] = 0;
  HEAPF32[i1 + 20 >> 2] = d9 * -2.0;
  i11 = i1 + 24 | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  HEAP32[i11 + 8 >> 2] = 0;
  HEAP32[i11 + 12 >> 2] = 0;
  HEAPF32[i1 + 40 >> 2] = d8 * 2.0;
  HEAPF32[i1 + 44 >> 2] = 0.0;
  HEAPF32[i1 + 48 >> 2] = (d2 + d3) * d10;
  HEAPF32[i1 + 52 >> 2] = (d4 + d5) * d9;
  HEAPF32[i1 + 56 >> 2] = (d6 + d7) * d8;
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_set(i1, d2, d10, d11, d12, d13, d14, d15, d16, d17, d3, d4, d5, d6, d7, d8, d9) {
  i1 = i1 | 0;
  d2 = +d2;
  d10 = +d10;
  d11 = +d11;
  d12 = +d12;
  d13 = +d13;
  d14 = +d14;
  d15 = +d15;
  d16 = +d16;
  d17 = +d17;
  d3 = +d3;
  d4 = +d4;
  d5 = +d5;
  d6 = +d6;
  d7 = +d7;
  d8 = +d8;
  d9 = +d9;
  HEAPF32[i1 >> 2] = d2;
  HEAPF32[i1 + 4 >> 2] = d10;
  HEAPF32[i1 + 8 >> 2] = d11;
  HEAPF32[i1 + 12 >> 2] = d12;
  HEAPF32[i1 + 16 >> 2] = d13;
  HEAPF32[i1 + 20 >> 2] = d14;
  HEAPF32[i1 + 24 >> 2] = d15;
  HEAPF32[i1 + 28 >> 2] = d16;
  HEAPF32[i1 + 32 >> 2] = d17;
  HEAPF32[i1 + 36 >> 2] = d3;
  HEAPF32[i1 + 40 >> 2] = d4;
  HEAPF32[i1 + 44 >> 2] = d5;
  HEAPF32[i1 + 48 >> 2] = d6;
  HEAPF32[i1 + 52 >> 2] = d7;
  HEAPF32[i1 + 56 >> 2] = d8;
  HEAPF32[i1 + 60 >> 2] = d9;
  return;
 }
 function _vec3_transformQuat(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0, d12 = 0.0, d13 = 0.0;
  d13 = +HEAPF32[i2 >> 2];
  d12 = +HEAPF32[i2 + 4 >> 2];
  d9 = +HEAPF32[i2 + 8 >> 2];
  d4 = +HEAPF32[i3 >> 2];
  d10 = +HEAPF32[i3 + 4 >> 2];
  d8 = +HEAPF32[i3 + 8 >> 2];
  d7 = +HEAPF32[i3 + 12 >> 2];
  d11 = d9 * d10 + d13 * d7 - d12 * d8;
  d5 = d13 * d8 + d12 * d7 - d9 * d4;
  d6 = d12 * d4 + d9 * d7 - d13 * d10;
  d4 = -d4;
  d9 = d13 * d4 - d12 * d10 - d9 * d8;
  d8 = -d8;
  d10 = -d10;
  HEAPF32[i1 >> 2] = d5 * d8 + (d9 * d4 + d7 * d11) - d6 * d10;
  HEAPF32[i1 + 4 >> 2] = d6 * d4 + (d9 * d10 + d7 * d5) - d11 * d8;
  HEAPF32[i1 + 8 >> 2] = d11 * d10 + (d9 * d8 + d7 * d6) - d5 * d4;
  return;
 }
 function _vec3_hermite(i1, i2, i3, i4, i5, d6) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  i4 = i4 | 0;
  i5 = i5 | 0;
  d6 = +d6;
  var d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0;
  d11 = d6 * d6;
  d10 = d6 * 2.0;
  d9 = d11 * (d10 + -3.0) + 1.0;
  d8 = d11 * (d6 + -2.0) + d6;
  d7 = d11 * (d6 + -1.0);
  d6 = d11 * (3.0 - d10);
  HEAPF32[i1 >> 2] = d9 * +HEAPF32[i2 >> 2] + d8 * +HEAPF32[i3 >> 2] + d7 * +HEAPF32[i4 >> 2] + d6 * +HEAPF32[i5 >> 2];
  HEAPF32[i1 + 4 >> 2] = d9 * +HEAPF32[i2 + 4 >> 2] + d8 * +HEAPF32[i3 + 4 >> 2] + d7 * +HEAPF32[i4 + 4 >> 2] + d6 * +HEAPF32[i5 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = d9 * +HEAPF32[i2 + 8 >> 2] + d8 * +HEAPF32[i3 + 8 >> 2] + d7 * +HEAPF32[i4 + 8 >> 2] + d6 * +HEAPF32[i5 + 8 >> 2];
  return;
 }
 function _vec3_bezier(i1, i2, i3, i4, i5, d6) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  i4 = i4 | 0;
  i5 = i5 | 0;
  d6 = +d6;
  var d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0;
  d7 = 1.0 - d6;
  d8 = d7 * d7;
  d10 = d6 * d6;
  d9 = d7 * d8;
  d8 = d6 * 3.0 * d8;
  d7 = d7 * d10 * 3.0;
  d6 = d10 * d6;
  HEAPF32[i1 >> 2] = d9 * +HEAPF32[i2 >> 2] + d8 * +HEAPF32[i3 >> 2] + d7 * +HEAPF32[i4 >> 2] + d6 * +HEAPF32[i5 >> 2];
  HEAPF32[i1 + 4 >> 2] = d9 * +HEAPF32[i2 + 4 >> 2] + d8 * +HEAPF32[i3 + 4 >> 2] + d7 * +HEAPF32[i4 + 4 >> 2] + d6 * +HEAPF32[i5 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = d9 * +HEAPF32[i2 + 8 >> 2] + d8 * +HEAPF32[i3 + 8 >> 2] + d7 * +HEAPF32[i4 + 8 >> 2] + d6 * +HEAPF32[i5 + 8 >> 2];
  return;
 }
 function _mat4_perspective(i1, d2, d3, d4, d5) {
  i1 = i1 | 0;
  d2 = +d2;
  d3 = +d3;
  d4 = +d4;
  d5 = +d5;
  var i6 = 0, d7 = 0.0;
  d7 = 1.0 / +Math_tan(+(d2 * .5));
  d2 = 1.0 / (d4 - d5);
  HEAPF32[i1 >> 2] = d7 / d3;
  i6 = i1 + 4 | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  HEAP32[i6 + 8 >> 2] = 0;
  HEAP32[i6 + 12 >> 2] = 0;
  HEAPF32[i1 + 20 >> 2] = d7;
  i6 = i1 + 24 | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  HEAP32[i6 + 8 >> 2] = 0;
  HEAP32[i6 + 12 >> 2] = 0;
  HEAPF32[i1 + 40 >> 2] = (d4 + d5) * d2;
  HEAPF32[i1 + 44 >> 2] = -1.0;
  HEAPF32[i1 + 48 >> 2] = 0.0;
  HEAPF32[i1 + 52 >> 2] = 0.0;
  HEAPF32[i1 + 56 >> 2] = d5 * 2.0 * d4 * d2;
  HEAPF32[i1 + 60 >> 2] = 0.0;
  return;
 }
 function _quat_multiply(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, d11 = 0.0;
  d9 = +HEAPF32[i2 >> 2];
  d7 = +HEAPF32[i2 + 4 >> 2];
  d5 = +HEAPF32[i2 + 8 >> 2];
  d11 = +HEAPF32[i2 + 12 >> 2];
  d8 = +HEAPF32[i3 >> 2];
  d6 = +HEAPF32[i3 + 4 >> 2];
  d4 = +HEAPF32[i3 + 8 >> 2];
  d10 = +HEAPF32[i3 + 12 >> 2];
  HEAPF32[i1 >> 2] = d7 * d4 + (d11 * d8 + d9 * d10) - d5 * d6;
  HEAPF32[i1 + 4 >> 2] = d5 * d8 + (d11 * d6 + d7 * d10) - d9 * d4;
  HEAPF32[i1 + 8 >> 2] = d9 * d6 + (d11 * d4 + d5 * d10) - d7 * d8;
  HEAPF32[i1 + 12 >> 2] = d11 * d10 - d9 * d8 - d7 * d6 - d5 * d4;
  return;
 }
 function _vec3_transformMat4(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0;
  d6 = +HEAPF32[i2 >> 2];
  d5 = +HEAPF32[i2 + 4 >> 2];
  d4 = +HEAPF32[i2 + 8 >> 2];
  HEAPF32[i1 >> 2] = +HEAPF32[i3 + 48 >> 2] + (d6 * +HEAPF32[i3 >> 2] + d5 * +HEAPF32[i3 + 16 >> 2] + d4 * +HEAPF32[i3 + 32 >> 2]);
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i3 + 52 >> 2] + (d6 * +HEAPF32[i3 + 4 >> 2] + d5 * +HEAPF32[i3 + 20 >> 2] + d4 * +HEAPF32[i3 + 36 >> 2]);
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i3 + 56 >> 2] + (d6 * +HEAPF32[i3 + 8 >> 2] + d5 * +HEAPF32[i3 + 24 >> 2] + d4 * +HEAPF32[i3 + 40 >> 2]);
  return;
 }
 function _mat4_fromXRotation(i1, d2) {
  i1 = i1 | 0;
  d2 = +d2;
  var i3 = 0, d4 = 0.0;
  d4 = +Math_sin(+d2);
  d2 = +Math_cos(+d2);
  HEAPF32[i1 >> 2] = 1.0;
  i3 = i1 + 4 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAPF32[i1 + 20 >> 2] = d2;
  HEAPF32[i1 + 24 >> 2] = d4;
  HEAPF32[i1 + 28 >> 2] = 0.0;
  HEAPF32[i1 + 32 >> 2] = 0.0;
  HEAPF32[i1 + 36 >> 2] = -d4;
  HEAPF32[i1 + 40 >> 2] = d2;
  i3 = i1 + 44 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_fromZRotation(i1, d2) {
  i1 = i1 | 0;
  d2 = +d2;
  var i3 = 0, d4 = 0.0;
  d4 = +Math_sin(+d2);
  d2 = +Math_cos(+d2);
  HEAPF32[i1 >> 2] = d2;
  HEAPF32[i1 + 4 >> 2] = d4;
  HEAPF32[i1 + 8 >> 2] = 0.0;
  HEAPF32[i1 + 12 >> 2] = 0.0;
  HEAPF32[i1 + 16 >> 2] = -d4;
  HEAPF32[i1 + 20 >> 2] = d2;
  i3 = i1 + 24 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAPF32[i1 + 40 >> 2] = 1.0;
  i3 = i1 + 44 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_fromYRotation(i1, d2) {
  i1 = i1 | 0;
  d2 = +d2;
  var i3 = 0, d4 = 0.0;
  d4 = +Math_sin(+d2);
  d2 = +Math_cos(+d2);
  HEAPF32[i1 >> 2] = d2;
  HEAPF32[i1 + 4 >> 2] = 0.0;
  HEAPF32[i1 + 8 >> 2] = -d4;
  HEAPF32[i1 + 12 >> 2] = 0.0;
  HEAPF32[i1 + 16 >> 2] = 0.0;
  HEAPF32[i1 + 20 >> 2] = 1.0;
  HEAPF32[i1 + 24 >> 2] = 0.0;
  HEAPF32[i1 + 28 >> 2] = 0.0;
  HEAPF32[i1 + 32 >> 2] = d4;
  HEAPF32[i1 + 36 >> 2] = 0.0;
  HEAPF32[i1 + 40 >> 2] = d2;
  i3 = i1 + 44 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_fromTranslation(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var i3 = 0;
  HEAPF32[i1 >> 2] = 1.0;
  i3 = i1 + 4 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAPF32[i1 + 20 >> 2] = 1.0;
  i3 = i1 + 24 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAPF32[i1 + 40 >> 2] = 1.0;
  HEAPF32[i1 + 44 >> 2] = 0.0;
  HEAP32[i1 + 48 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _mat4_fromScaling(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var i3 = 0;
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  i3 = i1 + 4 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 4 >> 2];
  i3 = i1 + 24 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 8 >> 2];
  i2 = i1 + 44 | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 0;
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _vec3_rotateZ(i1, i2, i3, d4) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  d4 = +d4;
  var d5 = 0.0, i6 = 0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0;
  d10 = +HEAPF32[i3 >> 2];
  d7 = +HEAPF32[i2 >> 2] - d10;
  i6 = i3 + 4 | 0;
  d9 = +HEAPF32[i2 + 4 >> 2] - +HEAPF32[i6 >> 2];
  i3 = i3 + 8 | 0;
  d5 = +HEAPF32[i2 + 8 >> 2] - +HEAPF32[i3 >> 2];
  d8 = +Math_cos(+d4);
  d4 = +Math_sin(+d4);
  HEAPF32[i1 >> 2] = d10 + (d7 * d8 - d9 * d4);
  HEAPF32[i1 + 4 >> 2] = d9 * d8 + d7 * d4 + +HEAPF32[i6 >> 2];
  HEAPF32[i1 + 8 >> 2] = d5 + +HEAPF32[i3 >> 2];
  return;
 }
 function _vec3_rotateY(i1, i2, i3, d4) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  d4 = +d4;
  var d5 = 0.0, d6 = 0.0, d7 = 0.0, i8 = 0, d9 = 0.0, d10 = 0.0;
  d10 = +HEAPF32[i3 >> 2];
  d6 = +HEAPF32[i2 >> 2] - d10;
  i8 = i3 + 4 | 0;
  d9 = +HEAPF32[i2 + 4 >> 2] - +HEAPF32[i8 >> 2];
  i3 = i3 + 8 | 0;
  d7 = +HEAPF32[i2 + 8 >> 2] - +HEAPF32[i3 >> 2];
  d5 = +Math_sin(+d4);
  d4 = +Math_cos(+d4);
  HEAPF32[i1 >> 2] = d10 + (d7 * d5 + d6 * d4);
  HEAPF32[i1 + 4 >> 2] = d9 + +HEAPF32[i8 >> 2];
  HEAPF32[i1 + 8 >> 2] = d7 * d4 - d6 * d5 + +HEAPF32[i3 >> 2];
  return;
 }
 function _vec3_transformMat3(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0;
  d6 = +HEAPF32[i2 >> 2];
  d5 = +HEAPF32[i2 + 4 >> 2];
  d4 = +HEAPF32[i2 + 8 >> 2];
  HEAPF32[i1 >> 2] = d6 * +HEAPF32[i3 >> 2] + d5 * +HEAPF32[i3 + 12 >> 2] + d4 * +HEAPF32[i3 + 24 >> 2];
  HEAPF32[i1 + 4 >> 2] = d6 * +HEAPF32[i3 + 4 >> 2] + d5 * +HEAPF32[i3 + 16 >> 2] + d4 * +HEAPF32[i3 + 28 >> 2];
  HEAPF32[i1 + 8 >> 2] = d6 * +HEAPF32[i3 + 8 >> 2] + d5 * +HEAPF32[i3 + 20 >> 2] + d4 * +HEAPF32[i3 + 32 >> 2];
  return;
 }
 function _mat4_identity(i1) {
  i1 = i1 | 0;
  var i2 = 0;
  HEAPF32[i1 >> 2] = 1.0;
  i2 = i1 + 4 | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 0;
  HEAPF32[i1 + 20 >> 2] = 1.0;
  i2 = i1 + 24 | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 0;
  HEAPF32[i1 + 40 >> 2] = 1.0;
  i2 = i1 + 44 | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 0;
  HEAPF32[i1 + 60 >> 2] = 1.0;
  return;
 }
 function _vec3_rotateX(i1, i2, i3, d4) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  d4 = +d4;
  var d5 = 0.0, d6 = 0.0, d7 = 0.0, i8 = 0, d9 = 0.0;
  d9 = +HEAPF32[i3 >> 2];
  i8 = i3 + 4 | 0;
  d5 = +HEAPF32[i2 + 4 >> 2] - +HEAPF32[i8 >> 2];
  i3 = i3 + 8 | 0;
  d7 = +HEAPF32[i2 + 8 >> 2] - +HEAPF32[i3 >> 2];
  d6 = +Math_cos(+d4);
  d4 = +Math_sin(+d4);
  HEAPF32[i1 >> 2] = d9 + (+HEAPF32[i2 >> 2] - d9);
  HEAPF32[i1 + 4 >> 2] = d5 * d6 - d7 * d4 + +HEAPF32[i8 >> 2];
  HEAPF32[i1 + 8 >> 2] = d7 * d6 + d5 * d4 + +HEAPF32[i3 >> 2];
  return;
 }
 function _quat_getAxisAngle(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0;
  d3 = +Math_acos(+(+HEAPF32[i2 + 12 >> 2])) * 2.0;
  d4 = +Math_sin(+(d3 * .5));
  if (d4 != 0.0) {
   HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] / d4;
   HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] / d4;
   d4 = +HEAPF32[i2 + 8 >> 2] / d4;
   i2 = i1 + 8 | 0;
   HEAPF32[i2 >> 2] = d4;
   return +d3;
  } else {
   HEAPF32[i1 >> 2] = 1.0;
   HEAPF32[i1 + 4 >> 2] = 0.0;
   d4 = 0.0;
   i2 = i1 + 8 | 0;
   HEAPF32[i2 >> 2] = d4;
   return +d3;
  }
  return 0.0;
 }
 function _quat_rotateZ(i1, i2, d3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  d3 = +d3;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0;
  d5 = d3 * .5;
  d7 = +HEAPF32[i2 >> 2];
  d8 = +HEAPF32[i2 + 4 >> 2];
  d4 = +HEAPF32[i2 + 8 >> 2];
  d6 = +HEAPF32[i2 + 12 >> 2];
  d3 = +Math_sin(+d5);
  d5 = +Math_cos(+d5);
  HEAPF32[i1 >> 2] = d8 * d3 + d7 * d5;
  HEAPF32[i1 + 4 >> 2] = d8 * d5 - d7 * d3;
  HEAPF32[i1 + 8 >> 2] = d6 * d3 + d4 * d5;
  HEAPF32[i1 + 12 >> 2] = d6 * d5 - d4 * d3;
  return;
 }
 function _quat_rotateY(i1, i2, d3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  d3 = +d3;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0;
  d5 = d3 * .5;
  d8 = +HEAPF32[i2 >> 2];
  d4 = +HEAPF32[i2 + 4 >> 2];
  d7 = +HEAPF32[i2 + 8 >> 2];
  d6 = +HEAPF32[i2 + 12 >> 2];
  d3 = +Math_sin(+d5);
  d5 = +Math_cos(+d5);
  HEAPF32[i1 >> 2] = d8 * d5 - d7 * d3;
  HEAPF32[i1 + 4 >> 2] = d6 * d3 + d4 * d5;
  HEAPF32[i1 + 8 >> 2] = d8 * d3 + d7 * d5;
  HEAPF32[i1 + 12 >> 2] = d6 * d5 - d4 * d3;
  return;
 }
 function _quat_rotateX(i1, i2, d3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  d3 = +d3;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0;
  d5 = d3 * .5;
  d4 = +HEAPF32[i2 >> 2];
  d7 = +HEAPF32[i2 + 4 >> 2];
  d8 = +HEAPF32[i2 + 8 >> 2];
  d6 = +HEAPF32[i2 + 12 >> 2];
  d3 = +Math_sin(+d5);
  d5 = +Math_cos(+d5);
  HEAPF32[i1 >> 2] = d6 * d3 + d4 * d5;
  HEAPF32[i1 + 4 >> 2] = d8 * d3 + d7 * d5;
  HEAPF32[i1 + 8 >> 2] = d8 * d5 - d7 * d3;
  HEAPF32[i1 + 12 >> 2] = d6 * d5 - d4 * d3;
  return;
 }
 function _quat_invert(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0;
  d7 = +HEAPF32[i2 >> 2];
  d6 = +HEAPF32[i2 + 4 >> 2];
  d5 = +HEAPF32[i2 + 8 >> 2];
  d4 = +HEAPF32[i2 + 12 >> 2];
  d3 = d7 * d7 + d6 * d6 + d5 * d5 + d4 * d4;
  d3 = d3 != 0.0 ? 1.0 / d3 : 0.0;
  HEAPF32[i1 >> 2] = -(d7 * d3);
  HEAPF32[i1 + 4 >> 2] = -(d6 * d3);
  HEAPF32[i1 + 8 >> 2] = -(d5 * d3);
  HEAPF32[i1 + 12 >> 2] = d4 * d3;
  return;
 }
 function _vec3_normalize(i3, i1) {
  i3 = i3 | 0;
  i1 = i1 | 0;
  var d2 = 0.0, d4 = 0.0, i5 = 0, d6 = 0.0;
  d4 = +HEAPF32[i1 >> 2];
  i5 = i1 + 4 | 0;
  d6 = +HEAPF32[i5 >> 2];
  i1 = i1 + 8 | 0;
  d2 = +HEAPF32[i1 >> 2];
  d2 = d4 * d4 + d6 * d6 + d2 * d2;
  if (!(d2 > 0.0)) return;
  d6 = 1.0 / +Math_sqrt(+d2);
  HEAPF32[i3 >> 2] = d4 * d6;
  HEAPF32[i3 + 4 >> 2] = d6 * +HEAPF32[i5 >> 2];
  HEAPF32[i3 + 8 >> 2] = d6 * +HEAPF32[i1 >> 2];
  return;
 }
 function _vec3_cross(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  var d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0;
  d7 = +HEAPF32[i2 >> 2];
  d5 = +HEAPF32[i2 + 4 >> 2];
  d9 = +HEAPF32[i2 + 8 >> 2];
  d4 = +HEAPF32[i3 >> 2];
  d6 = +HEAPF32[i3 + 4 >> 2];
  d8 = +HEAPF32[i3 + 8 >> 2];
  HEAPF32[i1 >> 2] = d5 * d8 - d9 * d6;
  HEAPF32[i1 + 4 >> 2] = d9 * d4 - d7 * d8;
  HEAPF32[i1 + 8 >> 2] = d7 * d6 - d5 * d4;
  return;
 }
 function _vec3_lerp(i1, i2, i3, d4) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  d4 = +d4;
  var d5 = 0.0, d6 = 0.0, d7 = 0.0;
  d7 = +HEAPF32[i2 >> 2];
  d6 = +HEAPF32[i2 + 4 >> 2];
  d5 = +HEAPF32[i2 + 8 >> 2];
  HEAPF32[i1 >> 2] = d7 + (+HEAPF32[i3 >> 2] - d7) * d4;
  HEAPF32[i1 + 4 >> 2] = d6 + (+HEAPF32[i3 + 4 >> 2] - d6) * d4;
  HEAPF32[i1 + 8 >> 2] = d5 + (+HEAPF32[i3 + 8 >> 2] - d5) * d4;
  return;
 }
 function _quat_calculateW(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0;
  d5 = +HEAPF32[i2 >> 2];
  d4 = +HEAPF32[i2 + 4 >> 2];
  d3 = +HEAPF32[i2 + 8 >> 2];
  HEAPF32[i1 >> 2] = d5;
  HEAPF32[i1 + 4 >> 2] = d4;
  HEAPF32[i1 + 8 >> 2] = d3;
  HEAPF32[i1 + 12 >> 2] = +Math_sqrt(+(+Math_abs(+(1.0 - d5 * d5 - d4 * d4 - d3 * d3))));
  return;
 }
 function _vec3_exactEquals(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  if (!(+HEAPF32[i1 >> 2] == +HEAPF32[i2 >> 2])) {
   i2 = 0;
   i2 = i2 & 1;
   return i2 | 0;
  }
  if (!(+HEAPF32[i1 + 4 >> 2] == +HEAPF32[i2 + 4 >> 2])) {
   i2 = 0;
   i2 = i2 & 1;
   return i2 | 0;
  }
  i2 = +HEAPF32[i1 + 8 >> 2] == +HEAPF32[i2 + 8 >> 2];
  i2 = i2 & 1;
  return i2 | 0;
 }
 function _quat_setAxisAngle(i1, i2, d3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  d3 = +d3;
  var d4 = 0.0;
  d3 = d3 * .5;
  d4 = +Math_sin(+d3);
  HEAPF32[i1 >> 2] = d4 * +HEAPF32[i2 >> 2];
  HEAPF32[i1 + 4 >> 2] = d4 * +HEAPF32[i2 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = d4 * +HEAPF32[i2 + 8 >> 2];
  HEAPF32[i1 + 12 >> 2] = +Math_cos(+d3);
  return;
 }
 function _vec3_min(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  HEAPF32[i1 >> 2] = +_fminf(+(+HEAPF32[i2 >> 2]), +(+HEAPF32[i3 >> 2]));
  HEAPF32[i1 + 4 >> 2] = +_fminf(+(+HEAPF32[i2 + 4 >> 2]), +(+HEAPF32[i3 + 4 >> 2]));
  HEAPF32[i1 + 8 >> 2] = +_fminf(+(+HEAPF32[i2 + 8 >> 2]), +(+HEAPF32[i3 + 8 >> 2]));
  return;
 }
 function _vec3_max(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  HEAPF32[i1 >> 2] = +_fmaxf(+(+HEAPF32[i2 >> 2]), +(+HEAPF32[i3 >> 2]));
  HEAPF32[i1 + 4 >> 2] = +_fmaxf(+(+HEAPF32[i2 + 4 >> 2]), +(+HEAPF32[i3 + 4 >> 2]));
  HEAPF32[i1 + 8 >> 2] = +_fmaxf(+(+HEAPF32[i2 + 8 >> 2]), +(+HEAPF32[i3 + 8 >> 2]));
  return;
 }
 function _vec3_scaleAndAdd(i1, i2, i3, d4) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  d4 = +d4;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] + +HEAPF32[i3 >> 2] * d4;
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] + +HEAPF32[i3 + 4 >> 2] * d4;
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] + +HEAPF32[i3 + 8 >> 2] * d4;
  return;
 }
 function _vec3_distance(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0;
  d5 = +HEAPF32[i2 >> 2] - +HEAPF32[i1 >> 2];
  d4 = +HEAPF32[i2 + 4 >> 2] - +HEAPF32[i1 + 4 >> 2];
  d3 = +HEAPF32[i2 + 8 >> 2] - +HEAPF32[i1 + 8 >> 2];
  return +(+Math_sqrt(+(d5 * d5 + d4 * d4 + d3 * d3)));
 }
 function _vec3_squaredDistance(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var d3 = 0.0, d4 = 0.0, d5 = 0.0;
  d5 = +HEAPF32[i2 >> 2] - +HEAPF32[i1 >> 2];
  d4 = +HEAPF32[i2 + 4 >> 2] - +HEAPF32[i1 + 4 >> 2];
  d3 = +HEAPF32[i2 + 8 >> 2] - +HEAPF32[i1 + 8 >> 2];
  return +(d5 * d5 + d4 * d4 + d3 * d3);
 }
 function _vec3_subtract(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] - +HEAPF32[i3 >> 2];
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] - +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] - +HEAPF32[i3 + 8 >> 2];
  return;
 }
 function _vec3_multiply(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] * +HEAPF32[i3 >> 2];
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] * +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] * +HEAPF32[i3 + 8 >> 2];
  return;
 }
 function _vec3_divide(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] / +HEAPF32[i3 >> 2];
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] / +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] / +HEAPF32[i3 + 8 >> 2];
  return;
 }
 function _vec3_add(i1, i2, i3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  i3 = i3 | 0;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] + +HEAPF32[i3 >> 2];
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] + +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] + +HEAPF32[i3 + 8 >> 2];
  return;
 }
 function _quat_conjugate(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAPF32[i1 >> 2] = -+HEAPF32[i2 >> 2];
  HEAPF32[i1 + 4 >> 2] = -+HEAPF32[i2 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = -+HEAPF32[i2 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  return;
 }
 function _vec3_floor(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAPF32[i1 >> 2] = +Math_floor(+(+HEAPF32[i2 >> 2]));
  HEAPF32[i1 + 4 >> 2] = +Math_floor(+(+HEAPF32[i2 + 4 >> 2]));
  HEAPF32[i1 + 8 >> 2] = +Math_floor(+(+HEAPF32[i2 + 8 >> 2]));
  return;
 }
 function _vec3_ceil(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAPF32[i1 >> 2] = +Math_ceil(+(+HEAPF32[i2 >> 2]));
  HEAPF32[i1 + 4 >> 2] = +Math_ceil(+(+HEAPF32[i2 + 4 >> 2]));
  HEAPF32[i1 + 8 >> 2] = +Math_ceil(+(+HEAPF32[i2 + 8 >> 2]));
  return;
 }
 function _vec3_round(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAPF32[i1 >> 2] = +_roundf(+(+HEAPF32[i2 >> 2]));
  HEAPF32[i1 + 4 >> 2] = +_roundf(+(+HEAPF32[i2 + 4 >> 2]));
  HEAPF32[i1 + 8 >> 2] = +_roundf(+(+HEAPF32[i2 + 8 >> 2]));
  return;
 }
 function _vec3_scale(i1, i2, d3) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  d3 = +d3;
  HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2] * d3;
  HEAPF32[i1 + 4 >> 2] = +HEAPF32[i2 + 4 >> 2] * d3;
  HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2] * d3;
  return;
 }
 function _vec3_inverse(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAPF32[i1 >> 2] = 1.0 / +HEAPF32[i2 >> 2];
  HEAPF32[i1 + 4 >> 2] = 1.0 / +HEAPF32[i2 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = 1.0 / +HEAPF32[i2 + 8 >> 2];
  return;
 }
 function _vec3_length(i1) {
  i1 = i1 | 0;
  var d2 = 0.0, d3 = 0.0, d4 = 0.0;
  d4 = +HEAPF32[i1 >> 2];
  d3 = +HEAPF32[i1 + 4 >> 2];
  d2 = +HEAPF32[i1 + 8 >> 2];
  return +(+Math_sqrt(+(d4 * d4 + d3 * d3 + d2 * d2)));
 }
 function _mat4_getTranslation(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAP32[i1 >> 2] = HEAP32[i2 + 48 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 52 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 56 >> 2];
  return;
 }
 function _vec3_negate(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAPF32[i1 >> 2] = -+HEAPF32[i2 >> 2];
  HEAPF32[i1 + 4 >> 2] = -+HEAPF32[i2 + 4 >> 2];
  HEAPF32[i1 + 8 >> 2] = -+HEAPF32[i2 + 8 >> 2];
  return;
 }
 function _vec3_squaredLength(i1) {
  i1 = i1 | 0;
  var d2 = 0.0, d3 = 0.0, d4 = 0.0;
  d4 = +HEAPF32[i1 >> 2];
  d3 = +HEAPF32[i1 + 4 >> 2];
  d2 = +HEAPF32[i1 + 8 >> 2];
  return +(d4 * d4 + d3 * d3 + d2 * d2);
 }
 function _vec3_dot(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  return +(+HEAPF32[i1 >> 2] * +HEAPF32[i2 >> 2] + +HEAPF32[i1 + 4 >> 2] * +HEAPF32[i2 + 4 >> 2] + +HEAPF32[i1 + 8 >> 2] * +HEAPF32[i2 + 8 >> 2]);
 }
 function _vec3_copy(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  return;
 }
 function _vec3_set(i1, d2, d3, d4) {
  i1 = i1 | 0;
  d2 = +d2;
  d3 = +d3;
  d4 = +d4;
  HEAPF32[i1 >> 2] = d2;
  HEAPF32[i1 + 4 >> 2] = d3;
  HEAPF32[i1 + 8 >> 2] = d4;
  return;
 }
 function _quat_identity(i1) {
  i1 = i1 | 0;
  HEAPF32[i1 >> 2] = 0.0;
  HEAPF32[i1 + 4 >> 2] = 0.0;
  HEAPF32[i1 + 8 >> 2] = 0.0;
  HEAPF32[i1 + 12 >> 2] = 1.0;
  return;
 }
 function _mem_alloc(i1, i2) {
  i1 = i1 | 0;
  i2 = i2 | 0;
  var i3 = 0;
  i3 = HEAP32[2] | 0;
  HEAP32[2] = i3 + (Math_imul(i2, i1) | 0);
  return i3 + 4 | 0;
 }
 return {
  _vec3_cross: _vec3_cross,
  _quat_fromMat3: _quat_fromMat3,
  _mat4_fromRotationTranslation: _mat4_fromRotationTranslation,
  _vec3_inverse: _vec3_inverse,
  _vec3_bezier: _vec3_bezier,
  _mat4_multiply: _mat4_multiply,
  _vec3_set: _vec3_set,
  _mat4_fromQuat: _mat4_fromQuat,
  _mat4_lookAt: _mat4_lookAt,
  _vec3_negate: _vec3_negate,
  _vec3_min: _vec3_min,
  _vec3_scale: _vec3_scale,
  _vec3_distance: _vec3_distance,
  _vec3_squaredLength: _vec3_squaredLength,
  _vec3_transformMat3: _vec3_transformMat3,
  _mem_alloc: _mem_alloc,
  _mat4_determinant: _mat4_determinant,
  _vec3_rotateX: _vec3_rotateX,
  _vec3_copy: _vec3_copy,
  _mat4_translate: _mat4_translate,
  _mat4_getRotation: _mat4_getRotation,
  _mat4_multiplyScalar: _mat4_multiplyScalar,
  _mat4_getTranslation: _mat4_getTranslation,
  _mat4_fromRotationTranslationScaleOrigin: _mat4_fromRotationTranslationScaleOrigin,
  _mat4_fromTranslation: _mat4_fromTranslation,
  _mat4_fromRotation: _mat4_fromRotation,
  _mat4_translate_xyz: _mat4_translate_xyz,
  _vec3_divide: _vec3_divide,
  _quat_multiply: _quat_multiply,
  _vec3_normalize: _vec3_normalize,
  _mat4_fromZRotation: _mat4_fromZRotation,
  _mat4_rotateZ: _mat4_rotateZ,
  _vec3_floor: _vec3_floor,
  _mat4_rotateX: _mat4_rotateX,
  _mat4_rotateY: _mat4_rotateY,
  _vec3_ceil: _vec3_ceil,
  _mat4_invert: _mat4_invert,
  _vec3_rotateZ: _vec3_rotateZ,
  _mat4_adjoint: _mat4_adjoint,
  _mat4_fromXRotation: _mat4_fromXRotation,
  _quat_slerp: _quat_slerp,
  _mat4_frustum: _mat4_frustum,
  _quat_rotateX: _quat_rotateX,
  _vec3_transformMat4: _vec3_transformMat4,
  _mat4_transpose: _mat4_transpose,
  _vec3_length: _vec3_length,
  _vec3_hermite: _vec3_hermite,
  _mat4_fromScaling: _mat4_fromScaling,
  _vec3_subtract: _vec3_subtract,
  _quat_rotateY: _quat_rotateY,
  _mat4_set: _mat4_set,
  _mat4_exactEquals: _mat4_exactEquals,
  _vec3_exactEquals: _vec3_exactEquals,
  _vec3_scaleAndAdd: _vec3_scaleAndAdd,
  _mat4_subtract: _mat4_subtract,
  _mat4_fromRotationTranslationScale: _mat4_fromRotationTranslationScale,
  _vec3_rotateY: _vec3_rotateY,
  _vec3_round: _vec3_round,
  _vec3_multiply: _vec3_multiply,
  _quat_rotateZ: _quat_rotateZ,
  _mat4_add: _mat4_add,
  _quat_invert: _quat_invert,
  _mat4_scale: _mat4_scale,
  _quat_setAxisAngle: _quat_setAxisAngle,
  _vec3_max: _vec3_max,
  _mat4_ortho: _mat4_ortho,
  _quat_calculateW: _quat_calculateW,
  _vec3_add: _vec3_add,
  _mat4_fromYRotation: _mat4_fromYRotation,
  _quat_identity: _quat_identity,
  _mat4_rotate: _mat4_rotate,
  _quat_conjugate: _quat_conjugate,
  _vec3_squaredDistance: _vec3_squaredDistance,
  _mat4_identity: _mat4_identity,
  _vec3_dot: _vec3_dot,
  _quat_getAxisAngle: _quat_getAxisAngle,
  _vec3_lerp: _vec3_lerp,
  _mat4_copy: _mat4_copy,
  _mat4_multiplyScalarAndAdd: _mat4_multiplyScalarAndAdd,
  _mat4_perspective: _mat4_perspective,
  _vec3_transformQuat: _vec3_transformQuat
 };
});



