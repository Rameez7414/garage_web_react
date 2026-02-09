import mechanicalHero from "../../assets/services-hero.jpg"
import { Helmet } from "react-helmet-async"
import PageTransition from "../../components/PageTransition"

function Mechanical() {
  return (
    <PageTransition>
    <div className="w-full bg-[#f4f6f8]">
      <Helmet>
  <title>Mechanical Repair Service | Amin Auto Garage</title>
  <meta
    name="description"
    content="Reliable mechanical repair services including engine, brake, suspension, and general servicing."
  />
</Helmet>
      {/* HERO */}
      <section
        className="relative h-[45vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${mechanicalHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Mechanical Repair Service
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Reliable mechanical repairs to keep your vehicle running smoothly and safely.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">
          Expert Mechanical Services at Amin Auto Garage
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Mechanical issues can affect your vehicle’s performance and safety.
          At Amin Auto Garage, we offer professional mechanical repair services
          using modern tools and experienced technicians to diagnose and fix
          problems efficiently.
        </p>

        {/* WHAT WE OFFER */}
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Engine diagnostics and repair
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Brake inspection and replacement
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Suspension and steering repair
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Clutch and transmission services
          </li>
        </ul>
      </section>
    </div>
    </PageTransition>
  )
}

export default Mechanical
