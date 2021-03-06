/* This file was automatically generated.  Do not edit! */
int mat4_exactEquals(float *a,float *b);
void mat4_multiplyScalarAndAdd(float *out,float *a,float *b,float scale);
void mat4_multiplyScalar(float *out,float *a,float b);
void mat4_subtract(float *out,float *a,float *b);
void mat4_add(float *out,float *a,float *b);
void mat4_lookAt(float *out,float *eye,float *center,float *up);
void mat4_ortho(float *out,float left,float right,float bottom,float top,float near,float far);
void mat4_perspective(float *out,float fovy,float aspect,float near,float far);
void mat4_frustum(float *out,float left,float right,float bottom,float top,float near,float far);
void mat4_fromQuat(float *out,float *q);
void mat4_fromRotationTranslationScaleOrigin(float *out,float *q,float *v,float *s,float *o);
void mat4_fromRotationTranslationScale(float *out,float *q,float *v,float *s);
void mat4_getRotation(float *out,float *mat);
void mat4_getTranslation(float *out,float *mat);
void mat4_fromRotationTranslation(float *out,float *q,float *v);
void mat4_fromZRotation(float *out,float rad);
void mat4_fromYRotation(float *out,float rad);
void mat4_fromXRotation(float *out,float rad);
void mat4_fromRotation(float *out,float rad,float *axis);
void mat4_fromScaling(float *out,float *v);
void mat4_fromTranslation(float *out,float *v);
void mat4_rotateZ(float *out,float *a,float rad);
void mat4_rotateY(float *out,float *a,float rad);
void mat4_rotateX(float *out,float *a,float rad);
void mat4_rotate(float *out,float *a,float rad,float *axis);
void mat4_scale(float *out,float *a,float *v);
void mat4_translate(float *out,float *a,float *v);
void mat4_multiply(float *out,float *a,float *b);
float mat4_determinant(float *a);
void mat4_adjoint(float *out,float *a);
void mat4_invert(float *out,float *a);
void mat4_transpose(float *out,float *a);
void mat4_identity(float *out);
void mat4_set(float *out,float m00,float m01,float m02,float m03,float m10,float m11,float m12,float m13,float m20,float m21,float m22,float m23,float m30,float m31,float m32,float m33);
void mat4_copy(float *out,float *a);
