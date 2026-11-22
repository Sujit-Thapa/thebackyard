"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "../lib/hours";

export default function OpenStatus() {
  const [status, setStatus] = useState<ReturnType<typeof getOpenStatus> | null>(null);

  // Computed on the client only, and refreshed every minute.
  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);

  if (!status) return null;

  return (
    <span className={`open-status ${status.open ? "is-open" : "is-closed"}`} role="status">
      <i aria-hidden="true" />
      {status.label}
    </span>
  );
}
