import React, {useEffect, useState } from 'react';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion";
import './progress.css';

import { progress } from "../constants";

import { SectionWrapper } from "../hoc";

const ProgressCard = ({name, description, progressBar}) => {
    return (
        <motion.div variants={slideIn("left", 'tween', 0.2, 1)} className='container p-4 rounded-5xl sm:w-[360px] w-full'>
            <div className='skill-box'>
                <span className='title'>{name}</span>
                <div className='skill-bar'>
                    <span className='skill-per' style={{width: `${progressBar}%`}}>
                        <span className='tooltip'>{progressBar}</span>
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

const Progress = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Progress</p>
                <h2 className={styles.sectionHeadText}>What I am Working On</h2>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-7">
                {progress.map((progress, index) => (
                    <ProgressCard 
                        index={index}
                        {...progress} 
                    />
                ))}
                </div>
        </>
    )
}

export default SectionWrapper(Progress,"progress");