import { motion } from "framer-motion";
import { PenBox } from "lucide-react";
import foodic from "../assets/Foodic.png";
import ecom from "../assets/ecommerce.png";
import noteapp from "../assets/Noteapp.png";
const Projects = () => {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 pb-15 pt-22 relative z-10 bg-linear-to-bl from-slate-50 via-purple-50 to-green-100">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-purple-100"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <PenBox className="text-green-500 text-xl mr-3" />
          </motion.div>
          <span className="text-emerald-800 font-semibold">PROJECTS</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-r from-emerald-700 via-green-600 to-lime-500
 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: foodic,
                  title: "Foodic",
                  prjLink: "https://github.com/Faesalkhan/Foodic",
                },
                {
                  image: ecom,
                  title: "E-commerce",
                  prjLink: "https://trendy-shop-xi.vercel.app/",
                },
                {
                  image: noteapp,
                  title: "Notes",
                  prjLink: "https://notes-making-two.vercel.app/",
                },
              ].map((prj, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
                >
                  <motion.a href={prj.prjLink} target="_blank">
                    <img
                      src={prj.image}
                      alt={prj.title}
                      className="w-100 h-50 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4"
                    />
                  </motion.a>

                  <h3 className="text-xl font-semibold mb-2">{prj.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
