import { motion } from 'framer-motion';
import React from 'react';
import Tilt from 'react-tilt';

import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

// 新建一个 ServiceCard 组件
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-opacity-50 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

// About 组件
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]">
        Hi there! I&apos;m a Python Developer with experience in frameworks like FastAPI and Flask. My skill set also
        extends to web scraping with Scrapy, data analysis with Pandas, and big data processing with PySpark. I&apos;m a
        beginner in React to create web interfaces with low-code components, aspiring to become a Full Stack Developer.
        <a href="#contact" className="text-[#f0ba9d] text-[18px]">
          <p>Feel free to connect and discuss with me.</p>
        </a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {/* 使用 ServiceCard 组件 */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
