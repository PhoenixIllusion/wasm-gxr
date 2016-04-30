CC=emcc
SOURCES:=$(wildcard *.c)
OUTPUT=js/out.asm.js
OUT_TARGET=out.html
OUT_AUX=out.asm.js out.html out.js
LDFLAGS=-O3 -s ONLY_MY_CODE=1 -s LINKABLE=1 -s EXPORT_ALL=1 -g2 --separate-asm

all: $(SOURCES) $(OUTPUT)

$(OUTPUT): $(SOURCES)
	$(CC) $(SOURCES) $(LDFLAGS) -o $(OUT_TARGET)
	cp out.asm.js $(OUTPUT)
	rm $(OUT_AUX)
clean:
	rm $(OUTPUT) $(OUT_AUX)
