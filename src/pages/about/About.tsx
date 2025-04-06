import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import educationList from "../../data/education";
import { container, fadeInVariants } from "../../data/portfolio";
import workExperienceList from "../../data/work-experience";
import { isMobileDevice } from "../../utils";
import Play from "../play/Play";
import "./about.css";

const About = () => {
  const childAnimationProps = {
    variants: fadeInVariants,
    initial: "initial",
    viewport: { once: true },
    whileInView: "animate",
  };

  return (
    <div className="container">
      <div className="about-hero portfolio-section">
        <motion.div
          className="about-hero-info"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="section-separator"></div>
          <motion.h5 {...childAnimationProps} custom={1} className="text-gray0">
            A bit about me
          </motion.h5>

          <motion.p className="text-gray3" {...childAnimationProps} custom={2}>
            Passionate frontend developer with a knack for crafting
            pixel-perfect UIs. What started as a fascination for design and
            development has grown into a fulfilling profession. ✨
          </motion.p>
          <motion.p className="text-gray3" {...childAnimationProps} custom={2}>
            Since 2021, I’ve had the privilege of working on some of the most
            cutting-edge digital products and platforms — most notably{" "}
            <a
              className="link"
              href="https://www.majesco.com/digital-solutions-insurance-solutions/digital1st-platform/"
              target="_blank"
            >
              Digital<sup>1st</sup>
            </a>
            , a next-gen insurance ecosystem. I occasionally love to dabble in
            visual design, and post my learnings on{" "}
            <a
              className="link underline"
              href="https://dribbble.com/Yatish1606"
              target="_blank"
            >
              Dribbble.
            </a>{" "}
          </motion.p>

          <motion.p className="text-gray3" {...childAnimationProps} custom={2}>
            I'm currently working with{" "}
            <span className=" text-gray1"> Morgan Stanley </span> as an
            Associate SDE2 in Bengaluru, India.
          </motion.p>

          <div className="section-separator"></div>

          <motion.h5 {...childAnimationProps} custom={3} className="text-gray0">
            Work experience
          </motion.h5>

          <div className="work-experience-parent">
            {workExperienceList.map((item, index) => {
              return (
                <motion.div {...childAnimationProps} custom={4 + index}>
                  <div key={index} className="work-item">
                    <div className="work-item-left">
                      <img src={item.companyLogo} alt={item.companyName} />
                    </div>
                    <div className="work-item-right">
                      <p className="flex-row">
                        <a
                          className="text-gray1"
                          href={item.companyWebsite}
                          target="_blank"
                        >
                          {item.companyName}
                        </a>{" "}
                        <div className="separator-dot"></div>{" "}
                        <p className="text-gray2">{item.role}</p>
                      </p>
                      <small className="text-gray4 flex-row">
                        {item.startDate} - {item.endDate} &nbsp;
                      </small>
                      <p
                        className="text-gray3"
                        dangerouslySetInnerHTML={{ __html: item.job }}
                      ></p>
                    </div>
                  </div>
                  {index != workExperienceList.length - 1 ? (
                    <div className="section-separator"></div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>

          <motion.a
            href="https://drive.google.com/file/d/1V2MpN3aIOZ4Ere6VPDVwYKyXlCbkpcfx/view?usp=sharing"
            target="_blank"
            className="underline"
            {...childAnimationProps}
            custom={7}
          >
            See complete work history
          </motion.a>

          {/* <div className="section-separator"></div> */}
          <br />
          <br />
          <motion.h5 {...childAnimationProps} custom={8} className="text-gray0">
            Education
          </motion.h5>

          <div className="education-parent">
            {educationList.map((item, index) => {
              return (
                <motion.div {...childAnimationProps} custom={9 + index}>
                  <div key={index} className="education-item">
                    <h6>
                      <p
                        style={{ fontFamily: "inherit" }}
                        className="text-gray1"
                      >
                        {item.where}
                      </p>
                      <p className="text-gray3">{item.degree}</p>
                    </h6>
                    <small className="text-gray4">
                      {item.startDate} - {item.endDate}
                    </small>
                  </div>
                  {index != educationList.length - 1 ? (
                    <div className="section-separator"></div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>

          <br />
          <Play />

          <motion.h5
            className="text-gray0"
            {...childAnimationProps}
            custom={10}
          >
            Get in touch
          </motion.h5>

          <motion.a
            href="mailto:yatish1606@gmail.com?subject=Hey there!"
            target="_blank"
            className="underline"
            {...childAnimationProps}
            custom={11}
          >
            yatish1606@gmail.com
          </motion.a>

          <motion.div className="flex-row" {...childAnimationProps} custom={12}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yatish-kelkar-850507190/"
              className="text-gray2"
            >
              LinkedIn <ArrowUpRight size={14} className="text-gray2" />
            </a>
            <div className="separator-dot"></div>
            <a
              target="_blank"
              href="https://github.com/yatish1606"
              className="text-gray2"
            >
              Github <ArrowUpRight size={14} className="text-gray2" />
            </a>
            <div className="separator-dot"></div>
            <a
              target="_blank"
              href="https://dribbble.com/Yatish1606"
              className="text-gray2"
            >
              Dribbble <ArrowUpRight size={14} className="text-gray2" />
            </a>
          </motion.div>

          <div className="section-separator"></div>

          <motion.div
            className="flex-row-sb"
            {...childAnimationProps}
            custom={12}
          >
            <small className="text-gray4">
              Designed and developed by Yatish Kelkar
            </small>
            <small>
              <a
                href="https://github.com/yatish1606/dev-folio"
                target="_blank"
                className="text-gray2"
              >
                View source &nbsp;
                <ArrowUpRight size={14} className="text-gray2" />
              </a>
            </small>
          </motion.div>

          {isMobileDevice() && <div className="section-separator"></div>}
          <motion.div className="flex-row" {...childAnimationProps} custom={13}>
            <small className="text-gray4">Previous versions:</small>
            <small>
              <a
                href="https://yatishkelkar.netlify.app/"
                target="_blank"
                className="text-gray1 underline"
              >
                v1
              </a>
            </small>
            <div className="separator-dot"></div>
            <small>
              <a
                href="https://yatish-dev.netlify.app/"
                target="_blank"
                className="text-gray1 underline"
              >
                v2
              </a>
            </small>
          </motion.div>

          {isMobileDevice() ? (
            <>
              <br />
              <br />
            </>
          ) : (
            <br />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
