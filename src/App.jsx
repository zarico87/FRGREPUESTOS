import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App({ dark, onToggleTheme }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Header dark={dark} onToggleTheme={onToggleTheme} />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/nosotros"   element={<Nosotros />} />
          <Route path="/productos"  element={<Products />} />
          <Route path="/servicios"  element={<Services />} />
          <Route path="/contacto"   element={<Contact />} />
          <Route path="/404"        element={<NotFound />} />
          <Route path="*"           element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}