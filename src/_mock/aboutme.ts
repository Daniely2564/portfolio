import rutgersImg from "../assets/education/rutgers.jpeg";
import middlesexCollegeImg from "../assets/education/middlesex-college.jpg";

interface MyExperience {
  title: string;
  experiences: {
    title: string;
    since: string;
    company: string;
    bullets: string[];
  }[];
}

export const experience: MyExperience = {
  title: "Experience ",
  experiences: [
    {
      title: "Software Engineer",
      since: "Feb. 2024 ‑ Now",
      company: "Esri",
      bullets: [
        `Managed and optimized the team’s CI/CD pipelines and DevOps workflows using GitHub Actions, handling deployments to ECS for build outputs
and ensuring efficient delivery of static assets to CDN hosts.`,
        `Managed the team’s ECS machine, which hosts artifacts and builds from multiple ArcGIS Online teams. Studied and implemented backup,
network routing, and forwarding strategies from IST and developed a workflow for rapid recovery in case of critical failure, ensuring the machine
can go live within a day.`,
      ],
    },
    {
      title: "Product Engineer",
      since: "Jun. 2021 - Now",
      company: "Esri",
      bullets: [
        `Solely rebuilt the QA Dashboard, a central platform for monitoring ArcGIS Online status and facilitating communication between users to quickly
identify and resolve critical system failures.`,
        `Developed the application using Next.js, Node.js, and MongoDB, ensuring a robust and scalable architecture and automated CI/CD pipelines
with Jenkins, streamlining the build and deployment processes for faster and more efficient updates.`,
        `Created a Github issue management bot to verify each issue across the repositories to ensure proper triaging, correct labeling, and accurate
placement in the appropriate pipeline. To encourage timely issue resolution within release cycles, it automatically generates summary emails
to keep engineers informed. Built using Typescript and automated using Github Actions.`,
      ],
    },
    {
      title: "Full Stack Engineer, Part Time",
      since: "Jan. 2018 ‑ Jun. 2021",
      company: "Honors Review",
      bullets: [
        `Developed and implemented a test‑driven online Learning Management System (LMS) utilized daily by students, teachers, parents and administrators,
, employing React.js framework Next.js for the frontend and GraphQL and Node.js for backend.`,
        `Constructed the complete infrastructure of the LMS using Amazon Web Services to ensure the provision of scalable and cost‑efficient service.`,
        `Duplicated a commercially‑ready version of the LMS, customizing it for a third‑party organization and selling the software to such third‑party for
$10,000.`,
        `Integrated a detailed analysis reporting system that identifies individualized areas of improvement using data from their previous tests.`,
      ],
    },
  ],
};

export const education = {
  title: "Education",
  schools: [
    {
      name: "Rutgers University - New Brunswick",
      duration: "Sept. 2019 - May. 2021",
      gpa: "3.7/4",
      degree: "B.S. in Computer Science",
      img: rutgersImg,
      items: [
        "Dean’s List for the 2020 Spring Semester",
        "Dean’s List for the 2020 Fall Semester",
      ],
    },
    {
      name: "Middlesex County College",
      duration: "Sept. 2017 ‑ May. 2019",
      gpa: "3.6/4",
      degree: "A.S. in Computer Science",
      img: middlesexCollegeImg,
      items: [
        "Dean’s List for the 2017 Fall Semester",
        "Dean’s List for the 2018 Fall Semester",
      ],
    },
  ],
};

export const about = {
  title: "Let me introduce myself",
  details: [
    {
      id: 1,
      text: `I'm Daniel Yoo, a passionate software engineer born in 
      South Korea and currently living in New Jersey, USA.`,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: "I got my bachelor's degree in Computer Engineering at 2021.",
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: `The very first day I typed "Hello world" was at 2017 summer which got me into the whole new world.
Soon as I saw "Hello world" printed on the screen, I knew that this is what I want to do for the rest of my life and
decide to pursue my career in software engineering.`,
      icon: "🎯",
    },
    {
      id: 4,
      text: `Before starting my computer science degree, I self-taught 
      basics and intermediate computer science concepts. For the places I worked for part time,
      I provided programs that were usable by the company and tried various programming tools.
      Starting from Java Swing, HTML, CSS, JavaScript, and React. To build an entire
      full stack application, I also picked up Node.js, MongoDB and built an entire 
      infrastructure using AWS`,
      icon: "💻",
    },
    {
      id: 5,
      text: `In the midst of desire to teach others free, I created my own Youtube Channel
      which now has more than three thousand subscribers. 
      These skills I learned while helping other companies and teaching others,
      I taught from how to build a desktop application to building a full stack application.`,
      icon: "🔎",
    },
    {
      id: 6,
      text: `With this passion, I also teach students web development at thedreaminc which helps
      students in countries who can't afford to learn how to code.`,
      icon: "💭",
    },
  ],
};
