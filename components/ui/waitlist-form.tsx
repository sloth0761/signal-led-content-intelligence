"use client";

import { useState } from "react";
import posthog from "posthog-js";

export function WaitlistForm({ source }: { source: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      // Email already on waitlist — treat as success
      if (response.status === 409) {
        setSuccess(true);
        setEmail("");
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setSuccess(true);
      setEmail("");
      posthog.identify(email, { email });
      posthog.capture("waitlist_joined");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="glass mx-auto max-w-md rounded-2xl p-6 text-center">
        <p className="font-display text-xl font-semibold">You're on the list.</p>
        <p className="mt-2 font-body text-sm text-muted-foreground">
          We'll let you know when early access opens.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <form
        onSubmit={handleSubmit}
        className="glass flex max-w-md flex-col gap-3 rounded-2xl p-3 sm:flex-row"
      >
        <input
          type="email"
          required
          placeholder="founder@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="flex-1 bg-transparent px-4 py-3 font-body text-base text-foreground outline-none placeholder:text-muted-foreground disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-foreground px-6 py-3 font-ui text-base font-medium text-primary-foreground transition-transform duration-500 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Joining..." : "Get Early Access"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-center text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}