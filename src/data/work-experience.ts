export interface WorkExperienceItem {
  companyLogo: string;
  companyName: string;
  companyWebsite: string;
  startDate: string;
  endDate: string;
  totalTime: string;
  type: "FULL TIME" | "INTERNSHIP" | "FREELANCE";
  currentRoleAtCompany: string;
  isCurrent?: boolean;
  achievements?: { label: string; type: "award" | "milestone" }[];
  job: string;
  role: string;
}

const workExperienceList: WorkExperienceItem[] = [
  {
    role: "Associate SDE-2",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4b2xFrY7mhOS9pGOnckG88R0ZzHpzYZ7hA&s",
    companyName: "Morgan Stanley",
    companyWebsite: "https://www.morganstanley.com",
    startDate: "February 2025",
    endDate: "present",
    totalTime: "3 years",
    currentRoleAtCompany: "Software Engineer",
    type: "FULL TIME",
    isCurrent: true,
    job: `Contributing to the Wealth Management team as an Associate SDE-2.`,
    achievements: [
      { label: "Identified as a top talent for FY 2023", type: "milestone" },
      {
        label:
          "Received the High Five award for excellent client feedback in April 2023.",
        type: "award",
      },
      {
        label:
          "Received the Bravo award for commitment and exceptional contribution in April 2024 and July 2023.",
        type: "award",
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWeDolEN8XW0dGulkXMANGDlRk6EoBopMhKPY6JWIog&s",
    companyName: "Persistent Systems",
    companyWebsite: "https://www.persistent.com",
    startDate: "April 2024",
    endDate: "February 2025",
    totalTime: "3 years",
    currentRoleAtCompany: "Software Engineer",
    type: "FULL TIME",
    isCurrent: false,
    job: `Led a team of 4 to build an innovative Insurtech platform for a top US insurance firm.`,
    achievements: [
      { label: "Identified as a top talent for FY 2023", type: "milestone" },
      {
        label:
          "Received the High Five award for excellent client feedback in April 2023.",
        type: "award",
      },
      {
        label:
          "Received the Bravo award for commitment and exceptional contribution in April 2024 and July 2023.",
        type: "award",
      },
    ],
  },
  {
    role: "Software Engineer",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWeDolEN8XW0dGulkXMANGDlRk6EoBopMhKPY6JWIog&s",
    companyName: "Persistent Systems",
    companyWebsite: "https://www.persistent.com",
    startDate: "August 2022",
    endDate: "March 2024",
    totalTime: "3 years",
    currentRoleAtCompany: "Software Engineer",
    type: "FULL TIME",
    isCurrent: false,
    job: `Took the lead in the UI development of <span class='text-gray1'>Digital<sup><small class='text-gray1'>1st</small></sup></span> - a next-gen FinTech solution for a US clients.`,
    achievements: [
      { label: "Identified as a top talent for FY 2023", type: "milestone" },
      {
        label:
          "Received the High Five award for excellent client feedback in April 2023.",
        type: "award",
      },
      {
        label:
          "Received the Bravo award for commitment and exceptional contribution in April 2024 and July 2023.",
        type: "award",
      },
    ],
  },
  // {
  //   role: "Web intern",
  //   companyLogo: threemoreIcon,
  //   companyName: "3more IT Services",
  //   companyWebsite: "https://3more-tech.com",
  //   startDate: "May 2021",
  //   endDate: "June 2022",
  //   totalTime: "6 month",
  //   type: "INTERNSHIP",
  //   currentRoleAtCompany: "Frontend Developer",
  //   job: `Designed and developed high impact web solutions for multiple company business lines.`,
  // },
  // {
  //   role: "Product Design intern",
  //   companyLogo:
  //     "https://media.licdn.com/dms/image/v2/C510BAQF0Rum_yySW0g/company-logo_200_200/company-logo_200_200/0/1630596274701?e=2147483647&v=beta&t=OxR2UKWv1ebdOQ_AogyTWLARqFjwXPa5RRZHoUj7m0U",
  //   companyName: "FortyTwo Labs",
  //   companyWebsite: "https://www.fortytwolabs.com",
  //   startDate: "October 2020",
  //   endDate: "December 2020",
  //   totalTime: "3 month",
  //   type: "INTERNSHIP",
  //   currentRoleAtCompany: "Product Design Intern",

  //   job: `Contributed to the prototyping and design of a key I-AM cryptography platform.`,
  // },
  // {
  //   role: "UI intern",
  //   companyLogo: "https://mavoix.in/mavoix.PNG",
  //   companyName: "Mavoix Solutions",
  //   companyWebsite: "https://mavoix.in",
  //   startDate: "April 2020",
  //   endDate: "August 2020",
  //   totalTime: "3 month",
  //   type: "INTERNSHIP",
  //   currentRoleAtCompany: "React Native Intern",
  //   job: `Developed the Android and iOS applications for the company's flagship product.`,
  // },
];

export default workExperienceList;
