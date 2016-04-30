/* This file was automatically generated.  Do not edit! */
void quat_fromMat3(float *out,float *m);
void quat_conjugate(float *out,float *a);
void quat_invert(float *out,float *a);
void quat_slerp(float *out,float *a,float *b,float t);
void quat_calculateW(float *out,float *a);
void quat_rotateZ(float *out,float *a,float rad);
void quat_rotateY(float *out,float *a,float rad);
void quat_rotateX(float *out,float *a,float rad);
void quat_multiply(float *out,float *a,float *b);
float quat_getAxisAngle(float *out_axis,float *q);
void quat_setAxisAngle(float *out,float *axis,float rad);
void quat_identity(float *out);
