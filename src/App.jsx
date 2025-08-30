import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";


import AboutSection from "./components/AboutSection.jsx";
import Products from "./components/Products.jsx";
import ContactForm from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// If ProductCard isn’t used yet, comment it out to avoid lint errors
// import ProductCard from "./components/ProductCard.jsx";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  // fall back to system preference
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  return (
    <div
    className="relative min-h-screen bg-cover bg-zinc-200 dark:bg-black bg-center bg-no-repeat text-slate-900 dark:text-slate-100"
    style={{ backgroundImage: "url('/')" }}
  >
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
  <Hero/>
        <AboutSection/>
        <Products/>

        <ContactForm/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;
