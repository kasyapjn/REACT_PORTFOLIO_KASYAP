import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Kasyap_pro.png";
import { motion } from "framer-motion";
import resume from "../assets/KASYAPJAYAN_CV.pdf";  // Ensure you have your resume file in the assets folder

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 px-4 lg:px-10">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-14 text-6xl lg:text-7xl font-thin tracking-tight text-left lg:mt-16"
            >
              KASYAP JAYAN
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            
            {/* Resume Download Button placed between Full Stack Developer and Hero Content */}
            <motion.a
              variants={container(1)}
              initial="hidden"
              animate="visible"
              href={resume}  // Path to the resume file
              download="KASYAPJAYAN_CV.pdf"  // Custom file name when downloaded
              className="inline-block mt-6 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-slate-800 to-purple-600 rounded-md hover:from-purple-700 hover:to-slate-800 transition-all"
            >
              Download Resume
            </motion.a>

            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="max-w-md py-6 text-sm font-light tracking-tighter text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end items-center p-4">
          <motion.img
            variants={{
              hidden: { x: 100, opacity: 0 }, // Start from right (off-screen)
              visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 1 } }, // Move to its normal position
            }}
            initial="hidden"
            animate="visible"
            className="max-w-sm h-100 object-cover rounded-lg"
            src={profilePic}
            alt="KASYAP JAYAN"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
