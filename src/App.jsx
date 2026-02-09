import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="prjs">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        {/* <Outlet /> */}
      </main>

      <footer>
        <motion.p className="text-center text-white font-semibold py-5 text-xl border-white/10 bg-linear-to-r from-emerald-700 via-green-600 to-lime-500">
          Copyright @ 2026 | Created by Faisal Khan
        </motion.p>
      </footer>
    </>
  );
}

export default App;
