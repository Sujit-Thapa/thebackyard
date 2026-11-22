import { GiChiliPepper } from "react-icons/gi";
import ExperienceCube from "../components/experience-cube";
import Footer from "../components/footer";
import Hero3D from "../components/hero-3d";
import Menu3D from "../components/menu-3d";
import Navbar from "../components/navbar";
import Reservation from "../components/reservation";
import ScrollEffects from "../components/scroll-effects";
import Specials from "../components/specials";
import Testimonials from "../components/testimonials";
import { openingHoursSpecification } from "../lib/hours";

const marquee = ["Wood-fired", "Handmade pasta", "Craft cocktails", "Garden seating", "Live music", "Local farms"];

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Backyard Kitchen & Bar",
  description: "Wood-fired neighborhood restaurant serving seasonal plates, handmade pasta and craft cocktails.",
  servesCuisine: ["American", "Italian", "Grill"],
  priceRange: "$$",
  telephone: "+1-555-123-4567",
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Backyard Lane",
    addressLocality: "Downtown District",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1200" },
  openingHoursSpecification: openingHoursSpecification(),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
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
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
