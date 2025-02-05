import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate web developer with a knack for crafting robust and scalable web applications. With of hands-on experience, I have honed my skills in front-end technologies like javascript, React and tailwind, as well as back-end technologies like php, MySQL, Laravel, and Codeineghter. `;

export const ABOUT_TEXT = `I am a fresh graduate from the Informatics Study Program at Singaperbangsa University of Karawang with a keen interest in computer science and technology. I have experience in software programming, especially in website development. I have participated in the Independent Study program at PT Ruangguru, specializing in Front-End Engineering, and hold a Web Developer certification from VSGA Kominfo. I possess strong communication skills, adapt easily to new environments, and excel in critical thinking.`;

export const EXPERIENCES = [
  {
    year: "Feb 2023 - Nov 2023",
    role: "Data Entry",
    company: "PDI Karawang.",
    description: ` Input and verify data into database systems with absolute accuracy. 
 Organize, categorize, and update data based on relevant categories in both digital and physical formats. 
 Verify the accuracy of data received from forms and physical documents before it is entered into the system.`,
    technologies: ["Microsoft Word","Excel"],
  },
  {
    year: "Sep 2022 - Dec 2022",
    role: "Front End Developer",
    company: "Ruang Guru Indonesia",
    description: `Learning software engineering, especially front end engineering by creating website interfaces. Design and maintain web applications using JavaScript, React.js, and RESTFUL API for data communication. .`,
    technologies: ["Javascript", "React", "Tailwind", "RESTFUL API"],
  },
  {
    year: "Jan 2023 - Nov 2023",
    role: "BLM FASILKOM",
    company: "Universitas Singaperbangsa Karawang",
    description: `Contribute in drafting and designing regulations in accordance with the Meeting, and manage work programs related to legislation and regulation at the Faculty level. In addition, I contributed to the work program by becoming the secretary of the event, the event division`,
    technologies: ["Microsoft Word", "Excel", "Canva"],
  },
];

export const PROJECTS = [
  {
    title: "Airplane Ticket Booking Web",
    image: project1,
    description:
      "A web application developed to manage flight ticket bookings using CRUD functionality.This function allows you to create, read, update, and delete. ",
    technologies: ["HTML", "CSS", "PHP", "MySql"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An  web application for managing data presensi Employee, with features such as task creation, update, and delete",
    technologies: ["Codeigniter4", "CSS", "Bootstrap", "MySql"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Galery Gram",
    image: project4,
    description:
      "The GaleyGram website is a implementation of website development using REST API. This website features the ability to add photos, edit posts, and delete posts.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "RESTFUL API"],
  },
];

export const CONTACT = {
  address: "Karawang, Jawa Barat ",
  phoneNo: "+628988909912 ",
  email: "Sylfia02@gmail.com",
};
