import { GiChiliPepper } from "react-icons/gi";
import ExperienceCube from "../components/experience-cube";
import Footer from "../components/footer";
import Hero3D from "../components/hero-3d";
import Menu3D from "../components/menu-3d";
import Navbar from "../components/navbar";
import Reservation from "../components/reservation";
import Specials from "../components/specials";

const marquee = ["Wood-fired", "Handmade pasta", "Craft cocktails", "Garden seating", "Live music", "Local farms"];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero3D />
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <span key={copy}>
                {marquee.map((word) => (
                  <span key={word}>
                    {word} <GiChiliPepper />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <Menu3D />
        <ExperienceCube />
        <Specials />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
