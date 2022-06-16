package main

import (
	"context"
	"log"

	"github.com/rocboss/paopao-ce/web"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

func main() {

	app := &App{}

	err := wails.Run(&options.App{
		Title:      "泡泡｜一个清新文艺的微社区",
		Width:      1080,
		Height:     800,
		Assets:     web.Files,
		OnStartup:  app.startup,
		OnShutdown: app.shutdown,
		Bind: []interface{}{
			app,
		},
	})
	if err != nil {
		log.Fatal(err)
	}
}

type App struct {
	ctx context.Context
}

func (b *App) startup(ctx context.Context) {
	b.ctx = ctx
}

func (b *App) shutdown(ctx context.Context) {}
