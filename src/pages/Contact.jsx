import contactHero from "../assets/garage-contact.jpg"
import { Helmet } from "react-helmet-async"
import PageTransition from "../components/PageTransition"

function Contact() {
  return (
    <PageTransition>
    <div className="w-full bg-[#f4f6f8]">
      <Helmet>
  <title>Contact Us | Amin Auto Garage</title>
  <meta
    name="description"
    content="Contact Amin Auto Garage to book professional car repair, denting, painting, and detailing services."
  />
</Helmet>
      {/* HERO */}
      <section
        className="relative h-[45vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Get in touch with Amin Auto Garage for professional auto care services.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      
      
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Get in Touch
        </h2>

        <p className="mt-4 text-gray-600">
          Call us or message us on WhatsApp to book your service today.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
          <a
            href="tel:+91-7045369196"
            className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917045369196"
            className="border border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            WhatsApp
          </a>
          
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
  <div className="rounded-2xl overflow-hidden shadow-lg">
    <iframe
      title="Amin Auto Garage Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.121047715372!2d72.98704057425357!3d19.146177949767548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9156f8345d7%3A0xd69f2af1b808f033!2sAmin%20Auto%20Garage!5e0!3m2!1sen!2sin!4v1770654414048!5m2!1sen!2sin"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

      </section>
      
    </div>
    </PageTransition>
  )
}

export default Contact
