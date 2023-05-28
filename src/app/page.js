"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import SoMeButton from "@/components/Button/SoMeButton";
import Skills from "@/components/Skills/Skills";
import Tools from "@/components/Tools/Tools";
import Timeline from "@/components/Timeline/Timeline";
import Testimonials from "@/components/Testimonials/Testimonials";
import Portfolio from "@/components/Portfolio/Portfolio";
import ContactForm from "@/components/ContactForm/ContactForm";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-24">
      <Navbar />
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <section
          className="w-full flex flex-col max-w-6xl items-center justify-between lg:flex pb-32 pt-16 gap-32"
          id="home"
        >
          <div className="w-full flex flex-col items-start">
            {/* name */}
            <div className="svg">
              <svg className="svg">
                <symbol id="s-text">
                  <text y="135">alex silviu</text>
                </symbol>
                <g>
                  <use href="#s-text" className="text-copy"></use>
                  <use href="#s-text" className="text-copy"></use>
                  <use href="#s-text" className="text-copy"></use>
                  <use href="#s-text" className="text-copy"></use>
                  <use href="#s-text" className="text-copy"></use>
                </g>
              </svg>
            </div>
            {/* role */}
            <span className="developer">&lt;front-end developer&gt;</span>
          </div>

          <div className="flex hero-info lg:justify-start items-center flex-col-reverse lg:flex-row gap-16 xl:gap-32">
            <div className="self-end flex flex-col hero-intro gap-8">
              <h3>
                Hi there. I'm Alex Silviu, a UX-driven Front-end Developer.
              </h3>
              <h4>Passionate about neuroscience and design psychology.</h4>
              <div className="flex flex-row gap-8 url-div">
                <SoMeButton />
              </div>
            </div>
            <Image
              src="/Alex.png"
              width={500}
              height={750}
              placeholder="blur"
              blurDataURL="/Alex.png"
              style={{ objectFit: "contain" }}
              alt="Alex Silviu Illustration"
              priority={true}
            />
          </div>
        </section>
        {/* about section */}
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <section
            className="w-full flex-col max-w-6xl lg:flex py-32"
            id="about"
          >
            {/* about intro */}
            <div className="flex hero-info flex-col gap-8 lg:flex-row-reverse">
              <div className="flex flex-col gap-8 items-start">
                <h1>
                  <span className="designer">about</span>
                </h1>
                <div className="flex flex-col gap-8 about">
                  <div className="flex flex-col gap-2 inner-p">
                    <p>
                      I'm Alex Silviu Scripcariuc, a passionate UX-driven
                      front-end developer with a focus on delivering inclusive
                      and accessible user experiences.
                    </p>
                    <p>
                      With a background in design and a rekindled passion for
                      front-end development, I strive to create intuitive and
                      user-centric digital solutions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 inner-p">
                    <p>
                      While I've had the pleasure of honing my design skills,
                      I've recently completed a Front End Development course
                      which allowed me to expand my knowledge of HTML, CSS,
                      JavaScript, and React.
                    </p>
                    <p>
                      As such, I am looking to further{" "}
                      <span className="italic">develop</span> this side of my
                      skillset.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 inner-p">
                    <p>
                      I've had the opportunity to grow both professionally and
                      educationally in multicultural and international
                      environments.
                    </p>
                    <p>
                      These experiences have allowed me to collaborate with
                      amazing people and work on exciting projects.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 inner-p">
                    <p>
                      I value collaboration and teamwork, as I truly believe
                      that no one achieves greatness alone; I also like people,
                      which helps.
                    </p>
                    <p>
                      Feel free to read below what some of the people I've
                      worked with have to say about our collaboration.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 inner-p">
                    <p>
                      I am actively seeking new opportunities that enable me to
                      combine my design skills with my newly rekindled passion
                      and expertise in front-end development.
                    </p>
                    <p>
                      I am eager to join, collaborate and contribute to a
                      dynamic team where I can utilize my diverse skill set to
                      create impactful and delightful user experiences.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 inner-p">
                    <p>
                      If you have any exciting projects or positions that share
                      our mutual interests, I would love to hear from you!
                    </p>
                    <p>
                      Let's{" "}
                      <a href="#contact" className="link">
                        connect
                      </a>{" "}
                      and explore how we can collaborate to make a difference in
                      the digital landscape.
                    </p>
                  </div>
                  <p>
                    PS: While I am currently based in Romania, I am more than
                    open to relocating for the perfect opportunity!
                  </p>
                </div>
                <Button href="/cv_alexsilviu.pdf" target="blank">
                  Download my resume
                </Button>
              </div>
              {/* about visual */}
              {/* <Image
                src="/Alex.png"
                width={500}
                height={750}
                className="self-center"
                placeholder="blur"
                blurDataURL="/Alex.png"
                style={{ objectFit: "contain" }}
                alt="Alex Silviu Picture"
                priority={true}
              /> */}
            </div>
            {/* end about intro */}

            {/* skills and tools */}
            <div className="flex flex-col gap-8 pt-32 sm:flex-row skillsandtools">
              {["skills", "tools"].map((section) => (
                <article
                  className="w-full sm:w-1/2 sm:text-left text-center sm:justify-start justify-center flex flex-col gap-8"
                  key={section}
                >
                  <h3>{section}</h3>
                  {section === "skills" ? <Skills /> : <Tools />}
                </article>
              ))}
            </div>
            {/* end skills and tools */}

            {/* experience and education */}
            <div className="flex flex-col gap-8 py-32 md:flex-row xp">
              {["experience", "education"].map((section) => (
                <article
                  className="w-full md:w-1/2 sm:text-left text-center sm:justify-start justify-center flex flex-col gap-8"
                  key={section}
                >
                  <h3>{section}</h3>
                  <Timeline showEducation={section === "education"} />
                </article>
              ))}
            </div>
            {/* testimonials */}
            <div id="testimonials">
              <article className="w-full md:text-left text-center sm:justify-start justify-center flex flex-col gap-8 xp">
                <h3>testimonials</h3>
                <Testimonials />
              </article>
            </div>
            {/* end experience and education */}
          </section>
        </motion.div>

        {/* portfolio section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section
            className="w-full flex-col max-w-6xl lg:flex py-32"
            id="portfolio"
          >
            <div className="flex flex-col items-start gap-8">
              {/* section name */}
              <h1>
                <span className="designer">portfolio</span>
              </h1>

              <div className="flex flex-col gap-2 inner-p">
                <p>
                  Please note that some of my most recent professional projects
                  fall under non-disclosure agreements (NDAs), and I am unable
                  to showcase them publicly.
                </p>
                <p>
                  However, I am more than happy to discuss these projects in a
                  confidential setting, such as during an interview.
                </p>
              </div>

              <Portfolio />
            </div>
          </section>
        </motion.div>

        {/* contact section */}
        <section
          className="w-full flex-col max-w-6xl lg:flex py-32"
          id="contact"
        >
          <div className="flex flex-col items-start gap-8">
            {/* section name */}
            <h1>
              <span className="designer">contact</span>
            </h1>
            <ContactForm />
          </div>
        </section>
      </motion.div>
    </main>
  );
}
