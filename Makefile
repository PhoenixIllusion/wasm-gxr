CC=emcc
ASM_TO_WAST=../binaryen/bin/asm2wasm
WAST_TO_WASM=../binaryen/bin/wasm-as
#WAST_TO_WASM=../sexpr-wasm-prototype/build/sexpr-wasm
SOURCES:=$(wildcard src/*.c)
OUTPUT=js/out.asm.js
OUT_TARGET=out.html
OUT_AUX=out.asm.js out.html out.js
LDFLAGS=-O3 -s ONLY_MY_CODE=1 -s LINKABLE=1 -s EXPORT_ALL=1 -g2 --separate-asm

all: $(SOURCES) $(OUTPUT)

$(OUTPUT): $(SOURCES)
	$(CC) $(SOURCES) $(LDFLAGS) -o $(OUT_TARGET)
	cp out.asm.js $(OUTPUT)
	$(ASM_TO_WAST) -o out.asm.wast out.asm.js
	$(WAST_TO_WASM) -o js/out.wasm out.asm.wast
	$(WAST_TO_WASM) -O -o js/out.opt.wasm out.asm.wast
	rm $(OUT_AUX)
	#rm out.asm.wast
clean:
	rm -f $(OUTPUT) $(OUT_AUX)
