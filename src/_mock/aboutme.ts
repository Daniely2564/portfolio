// ----------------------------------------------

interface AboutMe {
  title: string;
  experiences: {
    title: string;
    since: string;
    company: string;
    bullets: string[];
  }[];
}

export const aboutMe: AboutMe = {
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
