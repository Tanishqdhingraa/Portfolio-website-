import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "certificates", name: "certificates" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React.js, GitHub, Node.js, Express.js, Nginx, GraphQL, MongoDB, Tailwind CSS, Java, C++ , Framer-motion ,  Next.js , Docker (Ubuntu), JavaScript, TypeScript";

export const PROJECTS = [
  {
    id: 1,
    title: "Bennetts-Eats ",
    description:
      "Resaturant landing page build with Reactjs and Framer-motion.",
    imgSrc: project1,
    link: "https://bennett-eats.vercel.app/",
  },
  {
   
  id: 2,
  title: "Book-hub",
  description: "Platform for buying and reading books.",
  imgSrc: project2,
  link: ""

  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://example.com/portfolio-website",
  },
  
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

;

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  
};
