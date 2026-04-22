"use client";

import { useEffect, useState } from "react";

type HelloResponse = { message?: string };

const defaultBase = "http://127.0.0.1:8080";

export function ConnectionStatus() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const base =
      process.env.NEXT_PUBLIC_SERVER_URL?.replace(/\/$/, "") ?? defaultBase;
    const url = `${base}/hello`;

    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = (await res.json()) as HelloResponse;
        if (!cancelled) {
          setMessage(data.message ?? JSON.stringify(data));
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Request failed");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mt-8 w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Server link check
      </p>
      {loading ? (
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">Loading…</p>
      ) : error ? (
        <p className="mt-3 text-red-600 dark:text-red-400">{error}</p>
      ) : (
        <p className="mt-3 text-lg text-zinc-900 dark:text-zinc-50">
          {message}
        </p>
      )}
    </div>
  );
}
