import { ArrowRight } from "@phosphor-icons/react";
import { AuroraBackground } from "../../components/aurora/Aurora";
import Sparkles from "../../components/sparkles/Sparkles";
import { Timeline } from "../../components/timeline/Timeline";
import portfolioData, { fadeInVariants } from "../../data/portfolio";
import { isMobileDevice } from "../../utils";
import "./portfolio.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  const isMobile = isMobileDevice();
  const childAnimationProps = {
    variants: {
      ...fadeInVariants,
      animate: (count: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.15 * count,
          duration: 0.5,
        },
      }),
    },
    initial: "initial",
    viewport: { once: true },
    whileInView: "animate",
  };
  return (
    <div className="container">
      <AuroraBackground>
        <div className="hero">
          <br />
          {/* <Eyebrow title="Yatish Kelkar" /> */}

          <motion.p {...childAnimationProps} custom={0} className="text=gray3">
            👋 Hey, I am Yatish Kelkar
          </motion.p>
          <motion.h3 className="text-gray0" {...childAnimationProps} custom={1}>
            Building interfaces that{" "}
            <span>
              <Sparkles>
                <h3 className="text-gray0">delight</h3>
              </Sparkles>
            </span>
          </motion.h3>

          {isMobile ? (
            <motion.p
              {...childAnimationProps}
              custom={2}
              className="text-gray2"
            >
              UI developer at <span className="link">Morgan Stanley</span> with
              3+ years of experience in crafting engaging digital products, & a
              passion for visual design.
            </motion.p>
          ) : (
            <motion.p
              {...childAnimationProps}
              custom={2}
              className="text-gray2"
            >
              I'm currently at <span className="link">Morgan Stanley</span>,
              with 3+ years of experience in building scalable web apps.
              {isMobile ? " " : <br />}I craft engaging digital experiences and
              am open to new software challenges, with a passion for visual
              design.
            </motion.p>
          )}

          {isMobile ? (
            <motion.button
              {...childAnimationProps}
              custom={3}
              className="primary"
              onClick={() =>
                (window.location.href =
                  "mailto:yatish1606@gmail.com?subject=Hey there!")
              }
            >
              Get in touch{" "}
              <ArrowRight size={18} className="text-gray0" strokeWidth={1.5} />
            </motion.button>
          ) : (
            <motion.div
              {...childAnimationProps}
              custom={3}
              className="flex-row"
            >
              <p className="text-gray4">Based in Bengaluru, India</p>
              <div className="separator-dot"></div>
              <p
                className="highlight-hover text-gray4"
                onClick={() => (window.location.href = "tel:+919552503187")}
              >
                +91 9552503187
              </p>
              <div className="separator-dot"></div>
              <p
                className="highlight-hover text-gray4"
                onClick={() =>
                  (window.location.href = "mailto:yatish1606@gmail.com")
                }
              >
                yatish1606@gmail.com
              </p>
            </motion.div>
          )}

          <motion.div
            {...childAnimationProps}
            custom={4}
            className="section-separator"
            style={{ marginBottom: 0 }}
          ></motion.div>
        </div>
      </AuroraBackground>

      <div
        className="portfolio-section"
        style={{
          marginTop: 0,
          paddingTop: isMobile ? "0vh" : "4vh",
          paddingBottom: isMobile ? 0 : 10,
          gap: 0,
        }}
      >
        <motion.h5 {...childAnimationProps} custom={5} className="text-gray0">
          My work
        </motion.h5>
        <motion.p {...childAnimationProps} custom={6} className="text-gray3">
          A selection of my recent projects, that help to address real world
          challenges.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 3 } }}
        className="portfolio-section-large"
      >
        <Timeline data={portfolioData} />
      </motion.div>
    </div>
  );
};

export default Portfolio;
