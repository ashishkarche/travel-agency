import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Contact from "./pages/Contact";
import GlassLoader from "./components/Loader"; // optional loader

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s demo
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="font-inter bg-white text-black min-h-screen flex flex-col">
        <Header />
        <ScrollToTop />

        {/* Loader Overlay */}
        {loading && <GlassLoader />}

        {/* Main content with responsive spacing */}
        <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-[80px] sm:mt-[90px] lg:mt-[100px] transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
