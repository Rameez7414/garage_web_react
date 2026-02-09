import dentingHero from "../../assets/services-hero.jpg"
import { Helmet } from "react-helmet-async"
import PageTransition from "../../components/PageTransition"

function Denting() {
  return (
    <PageTransition>
    <div className="w-full bg-[#f4f6f8]">
      <Helmet>
  <title>Car Denting Service | Amin Auto Garage</title>
  <meta
    name="description"
    content="Professional car denting services to restore your vehicle’s appearance using expert tools and techniques."
  />
</Helmet>
      {/* HERO */}
      <section
        className="relative h-[45vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${dentingHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Car Denting Service
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Professional dent removal solutions to restore your vehicle’s original look.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">
          Expert Car Denting at Amin Auto Garage
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Car dents can ruin the appearance of your vehicle. At Amin Auto Garage,
          we provide high-quality car denting services using professional tools
          and skilled technicians to remove dents safely and effectively.
        </p>

        {/* WHAT WE OFFER */}
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Small & large dent removal
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Accident damage repair
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Panel reshaping & alignment
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Paint-safe dent repair
          </li>
        </ul>
      </section>
    </div>
    </PageTransition>
  )
}

export default Denting
