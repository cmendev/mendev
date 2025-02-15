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
    github: "https://github.com/cmendev/mockups-app",
    image: "/prostock.webp",
    tags: [TAGS.TYPESCRIPT, TAGS.NEXTJS, TAGS.TAILWINDCSS],
  },
  // {
  //   title: "Agriweigh",
  //   description:
  //     "A web application for managing the weight of cattle, horses, and pigs, allowing users to record and visualize key data such as age, code, length, chest circumference, and estimated cow weight calculation, as well as download a PDF report. It helps small farmers weigh livestock without a scale.",
  //   link: "https://agriweigh-latest.onrender.com/",
  //   github: "#", // Replace with the repository link if available
  //   image: "/agriweigh.webp",
  //   tags: [TAGS.JAVA, TAGS.SPRING, TAGS.THYMELEAF, TAGS.TAILWINDCSS],
  // },
  {
    title: "ImageTools",
    description:
      "ImageTools is a powerful and easy-to-use web application for editing images directly in the browser. It allows users to crop, resize, convert image formats, and optimize their images efficiently without the need for complex software installations. Built with Next.js, TypeScript, and Tailwind CSS, it ensures a smooth and responsive experience. The app is ideal for designers, developers, and anyone who needs quick image processing. It also provides real-time previews and a user-friendly interface for seamless interaction.",
    link: "https://image-tools-psi.vercel.app/",
    github: "https://github.com/cmendev/frameit-image",
    image: "/imagetools.webp",
    tags: [TAGS.TYPESCRIPT, TAGS.NEXTJS, TAGS.TAILWINDCSS],
  },
  {
    title: "WeatherCity",
    description:
      "WeatherCity is a real-time weather application that provides up-to-date weather information for cities worldwide. It integrates with the OpenWeatherMap API to fetch accurate forecasts, temperature trends, humidity levels, and more. The app features an intuitive user interface built with Next.js and Tailwind CSS, ensuring a clean and responsive design. Users can search for any city and get instant weather updates with detailed information, including a 7-day forecast. Perfect for travelers, outdoor enthusiasts, and anyone who wants to stay informed about weather conditions.",
    link: "https://weathercity-xi.vercel.app/",
    github: "https://github.com/cmendev/weather",
    image: "/weathercity.webp",
    tags: [TAGS.TYPESCRIPT, TAGS.NEXTJS, TAGS.TAILWINDCSS, TAGS.ZOD],
  },
];
