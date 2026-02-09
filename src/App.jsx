import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Denting from "./pages/services/Denting"
import Painting from "./pages/services/Painting"
import Mechanical from "./pages/services/Mechanical"
import PolishingInteral from "./pages/services/PolishingInterior";
import PolishingInterior from "./pages/services/PolishingInterior";
import Contact from "./pages/Contact";
function App (){
        return(
          <BrowserRouter>
          <Navbar />
          <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/denting" element={<Denting />} />
          <Route path="/services/painting" element={<Painting />} />
          <Route path="/services/mechanical" element={<Mechanical />} />
          <Route path="/services/polishing-interior" element={<PolishingInterior />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
          </BrowserRouter>

        )
}
export default App