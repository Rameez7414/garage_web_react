import polishingHero from "../../assets/services-hero.jpg"
import { Helmet } from "react-helmet-async"
function PolishingInterior() {
  return (
    <div className="w-full bg-[#f4f6f8]">
      <Helmet>
  <title>Polishing & Interior Cleaning | Amin Auto Garage</title>
  <meta
    name="description"
    content="Professional car polishing and interior cleaning services to keep your vehicle clean, shiny, and comfortable."
  />
</Helmet>
      {/* HERO */}
      <section
        className="relative h-[45vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${polishingHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Polishing & Interior Cleaning
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Restore your car’s shine, cleanliness, and comfort with professional detailing.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">
          Premium Polishing & Interior Care
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Polishing and interior cleanliness play an important role in maintaining
          your car’s appearance and comfort. At Amin Auto Garage, we offer
          professional polishing and interior cleaning services using quality
          products and expert techniques.
        </p>

        {/* WHAT WE OFFER */}
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Exterior car polishing and shine restoration
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Interior deep cleaning and vacuuming
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Dashboard, seats, and upholstery cleaning
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Odor removal and detailing packages
          </li>
        </ul>
      </section>
    </div>
  )
}

export default PolishingInterior
