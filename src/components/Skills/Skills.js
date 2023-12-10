import styles from "./Skills.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const skillsData = [
  {
    imagePath: "/html.png",
    altText: "HTML Icon",
    skillName: "HTML",
  },
  {
    imagePath: "/css.png",
    altText: "CSS Icon",
    skillName: "CSS",
  },
  {
    imagePath: "/js.png",
    altText: "JS Icon",
    skillName: "JavaScript",
  },
  {
    imagePath: "/react.png",
    altText: "React Icon",
    skillName: "React",
  },
  {
    imagePath: "/ui.png",
    altText: "UX Design Icon",
    skillName: "UX Design",
  },
  {
    imagePath: "/usability.png",
    altText: "Usability Testing Icon",
    skillName: "Usability Testing",
  },
  {
    imagePath: "/responsive_design.png",
    altText: "Responsive Design Icon",
    skillName: "Responsive Design",
  },
  {
    imagePath: "/info_architecture.png",
    altText: "Information Architecture Icon",
    skillName: "Information Architecture",
  },
  {
    imagePath: "/web.png",
    altText: "Web Accessibility Icon",
    skillName: "Web Accessibility",
  },
];

const cardVariants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function SkillCard({ imagePath, altText, skillName }) {
  return (
    <div className={styles.skillCard}>
      <Image
        src={imagePath}
        height={50}
        width={50}
        className={styles.img}
        alt={altText}
        quality={100}
      />
      <p>{skillName}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <div className={styles.skills}>
      {skillsData.map((skill, index) => (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          key={skill.skillName}
        >
          <motion.div variants={cardVariants}>
            <SkillCard
              key={index}
              imagePath={skill.imagePath}
              altText={skill.altText}
              skillName={skill.skillName}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
