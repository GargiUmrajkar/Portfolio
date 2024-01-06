import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profileImage } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section>
      <div
        id="about"
        style={{ position: "relative", top: "-100px", visibility: "hidden" }}
      ></div>
      <div className="flex md:flex-row flex-col items-center">
        <motion.div variants={textVariant()} className="flex-1">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]"
          >
            Hello! I'm a spirited software developer and Computer Science enthusiast with a profound passion for Artificial Intelligence,
             Machine Learning, and Web Development. With a Master's in Computer Science, my journey is propelled by the thrill of converting 
             complex data into impactful solutions across sectors like healthcare and automotive. My professional background includes 
             experiences with Fortune 500 companies, providing me with a solid foundation to lead initiatives and drive innovation. 
             I'm dedicated to making a meaningful difference through technology. Let's connect and embark on this journey of continuous 
             learning and innovation, collectively advancing the field of technology.
          </motion.p>
        </motion.div>
        <div className="flex-1 flex flex-col items-center mt-10 md:mt-0">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover"
          />
          <a
            href="https://docs.google.com/document/d/1GQA4QZZICTbYTfKtyF547CLgRF6r9G60GvvrM1Ou478/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-full text-center transition duration-300 ease-in-out hover:bg-purple-700"
          >
            View My Resume
          </a>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");