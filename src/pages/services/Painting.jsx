import paintingHero from "../../assets/services-hero.jpg"
import { Helmet } from "react-helmet-async"
import PageTransition from "../../components/PageTransition"

function Painting() {
  return (
    <PageTransition>
    <div className="w-full bg-[#f4f6f8]">
      <Helmet>
  <title>Car Painting Service | Amin Auto Garage</title>
  <meta
    name="description"
    content="High-quality car painting and repainting services for a flawless and long-lasting finish."
  />
</Helmet>
      {/* HERO */}
      <section
        className="relative h-[45vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${paintingHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Car Painting Service
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Premium car painting solutions for a flawless and long-lasting finish.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">
          Professional Car Painting at Amin Auto Garage
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          A high-quality paint job enhances your car’s appearance and protects it
          from environmental damage. At Amin Auto Garage, we provide expert car
          painting services using premium paints, modern techniques, and skilled
          technicians.
        </p>

        {/* WHAT WE OFFER */}
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Full body and panel painting
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Scratch and paint touch-up
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Color matching and repainting
          </li>
          <li className="bg-white p-6 rounded-2xl shadow-sm">
            ✔ Clear coat and paint protection
          </li>
        </ul>
      </section>
    </div>
    </PageTransition>
  )
}

export default Painting
