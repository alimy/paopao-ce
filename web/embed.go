//go:build embed
// +build embed

package web

import (
	"embed"
	"io/fs"
	"net/http"
)

//go:embed dist/*
var Files embed.FS

// NewFileSystem get an embed static assets http.FileSystem instance.
func NewFileSystem() http.FileSystem {
	subfs, _ := fs.Sub(Files, "dist")
	return http.FS(subfs)
}
