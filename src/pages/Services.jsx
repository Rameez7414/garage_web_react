import servicesHero from "../assets/services-hero.jpg"
import ServiceCard from "../components/ServiceCard"
import {
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"
import { Helmet } from "react-helmet-async"
import PageTransition from "../components/PageTransition"

function Services() {
  return (
    <PageTransition>
    <div className="w-full bg-[#f4f6f8]">
       <Helmet>
  <title>Amin Auto Garage | Premium Automotive Services</title>
  <meta
    name="description"
    content="Amin Auto Garage offers professional car denting, painting, mechanical repair, polishing, and interior cleaning services."
  />
</Helmet>
      {/* HERO */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${servicesHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Services
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Professional automotive services designed for performance,
            protection, and long-lasting quality.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ServiceCard
            title="Car Denting"
            description="Professional dent removal to restore your car’s appearance."
            link="/services/denting"
          />

          <ServiceCard
            title="Car Painting"
            description="High-quality painting and polishing services."
            link="/services/painting"
          />

          <ServiceCard
            title="Mechanical Repair"
            description="Engine, brake, suspension, and mechanical services."
            link="/services/mechanical"
          />

          <ServiceCard
            title="Polishing & Interior Cleaning"
            description="Complete car polishing and interior cleaning services."
            link="/services/polishing-interior"
          />
        </div>
      </section>
    </div>
    </PageTransition>
  )
}

export default Services
