"use client";

import { useEffect, useState } from "react";

type CountUpProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  delay?: number;
};

/** Animates a number up from 0 on mount. Server render shows the final value. */
export default function CountUp({ value, decimals = 0, suffix = "", duration = 1400, delay = 0 }: CountUpProps) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let start: number | null = null;
    setDisplay(0);

    const tick = (now: number) => {
      if (start === null) start = now + delay;
      const t = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration, delay]);

  return (
    <>
      {display.toFixed(decimals)}
      {suffix}
    </>
  );
}
