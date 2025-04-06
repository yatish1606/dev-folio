import accordion from "../assets/images/accordion_Thumbnail.svg";
import badge from "../assets/images/badge_Thumbnail.svg";
import donation from "../assets/images/donation_Thumbnail.svg";
import interbeta from "../assets/images/interbeta_Thumbnail.svg";
import threeMore from "../assets/images/threemore_Thumbnail.svg";
import webeye from "../assets/images/webeye_Thumbnail.webp";

export interface PlayItem {
  label: string;
  href: string;
  image: string;
  description: string;
}

export const playItems: PlayItem[] = [
  {
    label: "Pretty badges for React",
    href: "https://github.com/yatish1606/react-pretty-badge",
    image: badge,
    description: "Open source / 2025",
  },
  {
    label: "Automated interview feedback tool",
    href: "https://github.com/yatish1606/inter.beta_ml",
    image: interbeta,
    description: "Development / 2024",
  },
  {
    label: "Digital Portfolio for 3more-tech",
    href: "https://3more-tech.com",
    image: threeMore,
    description: "Development / 2023",
  },
  {
    label: "Customizable accordions in React",
    href: "https://www.npmjs.com/package/react-accordion-collapsible",
    image: accordion,
    description: "Open source / 2022",
  },
  {
    label: "Product Portfolio for WebEye IoT",
    href: "https://webeye-iot.pages.dev",
    image: webeye,
    description: "Freelance / 2022",
  },
  // {
  //   label: "Dashboard design for UOPeople",
  //   href: "https://dribbble.com/shots/20964019-Online-University-OUPeople?utm_source=Clipboard_Shot&utm_campaign=Yatish1606&utm_content=Online%20University%20-%20OUPeople&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Yatish1606&utm_content=Online%20University%20-%20OUPeople&utm_medium=Social_Share",
  //   image: uopeople,
  //   description: "Product design / 2022",
  // },
  {
    label: "Designing a donation platform",
    href: "https://dribbble.com/shots/17733263-Donation-platform?utm_source=Clipboard_Shot&utm_campaign=Yatish1606&utm_content=Donation%20platform&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Yatish1606&utm_content=Donation%20platform&utm_medium=Social_Share",
    image: donation,
    description: "Product design / 2021",
  },
];
