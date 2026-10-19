"use client";

import { useState, type CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  GiBowlOfRice,
  GiCakeSlice,
  GiCoffeeCup,
  GiCupcake,
  GiFrenchFries,
  GiFullPizza,
  GiHamburger,
  GiMeal,
  GiNoodles,
  GiShrimp,
  GiSteak,
  GiSushis,
  GiWineGlass,
} from "react-icons/gi";

type Dish = {
  name: string;
  desc: string;
  price: string;
  tags: string[];
  Icon: IconType;
  color: string;
};

const categories: { id: string; label: string; Icon: IconType; dishes: Dish[] }[] = [
  {
    id: "mains",
    label: "Mains",
    Icon: GiMeal,
    dishes: [
      { name: "Ember Ribeye", desc: "Dry-aged 45 days, charred over oak with bone-marrow butter.", price: "$38", tags: ["GF", "Signature"], Icon: GiSteak, color: "#c2603a" },
      { name: "Backyard Burger", desc: "Double smash patty, aged cheddar, pickles, brioche bun.", price: "$19", tags: ["House fav"], Icon: GiHamburger, color: "#e0a14a" },
      { name: "Fire Pizza", desc: "72-hour dough, San Marzano, fior di latte, basil.", price: "$22", tags: ["Veg"], Icon: GiFullPizza, color: "#e5533d" },
      { name: "Garlic Shrimp", desc: "Tiger prawns, chili-garlic oil, grilled sourdough.", price: "$26", tags: ["Spicy"], Icon: GiShrimp, color: "#f08a5d" },
    ],
  },
  {
    id: "bowls",
    label: "Bowls & Pasta",
    Icon: GiNoodles,
    dishes: [
      { name: "Hand-cut Tagliatelle", desc: "Slow-braised beef ragù, parmigiano, gremolata.", price: "$24", tags: ["Handmade"], Icon: GiNoodles, color: "#f2c46b" },
      { name: "Smoked Rice Bowl", desc: "Charred greens, miso glaze, soft egg, sesame.", price: "$18", tags: ["Veg"], Icon: GiBowlOfRice, color: "#e8dcc7" },
      { name: "Fire Roll Platter", desc: "Torched salmon, yuzu kosho, crispy shallot.", price: "$27", tags: ["Chef's pick"], Icon: GiSushis, color: "#f0805a" },
      { name: "Truffle Fries", desc: "Triple-cooked, truffle salt, parmesan snow.", price: "$11", tags: ["Share"], Icon: GiFrenchFries, color: "#f2c94c" },
    ],
  },
  {
    id: "sweets",
    label: "Desserts & Drinks",
    Icon: GiCakeSlice,
    dishes: [
      { name: "Burnt Basque Cake", desc: "Caramelized top, creamy center, berry compote.", price: "$12", tags: ["GF"], Icon: GiCakeSlice, color: "#e9b872" },
      { name: "Campfire Cupcake", desc: "Toasted marshmallow, dark chocolate, graham crumb.", price: "$9", tags: ["Sweet"], Icon: GiCupcake, color: "#e48aa8" },
      { name: "Smoked Old Fashioned", desc: "Bourbon, demerara, orange, cherrywood smoke.", price: "$16", tags: ["21+"], Icon: GiWineGlass, color: "#d9572b" },
      { name: "Espresso Tonic", desc: "Single-origin espresso over citrus tonic.", price: "$7", tags: ["Zero proof"], Icon: GiCoffeeCup, color: "#c79a6b" },
    ],
  },
];

export default function Menu3D() {
  const [active, setActive] = useState(categories[0].id);
  const [flipped, setFlipped] = useState<string | null>(null);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section id="menu" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our menu</span>
          <h2 className="section-title">Flip a plate, find your favorite.</h2>
          <p className="section-sub">
            Hover or tap any dish to turn it over and see what&apos;s inside.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Menu categories">
          {categories.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={active === id}
              aria-controls="menu-panel"
              className="tab"
              onClick={() => {
                setActive(id);
                setFlipped(null);
              }}
            >
              <Icon aria-hidden="true" /> {label}
            </button>
          ))}
        </div>

        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="menu-grid">
          {current.dishes.map(({ name, desc, price, tags, Icon, color }, i) => (
            <button
              key={`${active}-${name}`}
              type="button"
              className="flip"
              aria-pressed={flipped === name}
              aria-label={`${name}, ${price}. ${desc}`}
              onClick={() => setFlipped((f) => (f === name ? null : name))}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="flip-inner">
                <span
                  className="flip-face flip-front"
                  style={{ "--c": color, "--glow": `${color}33` } as CSSProperties}
                >
                  <span className="flip-icon">
                    <Icon />
                  </span>
                  <span className="flip-title">{name}</span>
                  <span className="price">{price}</span>
                  <span className="flip-hint">Tap to flip</span>
                </span>
                <span className="flip-face flip-back">
                  <span>
                    <span className="flip-title">{name}</span>
                    <p>{desc}</p>
                  </span>
                  <span className="flip-tags">
                    {tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                  <span className="price">{price}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
