"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { IconType } from "react-icons";
import { FiArrowRight, FiStar } from "react-icons/fi";
import {
  GiChiliPepper,
  GiCheeseWedge,
  GiFrenchFries,
  GiFullPizza,
  GiGarlic,
  GiHamburger,
  GiLemon,
  GiMushroom,
  GiNoodles,
  GiSteak,
  GiTomato,
  GiWineGlass,
} from "react-icons/gi";
import CountUp from "./count-up";
import OpenStatus from "./open-status";

const orbiting = [
  { Icon: GiTomato, color: "#e5533d" },
  { Icon: GiMushroom, color: "#d8b48a" },
  { Icon: GiChiliPepper, color: "#d9372b" },
  { Icon: GiLemon, color: "#f2d24b" },
  { Icon: GiGarlic, color: "#efe3cf" },
  { Icon: GiCheeseWedge, color: "#f0b93a" },
];

type PlateItem = { Icon: IconType; color: string; x: string; y: string; size: string };

// Item positions are on the plate surface (px from center); size is the icon height.
const dishes: { id: string; name: string; short: string; price: string; glow: string; Icon: IconType; items: PlateItem[] }[] = [
  {
    id: "ribeye",
    name: "Ember-grilled ribeye",
    short: "Ribeye",
    price: "$38",
    glow: "rgba(232, 162, 74, 0.2)",
    Icon: GiSteak,
    items: [
      { Icon: GiSteak, color: "#b5532f", x: "0px", y: "10px", size: "7rem" },
      { Icon: GiTomato, color: "#e5533d", x: "-70px", y: "40px", size: "2.6rem" },
      { Icon: GiMushroom, color: "#d8b48a", x: "72px", y: "34px", size: "2.8rem" },
    ],
  },
  {
    id: "pizza",
    name: "Wood-fired pizza",
    short: "Pizza",
    price: "$22",
    glow: "rgba(229, 83, 61, 0.22)",
    Icon: GiFullPizza,
    items: [
      { Icon: GiFullPizza, color: "#e5533d", x: "0px", y: "14px", size: "7rem" },
      { Icon: GiCheeseWedge, color: "#f0b93a", x: "-74px", y: "42px", size: "2.4rem" },
      { Icon: GiChiliPepper, color: "#d9372b", x: "74px", y: "38px", size: "2.4rem" },
    ],
  },
  {
    id: "pasta",
    name: "Hand-cut tagliatelle",
    short: "Pasta",
    price: "$24",
    glow: "rgba(242, 196, 107, 0.2)",
    Icon: GiNoodles,
    items: [
      { Icon: GiNoodles, color: "#f2c46b", x: "0px", y: "12px", size: "6.6rem" },
      { Icon: GiGarlic, color: "#efe3cf", x: "-72px", y: "40px", size: "2.4rem" },
      { Icon: GiCheeseWedge, color: "#f0b93a", x: "72px", y: "36px", size: "2.4rem" },
    ],
  },
  {
    id: "burger",
    name: "Backyard smash burger",
    short: "Burger",
    price: "$19",
    glow: "rgba(224, 161, 74, 0.22)",
    Icon: GiHamburger,
    items: [
      { Icon: GiHamburger, color: "#e0a14a", x: "0px", y: "12px", size: "6.6rem" },
      { Icon: GiFrenchFries, color: "#f2c94c", x: "-74px", y: "40px", size: "2.8rem" },
      { Icon: GiTomato, color: "#e5533d", x: "74px", y: "38px", size: "2.4rem" },
    ],
  },
];

const plateLayers = [0, 2, 4, 6, 8, 10, 12];
const AUTOPLAY_MS = 6000;

export default function Hero3D() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const dish = dishes[active];

  // Cycle dishes until the visitor picks one themselves.
  useEffect(() => {
    if (!autoplay || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % dishes.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoplay]);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = sceneRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--ry", `${x * 18}deg`);
    el.style.setProperty("--rx", `${-y * 14}deg`);
  };

  const handleLeave = () => {
    sceneRef.current?.style.setProperty("--ry", "0deg");
    sceneRef.current?.style.setProperty("--rx", "0deg");
  };

  return (
    <section id="top" className="hero" style={{ "--hero-glow": dish.glow } as CSSProperties}>
      <div className="container hero-grid">
        <div className="hero-intro">
          <span className="eyebrow">
            <GiWineGlass aria-hidden="true" /> Wood-fired kitchen &amp; bar
          </span>
          <div className="hero-status">
            <OpenStatus />
          </div>
          <h1 className="hero-title">
            Food you can
            <span>almost taste.</span>
          </h1>
          <p className="hero-copy">
            Seasonal plates cooked over open flame, handmade pasta, and cocktails worth lingering
            over. Pull up a chair in our backyard.
          </p>
          <div className="hero-actions">
            <a href="#reserve" className="btn btn-primary">
              Reserve a table <FiArrowRight aria-hidden="true" />
            </a>
            <a href="#menu" className="btn btn-ghost">
              View the menu
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>
                <CountUp value={12} suffix="+" delay={600} />
              </strong>
              <span>Years on the grill</span>
            </div>
            <div>
              <strong>
                <CountUp value={4.9} decimals={1} delay={700} />
              </strong>
              <span>Guest rating</span>
            </div>
            <div>
              <strong>
                <CountUp value={40} delay={800} />
              </strong>
              <span>Seasonal dishes</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div
            ref={sceneRef}
            className="scene"
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            aria-hidden="true"
          >
            <div className="scene-rig">
              <div className="plate-stage">
                <div className="plate-shadow" />
                <div className="plate">
                  {plateLayers.map((z) => (
                    <div
                      key={z}
                      className="plate-layer"
                      style={{ "--z": z, filter: `brightness(${0.55 + z * 0.03})` } as CSSProperties}
                    />
                  ))}
                  <div className="plate-top" />
                </div>
                <div className="dish">
                  <div className="dish-bob">
                    {/* Keyed so each new dish remounts and drops onto the plate */}
                    <div key={dish.id} className="dish-swap">
                      {dish.items.map(({ Icon, color, x, y, size }, i) => (
                        <div
                          key={i}
                          className="dish-item"
                          style={{ "--x": x, "--y": y, "--size": size, "--c": color } as CSSProperties}
                        >
                          <Icon />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="steam">
                {[0, 1, 2].map((i) => (
                  <i key={i} style={{ "--i": i } as CSSProperties} />
                ))}
              </div>

              <div className="orbit">
                <div className="orbit-ring">
                  {orbiting.map(({ Icon, color }, i) => (
                    <div key={i} className="orbit-item" style={{ "--i": i } as CSSProperties}>
                      <div className="orbit-chip" style={{ "--i": i, "--c": color } as CSSProperties}>
                        <Icon />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-badge">
                <FiStar /> Chef&apos;s pick: {dish.name} · {dish.price}
              </div>
            </div>
          </div>

          <div className="dish-picker" role="group" aria-label="Choose a dish to plate">
            {dishes.map(({ id, short, Icon }, i) => (
              <button
                key={id}
                type="button"
                aria-pressed={i === active}
                onClick={() => {
                  setActive(i);
                  setAutoplay(false);
                }}
              >
                <Icon aria-hidden="true" />
                {short}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            Now plating: {dish.name}, {dish.price}
          </p>
        </div>
      </div>

      <a href="#menu" className="scroll-cue" aria-label="Scroll to the menu">
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
