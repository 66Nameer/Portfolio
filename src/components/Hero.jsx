import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import "../index.css";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <div
        className={`${styles.paddingX} max-w-7xl absolute top-1/2 transform -translate-y-1/2`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
              {" "}
              Nameer
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-400`}>
            A <span className="underline decoration-amber-500">Software</span>{" "}
            and{" "}
            <span className="underline decoration-sky-500">Web Developer</span>.
            I have worked on various projects as a Computer Science student, and
            this{" "}
            <span className="underline decoration-violet-500">Portfolio</span>{" "}
            is a way of showcasing my skills
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>
      <div className="absolute w-full h-1/2 bottom-0"></div>
    </section>
  );
};

export default Hero;

{
  /* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
  <a href="#about">
    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
      <motion.div 
        animate={{
          y: [0, 24, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className='w-3 h-3 rounded-full bg-secondary mb-1'
      />
    </div>
  </a>
</div> */
}
