export interface EducationItem {
  where: string;
  degree: string;
  score: string;
  startDate: string;
  endDate: string;
  achievements?: string;
  relevantCoursework?: string[];
}

const educationList: EducationItem[] = [
  {
    where: "Georgia Institute of Technology",
    degree: "Masters in Computer Science (spec Human Computer Interaction)",
    score: "GPA 4.0 / 4.0",
    startDate: "2024",
    endDate: "2026",
    relevantCoursework: [
      "Software Processes",
      "Ubiquitous Computing",
      "Software Architechture",
      "Human Centred Design",
      "Human Computer Interaction",
    ],
  },
  {
    where: "Savitribai Phule Pune University",
    degree: "Bachelors in Engineering (Information Technology)",
    score: "GPA 9.82 / 10",
    startDate: "2018",
    endDate: "2022",
    relevantCoursework: [
      "Data Structures",
      "Operating Systems",
      "Software Processes",
      "Computer Networks",
      "Human Computer Interaction",
    ],
    achievements: "Stood #3 in my department and #5 at institute level",
  },
];

export default educationList;
