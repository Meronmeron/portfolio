import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tweet,
  ims,
  diceg,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Wordpress developer",
    icon: web,
  },
  {
    title: "React js Developer",
    icon: reactjs,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "ECAS",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Wordpress Develo[er",
    company_name: "Visionaries ICT Solutions PLC",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2023",
    points: [
      "Developing and maintaining web applications using diffefernt plugins,page builders,editors and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Visionaries ICT Solutions",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using PHP,javascript,Ajax and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "ECAS",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js,Wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "BUilding websites.",
    ],
  },
];


const projects = [
  {
    name: "QR-Code based IMS",
    description:
      "Web-based platform that allows users to search, product, and manage product rentals from various providers, providing a convenient and efficient solution for storing and puchasing managment needs.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootsrap",
        color: "pink-text-gradient",
      },
    ],
    image:ims,
    source_code_link: "https://github.com/Meronmeron/QRcode-based-inventory-management-system-main",
  },
  {
    name: "Twitter Clone",
    description:
      "A social media Web application that enables users to peaple follow,unfollow and share tweets",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tweet,
    source_code_link: "https://github.com/Meronmeron/Twitter-Django",
  },
  {
    name: "Dice Game",
    description:
      "A Simple Dice game made using a react",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: diceg,
    source_code_link: "https://github.com/Meronmeron/Dicegame-react",
  },
];

export { services, technologies, experiences, projects };