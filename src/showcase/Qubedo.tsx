import { motion } from "motion/react";
import { useRef } from "react";
import qubedoDeploy from "../assets/showcase/qubedo/qubedo-deploy.png";
import qubedoNewComponent from "../assets/showcase/qubedo/qubedo-newcomponent.png";
import qubedoPreferences from "../assets/showcase/qubedo/qubedo-preferences.png";
import qubedoProfile from "../assets/showcase/qubedo/qubedo-profile.png";
import qubedoVideo from "../assets/showcase/qubedo/qubedo_demo.mov";
import Eyebrow from "../components/eyebrow/Eyebrow";
import InfoCard from "../components/info-card/InfoCard";
import { container, fadeInVariants } from "../data/portfolio";
import { isMobileDevice } from "../utils";
import "./showcase.css";

const existingProblems: InfoCard[] = [
  {
    title: "",
    description: `
        <img class="info-card-image" src="${qubedoPreferences}"/>
        Modify app preferences
    `,
  },
  {
    title: "",
    description: `
    <img class="info-card-image" src="${qubedoNewComponent}"/>
    Create new components from templates - or from scratch
`,
  },
  {
    title: "",
    description: `
    <img class="info-card-image" src="${qubedoDeploy}"/>
    Sync component changes directly to production apps 
`,
  },
  {
    title: "",
    description: `
    <img class="info-card-image" src="${qubedoProfile}"/>
    Modify user profile information
`,
  },
];

const Qubedo = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const isMobile = isMobileDevice();
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
        className="showcase-full-image-section qubedo-video"
        {...childAnimationProps}
        custom={1}
      >
        {isMobile ? (
          <video src={qubedoVideo} autoPlay muted playsInline loop></video>
        ) : (
          <video
            src={qubedoVideo}
            autoPlay
            muted
            playsInline
            controls={false}
            loop
          ></video>
        )}
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={2}
      >
        <Eyebrow title="The problem" />
        <p className="large-text text-gray2">
          Most projects follow a{" "}
          <span className="text-gray1">repetitive and bloated cycle</span> — a
          designer creates a UI component, a developer converts it into a
          reusable one, and it’s used across the project. All good so far. But
          when a designer wants to update it? The entire cycle repeats. Not
          wrong, just tedious. <br /> <br /> Qubedo changes this. <br />
          <br />
          Designers gain control—they can update components and push changes
          live{" "}
          <span className="text-gray1">without developer intervention.</span>
          With the <span className="text-gray1">Qubedo SDK</span>, once a
          developer sets up a component, any edits made in the Qubedo Editor
          sync instantly across all production apps.
          <br />
          <br />
          <span className="underline text-gray3">
            Qubedo is currently an in-progress project.
          </span>
        </p>
      </motion.div>

      <motion.div
        className="showcase-section info-card-image-parent"
        {...childAnimationProps}
        custom={3}
      >
        <Eyebrow title="App screencaps" />
        <InfoCard items={existingProblems} />
      </motion.div>

      <br />
      <br />
    </motion.div>
  );
};

export default Qubedo;
