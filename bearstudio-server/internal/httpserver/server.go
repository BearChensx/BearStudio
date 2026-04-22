package httpserver

import (
	"log/slog"
	"net/http"
	"time"

	"bearstudio/bearstudio-server/internal/config"
)

// New builds the HTTP server with routing and middleware.
func New(cfg config.Config, log *slog.Logger) *http.Server {
	r := newRouter(log)

	return &http.Server{
		Addr:              cfg.HTTPAddr,
		Handler:           r,
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       15 * time.Second,
		WriteTimeout:      30 * time.Second,
		IdleTimeout:       60 * time.Second,
	}
}
