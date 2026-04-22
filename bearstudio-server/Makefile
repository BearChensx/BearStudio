.PHONY: run build test tidy

# macOS 15+ may require LC_UUID in Mach-O binaries; Go 1.24+ linker emits it.
# With GOTOOLCHAIN=auto, older local `go` installs can download this toolchain.
export GOTOOLCHAIN := auto

run:
	go run ./cmd/server

build:
	go build -o bin/server ./cmd/server

test:
	go test ./...

tidy:
	go mod tidy
