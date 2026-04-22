package handlers

import (
	"encoding/json"
	"net/http"
)

// HelloConnection responds with a fixed message for quick server–web wiring checks.
func HelloConnection(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(map[string]string{
		"message": "hello, server-web connection successful!",
	})
}
