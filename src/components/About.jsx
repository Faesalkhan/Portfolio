import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-7xl min-w-[380gpx] sm:min-w-0 mx-auto px-4 sm:px-6 lg:px-8 pb-15 pt-22 relative z-10 bg-gradient-to-br from-slate-50 via-purple-50 to-green-100">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-purple-100"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <User className="text-green-500 text-xl mr-3" />
          </motion.div>
          <span className="text-emerald-800 font-semibold">ABOUT ME</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          I'm Faisal Khan and
          <span className="bg-linear-to-r from-emerald-700 via-green-600 to-lime-500 bg-clip-text text-transparent">
            &nbsp;I'm a Frontend Developer.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          My journey in web development has been driven by a personal passion to
          learn. I have independently acquired a diverse skill set and have a
          strong passion for building engaging digital experiences.
        </motion.p>
      </div>
    </div>
  );
};
export default About;
