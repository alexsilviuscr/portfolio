import styles from "./Tools.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const toolsData = [
  {
    imagePath: "/vsc.png",
    altText: "Visual Studio Code Icon",
    toolName: "Visual Studio Code",
  },
  {
    imagePath: "/git.svg",
    altText: "Git Icon",
    toolName: "Git",
  },
  {
    imagePath: "/nextjs_white.png",
    altText: "Next.js Icon",
    toolName: "Next.js",
  },
  {
    imagePath: "/figma.png",
    altText: "Figma Icon",
    toolName: "Figma",
  },
  {
    imagePath: "/miro.png",
    altText: "Miro Icon",
    toolName: "Miro",
  },
  {
    imagePath: "/adobe.png",
    altText: "Adobe Creative Suite Icon",
    toolName: "Adobe Creative Suite",
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

function ToolCard({ imagePath, altText, toolName }) {
  return (
    <div className={styles.toolCard}>
      <Image
        src={imagePath}
        height={50}
        width={50}
        className={styles.img}
        alt={altText}
        quality={100}
      />
      <p>{toolName}</p>
    </div>
  );
}

export default function Tools() {
  return (
    <div className={styles.tools}>
      {toolsData.map((tool, index) => (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          key={tool.toolName}
        >
          <motion.div variants={cardVariants}>
            <ToolCard
              key={index}
              imagePath={tool.imagePath}
              altText={tool.altText}
              toolName={tool.toolName}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
