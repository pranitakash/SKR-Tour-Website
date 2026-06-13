import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { PopularYatras } from "./components/popular-yatras";
import { TourPackages } from "./components/tour-packages";
import { AboutUs } from "./components/about-us";
import { WhyChooseUs } from "./components/why-choose-us";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <PopularYatras />
      <TourPackages />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
