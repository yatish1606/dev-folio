import { Eyes, UserFocus } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useRef } from "react";
import Eyebrow from "../components/eyebrow/Eyebrow";
import FeatureBox, {
  FeatureBoxItem,
} from "../components/feature-box/FeatureBox";
import Personas, { Persona } from "../components/personas/Personas";
import { container, fadeInVariants } from "../data/portfolio";
import "./showcase.css";

import comments from "../assets/showcase/mooc/comments.svg";
import courseContent from "../assets/showcase/mooc/course-content.svg";
import forumCard from "../assets/showcase/mooc/forum-card.jpg";
import forumMain from "../assets/showcase/mooc/forum-main.jpg";
import header from "../assets/showcase/mooc/header.jpg";
import homeMain from "../assets/showcase/mooc/home.jpg";
import main from "../assets/showcase/mooc/main.png";
import miro from "../assets/showcase/mooc/miro.jpg";
import notes from "../assets/showcase/mooc/notes.svg";
import obsidian from "../assets/showcase/mooc/obsidian.jpg";
import feedbackMain from "../assets/showcase/mooc/peer-feedback-main.jpg";

const discoverySteps: FeatureBoxItem[] = [
  //   {
  //     label: "Low completion rates",
  //     description: `Platforms like EdX, Coursera, and Udemy report completion rates <b> below 10%. </b> Some learners don’t even start the course after signing up.`,
  //     icon: <UsersFour size={24} />,
  //   },
  {
    label: "Isolation",
    description: `Learners often feel they’re going it alone. No cohort vibes. No casual chat. Just videos and quizzes.
    `,
    icon: <Eyes size={24} />,
  },
  {
    label: "Shallow learning",
    description: `Without active discussion or reflection, students struggle to retain knowledge long-term.`,
    icon: <UserFocus size={24} />,
  },
  {
    label: "No space for collaboration",
    description: `Forget group notes or feedback—you’re mostly consuming content passively.`,
    icon: <UserFocus size={24} />,
  },
];

const personas: Persona[] = [
  {
    name: "Vishwajit",
    occupation: "Grad student",
    age: 21,
    fact: "A constant learner",
    image: "https://avatar.iran.liara.run/public/38",
  },
  {
    name: "Shivanee",
    occupation: "Graphic designer",
    age: 24,
    fact: "Artsy - but procrastinates A LOT",
    image: "https://avatar.iran.liara.run/public/90",
  },
  {
    name: "Samriddhi",
    occupation: "Database engineer",
    age: 29,
    fact: "Always up for learning something new",
    image: "https://avatar.iran.liara.run/public/95",
  },
  {
    name: "Sivakumar M",
    occupation: "Chef in-training",
    age: 25,
    fact: "Prefers Udemy over YouTube to learn cooking",
    image: "https://avatar.iran.liara.run/public/37",
  },
];

const MOOC = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childAnimationProps = {
    variants: fadeInVariants,
    initial: "initial",
    viewport: { once: true },
    whileInView: "animate",
  };

  return (
    <motion.div
      ref={parentRef}
      className="showcase-details-section"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div
        className="showcase-full-image-section"
        {...childAnimationProps}
        custom={1}
      >
        <img src={main} alt="" />
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={2}
      >
        <Eyebrow title="The problem" />
        <p className="large-text text-gray2">
          What if online courses felt more like study groups and less like solo
          missions?
          <br />
          <br />
          Imagine signing up for a course you’re excited about. A few weeks in,
          your motivation dips. You're watching videos alone, no one's around to
          discuss ideas with, and feedback? Barely any. That’s the reality for
          most MOOC learners.
          <br />
          <br />
          To solve this, we designed a platform that reintroduces community,
          conversation, and collaboration into MOOCs — to
          <b>reduce dropout rates </b> and <b>ncrease learner engagement. </b>
        </p>
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={3}
      >
        <Eyebrow title="What was broken?" />
        <p className="text-gray2">
          Let’s face it — MOOCs are brilliant. But they’re missing <i>people</i>{" "}
          . Here's what we uncovered:
          <br /> <br />
          <FeatureBox items={discoverySteps} />
          <br />
          <br />
          As a next step, we conduced interviews with users who fit our
          provisional personas, with the aim to answer two simple questions -{" "}
          <b>what are their pain points?</b>, and{" "}
          <b>what are their expectations?</b>
          <br />
          <br />
          <Personas personas={personas} />
        </p>
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={3}
      >
        <Eyebrow title="Starting small" />
        <p className="text-gray2">
          We started low-fidelity. No colors, no distractions — just layout and
          flow.
          <br />
          <br />
          Miro was used to create a quick initial wireframe, which helped us to
          brainstorm and try out our ideas with minimal effort. Once we settled
          on a few design decisions, we switched to Figma to create a
          high-fidelity wireframe.
        </p>
      </motion.div>

      <motion.div
        className="showcase-section bento-parent"
        {...childAnimationProps}
        custom={3}
        style={{ marginTop: 0, paddingTop: 0 }}
      >
        <motion.div
          className="bento-child no-pad no-b"
          {...childAnimationProps}
          custom={4}
        >
          <div className="bento-child-image">
            <img src={miro} alt="wireframe" />
          </div>

          <caption className="text-gray3">
            The first draft of our proposed tool - created using{" "}
            <a href="https://miro.com" target="_blank">
              miro
            </a>
            .
          </caption>
        </motion.div>

        <motion.div
          className="bento-child no-pad no-b"
          {...childAnimationProps}
          custom={5}
        >
          <div className="bento-child-image">
            <img src={obsidian} alt="Initial whiteboarding" />
          </div>

          <caption className="text-gray3">
            Our first discussions started on Slack, and were condensed in
            Obsidian.
          </caption>
        </motion.div>
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={6}
      >
        <p className=" text-gray3">
          These design decisions informed the next step - creating feature
          components.{" "}
        </p>
      </motion.div>

      <motion.div
        className="showcase-section bento-parent"
        {...childAnimationProps}
        custom={7}
        style={{ marginTop: 0, paddingTop: 0 }}
      >
        <motion.div
          className="bento-child no-pad no-b"
          {...childAnimationProps}
          custom={8}
        >
          <div className="bento-child-image">
            <img src={courseContent} alt="Initial whiteboarding" />
          </div>

          <caption className="text-gray3">
            Discussion forums - where students can post questions to the bigger
            community.
          </caption>
        </motion.div>

        <motion.div
          className="bento-child no-pad no-b"
          {...childAnimationProps}
          custom={8}
        >
          <div className="bento-child-image">
            <img src={comments} alt="Initial whiteboarding" />
          </div>

          <caption className="text-gray3">
            Respond to your peers' queries asynchronously.
          </caption>
        </motion.div>

        <motion.div
          className="bento-child no-pad no-b"
          {...childAnimationProps}
          custom={7}
        >
          <div className="bento-child-image">
            <img src={header} alt="wireframe" />
          </div>

          <caption className="text-gray3">Course info - and actions.</caption>

          <br />

          <div className="bento-child-image">
            <img src={forumCard} alt="wireframe" />
          </div>

          <caption className="text-gray3">
            A simple card for forum question - no reinventing the wheel.
          </caption>
        </motion.div>

        <motion.div
          className="bento-child no-pad no-b"
          {...childAnimationProps}
          custom={8}
        >
          <div className="bento-child-image">
            <img src={notes} alt="Initial whiteboarding" />
          </div>

          <caption className="text-gray3">
            Collaborative notes - a module wise doc for shared work.
          </caption>
        </motion.div>
      </motion.div>

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={9}
      >
        <Eyebrow title="The final design" />
        <img src={homeMain} alt="home" />
        <caption className="text-gray3">
          <b>Course home</b> - watch videos, and contribute to shared notes.
        </caption>
      </motion.div>

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={10}
      >
        <img src={forumMain} alt="discussion forum" />
        <caption className="text-gray3">
          <b>Discussion forums </b> that promote async communication and a
          feeling of shared learning.
        </caption>
      </motion.div>

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={11}
      >
        <img src={feedbackMain} alt="feedback" />
        <caption className="text-gray3">
          <b>Peer feedback</b> - gain useful insights from other people's work.
        </caption>
      </motion.div>
    </motion.div>
  );
};

export default MOOC;
