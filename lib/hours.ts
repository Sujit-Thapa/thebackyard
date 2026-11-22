// Single source of truth for opening hours (24h clock, restaurant local time).
// Used by the "open now" badge and the JSON-LD structured data.
export const RESTAURANT_TZ = "America/New_York";

type Day = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";

export const openingHours: Record<Day, { open: number; close: number } | null> = {
  Mo: null,
  Tu: { open: 17, close: 22 },
  We: { open: 17, close: 22 },
  Th: { open: 17, close: 22 },
  Fr: { open: 17, close: 24 },
  Sa: { open: 17, close: 24 },
  Su: { open: 11, close: 21 },
};

const dayOrder: Day[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const fmt = (h: number) => {
  const hour = h % 24;
  const suffix = hour >= 12 ? "pm" : "am";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}${suffix}`;
};

/** Current open/closed status in the restaurant's timezone. */
export function getOpenStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: RESTAURANT_TZ,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const time = hour + minute / 60;
  const todayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);

  const today = openingHours[dayOrder[todayIndex]];
  if (today && time >= today.open && time < today.close) {
    return { open: true, label: `Open now · until ${fmt(today.close)}` };
  }

  // Find the next opening time (later today or a following day).
  for (let offset = 0; offset < 7; offset++) {
    const day = dayOrder[(todayIndex + offset) % 7];
    const hours = openingHours[day];
    if (!hours || (offset === 0 && time >= hours.open)) continue;
    const when = offset === 0 ? "today" : offset === 1 ? "tomorrow" : new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(dayDate(offset, now));
    return { open: false, label: `Closed · opens ${when} at ${fmt(hours.open)}` };
  }
  return { open: false, label: "Closed" };
}

function dayDate(offset: number, now: Date) {
  const d = new Date(now);
  d.setDate(d.getDate() + offset);
  return d;
}

/** schema.org openingHoursSpecification entries. */
export function openingHoursSpecification() {
  const names: Record<Day, string> = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };
  const pad = (h: number) => (h >= 24 ? "23:59" : `${String(h).padStart(2, "0")}:00`);
  return (Object.keys(openingHours) as Day[]).flatMap((day) => {
    const hours = openingHours[day];
    if (!hours) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${names[day]}`,
        opens: pad(hours.open),
        closes: pad(hours.close),
      },
    ];
  });
}
