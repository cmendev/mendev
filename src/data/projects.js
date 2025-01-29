import { TAGS } from "./tags";

export const PROJECTS = [
  {
    title: "Encrypt",
    description:
      "I created the encryptor as a challenge and an interactive way of learning. This challenge was exciting for me because I integrated it with one of my favorite technologies: React.",
    link: "https://andresmgdev.github.io/encrypt/",
    github: "#", // Replace with the repository link if available
    image: "/encrypt.webp",
    tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.CSS, TAGS.HTML],
  },
  {
    title: "ProStock",
    description:
      "Developed for inventory management, this project includes key sections such as Home, Products, Profile, Login, and Register, ensuring smooth navigation within the application built with Next.js v14 and styled with Tailwind CSS.",
    link: "https://prostock.vercel.app/",
    github: "#", // Replace with the repository link if available
    image: "/prostock.webp",
    tags: [TAGS.TYPESCRIPT, TAGS.NEXTJS, TAGS.TAILWINDCSS],
  },
  {
    title: "Agriweigh",
    description:
      "A web application for managing the weight of cattle, horses, and pigs, allowing users to record and visualize key data such as age, code, length, chest circumference, and estimated cow weight calculation, as well as download a PDF report. It helps small farmers weigh livestock without a scale.",
    link: "https://agriweigh-latest.onrender.com/",
    github: "#", // Replace with the repository link if available
    image: "/agriweigh.webp",
    tags: [TAGS.JAVA, TAGS.SPRING, TAGS.THYMELEAF, TAGS.TAILWINDCSS],
  },
];
