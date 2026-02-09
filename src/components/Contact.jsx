import { motion } from "framer-motion";
import {
  Home,
  LucideContact,
  LucideContact2,
  Mail,
  PhoneIcon,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-15 pt-22 relative z-10 bg-linear-to-tl from-slate-50 via-purple-50 to-green-100">
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
            <LucideContact className="text-green-500 text-xl mr-3" />
          </motion.div>
          <span className="text-emerald-800 font-semibold">CONTACT</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden text-center my-4"
        >
          <div className="grid grid-cols-1">
            <div className="flex">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-700 via-green-600 to-lime-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg me-3">
                <Home />
              </div>
              <div className="flex flex-col items-start ">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adress</h3>
                <p className="text-gray-600">Aurangabad , Maharashtra</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden text-center mb-3"
        >
          <div className="grid grid-cols-1">
            <div className="flex">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-700 via-green-600 to-lime-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg me-3">
                <Mail />
              </div>
              <div className="flex flex-col items-start ">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <a
                  className="text-gray-600"
                  href="mailto:pathanf9545@gmail.com"
                >
                  pathanf9545@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden text-center"
        >
          <div className="grid grid-cols-1">
            <div className="flex">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-700 via-green-600 to-lime-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg me-3">
                <PhoneIcon />
              </div>
              <div className="flex flex-col items-start ">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <a className="text-gray-600" href="tel:+919545299527">
                  9545299527
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
