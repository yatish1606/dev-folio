import { motion } from "motion/react";
import { useRef } from "react";
import UEICompBar from "../assets/showcase/uei/Comp_bar.svg";
import UEICompBill from "../assets/showcase/uei/Comp_bill.svg";
import UEICompChart from "../assets/showcase/uei/Comp_chart.svg";
import UEICompLocation from "../assets/showcase/uei/Comp_location.svg";
import UEICompRoom from "../assets/showcase/uei/Comp_room.svg";
import UEICompSwipe from "../assets/showcase/uei/Comp_swipe.svg";
import UEIDashboard from "../assets/showcase/uei/Dashboard.svg";
import UEIPayment from "../assets/showcase/uei/Payment.svg";
import UEIBillSplit from "../assets/showcase/uei/Bill_split.svg";
import UEISmartHome from "../assets/showcase/uei/Smart_home.svg";
import UEIHero from "../assets/showcase/uei/UEI_Hero.mov";
import UEIHeroMobile from "../assets/showcase/uei/UEI_hero_mobile.mov";
import { Eyes, UserFocus, UsersFour } from "@phosphor-icons/react";
import Eyebrow from "../components/eyebrow/Eyebrow";
import FeatureBox, {
  FeatureBoxItem,
} from "../components/feature-box/FeatureBox";
import InfoCard from "../components/info-card/InfoCard";
import Personas, { Persona } from "../components/personas/Personas";
import { container, fadeInVariants } from "../data/portfolio";
import { isMobileDevice } from "../utils";
import "./showcase.css";

const existingProblems: InfoCard[] = [
  {
    title: "📊 &nbsp; Visualization shortcomings",
    description: `The current interfaces lack usability and data visualization features. Users can only access <b>basic payment amounts</b> without insights into <b>consumption trends</b>, making it challenging to understand unexpected bill variations.`,
  },
  {
    title: "⚙  &nbsp; Infrastructure failures",
    description: `Frequent issues like <b>bill fetching failures</b> and unreliable <b>payment processing</b> force users to visit offices in person. Poor <b>error handling</b> and delayed <b>transaction confirmations</b> further hinder usability.`,
  },
  {
    title: "🔎 &nbsp; Feature gaps",
    description: `Key features like <b>AI-powered bill prediction</b>, <b>multi-account management</b>, and <b>smart home integration</b> are missing. The lack of <b>consumption analytics</b> leaves users without tools to monitor or optimize energy use.`,
  },
  {
    title: "🧭  &nbsp; Outdated design",
    description: `The apps have <b>outdated designs</b> with counterintuitive <b>navigation menus</b> and confusing <b>iconography</b>. Essential features are hidden, making it hard for users to perform simple tasks efficiently.`,
  },
];

const bentoBuildingBlocks = [
  {
    image: UEICompRoom,
    caption: "Card displaying consumption analytics for a single room",
  },
  {
    image: UEICompSwipe,
    caption: "Payment breakdown with a 'swipe to pay' option",
  },
  {
    image: UEICompLocation,
    caption: "A touchable card that allows to switch houses",
  },
  {
    image: UEICompBill,
    caption: "A card showing payment history",
  },
  {
    image: UEICompChart,
    caption: "Consumption trends across fixed time periods",
  },
  {
    image: UEICompBar,
    caption: "Bar chart depicting yearly bill payment",
  },
];

const discoverySteps: FeatureBoxItem[] = [
  {
    label: "Regional user insights",
    description: `We researched app usage, payment challenges, and smart home preferences in Maharashtra, Gujarat, Karnataka, and Tamil Nadu, with targeted interviews in urban and semi-urban areas.`,
    icon: <UsersFour size={24} />,
  },
  {
    label: "Naturalistic observation",
    description: `We used naturalistic observation to understand electricity bill payments, capturing real errors, common workarounds, app switching, user reactions, and network issues.`,
    icon: <Eyes size={24} />,
  },
  {
    label: "Heuristic evaluation",
    description: `Our chosen heuristics included mobile specific guidelines, Neilsen's heuristics for reliability, language support for inclusivity and India specific contexual requirements.`,
    icon: <UserFocus size={24} />,
  },
];

const discoveryStepsMobile: FeatureBoxItem[] = [
  {
    label: "Regional user insights",
    description: `Explore app usage and payment habits in four states through urban and semi-urban interviews.`,
    icon: <UsersFour size={24} />,
  },
  {
    label: "Naturalistic observation",
    description: `Capture real user behavior, errors, and app-switching during electricity bill payments.`,
    icon: <Eyes size={24} />,
  },
  {
    label: "Heuristic evaluation",
    description: `Apply mobile-friendly and India-specific heuristics for usability and inclusivity.`,
    icon: <UserFocus size={24} />,
  },
];

const personas: Persona[] = [
  {
    name: "Fredy D'souza",
    occupation: "Grad student",
    age: 21,
    fact: "Marketing student",
    image: "https://avatar.iran.liara.run/public/38",
  },
  {
    name: "Lakshmi Narayanan",
    occupation: "Homemaker",
    age: 61,
    fact: "Bamboozled by technology",
    image: "https://avatar.iran.liara.run/public/90",
  },
  {
    name: "Naseem Shaikh",
    occupation: "Software Develpoer",
    age: 24,
    fact: "Lives in a shared flat",
    image: "https://avatar.iran.liara.run/public/95",
  },
  {
    name: "Arnav Ghosh",
    occupation: "Small business owner",
    age: 37,
    fact: "Runs his own cloud kitchen",
    image: "https://avatar.iran.liara.run/public/37",
  },
];

const UEI = () => {
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
        {isMobile ? (
          <video src={UEIHeroMobile} autoPlay muted playsInline>
            Your browser does not support this video
          </video>
        ) : (
          <video
            src={UEIHero}
            autoPlay
            muted
            playsInline
            controls={false}
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
          Tracking electricity consumption and bill payment in India is hindered
          by fragmented state-specific apps with inconsistent designs and
          functional limitations. These apps often fail to provide seamless
          navigation, meaningful insights, or reliable payment options.
          <br />
          <br />
          Our project aims to address these issues by designing a{" "}
          <b>unified, user-friendly</b> interface that{" "}
          <b>enhances accessibility</b>, integrates smart home capabilities, and
          supports energy-conscious decision-making, aligning with India's
          Digital India vision.
        </p>
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={3}
      >
        <Eyebrow title="Discovery and needfinding" />
        <p className="text-gray2">
          We started off by creating a robust needfinding plan that would help
          us leverage geographic diversity and varied user contexts. Our three
          pronged strategy included:
          <br /> <br />
          <FeatureBox
            items={isMobile ? discoveryStepsMobile : discoverySteps}
          />
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
        <Eyebrow title="User's pain points" />
        <p className="text-gray2">
          Based on our research and interviews, we categorized user issues into
          4 distinct areas.
        </p>
        <InfoCard items={existingProblems} />
      </motion.div>

      <motion.div
        className="showcase-section"
        {...childAnimationProps}
        custom={3}
      >
        <Eyebrow title="Creating a reusable design system" />
        <p className=" text-gray2">
          We started off by creating a basic design system comprising of
          building blocks such as inputs, colors, typography and elements.
          <br />
          <br />
          <InfoCard
            items={[
              {
                title: "Typography",
                description: `
                Plus Jakarta Sans, weights 400, 600 and 700    
                <br/><br/>
                <h3 class="text-gray0">Heading 1</h3>
                <h4 class="text-gray0">Heading 2</h4>
                <h5 class="text-gray0">Heading 3</h5>
                <h6 class="text-gray0">Heading 4</h6>
                <p>Paragraph text</p>
                <span><b>bold</b> and <i>italics</i> text</span>
                <br/>
                <small>Small text</small>
                `,
              },
              {
                title: "Colors",
                description: `
                <div class="color-boxes">
                    <div class="color-box">
                        <div class="color-box-color" style="background-color: #028DD2;"></div>
                        <b>Primary color</b>
                        <p>#028DD2</p>
                    </div>
                    <div class="color-box">
                        <div class="color-box-color" style="background-color: #46AC61;"></div>
                        <b>Leaf green</b>
                        <p>#46AC61</p>
                    </div>
                    <div class="color-box">
                        <div class="color-box-color" style="background-color: #E85F35;"></div>
                        <b>Crimson</b>
                        <p>#345345</p>
                    </div>
                    <div class="color-box">
                        <div class="color-box-color" style="background-color: #D9A705;"></div>
                        <b>Ochre</b>
                        <p>#D9A705</p>
                    </div>
                </div>
                `,
              },
            ]}
          />
          <br />
          <br />
          Based on those, we created <b>reusable components </b>that follow a
          consistent design language.
        </p>
      </motion.div>

      <motion.div
        className="showcase-section bento-parent"
        {...childAnimationProps}
        custom={5}
      >
        {bentoBuildingBlocks.map((block, index) => (
          <motion.div
            className="bento-child"
            {...childAnimationProps}
            custom={5 + index}
          >
            <div className="bento-child-image">
              <img src={block.image} alt={block.caption} />
            </div>

            <caption className="text-gray3">{block.caption}</caption>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={6}
      >
        <Eyebrow title="The final design" />
        <img src={UEIDashboard} alt="IRCTC hero" />
        <caption className="text-gray3">
          <b>A simple dashboard</b> that provides a birds eye view of a person's
          electricity consumption.
        </caption>
      </motion.div>

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={6}
      >
        <img src={UEIPayment} alt="IRCTC hero" />
        <caption className="text-gray3">
          <b>Payments screen</b> that helps the user to track their bill
          payments and split it with flatmates.
        </caption>
      </motion.div>

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={6}
      >
        <img src={UEISmartHome} alt="IRCTC hero" />
        <caption className="text-gray3">
          A <b>Smart Home</b> feature that helps to track room-by-room
          consumption.
        </caption>
      </motion.div>

      <motion.div
        className="showcase-full-image-section showcase-section"
        {...childAnimationProps}
        custom={6}
      >
        <img src={UEIBillSplit} alt="IRCTC hero" />
        <caption className="text-gray3">
          <b>Split your bills</b> easily with flatmates, or pay by yourself -
          within the same app.
        </caption>
      </motion.div>

      {isMobile ? null : (
        <motion.div
          className="showcase-section"
          {...childAnimationProps}
          custom={4}
        >
          <Eyebrow title="Interact with the prototype" />
          <iframe
            style={{ width: "100%", height: "500px", border: "none" }}
            title="Figma Prototype"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/LelivqjIZkQVnYjxQKtDM4/UEI?node-id=65-547&t=2lbrEFZ7nQ014MMN-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A297"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default UEI;
