import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4 lg:px-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-3xl md:text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 lg:p-6"
        >
          <RiReactjsLine className="text-5xl md:text-6xl lg:text-7xl text-cyan-500"/>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 lg:p-6"
        >
          <FaBootstrap className="text-5xl md:text-6xl lg:text-7xl text-purple-800"/>
        </motion.div>

        
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 lg:p-6"
        >
          <FaGithub className="text-5xl md:text-6xl lg:text-7xl text-yellow-100"/>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 lg:p-6"
        >
          <FaGitAlt  className="text-5xl md:text-6xl lg:text-7xl text-orange-600"/>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 lg:p-6"
        >
          <FaPython className="text-5xl md:text-6xl lg:text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 lg:p-6"
        >
          <SiDjango className="text-5xl md:text-6xl lg:text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 lg:p-6"
        >
          <DiMysql className="text-5xl md:text-6xl lg:text-7xl text-sky-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 lg:p-6"
        >
          <DiJavascript className="text-5xl md:text-6xl lg:text-7xl text-yellow-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
