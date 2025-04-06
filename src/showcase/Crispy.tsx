import { motion } from "motion/react";
import { useRef } from "react";
import crispyHero from "../assets/showcase/crispy/crispy-hero.png";
import Eyebrow from "../components/eyebrow/Eyebrow";
import InfoCard from "../components/info-card/InfoCard";
import { container, fadeInVariants } from "../data/portfolio";
import "./showcase.css";

const processSteps: InfoCard[] = [
  {
    title: "1. &nbsp; Existing research",
    description: `
    We extensively researched prior work, drawing inspiration from <a class="underline" target="_blank" href="https://arxiv.org/abs/2105.08826">Cornell University's paper</a> on real-time superresolution and a solution using <a target="_blank" href="https://arxiv.org/abs/1611.05250" class="underline">spatial-temporal networks</a>.
    `,
  },
  {
    title: "2. &nbsp; Exploring options",
    description: `We compared RNNs, GANs, and FSRCNNs, ultimately choosing the less common FSRCNN for its unique potential.`,
  },
  {
    title: "3. &nbsp; Building the solution",
    description: `Our solution involved training a 7-layer ML model on 4096 images to generate .glsl shaders, which acted as filters over video streams, enhancing clarity and precision through pixel aggregation.`,
  },
  {
    title: "4. &nbsp; Results",
    description: `To quantify the results of our model, we measured various parameters, including <a href="https://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio" target="_blank" class="underline">PSNR</a> and used <a href="https://mpv.io" target="_blank" class="underline" >mpv-player</a> which is an open source video player commonly used on Unix platforms.`,
  },
];
const Crispy = () => {
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
        <img src={crispyHero} alt="Crispy player hero image" />
      </motion.div>
      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={2}
      >
        <Eyebrow title="The problem" />
        <p className="large-text text-gray2">
          Have you ever streamed a video online only to find it pixelated and
          blurry? It's a common frustration—trying to enjoy content, but the low
          resolution strips away the details. Many video players struggle to
          maintain high-quality playback, especially when working with
          low-resolution videos, leaving viewers wanting more clarity.
          <br />
          <br />
          This challenge inspired our university final year project: developing
          a model for superresolution. Superresolution is a transformative
          process that enhances the resolution of images or videos, creating
          higher-quality content from lower-resolution sources. This case study
          explores our approach to addressing this problem and the innovative
          solution we developed.
        </p>
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={2}
      >
        <Eyebrow title="Process" />
        <InfoCard items={processSteps} />
      </motion.div>

      <br />
      <br />
    </motion.div>
  );
};

export default Crispy;
