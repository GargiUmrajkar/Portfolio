import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// AchievementCard component
const AchievementCard = ({ index, title, points }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <ul className="mt-2 text-secondary text-[14px] list-disc list-inside">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Achievements component
const Achievements = () => {
  return (
    <section id="achievements">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Honors & Awards</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below are some of my professional and academic achievements and honors
          that I have received over the years.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`achievement-${index}`}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Achievements, "achievements");
