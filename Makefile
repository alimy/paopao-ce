GOFMT ?= gofmt -s -w
GOFILES := $(shell find . -name "*.go" -type f)

TARGET := paopao-api

.PHONY: default
default: build

.PHONY: build
build:
	CGO_ENABLED=0 go build -o $(TARGET) .

.PHONY: test
test:
	go test ./...

.PHONY: fmt
fmt:
	$(GOFMT) $(GOFILES)
