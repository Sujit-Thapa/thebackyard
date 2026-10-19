import { FiMusic, FiSun, FiUsers } from "react-icons/fi";
import { GiCampfire, GiCandleLight, GiCook, GiWineGlass, GiBasket } from "react-icons/gi";

const faces = [
  { Icon: GiCampfire, label: "Open-flame kitchen" },
  { Icon: GiWineGlass, label: "Craft cocktail bar" },
  { Icon: GiCandleLight, label: "Candlelit garden" },
  { Icon: GiCook, label: "Chef's table" },
  { Icon: FiMusic, label: "Live music Fridays" },
  { Icon: GiBasket, label: "Local produce" },
];

const features = [
  { Icon: GiCampfire, title: "Cooked over real fire", text: "Oak and cherrywood flames give every plate its smoky backbone." },
  { Icon: FiSun, title: "Garden seating", text: "String lights, heaters and a canopy, so the backyard is open year round." },
  { Icon: FiUsers, title: "Private events", text: "Birthdays, rehearsals or team dinners for up to 60 guests." },
];

export default function ExperienceCube() {
  return (
    <section id="experience" className="section experience">
      <div className="container experience-grid">
        <div>
          <span className="eyebrow">The experience</span>
          <h2 className="section-title">More than dinner. It&apos;s an evening.</h2>
          <p className="section-sub" style={{ marginBottom: 36 }}>
            Every side of The Backyard is designed to make you stay one more round.
          </p>
          <ul className="feature-list">
            {features.map(({ Icon, title, text }) => (
              <li key={title}>
                <span className="f-icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="cube-scene" role="img" aria-label="Rotating cube showing the six sides of The Backyard experience">
          <div className="cube">
            {faces.map(({ Icon, label }) => (
              <div key={label} className="cube-face">
                <Icon aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
