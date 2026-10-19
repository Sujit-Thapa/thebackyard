"use client";

import { useEffect, useState, type FormEvent } from "react";
import { FiCalendar, FiCheck, FiClock, FiMail, FiMapPin, FiPhone, FiUsers } from "react-icons/fi";

type Status = "idle" | "sending" | "sent";

export default function Reservation() {
  const [status, setStatus] = useState<Status>("idle");
  const [today, setToday] = useState("");

  // Computed on the client to avoid a server/client date mismatch.
  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (status !== "sent") return;
    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    // TODO: send to a real booking endpoint.
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 900);
  };

  return (
    <section id="reserve" className="section reserve">
      <div className="container reserve-grid">
        <div>
          <span className="eyebrow">Reservations</span>
          <h2 className="section-title">Save your seat by the fire.</h2>
          <p className="section-sub">
            Walk-ins are always welcome, but weekends fill fast. Book ahead and we&apos;ll have your
            table glowing.
          </p>
          <ul className="info-list">
            <li>
              <FiClock aria-hidden="true" />
              <span>
                <strong>Open hours</strong>
                Tue–Thu 5pm–10pm · Fri–Sat 5pm–12am · Sun 11am–9pm
              </span>
            </li>
            <li>
              <FiMapPin aria-hidden="true" />
              <span>
                <strong>Find us</strong>
                123 Backyard Lane, Downtown District
              </span>
            </li>
            <li>
              <FiPhone aria-hidden="true" />
              <span>
                <strong>Call</strong>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </span>
            </li>
            <li>
              <FiMail aria-hidden="true" />
              <span>
                <strong>Email</strong>
                <a href="mailto:hello@thebackyard.example">hello@thebackyard.example</a>
              </span>
            </li>
          </ul>
        </div>

        <div className="form-card">
          <form className="form-card-inner" onSubmit={handleSubmit}>
            <h3>Book a table</h3>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" required autoComplete="name" placeholder="Jamie Rivera" />
            </div>
            <div className="field">
              <label htmlFor="email">
                <FiMail aria-hidden="true" /> Email
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="date">
                  <FiCalendar aria-hidden="true" /> Date
                </label>
                <input id="date" name="date" type="date" required min={today || undefined} />
              </div>
              <div className="field">
                <label htmlFor="time">
                  <FiClock aria-hidden="true" /> Time
                </label>
                <select id="time" name="time" required defaultValue="">
                  <option value="" disabled>
                    Select a time
                  </option>
                  {["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="guests">
                <FiUsers aria-hidden="true" /> Guests
              </label>
              <select id="guests" name="guests" defaultValue="2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Booking..." : "Confirm reservation"}
            </button>
            {status === "sent" && (
              <p className="form-success" role="status">
                <FiCheck aria-hidden="true" /> Table requested! We&apos;ll email your confirmation shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
