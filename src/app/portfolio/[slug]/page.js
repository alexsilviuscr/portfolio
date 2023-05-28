"use client";
import data from "./../data.json";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import SoMeButton from "@/components/Button/SoMeButton";
import { MdOutlinePublic } from "react-icons/md";
import Head from "next/head";
import { useEffect } from "react";
import NotFound from "./not-found";

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

export default function PortfolioDetailPage({ params }) {
  const { slug } = params;
  let item;

  try {
    item = data.find((item) => item.slug === slug);

    useEffect(() => {
      document.title = item.title; // update title
    }, [item.title]);
  } catch (error) {
    return <NotFound />; // Render NotFound component on error
  }

  return (
    <div
      className={`${styles.portfolioPage} flex min-h-screen flex-col items-center p-4 sm:p-24`}
    >
      <Head>
        <title>{item.title}</title>
      </Head>
      <div className="w-full max-w-6xl flex py-16 gap-16">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className="w-full max-w-6xl flex flex-col gap-16"
        >
          <Link className={styles.link} href="/">
            &lt; go back home
          </Link>
          {/* portfolio title & image */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center flex-col gap-0">
              <h1 className="designer text-center">{item.title}</h1>
              <p className={styles.subtitle}>{item.info}</p>
              {item.github && (
                <>
                  <div className="flex flex-row gap-4 items-center pt-4">
                    <SoMeButton showLinkedIn={false} githubUrl={item.github} />
                    <a href={item.github} target="_blank" className="btn">
                      View code on github
                    </a>
                  </div>
                  <div className="flex flex-row gap-4 items-center pt-4">
                    <a href={item.demo} target="_blank" className="btn">
                      <MdOutlinePublic size={35} />
                    </a>
                    <a href={item.demo} target="_blank" className="btn">
                      View live demo
                    </a>
                  </div>
                </>
              )}
            </div>
            <Image
              alt={item.title}
              src={item.image}
              width={750}
              height={422}
              priority
              quality={100}
              className={`rounded-sm ${styles.image}`}
            />
            {/* introduction section */}
          </div>
          {item.introduction.length > 0 && (
            <section className="flex flex-col gap-4">
              <h3 className={styles.portfolioTitle}>Introduction</h3>
              {item.introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          )}
          {/* features section */}
          {item.features && item.features.length > 0 && (
            <section className="flex flex-col gap-8">
              <h3 className={styles.portfolioTitle}>Features</h3>
              <ul className="list-disc list-inside flex flex-col gap-4">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="mr-2">&#8226;</span>
                    <p className="inline">{feature}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* technologies section */}
          {item.technologies && item.technologies.length > 0 && (
            <section className="flex flex-col gap-8">
              <h3 className={styles.portfolioTitle}>Technologies</h3>
              <ul className="list-disc list-inside flex flex-col gap-4">
                {item.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="mr-2">&#8226;</span>
                    <p className="inline">{tech}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* problem section */}
          {item.problem && item.problem.length > 0 && (
            <section className="flex flex-col gap-8">
              <h3 className={styles.portfolioTitle}>Problem</h3>
              {item.problem.map((problem, index) => (
                <p key={index}>{problem}</p>
              ))}
            </section>
          )}
          {/* insights section */}
          {item.insights && item.insights.length > 0 && (
            <section className="flex flex-col gap-8">
              <h3 className={styles.portfolioTitle}>Insights</h3>
              <ul className="list-disc list-inside flex flex-col gap-4">
                <li className="flex items-start">
                  <p className="inline">{item.insights[0]}</p>
                </li>
                {item.insights.slice(1).map((insight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    <p className="inline">{insight}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* solution section */}
          {item.solution && item.solution.length > 0 && (
            <section className="flex flex-col gap-8">
              <h3 className={styles.portfolioTitle}>Solution</h3>
              <ul className="list-disc list-inside flex flex-col gap-4">
                <li className="flex items-start">
                  <p className="inline">{item.solution[0]}</p>
                </li>
                {item.solution.slice(1).map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">&#8226;</span>
                    <p className="inline">{solution}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* design process section */}
          {item["design-process"] && item["design-process"].length > 0 && (
            <section className="flex flex-col gap-8">
              <h3 className={styles.portfolioTitle}>Design Artifacts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item["design-process"].map((url, index) => (
                  <Image
                    alt={`Design Process Visual for ${item.title}`}
                    src={url}
                    width={750}
                    height={422}
                    priority
                    quality={100}
                    blurDataURL={url}
                    placeholder="blur"
                    className={`rounded-sm ${styles.image}`}
                    key={index}
                  />
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  );
}
