"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import {
  GiChiliPepper,
  GiCheeseWedge,
  GiGarlic,
  GiLemon,
  GiMushroom,
  GiSteak,
  GiTomato,
  GiWineGlass,
} from "react-icons/gi";

const orbiting = [
  { Icon: GiTomato, color: "#e5533d" },
  { Icon: GiMushroom, color: "#d8b48a" },
  { Icon: GiChiliPepper, color: "#d9372b" },
  { Icon: GiLemon, color: "#f2d24b" },
  { Icon: GiGarlic, color: "#efe3cf" },
  { Icon: GiCheeseWedge, color: "#f0b93a" },
];

// Positions are on the plate surface (px from center); size is the icon height.
const dish = [
  { Icon: GiSteak, color: "#b5532f", x: "0px", y: "10px", size: "7rem" },
  { Icon: GiTomato, color: "#e5533d", x: "-70px", y: "40px", size: "2.6rem" },
  { Icon: GiMushroom, color: "#d8b48a", x: "72px", y: "34px", size: "2.8rem" },
];

const plateLayers = [0, 2, 4, 6, 8, 10, 12];

export default function Hero3D() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
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
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">
            <GiWineGlass aria-hidden="true" /> Wood-fired kitchen &amp; bar
          </span>
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
              <strong>12+</strong>
              <span>Years on the grill</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Guest rating</span>
            </div>
            <div>
              <strong>40</strong>
              <span>Seasonal dishes</span>
            </div>
          </div>
        </div>

        <div
          ref={sceneRef}
          className="scene"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
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
                  {dish.map(({ Icon, color, x, y, size }, i) => (
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
              <FiStar /> Chef&apos;s pick: Ember-grilled ribeye
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
