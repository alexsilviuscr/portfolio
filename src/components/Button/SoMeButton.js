import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./SoMeButton.module.scss";

const SoMeButtonLink = ({ href, icon: Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.someButtonLink} flex flex-row gap-4 items-center`}
    >
      <Icon />
    </a>
  );
};

const SoMeButton = ({
  linkedinUrl = "https://www.linkedin.com/in/alexscripcariuc/",
  githubUrl = "https://github.com/alexsilviuscr",
  showLinkedIn = true,
  showGithub = true,
}) => {
  const hasCustomUrl = (url) =>
    typeof url === "string" && url.trim().length > 0;

  return (
    <div className={`${styles.urlDiv} flex flex-row gap-8`}>
      {showLinkedIn && hasCustomUrl(linkedinUrl) && (
        <SoMeButtonLink href={linkedinUrl} icon={FaLinkedin} />
      )}
      {showGithub && hasCustomUrl(githubUrl) && (
        <SoMeButtonLink href={githubUrl} icon={FaGithub} />
      )}
    </div>
  );
};

export default SoMeButton;
