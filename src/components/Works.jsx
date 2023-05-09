import React, { useState } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import {AiFillEye} from 'react-icons/ai';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import './Works.scss';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {

  const [active, setActive] = useState(false);

  return (
    <motion.div onClick={() => {
      setActive(!active);
      }} 
      onHoverStart={() => {
        if (!active) setActive(true);
      }}
      onHoverEnd={() => {
        if (active) setActive(false);
      }}
      whileHover={{ scale: 1.03}}
      variants={fadeIn("right", 'spring', index * 0.5, 0.75)}
      transition={{ ease: 'easeOut', duration: 0.1}}
    >
      <Tilt options={{max: 25, scale: 1, speed: 450}} 
      className='hover:bg-gray-900 p-4 rounded-2xl sm:w-[360px] w-full'>
        {/* This is for the image on the card */}
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m-3 card-image_hover">
            <div onClick={(e) =>{e.stopPropagation(); window.open(source_code_link, "_blank")}} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        {/* This is for the desciption */}
          <motion.div 
            className="mt-5" 
            initial={{opacity: 0, height: 0}} 
            animate={{ opacity: 1, height: active ? "auto" : 0}} 
            transition={{duration: 0.1, ease: "easeIn"}}
          >
              <h3 className="text-white font-bold text-[24px] mb-4">{name}</h3>
              {active && (
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
              )}
          </motion.div>
        {/* This is for the tags */}
        <div className="mt-10 flex flex-wrap gap-2">
           {tags.map((tag) =>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
           ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [filterWork, setFilterWork] = useState(projects);

  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    if(item === 'All'){
      setFilterWork(projects);
    } else {
      setFilterWork(projects.filter((project) => project.level === item));
    }
    console.log(filterWork);
  };
  return (
    <>
    {/* Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Personal Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* Tabs */}
      <div className="app__work-filter">
        {["All", "Beginner", "Intermediate", "Advanced"].map((item, index) => (
          <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`
          app__work-filter-item flex p-text
          ${activeFilter === item ? 'item-active' : ''} `}>
            {item}
          </div>
        ))}
      </div>
      {/* Project Cards */}
      <motion.div 
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className="app__work-portfolio">
        {filterWork.map((project, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={project.image} alt={project.name}/>
                <motion.div
                  whileHover={{opacity: [0, 1]}}
                  transition={{duration: 0.5, delayChildren: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                  className="app__work-hover flex">
                  <a href={project.source_code_link} target="_blank" rel='norefer'>
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      transition={{duration: 0.25}}
                      className="app__flex">
                      <AiFillEye />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="mt-2 text-secondary text-[14px]">
                <h3 className="text-white font-bold text-[24px] mb-4">{project.name}</h3>
                <p className="p-text" style={{marginTop: 10}}>{project.description}</p>
              </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) =>(
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                      {tag.name}
                    </p>
                    ))}
                </div>
            </div>
            ))}
        </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "work");


{/* // <ProjectCard
// key={`project-${index}`}
// index={index}
// {...project} 
// /> */}


{/* Subtext - not in use */}
  {/* <div className="w-full flex">
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
    </motion.p>
  </div> */}