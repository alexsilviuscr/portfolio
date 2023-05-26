import styles from "./Portfolio.module.scss";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from "../Button/Button";

const portfolio = [
  {
    name: "BariCare App",
    category: ["all", "frontend"],
    image: "/portfolio/baricare_app_case.jpg",
    info: "HTML, CSS, Tailwind, JavaScript, React, Next.js, MongoDB, Node.js, Heroku, Framer Motion",
    slug: "baricare-app"
  },
  {
    name: "Portfolio",
    category: ["all", "frontend"],
    image: "/portfolio/portfolio_case.jpg",
    info: "HTML, CSS, Tailwind, JavaScript, React, Next.js, Framer Motion",
    slug: "portfolio"
  },
  {
    name: "BariCare Website",
    category: ["all", "frontend"],
    image: "/portfolio/baricare_web_case.jpg",
    info: "HTML, CSS, JavaScript",
    slug: "baricare-web"
  },
  {
    name: "Innovisor",
    category: ["all", "frontend", "ux-ui"],
    image: "/portfolio/innovisor_case.jpg",
    info: "HTML, CSS, JavaScript, Wordpress, Adobe XD/Figma",
    slug: "innovisor"
  },
  {
    name: "Rice",
    category: ["all", "ux-ui"],
    image: "/portfolio/rice_case.jpg",
    info: "UX/UI, Usability Testing, User Research, Adobe XD/Figma, Proto.io",
    slug: "rice"
  },
  {
    name: "The Usability of E-Learning Platforms",
    category: ["all", "ux-ui"],
    image: "/portfolio/sdu_case.jpg",
    info: "UX/UI, Usability Testing, User Research",
    slug: "usability-elearning"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    const filteredProjects = portfolio.filter(p =>
      p.category.includes(filter)
    );
    setProjects(filteredProjects);
  }, [filter]);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  return (
    <div className={styles.portfolio}>

        <div className={styles.portfolioLabels}>
          <a
            href="/#"
            className={filter === "all" ? `${styles.active}` : ""}
            onClick={(e) => {
              e.preventDefault();
              handleFilterClick("all");
            }}
          >
            All
          </a>
          <a
            href="/#"
            className={filter === "frontend" ? `${styles.active}` : ""}
            onClick={(e) => {
              e.preventDefault();
              handleFilterClick("frontend");
            }}
          >
            Frontend
          </a>
          
          <a
            href="/#"
            className={filter === "ux-ui" ? `${styles.active}` : ""}
            onClick={(e) => {
              e.preventDefault();
              handleFilterClick("ux-ui");
            }}
          >
            UX/UI
          </a>
        </div>

        <div className={`${styles.portfolioContainer}`}>
          {projects.map(item => (
            <div className={`${styles.portfolioItem} flex flex-col gap-8`} key={item.name}>
              <div className={`${styles.image}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={337}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={`${styles.portfolioDetails} flex flex-col justify-center gap-4 p-4`}>
                <h3>{item.name}</h3>
                <p>{item.info}</p>
                <Button href={`/portfolio/${item.slug}`}>Read More</Button>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
}
