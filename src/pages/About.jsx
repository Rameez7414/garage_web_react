import aboutHero from "../assets/workshop-bg.jpg"
import { Helmet } from "react-helmet-async"
import PageTransition from "../components/PageTransition"

function About() {
  return (
    <PageTransition>
    <div className="w-full bg-[#f4f6f8]">
      <Helmet>
  <title>About Us | Amin Auto Garage</title>
  <meta
    name="description"
    content="Learn more about Amin Auto Garage, our experience, values, and commitment to quality automotive services."
  />
</Helmet>
      {/* HERO */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Amin Auto Garage
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Trusted automotive service built on quality, experience, and care.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">
          Who We Are
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Amin Auto Garage is a professional automotive service center providing
          denting, painting, mechanical repair, polishing, and interior cleaning
          services. With years of hands-on experience, we focus on delivering
          quality workmanship and customer satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Experienced Team</h3>
            <p className="mt-3 text-gray-500">
              Skilled technicians with real workshop experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Quality First</h3>
            <p className="mt-3 text-gray-500">
              We use trusted tools, materials, and proven methods.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Customer Trust</h3>
            <p className="mt-3 text-gray-500">
              Honest pricing and long-term customer relationships.
            </p>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}

export default About
