import { motion } from "motion/react";
import { useRef } from "react";
import IRCTCHome from "../assets/showcase/irctc/Home.svg";
import IRCTCHero from "../assets/showcase/irctc/IRCTC Hero.svg";
import IRCTCListingTrain from "../assets/showcase/irctc/Listing.svg";
import IRCTCBookingTrain from "../assets/showcase/irctc/Selecting a train.svg";
import Eyebrow from "../components/eyebrow/Eyebrow";
import InfoCard from "../components/info-card/InfoCard";
import { container, fadeInVariants } from "../data/portfolio";
import "./showcase.css";
import { isMobileDevice } from "../utils";

const existingProblems: InfoCard[] = [
  {
    title: "😶 &nbsp; Confusing Interface and Design",
    description: `Frequent changes in layout and design <b>confuse users</b> and disrupt navigation.`,
  },
  {
    title: "⏰ &nbsp; Lack of Real-Time Feedback",
    description: `Lack of timely feedback leaves users <b>uncertain</b>, affecting decision-making and satisfaction.`,
  },
  {
    title: "🔎 &nbsp; Limited Search and Booking Flexibility",
    description: `Users struggle to modify searches or bookings easily, as the interface <b>lacks flexibility</b>, causing frustration and inefficiency.`,
  },
  {
    title: "❓ &nbsp; Poor Discoverability of Key Features",
    description: `Essential features are hard to find due to <b>unclear signifiers and unintuitive navigation</b>, making it difficult for users to access key functions.`,
  },
];
const IRCTC = () => {
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
        className="showcase-full-image-section"
        {...childAnimationProps}
        custom={1}
      >
        <img
          src={isMobile ? IRCTCHome : IRCTCHero}
          alt="IRCTC hero"
          style={{ transform: isMobile ? "scale(1.15)" : "none" }}
        />
      </motion.div>
      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={2}
      >
        <Eyebrow title="The problem" />
        <p className="large-text text-gray2">
          IRCTC Connect is one the most popular apps in India used for booking
          seats on trains, flights and hotels. However, despite being so
          popular, the user experience and usability of the app leaves a lot to
          be desired.
          <br />
          <br />
          As a part of my coursework at Georgia Tech's HCI class, I undertook a
          redesign of this app, focusing particularly on the process of{" "}
          <b>booking a train ticket.</b>
        </p>
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={2}
      >
        <Eyebrow title="User's pain points" />
        <InfoCard items={existingProblems} />
      </motion.div>

      {!isMobile && (
        <motion.div
          className="showcase-section"
          {...childAnimationProps}
          custom={2}
        >
          <Eyebrow title="Interact with the prototype" />
          <iframe
            //   src="https://embed.figma.com/proto/EOHRLgvKtfyXziAnexadkx/Gatech-HCI?node-id=726-2365&p=f&scaling=scale-down&content-scaling=fixed&page-id=620%3A36&starting-point-node-id=726%3A2365&embed-host=share"
            style={{ width: "100%", height: "500px", border: "none" }}
            title="Figma Prototype"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/EOHRLgvKtfyXziAnexadkx/Gatech-HCI?node-id=726-2365&p=f&t=14gP3G4K6brQrtSN-1&scaling=scale-down&content-scaling=fixed&page-id=620%3A36&starting-point-node-id=726%3A2365"
          />
        </motion.div>
      )}

      {!isMobile && (
        <motion.div
          className="showcase-full-image-section showcase-section"
          {...childAnimationProps}
          custom={3}
        >
          <img src={IRCTCHome} alt="IRCTC hero" />
        </motion.div>
      )}

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={4}
      >
        <Eyebrow title="Selecting a train" />
        <p className="text-gray3">
          The interface offers a <b>flexible search experience</b> with voice
          input and highlights relevant information, like festival dates and
          special passenger categories. Grouping related criteria, such as
          passenger types, ensures a more organized and cohesive user
          experience.
        </p>
        <img src={IRCTCBookingTrain} alt="" />
      </motion.div>

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={5}
      >
        <Eyebrow title="See available options" />
        <p className="text-gray3">
          The interface offers a <b>flexible search experience</b> with voice
          input and highlights relevant information, like festival dates and
          special passenger categories. Grouping related criteria, such as
          passenger types, ensures a more organized and cohesive user
          experience.
        </p>
        <img src={IRCTCListingTrain} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default IRCTC;
