
int mem = 0;

int mem_alloc(int var_count, int var_size) {
  int response = mem+4;
  mem += var_count*var_size;
  return response;
}


