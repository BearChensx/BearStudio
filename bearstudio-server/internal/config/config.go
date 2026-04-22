package config

import "os"

// Config holds process-wide settings loaded from the environment.
type Config struct {
	HTTPAddr string
}

// Load reads configuration from environment variables with sensible defaults.
func Load() Config {
	addr := os.Getenv("HTTP_ADDR")
	if addr == "" {
		port := os.Getenv("PORT")
		if port == "" {
			port = "8080"
		}
		addr = ":" + port
	}
	return Config{HTTPAddr: addr}
}
