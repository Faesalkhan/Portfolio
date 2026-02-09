import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState([{ path: "", label: "" }]);
  const [showMenu, setShowMenu] = useState(false);

  const pathSetter = (pth) => {
    setActiveLink({ path: pth.path, label: pth.label });
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
        scrolled
          ? "bg-white backdrop-blur-xl shadow-lg border-b border-purple-100/50"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <motion.div className="hidden sm:flex items-center py-4 -mt-1">
            <p className="flex items-center text-2xl border rounded-2xl p-3 shadow-lg text-emerald-800 font-semibold h-[3.2rem] w-auto transition-all duration-300">
              Faisal Khan
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden flex items-center py-2"
          >
            <p className="flex items-center text-2xl border rounded-2xl p-3 shadow-lg text-emerald-800 font-semibold h-10 w-auto transition-all duration-300">
              Faisal Khan
            </p>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { path: "#", label: "HOME" },
              { path: "#about", label: "ABOUT" },
              { path: "#prjs", label: "PROJECTS" },
              { path: "#skills", label: "SKILLS" },
              { path: "#contact", label: "CONTACT" },
            ].map((link) => (
              <div key={link.path}>
                <motion.div whileHover={{ y: -2 }} className="relative group">
                  <a
                    href={link.path}
                    onClick={() => pathSetter(link)}
                    className={`font-semibold text-sm transition-all duration-300 ${
                      activeLink.path === link.path
                        ? "text-emerald-600"
                        : "text-gray-700 group-hover:text-emerald-600"
                    }`}
                  >
                    {link.label}
                  </a>
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-emerald-700 via-green-600 to-lime-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: activeLink.path === link.path ? "100%" : "0%",
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            ))}
          </nav>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-full hover:bg-white/50 transition-all duration-300 z-50"
            onClick={() => setShowMenu(true)}
          >
            <Menu size={24} className="text-green-500" />
          </motion.button>
        </div>
      </div>
      {
        <AnimatePresence>
          {showMenu && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                onClick={() => setShowMenu(false)}
                onTouchMove={(e) => e.preventDefault()}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-[70] p-6 overflow-y-auto touch-pan-y"
                  style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    height: "100vh",
                    width: "320px",
                    maxWidth: "85vw",
                  }}
                  onTouchMove={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowMenu(false)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                    >
                      <X size={24} className="text-gray-600" />
                    </motion.button>
                  </div>
                  <nav className="space-y-4">
                    {[
                      { path: "#", label: "HOME" },
                      { path: "#about", label: "ABOUT" },
                      { path: "#prjs", label: "PROJECTS" },
                      { path: "#skills", label: "SKILLS" },
                      { path: "#contact", label: "CONTACT" },
                    ].map((link) => (
                      <div key={link.path}>
                        <motion.div
                          whileHover={{ y: -2 }}
                          className="relative group"
                        >
                          <a
                            href={link.path}
                            onClick={() => pathSetter(link)}
                            className={`py-3 px-4 rounded-xl transition-all duration-300 ${
                              activeLink.path === link.path
                                ? "bg-linear-to-r from-emerald-700 via-green-600 to-lime-500 text-white"
                                : "text-gray-700 hover:bg-purple-50"
                            }`}
                          >
                            {link.label}
                          </a>
                        </motion.div>
                      </div>
                    ))}
                  </nav>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      }
    </motion.div>
  );
};
export default Navbar;
