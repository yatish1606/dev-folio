// import hrWikkiFeature1 from "../assets/showcase/hrwikki/termination.png";
// import hrWikkiOnboarding from "../assets/showcase/hrwikki/termination-main.png";
// import hrWikkiVideo from "../assets/showcase/hrwikki/hrwikki-hero.mp4";
// import hrWikkiFeature2 from "../assets/showcase/hrwikki/hrwikki-feature2.svg";

// import webeyeVideo from "../assets/showcase/webeye/webeye-hero.mp4";
// import webeyeFullpage from "../assets/showcase/webeye/webeye-fullpage.svg";

// import accordionVideo from "../assets/showcase/accordion/accordion-video.mov";

import crispyThumbnail from "../assets/showcase/crispy/crispy_Thumbnail.jpg";

// import qubedoLogin from "../assets/showcase/qubedo/qubedo-login.png";
import qubedoThumbnail from "../assets/showcase/qubedo/Qubedo_Thumbnail.png";
// import qubedoRegister from "../assets/showcase/qubedo/qubedo-register.png";

import ueiThumbnail from "../assets/showcase/uei/UEI_Thumbnail.png";

import { ReactNode } from "react";
import irctcThumbnail from "../assets/showcase/irctc/IRCTC_Thumbnail.jpg";
import Crispy from "../showcase/Crispy";
import IRCTC from "../showcase/IRCTC";
import UEI from "../showcase/UEI";
import Qubedo from "../showcase/Qubedo";

export interface FeatureSection {
  label: string;
  description: string;
  image?: string;
  video?: string;
}

export interface SplitSection {
  contentPlacement?: "left" | "right";
  image: string;
  label: string;
  description: string;
  action?: {
    href: string;
    label: string;
    onClick?: () => void;
  };
}

export interface SplitSectionInfo {
  label: string;
  description: string;
  action?: {
    href: string;
    label: string;
    onClick?: () => void;
  };
}

export interface ImageSection {
  image: string;
  alt: string;
}

export interface EmbedSection {
  embedURL: string;
  label?: string;
  description?: string;
  embedHeight: string;
}

export interface TimelineSection {
  label: string;
  items: {
    key: string;
    label?: string;
    description: string;
    image?: string;
  }[];
}

export interface CarouselSection {
  label?: string;
  description?: string;
  slidesSize?: number;
  items: {
    image: string;
    description?: string;
  }[];
}

export interface ShowcaseItem {
  label: string;
  id: number;
  startDate: string;
  endDate: string;
  shortDescription: string;
  thumbnailVideo: string;
  content: ReactNode;
  type: any;
  keywords: string[];
  longtitle: string;
  collaborators?: any[];
}

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 5.75,
      when: "beforeChildren",
    },
  },
};
export const fadeInVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * 1,
      duration: 0.5,
    },
  }),
};

export interface ShowcaseGroup {
  [key: string]: ShowcaseItem[];
}

const portfolioData: ShowcaseGroup = {
  "2024": [
    {
      longtitle: `<span class="text-gray0 underline"> Unified Energy Payments </span> is designed to address the fragmented nature of state electricity apps in India, by offering a single platform for bill payments and consumption tracking.`,
      type: "Product design",
      label: "Reimagining electricity apps pan India",
      id: 0,
      thumbnailVideo: ueiThumbnail,
      shortDescription: "Product design / 2024",
      // shortDescription: `<span class="text-gray1">Unified Energy Payments </span> is designed to address the fragmented nature of state electricity apps in India, by offering a single platform for bill payments and consumption tracking.`,
      startDate: "October 2024",
      endDate: "December 2024",
      content: <UEI />,
      keywords: ["Figma", "UX research", "Prototyping"],
      collaborators: [
        {
          id: 1,
          name: "Narayan Sharma",
          designation: "ML Scientist @Dream11",
          image:
            "https://media.licdn.com/dms/image/v2/D4D03AQF1qasV5Bz7lQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689361031281?e=2147483647&v=beta&t=2cdlhv27Aa4Gu2Z7s7UJ5oQflVxzw2bg9tYaiwCmyUk",
        },
        {
          id: 2,
          name: "Rishi Patel",
          designation: "Frontend Developer",
          image:
            "https://media.licdn.com/dms/image/D4E03AQFD2c12w_rVxw/profile-displayphoto-shrink_200_200/0/1704840205744?e=2147483647&v=beta&t=G6Ge3sPAV4rh5QL6cdBU-2yxdwA198tc5zu9wIRdWMk",
        },
        {
          id: 3,
          name: "Ramanathan S",
          designation: "Student",
          image:
            "https://media.licdn.com/dms/image/v2/D4D03AQEYIwB_2oL2CA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708015265342?e=2147483647&v=beta&t=VdFr_SpzGIFus1XdVClv3J5aPB1rF541guoLve_sBco",
        },
      ],
    },
    {
      longtitle: `<span class="text-gray0 underline">Rethinking IRCTC </span> : a case study for improving the usability and flexibility of train bookings`,
      type: "Product design",
      label: "Rethinking IRCTC",
      id: 1,
      thumbnailVideo: irctcThumbnail,
      shortDescription: "Product design & UX research / 2024",
      // shortDescription: `<span class="text-gray1">Unified Energy Payments </span> is designed to address the fragmented nature of state electricity apps in India, by offering a single platform for bill payments and consumption tracking. `,
      startDate: "September 2024",
      endDate: "November 2024",
      content: <IRCTC />,
      keywords: ["Figma", "Design systems", "UX research"],
    },
    {
      longtitle: `<span class="text-gray0"><code>crispy-player</code></span>  is a simple command line tool that harnesses machine learning to offer real-time video superresolution, enhancing video quality on the fly.`,
      type: "Development",
      label: "Building a realtime super-resolution system",
      id: 2,
      thumbnailVideo: crispyThumbnail,
      shortDescription: "Development / 2022",
      // shortDescription: `<span class="text-gray1">Unified Energy Payments </span> is designed to address the fragmented nature of state electricity apps in India, by offering a single platform for bill payments and consumption tracking. `,
      startDate: "August 2021",
      endDate: "January 2022",
      content: <Crispy />,
      keywords: [
        "Machine Learning",
        "Artificial Intelligence",
        "Python",
        "Tensorflow",
      ],
      collaborators: [
        {
          id: 1,
          name: "Mahesh Nahak",
          designation: "Software Engineer @PrincipalGlobal",
          image:
            "data:image/jpeg;base64,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",
        },
        {
          id: 2,
          name: "Gaurav Khairnar",
          designation: "Software Developer @Uptycs",
          image:
            "https://media.licdn.com/dms/image/D4D03AQFZMyKLOM0QtQ/profile-displayphoto-shrink_200_200/0/1704280855963?e=2147483647&v=beta&t=DPGHJbFdhiIUKm3rY2tIwiM9QwrYpB9VtbO9ujG9ik0",
        },
        {
          id: 3,
          name: "Kshitij Chitnis",
          designation: "Student",
          image:
            "https://media.licdn.com/dms/image/v2/D5603AQHWYObvNAJisQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724163390958?e=2147483647&v=beta&t=L9tmdwaJp10qL2IyEBrO2sEeP3vyFC1YBkFsGUU7j7w",
        },
      ],
    },
    {
      longtitle: `<span class="text-gray0 underline">Qubedo</span> is an in-progress project that helps to transform your design workflow by creating reusable UI components in the cloud - with instant deployment `,
      type: "Hobby project",
      label: "Building a cloud based design system",
      id: 3,
      thumbnailVideo: qubedoThumbnail,
      shortDescription: "Development / 2024",
      // shortDescription: `<span class="text-gray1">Unified Energy Payments </span> is designed to address the fragmented nature of state electricity apps in India, by offering a single platform for bill payments and consumption tracking. `,
      startDate: "September 2024",
      endDate: "November 2024",
      content: <Qubedo />,
      keywords: ["React", "Design systems", "Javascript"],
    },
  ],
};

// {
//   year: "2019",
//   type: "design",
//   label: "Design for donation app",
//   id: "1",
//   imageUrl: ueiThumbnail,
//   thumbnailImage: ueiThumbnail,
//   description:
//     "Design for an app designed to facilitate local donations for noble causes",
//   shortDescription: `<span class="text-gray0">DonateLoc</span> enables people to support local causes through monetary donations - facilitating easy, secure, and impactful donations to local initiatives, making a tangible difference where it matters most.`,
//   startDate: "May 2019",
//   endDate: "",
//   baseColor: "cream",
//   content: [
//     {
//       type: "split-info",
//       content: {
//         label: "Community Aid: A Local Cause Donation App ",
//         description: `DonateLoc is designed to enable easy and secure donations to support local causes, empowering communities to make a difference together. It enables one to discover and contribute to meaningful projects that positively impact your neighborhood.`,
//       },
//     },

//     {
//       type: "carousel",

//       content: {
//         description: "A few screencaps of the design :",
//         slidesSize: 4,
//         items: [
//           {
//             image: donationRegister,
//             description: "Registering on the app as a donor",
//           },
//           {
//             image: donationOTP,
//             description: "Validating OTP during registration",
//           },
//           {
//             image: donationFulfilHome,
//             description:
//               "Home screen - listing down various causes that need help",
//           },
//           {
//             image: donationFulfilSort,
//             description: "Sort and filter for causes",
//           },
//           {
//             image: donationFulfilDetails,
//             description: "Details of a cause",
//           },
//           {
//             image: donationNGORegister,
//             description: "Registering on the app for an NGO",
//           },
//           {
//             image: donationNGODetails,
//             description: "Cause details for NGO",
//           },
//           {
//             image: donationVolunteer,
//             description: "Volunteering for local events",
//           },
//         ],
//       },
//     },
//   ],
//   keywords: ["React", "Typescript", "Node.js"],
// },
// {
//   year: "2020",
//   type: "open-source",
//   label: "React collapsible accordion",
//   id: "2",
//   // videoUrl: accordionVideo,
//   imageUrl: accordionThumbnail,
//   thumbnailImage: accordionThumbnail,
//   description:
//     "An open source node.js package for creating accordions in React",
//   shortDescription: `<code class="text-gray0">react-accordion-collapsible</code> is a simple, clean, responsive, and highly customizable accordion component for React projects. It is standalone, natively supports Typescript and is open-sourced at <a class="link" href="https://npmjs.com" target="_blank">npm <sup>&#8599;</sup></a>`,
//   startDate: "June 2019",
//   endDate: "",
//   baseColor: "cream",
//   primaryButton: {
//     label: "Test in a sandbox",
//     url: "https://codesandbox.io/p/sandbox/react-accordion-kf8kgg?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cluo12hig0006356hn77xvbte%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cluo12hif0002356havaqdwb2%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cluo12hif0003356h0ufzfnz8%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cluo12hif0005356hzuuhj24y%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B44.51429435364046%252C55.48570564635954%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cluo12hif0002356havaqdwb2%2522%253A%257B%2522id%2522%253A%2522cluo12hif0002356havaqdwb2%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522cluo12hif0005356hzuuhj24y%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cluo12hif0004356hqvv6asi7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522cluo12hif0005356hzuuhj24y%2522%252C%2522activeTabId%2522%253A%2522cluo12hif0004356hqvv6asi7%2522%257D%252C%2522cluo12hif0003356h0ufzfnz8%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cluo12hif0003356h0ufzfnz8%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
//   },
//   content: [
//     {
//       type: "split-info",
//       content: {
//         label: "The problem",
//         description: `Back in 2019, I was working on a couple of projects, including my <a href="https://yatishkelkar.netlify.app" target="_blank">old portfolio <sup>&#8599;</sup> </a> which was to include a FAQ section.
//           Traditionally such sections have always used collapsible UI elements - some call it <i>accordions</i>, others prefer to call it as <i>spoilers</i>.
//           <br/><br/>
//           But what struck me was the sheer complexity of the countless accordion packages out there. They felt over-engineered, bloated and too complex to implement, especially for someone who is new to React.
//           <br/><br/>
//           I decided to go forward with instead doing my own implementation for this simple functionality, and later extracted this functionality to create my first open source contribution to npm - <code>react-accordion-collapsible</code>.
//           `,
//       },
//     },
//     {
//       type: "embed",
//       content: {
//         description: "Interact with the component in a sandbox -",
//         embedHeight: "90vh",
//         embedURL:
//           "https://codesandbox.io/p/sandbox/react-accordion-kf8kgg?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clvkkogpc00063b5u00uwyvuc%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clvkkogpc00023b5u2k1lkuqt%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clvkkogpc00033b5uxiy6q15l%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clvkkogpc00053b5ulu7a0jpj%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clvkkogpc00023b5u2k1lkuqt%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvkkogpb00013b5uy8kkc2yb%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%257D%255D%252C%2522id%2522%253A%2522clvkkogpc00023b5u2k1lkuqt%2522%252C%2522activeTabId%2522%253A%2522clvkkogpb00013b5uy8kkc2yb%2522%257D%252C%2522clvkkogpc00053b5ulu7a0jpj%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvkkogpc00043b5u7dqbac2r%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clvkkogpc00053b5ulu7a0jpj%2522%252C%2522activeTabId%2522%253A%2522clvkkogpc00043b5u7dqbac2r%2522%257D%252C%2522clvkkogpc00033b5uxiy6q15l%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clvkkogpc00033b5uxiy6q15l%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
//       },
//     },
//     {
//       type: "split-info",
//       content: {
//         label: "Keeping it simple",
//         description: `My primary goal was to create an accordion component that is incredibly easy to use, requiring minimal configuration for anyone to add it to their website. I also wanted to ensure that there was enough flexibility for customization.
//         <br/><br/>
//         This approach is similar to the one employed by libraries like <a href="https://mantine.dev" target="_blank">Mantine <sup>&#8599;</sup> </a>, where components come with default styles that are subtle and blend well with different layouts and designs.
//         <br/><br/>

//         `,
//       },
//     },
//     {
//       type: "feature",
//       content: [
//         {
//           label: "Highly customizable",
//           description:
//             "<code>react-accordion-collapsible</code> has it's own styles, and easily allows you to customize the CSS to your liking.",
//           image: accordionFeature1,
//         },
//         {
//           label: "Hosted on npm",
//           description:
//             "Which means it is open source - and free to use. The MIT License allows you to use it freely in your personal and commercial projects.",
//           image: accordionFeature2,
//         },
//       ],
//     },
//     {
//       type: "split-info",
//       content: {
//         label: "Future scope",
//         description: `In the near future, I plan to expand the functionality of this package, with the additions of modular components - which will allow users to <i>build</i> their own components while retaining other styling and default behaviour.

//         `,
//       },
//     },
//   ],
//   keywords: ["React", "Typescript", "Node.js"],
// },
// {
//   year: "2021",
//   type: "app",
//   label: "PTWikki - a healthcare platform",
//   id: "3",
//   imageUrl: ptwikkiThumbnail,
//   thumbnailImage: ptwikkiThumbnail,
//   description:
//     "Unified platform to manage patients, appointments, conversations and labs.",
//   shortDescription: `PTWikki is an AI based platform to connect, interact, and engage seamlessly with patients. It acts as a unified platform to manage appointments, conversations and labs.`,
//   startDate: "June 2021",
//   endDate: "July 2022",
//   baseColor: "cream",
//   content: [
//     {
//       type: "split-info",
//       content: {
//         label: "The platform",
//         description: `PTWikki helps to generate direct access patients for physical therapy clinics on demand. PTWikki Connect enables increasing awareness of the Physical Therapy community for your clinic via Social Media platforms and generates a user-friendly interface for your clinic to manage your patient relation management workflow. `,
//       },
//     },
//     {
//       type: "timeline",
//       content: {
//         label: "Areas of contribution",
//         items: [
//           {
//             key: "1. The platform",
//             description: `
//               I spent a considerable portion of my time working on building the features of the PTWikki platform.
//               <br/><br/>
//               This included -
//               <ul>

//               <li><b>Notes</b> - a feature similar to any note taking app like <a href="https://evernote.com" target="_blank">Evernote ${linkIcon}</a>, but customized for the platform.</li>
//               <li><b>Conversations</b> - a calling & message managing system.</li>
//               </ul>
//             `,
//           },
//           {
//             key: "2. The Landing page",
//             description: `I contributed towards the development of the landing page of the product.
//             `,
//             image: ptwikkiMobile,
//           },
//           {
//             key: "3. PTWikki Blogs",
//             description: `I developed the blogs section of PTWikki by collaborating with the design team.`,
//             image: ptwikkiBlog,
//           },
//         ],
//       },
//     },
//   ],
//   keywords: ["Angular", "Typescript", "Javascript", "HTML", "CSS"],
// },
// {
//   year: "2022",
//   type: "app",
//   label: "crispy-player - a realtime super-resolution model",
//   id: "4",
//   imageUrl: crispyResult,
//   thumbnailImage: crispyThumbnail,
//   description:
//     "A command line tool to perform upscaling of videos in real time.",
//   shortDescription: `<code>crispy-player</code> is a simple command line tool that harnesses machine learning to offer real-time video superresolution, enhancing video quality on the fly.`,
//   startDate: "October 2021",
//   endDate: "July 2022",
//   baseColor: "cream",
//   content: [
//     {
//       type: "split-info",
//       content: {
//         label: "The problem",
//         description: `
//         Have you ever watched a video online, only to find it looking pixelated and blurry? It's frustrating, isn't it? This often happens because many video players struggle to maintain high-quality playback, especially with low-resolution videos. You want to see all the details clearly, but the player just can't deliver. It's a common problem many of us face when trying to enjoy our favorite videos.

//         <br/><br/>

//         <i>The solution - <b>Superresolution</b></i>
//         <br/><br/>

//         Superresolution is a process that enhances the resolution of an image or video, generating higher-quality content from its lower-resolution counterpart. As part of our university final year project, we decided to tackle this problem statement.`,
//       },
//     },
//     {
//       type: "timeline",
//       content: {
//         label: "The process",
//         items: [
//           {
//             key: "1. Existing research",
//             description: `
//               We spent a considerable portion of our time researching on the work done by others over the last few years.
//               A paper published by Cornell University on <a href="https://arxiv.org/abs/2105.08826" target="_blank">Real-time super-resolution using deep learning ${linkIcon}</a> and another solution that proposed <a href="https://arxiv.org/abs/1611.05250" target="_blank"> superresolution using spatial-temporal networks ${linkIcon}</a> caught our eye.
//               <br/><br/>
//               We compared the three common methods used so far -
//               <ul>

//               <li><b>RNN</b> - Recurrent neural networks</li>
//               <li><b>GAN</b> - General Adverserial Networks</li>
//               <li><b>FSRCNN</b> - Fast Super-resolution Convolutional Neural Network - while uncommon, we decided to go forward with exploring what FSRCNN could offer.</li>
//               </ul>
//             `,
//           },
//           {
//             key: "2. The solution",
//             description: `
//               Our solution mainly consisted of two parts - training a model and generating shaders.<br/><br/>

//               <ul>

//               <li><b>Training the model</b>
//               <br/>We used a dataset of around 4096 images to train a 7-layered ML model that would perform bilinear-interpolation, re-arrangement of data and activation to generate a <i>shader.</i></li>
//               <li><b>Shaders</b> <br/> In simple terms, a shader is like an Instagram filter - it rests on top of your media and applies changes before you view it. We generated shaders in the form of .glsl files.</li>
//               <li><b>Applying the result</b>
//              <br/>
//               The generated shaders were applied over an input video stream. The shader would act like a filter over it, and would perform pixel-aggregation. The result was a video that was much more clear, precise and crisp.
//               </li>
//               </ul>
//             `,
//           },
//           {
//             key: "3. The result",
//             description: `To quantify the results of our model, we measured various parameters, including <a href="https://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio" target="_blank">PSNR ${linkIcon}</a> and used <a href="https://mpv.io' target="_blank">mpv-player ${linkIcon}</a> which is an open source video player commonly used on Unix platforms.
//             `,
//             image: crispyResult,
//           },
//         ],
//       },
//     },
//   ],
//   keywords: ["Python", "Keras", "GLSL", "Machine Learning"],
// },
// {
//   year: "2022",
//   type: "app",
//   label: "Landing page for 3more-tech",
//   id: "5",
//   imageUrl: threemoreThumbnail,
//   thumbnailImage: threemoreThumbnail,
//   description: "Rebranding of a company website",
//   shortDescription: `<a href="https://3more-tech.com" target="_blank">3more-tech${linkIcon}</a> is a forward-thinking tech and services company dedicated to empowering businesses with innovative solutions by using cutting edge technology.`,
//   startDate: "August 2022",
//   endDate: "October 2022",
//   baseColor: "blue",
//   primaryButton: {
//     label: "Open",
//     url: "https://www.canva.com/design/DAGBif-hyxI/_Ezy1MSoUm17lpMnaRvruA/edit?utm_content=DAGBif-hyxI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
//     disabled: true,
//     tooltipIfDisabled:
//       "Due to NDA related reasons, this content is not available",
//   },
//   content: [
//     {
//       type: "split-info",
//       content: {
//         label: "The project",
//         description: `
//         3more - formerly known as Bmore IT Services is a tech-forward company based in Pune, India.
//         <br/></br/>
//         As an individual who previously interned at Bmore, I was tasked with rebranding the company website. My role involved creating a new website that reflects their innovative approach and modern identity. Through this project, I transformed their brand image to align with their vision, resulting in a dynamic website and refreshed brand identity.`,
//       },
//     },
//     {
//       type: "timeline",
//       content: {
//         label: "The process",
//         items: [
//           {
//             key: "1. Understanding the rebrand",
//             description: `
//               During our initial meetings, my first goal was to understand the <b>motivation, process and outcomes</b> of the company re-branding. These concepts would further be evident in the refreshed design and would help in giving the company a brand identity.
//               <br/><br/>

//               Some of the questions we answered included -
//               <ul>

//               <li>What are the company's long-term goals and how does the rebranding fit into them?</li>
//               <li>Who is the target audience, and how will the rebranding appeal to them?</li>
//               <li>What are the key messages and values the new website should communicate?</li>
//               </ul>
//             `,
//           },
//           {
//             key: "2. Iterating the design process",
//             description: `
//               I started with a couple of rough hand-drawn mockups - this helped give the website a structure, and helped to settle down on a layout. With that done, I worked with the team at 3more to finalise the typography and the content strategy.
//               <br/></br/>
//               As a next step, I worked on a couple of initial designs in <a href="https://figma.com">Figma ${linkIcon}</a> so that we could decide on the colors, layout and feel.
//               <br/></br/>
//               <div class="case-study-media">
//                 <img src="${threemoreV1}"/>
//               </div>
//               <small><i>[An initial draft of the design, which was largely based on <a href="https://hype4.academy/articles/design/neubrutalism-is-taking-over-web" target="_blank">Neo-brutalism ${linkIcon}</a></i>  ]</small>
//               <br/></br/>
//               While this design felt fresh, it did not align with the company image. Two additional designs were suggested, in which I modified the landing page to reflect a more concise thought process.
//               <br/><br/>
//               <div class="case-study-media">
//                 <img src="${threemoreV2}"/>
//               </div>
//               <small><i>[The second draft, which included a simpler landing page, with some prominent client brands]</i></small>
//               <br/></br/>
//               <div class="case-study-media">
//                 <img src="${threemoreV3}"/>
//               </div>
//               <small><i>[The third draft, which followed a more generic layout]</i></small>
//               <br/><br/>
//               However, we abandoned the idea of a neo-brutalist website in favour of a more softer pallette and grounded design.
//               `,
//           },
//           {
//             key: "3. Coding - and dealing with content barriers",
//             description: `I worked with various third party tooling to support the website, including <a href="https://www.emailjs.com" target="_blank">email.js${linkIcon}</a>.
//             <br/><br/>
//             During development, we frequently faced isues with getting the required permissions to display a third-party product case study on the website, owing to NDAs and a host of other legal issues.
//               <br/></br>
//               We iterated through the design to appropriately compensate as and when needed.
//             `,
//           },
//           {
//             key: "4. Feedback and handoff",
//             description: `Once the development was complete, we met to discuss a few minor changes suggested by the client. With that done, the project was ready to handoff, so that the team could manage maintainence and future changes.`,
//             image: threemorePortfolio,
//           },
//         ],
//       },
//     },
//     {
//       type: "carousel",
//       content: {
//         description: "A few screencaps of the website :",
//         slidesSize: 2,
//         items: [
//           {
//             image: threemoreOfferings,
//             description: "Offerings page",
//           },
//           {
//             image: threemoreBus,
//             description: "Business information",
//           },
//           {
//             image: threemoreContact,
//             description: "The contact page ",
//           },
//           {
//             image: threemorePortfolio,
//             description: "Portfolio - highlighting the company projects",
//           },
//         ],
//       },
//     },
//   ],
//   keywords: ["HTML", "CSS", "Figma", "Javascript", "React"],
// },
// {
//   year: "2023",
//   type: "app",
//   label: "inter.beta - automated interview feedback",
//   id: "7",
//   imageUrl: interbetaHero,
//   thumbnailImage: interbetaHero,
//   description: "A tool that generates interview feedback in real-time",
//   shortDescription:
//     "inter.beta automates tech interview feedbacks, with an aim towards making the interview process at companies less of a hassle. ",
//   startDate: "February 2023",
//   endDate: "",
//   baseColor: "cream",
//   primaryButton: {
//     label: "Open repo",
//     url: "https://github.com/yatish1606/inter.beta_ml",
//   },
//   content: [
//     {
//       type: "split-info",
//       content: {
//         label: "The problem",
//         description: `
//           It's no joke that interviews in tech companies are a huge palaver - there's so much planning, meetings, negotiation and busywork involved that is feels almost like a chore.
//           <br/><br/>
//           When presented with an ask to create something to solve this, we did a small survey within our company and friends.
//           <br/><br/>
//           <ul>

//               <li><b>Over 27%</b> of candidates felt their interviewer was biased or in a hurry</li>
//               <li>For a company our size, a single job posting could see a minimum of <b>200 applicants</b> - assuming just 30 passed the screenings and were invited to interviews, this would mean over <b>25 to 30 hours</b>were spent just to provide candidate feedback !</li>
//               </ul>
//         `,
//       },
//     },
//     {
//       type: "split",
//       content: {
//         contentPlacement: "right",
//         label: "A hackathon creation",
//         description:
//           "inter.beta was created in a span of 24 hours for the Semicolons 2023 Hackathon organized by Persistent Systems, by a team comprising of 6 engineers.",
//         image: interbetaLaptop,
//         action: {
//           label: "Open Github Repo",
//           href: "https://github.com/yatish1606/inter.beta_ml",
//         },
//       },
//     },
//     {
//       type: "split-info",
//       content: {
//         label: `What matters - <i>and what doesn't</i>`,
//         description: `During the planning stage, we soon stumbled upon a critical question - what is the point at which we say <i>this is enough for now ?</i>
//         <br/> <br/>
//         No reasonable hackathon expects a full-fledged working product within the span of a few hours, but at the same time, it should be good enough to be minimally viable. We decided to play against the strengths of each team member and outlined a set of critical features that were absolutely essential.
//         <br/><br/>
//         These included <b>Login using SSO</b> and <b>real-time results.</b>
//         `,
//       },
//     },
//     {
//       type: "feature",
//       content: [
//         {
//           label: "Login with SSO",
//           description:
//             "inter.beta connects with your company account easily using Company Single-Sign-On enabled for Microsoft managed company domains.",
//           image: interbetaLogin,
//         },
//         {
//           label: "Super fast results",
//           description:
//             "inter.beta listens to your interview and produces a candidate behavioural and technical profile in real time.",
//           image: interbetaOverview,
//         },
//       ],
//     },

//     {
//       type: "timeline",
//       content: {
//         label: "Our timeline",
//         items: [
//           {
//             key: "1. The problem statement",
//             description: `We started by analysing the chosen problem statement - what it means, what is the expection, and most importantly - <i>what will the end result look like?</i>

//             `,
//           },
//           {
//             key: "2. Analysis",
//             description: `At a time when there are so many machine-learning solutions in the market, we wanted inter.beta to solve a real problem, and not provide a solution to a manufactured problem :) <br/></br>
//               This meant going down to the roots - who is this platform for? What will compel them to use it? And are there any points where it creates more problems?
//             `,
//           },
//           {
//             key: "3. Crafting a workflow",
//             description: `Inspired by Tamera Atu's blog on <a href="https://medium.com/@atutamera/less-is-more-the-minimalist-approach-in-ui-ux-case-study-6845f15e6165">Less is more - a minimalistic approach in UX <sup>&#8599;</sup></a>, we decided to keep things simple, both in terms of the flow and the visual design. Our primary persona - the interviewer must start from point A and reach point B with minimal efforts and distractions. <br/><br/>
//               By keeping only necessary details visible to the end user and harnessing the power of ML tools, we designed a workflow that is simple at the outset and hides it's own complexity.
//             `,
//           },
//         ],
//       },
//     },
//   ],
//   keywords: ["React", "Node.js", "Python"],
// },
// {
//   year: "2024",
//   type: "app",
//   label: "Qubedo - a design system in the cloud",
//   id: "8",
//   videoUrl: qubedoVideo,
//   thumbnailImage: qubedoPreferences,
//   description: "Create complete design systems without code",
//   shortDescription:
//     "Qubedo is an in-progress project that helps to transform your design workflow by creating reusable UI components in the cloud - with instant deployment",
//   startDate: "November 2023",
//   endDate: "present",
//   baseColor: "cream",
//   content: [
//     {
//       type: "split-info",
//       content: {
//         label: "The problem",
//         description: `
//           Why a cloud based design system? Does it solve any problem?
//           <br/><br/>
//           Most projects follow a very simple (and yet bloated) cycle - the UI designer designs a component, it is created into a reusable component by the developer, who in turn uses it at multiple places in the project. It's all good until here.
//           <br/><br/>
//           But what happens when the designer wants to update it? <i>The entire cycle is repeated.</i> Is this approach wrong? No, but it is a bit tiresome.
//           <br/><br/> Qubedo puts more power into the hands of the designers - the power to update, and deploy the changes live to all production projects lies with them.
//           <br/><br/>
//           Once a developer creates the initial setup using the Qubedo SDK, any and all changes made to the component in the Qubedo Editor are synced in <i>realtime</i> to all production apps using the component.

//         `,
//       },
//     },
//     {
//       type: "feature",
//       content: [
//         {
//           label: " ",
//           description: "Change preferences",
//           image: qubedoPreferences,
//         },
//         {
//           label: " ",
//           description: "Profile Settings",
//           image: qubedoProfile,
//         },
//         {
//           label: " ",
//           description: "Deploy changes",
//           image: qubedoDeploy,
//         },
//         {
//           label: " ",
//           description: "Creating a new component",
//           image: qubedoNewComponent,
//         },
//       ],
//     },
//   ],
//   keywords: ["React", "Java", "Spring Boot", "Javascript", "Typescript"],
// },

export default portfolioData;
