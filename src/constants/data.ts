import * as tStack from "./tStack";
import linguistic from "../assets/Linguistic.png";
import product from "../assets/product.png";
import medScan from "../assets/medScan.png";
import IRIS from "../assets/IRIS.png";
import todo from "../assets/todo.png";

export const Bio: { [key: string]: string } = {
  Name: "Abhay Verma",
  desc: "As a driven Frontend Developer and Competitive Coder, I excel in Web Development across various programming languages. My expertise extends to Full Stack development, ensuring holistic project delivery. Beyond this, I'm delving into Machine Learning, eager to harness its power for innovative solutions and enhanced user experiences.",
  description:
    "I have completed my B.Tech. program in Computer Science and Engineering at Pranveer Singh Institute of Technology, Kanpur. With a deep passion for web development, machine learning, and various programming languages, I'm dedicated to crafting innovative solutions and taking on complex challenges.",
  description2:
    "Join me on my journey as I combine my academic achievements with my enthusiasm for web development. Together, we can push the boundaries of what's possible in the ever-evolving tech world.",
  tag: "Let's build the future together.",
};

export const prof: string[] = [
  "Software Engineer",
  "Full Stack Developer",
  "Competitive Coder",
];

export const github: string = "https://github.com/ABHAY-05";
export const linkedin: string =
  "https://www.linkedin.com/in/abhay-verma-b3987a210";
export const email: string = "Abhayvermajune5@gmail.com";
export const phone: string = "+91 8756782835";
export const resume: string =
  "https://drive.google.com/file/d/1fwzDc2b6rboE9n8Gze2z4dKm3GO2e4rJ/view?usp=sharing";

export const skills: { [key: string]: string } = {
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  cplus:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  nodeJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongo:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  tensorflow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  reactRedux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  next: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  fast: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  openCV:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
};

export const codingLinks: { [key: string]: string } = {
  leetcode: "https://leetcode.com/Abhay-verma",
  hackerRank: "https://www.hackerrank.com/2001640100006_2C",
  gfg: "https://auth.geeksforgeeks.org/user/abhayvermajune5",
  github: "https://github.com/ABHAY-05",
};

type Projects = { [key: string]: string | JSX.Element[] }[];

export const projects: Projects = [
  {
    id: "1",
    title: "Linguistic OCR",
    date: "09/2022 - 12/2022",
    techStack: [
      tStack.python,
      tStack.html,
      tStack.css,
      tStack.bootstrap,
      tStack.javaScript,
      tStack.tensorflow,
      tStack.flask,
    ],
    img: linguistic as string,
    style:
      "border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0",
    lstyle:
      "border-blue-500 bg-gradient-to-br from-blue-300 via-gray-100 to-white shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0",
    tstyle: "text-blue-400",
    bstyle:
      "text-blue-400 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 duration-500 border-2 border-blue-500",
    a: "Developed a versatile ML model for text extraction, captcha and handwriting recognition, license plate detection from images, and language translation.",
    b: "Collaborated in a 5-member team to integrate ML techniques into a responsive web page design.",
    c: "Held roles as an ML Developer and Backend Manager, showcasing expertise in both aspects",
    link: "https://github.com/ABHAY-05/Linguistic-OCR.git",
  },
  {
    id: "2",
    title: "Product Recommendation System",
    date: "08/2023 - 9/2023",
    techStack: [
      tStack.react,
      tStack.redux,
      tStack.express,
      tStack.javaScript,
      tStack.mongoDB,
      tStack.nodeJS,
    ],
    img: product as string,
    style:
      "border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0",
    lstyle:
      "border-yellow-500 bg-gradient-to-br from-yellow-200 via-gray-100 to-white shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0",
    tstyle: "text-yellow-400",
    bstyle:
      "text-yellow-400 shadow-sm shadow-yellow-500 hover:shadow-md hover:shadow-yellow-500 duration-500 border-2 border-yellow-500",
    a: "Implemented a full-stack recommendation system providing personalized product recommendations based on user preferences.",
    b: "Dynamic interfaces with ReactJS, efficient server-side processing with Express.js.",
    c: "Mongoose is used for data modeling, boosting system accuracy and scalability.",
    link: "https://github.com/ABHAY-05/Product-Recommendation-System.git",
    site: "https://myproduct-recommendation-system.vercel.app",
  },
  {
    id: "3",
    title: "IRIS",
    date: "10/2021 - 12/2021",
    techStack: [
      tStack.python,
      tStack.chatBot,
      tStack.ml,
      tStack.speechRecognition,
      tStack.textToSpeech,
    ],
    img: IRIS as string,
    style:
      "border-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black shadow-sm shadow-emerald-400 grayscale filter duration-500 hover:shadow-md hover:shadow-emerald-400 hover:grayscale-0",
    lstyle:
      "border-emerald-500 bg-gradient-to-br from-emerald-300 via-gray-100 to-white shadow-sm shadow-emerald-500 grayscale filter duration-500 hover:shadow-md hover:shadow-emerald-500 hover:grayscale-0",
    tstyle: "text-emerald-500",
    bstyle:
      "text-emerald-400 shadow-sm shadow-emerald-500 hover:shadow-md hover:shadow-emerald-500 duration-500 border-2 border-emerald-500",
    a: "Created IRIS Virtual Assistant using Python, ML, and Speech Recognition technologies.",
    b: "Designed a versatile assistant for tasks like sending emails, providing weather reports, delivering news, etc, all via voice commands.",
    link: "https://github.com/ABHAY-05/IRIS.git",
  },
  {
    id: "4",
    title: "MedScan",
    date: "02/2023 - 05/2024",
    techStack: [
      tStack.react,
      tStack.python,
      tStack.fastAPI,
      tStack.javaScript,
      tStack.css,
      tStack.tailwind,
      tStack.ml,
      tStack.tensorflow,
    ],
    img: medScan as string,
    style:
      "border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0",
    lstyle:
      "border-blue-500 bg-gradient-to-br from-blue-300 via-gray-100 to-white shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0",
    tstyle: "text-blue-500",
    bstyle:
      "text-blue-400 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 duration-500 border-2 border-blue-500",
    a: "Developed MedScan: A medical image processing web app using React, FastAPI, and Tensorflow.",
    b: "Implemented TensorFlow.js for real-time medical condition detection, improving healthcare outcomes.",
    c: "Collaborated effectively in a diverse team, delivering a user-friendly, secure app with positive user feedback.",
    link: "https://github.com/ABHAY-05/MEDSCAN.git",
    site: "https://medscan.vercel.app",
  },
  {
    id: "5",
    title: "Todo App",
    date: "07/2024 - 07/2024",
    techStack: [
      tStack.nextJS,
      tStack.react,
      tStack.redux,
      tStack.javaScript,
      tStack.css,
      tStack.tailwind,
    ],
    img: todo as string,
    style:
      "border-violet-500 bg-gradient-to-br from-violet-950 via-gray-950 to-black shadow-sm shadow-violet-500 grayscale filter duration-500 hover:shadow-md hover:shadow-violet-500 hover:grayscale-0",
    lstyle:
      "border-violet-500 bg-gradient-to-br from-violet-300 via-gray-100 to-white shadow-sm shadow-violet-500 grayscale filter duration-500 hover:shadow-md hover:shadow-violet-500 hover:grayscale-0",
    tstyle: "text-violet-500",
    bstyle:
      "text-violet-400 shadow-sm shadow-violet-500 hover:shadow-md hover:shadow-violet-500 duration-500 border-2 border-violet-500",
    a: "Developed a Todo List application with Next.js, React, Redux, and Tailwind CSS, featuring user authentication, task management, and password recovery.",
    b: "Implemented secure user authentication processes and comprehensive task management features, enhancing user productivity and data security.",
    c: "Ensured responsive design and efficient state management, delivering a consistent user experience across devices.",
    link: "https://github.com/ABHAY-05/todo-app.git",
    site: "https://todo-app-orcin-two.vercel.app/",
  },
];
