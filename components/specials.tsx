import type { CSSProperties } from "react";
import { FiStar } from "react-icons/fi";
import { GiFullPizza, GiNoodles, GiSteak } from "react-icons/gi";
import TiltCard from "./tilt-card";

const specials = [
  { Icon: GiSteak, color: "#c2603a", badge: "Tonight", name: "Tomahawk for Two", text: "1.2kg bone-in ribeye, chimichurri, ember-roasted potatoes.", price: "$89" },
  { Icon: GiNoodles, color: "#f2c46b", badge: "New", name: "Lobster Cacio e Pepe", text: "Fresh tonnarelli, butter-poached lobster, cracked pepper.", price: "$34" },
  { Icon: GiFullPizza, color: "#e5533d", badge: "Weekend", name: "Hot Honey Pie", text: "Spicy salami, mozzarella, chili honey drizzle, basil.", price: "$24" },
];

export default function Specials() {
  return (
    <section id="specials" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Chef&apos;s specials</span>
          <h2 className="section-title">Plates that jump off the table.</h2>
          <p className="section-sub">Move your cursor across the cards. Limited servings every night.</p>
        </div>

        <div className="specials-grid">
          {specials.map(({ Icon, color, badge, name, text, price }) => (
            <TiltCard key={name} style={{ "--c": color } as CSSProperties}>
              <span className="tilt-badge">{badge}</span>
              <span className="tilt-icon" aria-hidden="true">
                <Icon />
              </span>
              <div className="tilt-body">
                <h3>{name}</h3>
                <p>{text}</p>
                <div className="tilt-meta">
                  <span className="price">{price}</span>
                  <span className="stars" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <FiStar key={i} fill="currentColor" aria-hidden="true" />
                    ))}
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
