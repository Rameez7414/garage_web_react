function GarageWebsite() {
  const whatsappNumber = "917045369196";
  const whatsappMessage =
    "Hello Amin Auto Garage, I want to book a service for my car.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <header className="bg-slate-900 text-white px-6 py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Amin Auto Garage
        </h1>
        <p className="mt-2 text-gray-300">
          Reliable • Affordable • Trusted
        </p>
      </header>

      {/* Services */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "General Car Servicing",
            "Engine Repair",
            "Brake & Suspension",
            "AC Repair",
            "Battery Replacement",
            "Wheel Alignment",
            "Denting",
            "Painting",
            "Polishing & Internal Cleaning"
          ].map((service) => (
            <div
              key={service}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact + Map */}
      <section className="bg-gray-100 px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">📍 Location: Airoli, Sector 9, India</p>
            <p className="mb-2">📞 Phone: +91 7045369196</p>
            <p className="mb-2">⏰ Mon – Sun: 9 AM – 8 PM</p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Book Service on WhatsApp
            </a>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
  <iframe
    title="Amin Auto Garage Location"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.121164512125!2d72.98474458248106!3d19.14617283584913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9156f8345d7%3A0xd69f2af1b808f033!2sAmin%20Auto%20Garage!5e0!3m2!1sen!2sin!4v1770234075177!5m2!1sen!2sin"
  />
</div>
<a
  href="https://maps.app.goo.gl/tF5EPJvDeScKSQRQ7"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-3 text-green-700 font-medium underline"
>
  Open in Google Maps
</a>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 text-center py-4">
        © 2026 Amin Auto Garage. All rights reserved.
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition font-semibold"
      >
        WhatsApp • BOOK NOW
      </a>

    </div>
  );
}

export default GarageWebsite;
