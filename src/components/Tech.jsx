import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <section id="tech">
      {/* Invisible anchor element right before the heading */}
      <div
        id="tech-anchor"
        style={{ position: "relative", top: "-100px", visibility: "hidden" }}
      ></div>

      <motion.div variants={textVariant()} className="text-center">
        <motion.p variants={fadeIn} className={`${styles.sectionSubText}`}>
          Technologies
        </motion.p>
        <motion.h2 variants={fadeIn} className={`${styles.sectionHeadText}`}>
          Technical Skills
        </motion.h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
