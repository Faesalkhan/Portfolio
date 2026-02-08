import { motion } from "framer-motion";
import { LucideClipboardPen } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-15 pt-22 relative z-10 bg-linear-to-br from-slate-50 via-purple-50 to-green-100">
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
            <LucideClipboardPen className="text-green-500 text-xl mr-3" />
          </motion.div>
          <span className="text-emerald-800 font-semibold">SKILLS</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="bg-linear-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-lg border border-indigo-100">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col items-center p-6 rounded-2xl text-center bg-gradient-to-br shadow-lg`}
                >
                  <img src={skill.icon} alt={skill.name} width="50" />
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-600 mb-10 mx-auto pt-5 leading-relaxed"
            >
              I'm a Frontend Developer with a passion for learning. I am highly
              motivated and constantly seeking to improve my skills. I have good
              knowledge of JavaScript, React JS, Redux Toolkit, Typescript, Next
              JS, Node JS, Express, MongoDB, HTML5, CSS3, Bootstrap, Tailwind and
              Github.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Skills;
