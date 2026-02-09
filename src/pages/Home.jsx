import { Link } from "react-router-dom"
import heroImage from "../assets/hero-garage.jpg"
import workshopImage from "../assets/workshop-bg.jpg"
import { Helmet } from "react-helmet-async"
import PageTransition from "../components/PageTransition"

function Home() {
  return (
    <PageTransition>
    <div className="w-full bg-[#f4f6f8]">
<Helmet>
  <title>Amin Auto Garage | Premium Automotive Services</title>
  <meta
    name="description"
    content="Professional car denting, painting, mechanical repair, polishing, and interior cleaning services."
  />

  {/* Open Graph */}
  <meta property="og:title" content="Amin Auto Garage" />
  <meta
    property="og:description"
    content="Premium automotive repair, denting, painting, and detailing services."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://aminautogarage.in" />
  <meta property="og:image" content="https://aminautogarage.in/og-image.jpg" />
</Helmet>

      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Premium Automotive Care
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Denting, painting, mechanical repair, polishing, and interior cleaning
            services delivered with precision and care.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="tel:+919999999999"
              className="bg-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Call Now
            </a>

            <Link
              to="/services"
              className="border border-white/30 px-8 py-4 rounded-full backdrop-blur hover:bg-white/10 transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Services
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Professional auto services designed to keep your vehicle looking great
          and running smoothly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">
          {[
            {
              title: "Car Denting",
              desc: "Expert dent removal and accident repair.",
              link: "/services/denting",
            },
            {
              title: "Car Painting",
              desc: "High-quality painting and polishing services.",
              link: "/services/painting",
            },
            {
              title: "Mechanical Repair",
              desc: "Engine, brake, and suspension services.",
              link: "/services/mechanical",
            },
            {
              title: "Polishing & Interior",
              desc: "Complete car polishing and interior cleaning.",
              link: "/services/polishing-interior",
            },
          ].map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group bg-white/90 backdrop-blur rounded-2xl p-8
              shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
              transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold group-hover:text-red-600 transition">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-500">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="relative py-24 px-6 text-white"
        style={{
          backgroundImage: `url(${workshopImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Amin Auto Garage?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[
              {
                title: "Experienced Technicians",
                desc: "Years of hands-on experience with all vehicle types.",
              },
              {
                title: "Premium Quality Work",
                desc: "We use trusted tools, materials, and techniques.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden charges — honest and fair pricing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Give Your Car the Care It Deserves?
        </h2>

        <p className="mt-6 max-w-xl mx-auto">
          Get in touch with Amin Auto Garage today and experience professional
          auto care services you can trust.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 bg-white text-red-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
    </PageTransition>
  )
}

export default Home
