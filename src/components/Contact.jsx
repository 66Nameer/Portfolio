import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import {FaInstagram, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa';
import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";
import './contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10`}>
      <motion.div variants={slideIn("left", 'tween', 0.2, 1)} className="flex-[0.50] bg-black-100 p-8 rounded-2xl" >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>Let's <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-purple-600'>Connect!</span></h3>
        <div className="wrapper">
          <div className="button">
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span>LinkedIn</span>
          </div>
          <div className="button">
            <div className="icon">
              <i className="fab fa-google"></i>
            </div>
            <span>Gmail</span>
          </div>
          <div className="button">
            <div className="icon instagram">
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </div>
          <div className="button">
            <div className="icon github">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");