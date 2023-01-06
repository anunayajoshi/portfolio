import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      name: "KR Modules - Telegram Application with PostgreSQL Database",
      image: "/krmodsvid.gif",
      description:
        "A Telegram Bot that that allowed 500 people in Kent Ridge Hall to list what modules they are taking and find others in the same residence who are taking the same modules. This helped solved the problem of living in the same building yet not knowing that you are taking the same modules as your neighbours and can study together.",
      techStack: [
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          name: "PostgreSQL",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          name: "React",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
          name: "Next.js",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
          name: "Node.js",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          name: "TypeScript",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          name: "Express.js",
        },
      ],
    },
    {
      name: "BBDC Web Scraper",
      image: "/bbdcsold.png",
      description:
        "This screenshot was taken in December, and the earliest practical driving lesson is in May. I therefore built a web scraper using Selenium, that scrapes a Driving Centre's booking portal to inform me when driving lessons are available or dropped by others. This helped me to book driving lessons faster than my peers, whose waiting times were over 6 months. I deployed it on heroku using a cron scheduler to run the script every 5 minutes.",
      techStack: [
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          name: "Python",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
          name: "Selenium",
        },
        {
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
          name: "Heroku",
        },
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects{" "}
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-grey-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
        {/* Projects */}
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row space-y-5 items-center justify-center p-20 md:p-44 h-screen "
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image}
              className=" rounded-2xl object-contain pt-4 w-full h-[400px] md:h-[400px] xl:h-[500px] scale-50 hover:scale-125"
            />

            <div className="flex flex-col space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-left">
                {project.name}
              </h4>

              <div className="flex space-x-4">
                {project.techStack.map((tech, i) => (
                  <div key={i}>
                    <a href="#" className="group relative bg-red-500">
                      <img src={tech.image} className="h-10 w-10" />
                      <span className="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                        {tech.name}
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
