package handlers

import (
	"encoding/json"
	"net/http"
	"time"
)

// Healthz responds with a minimal JSON payload for load balancers and probes.
func Healthz(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(map[string]any{
		"status":    "ok",
		"service":   "bearstudio-server",
		"timestamp": time.Now().UTC().Format(time.RFC3339Nano),
	})
}
