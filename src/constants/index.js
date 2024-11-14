import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `Driven and versatile Full Stack Web Developer with 6 months of internship experience and strong skills in Python, Django, HTML, CSS, JavaScript, REST APIs, and Bootstrap. Currently pursuing an MCA with a Bachelor's in Computer Applications, I bring technical expertise and a problem-solving mindset ready to add value in an entry-level rol.`;

export const ABOUT_TEXT = `Ambitious and resourceful Full Stack Developer skilled in Python, Django, JavaScript, and REST APIs.
                           With a Bachelor’s in Computer Applications and 6 months of internship experience,with a NACTET and Hackerrank certification 
                           I'm eager to make an impact in an entry-level role by leveraging my technical skills to drive project success.
                              My journey in web development began with a deep curiosity for how things work, 
                              and it has evolved into a career where I continuously strive to learn and adapt to new
                              challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver 
                              high-quality solutions. Outside of coding, I enjoy staying active, exploring new
                                technologies, and contributing to open-source projects.
                                `;
                          

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: " Full Stack Developer Intern",
    company: "Luminar Technolab.",
    description: `Optimized and maintained web applications using Pythgon Django, JavaScript, HTML, CSS, React.js. Implemented RESTful APIs and integrated with SQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Python","Django","Javascript","html","CSS", "React.js", "MySql"],
  },
 
  {
    year: "2022 - 2023",
    role: "Customer  Service Agent",
    company: "RKH Qitarat",
    description: `Contract employee for FIFA during the 2022 World Cup under Talento Services WLL.
                  Built rapport with customers through courteous and professional communication, 
                  ensuring a positive experience for all stakeholders. 
                Provided exceptional customer service by addressing inquiries and resolving issues efficiently.`,
                  technologies: [],
  },
 
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      " Developed a robust platform e-commerce platform using Django, enabling users to browse products, manage shopping carts, and complete purchases. Implemented user authentication, order tracking and integrated payment gateways to ensure a seamless shopping experience. Utilized HTML, CSS and Bootstrap for responsive and attractive UI design.",
    technologies: ["Python","Django", "CSS", "Bootstrap", "MySql"],
  },
  {
    title: "Recipe Management",
    image: project2,
    description:
      "The Recipe Management REST API is a web service designed to allow users to create, read, update, and delete (CRUD) recipes. It provides a robust backend solution for managing culinary recipes, making it easy for users to store and access their favorite dishes from anywhere.",
    technologies: ["Python","Django", "CSS", "Bootstrap", "MySql","RestAPI"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
    {
    title: "Movie App",
    image: project5,
    description:
      "The movie app uses a Django backend with Django Rest Framework to create a RESTful API for managing movies, including adding, updating, and retrieving movie details. The frontend is built with React, allowing users to interact with the backend to view movies, search, and manage favorites. The app communicates between the backend and frontend using Axios or Fetch API calls, rendering dynamic content based on user interactions..",
    technologies: ["Python","Django", "CSS", "Bootstrap", "MySql","RestAPI"],
    },
];

export const CONTACT = {
  address: "Muvattupuzha, Ernakulam, 686673 ",
  phoneNo: "+91 8139010200 ",
  email: "kasyapjn46@gmail.com",
};
