import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* BRAND */}
        <div>
          <h3 className="text-white text-xl font-semibold tracking-wide">
            Amin Auto Garage
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Premium automotive repair, detailing, and maintenance services
            delivered with quality and care.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">📞 +91 7045369196</p>
          <p className="mt-2 text-sm">📍 Airoli,NaviMumbai, India</p>
          <p className="mt-2 text-sm">⏰ Mon–Sun: 9am – 8pm<br />
                                          Friday:10am - 2pm
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 text-center py-4 text-sm">
        © {new Date().getFullYear()} Amin Auto Garage. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
