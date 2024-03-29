import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center text-left"
    >
      <h3 className="absolute top-24 xl:top-12 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Experience
      </h3>

      <div className="mt-18 w-full flex space-x-5 overflow-x-scroll p-3 snap-x snap-mandatory scrollbar-thin scrollbar-track-grey-400 scrollbar-thumb-[#F7AB0A]/80 ">
        <Card
          title="Teaching Assistant - CS2102 Database Systems"
          companyName="National University of Singapore"
          image="/nus.jpg"
          techStack="SQL | PostgreSQL |"
          duration="Jan 2023 - May 2023"
          points={[
            "Taught 2 classes of 80 students total and provided weekly consultations.",
            "Led tutorial lessons about Relational Algebra, SQL and PostgreSQL, ER Diagrams, Functions and Triggers, Functional Dependencies and Normalisation of Databases",
            "Assisted with grading over 200 students ER diagram projects, schema creation, and translation of the diagram into SQL",
            "Achieved over 90% student satisfaction ratings and positive feedback on teaching style and effectiveness.",
          ]}
        />

        <Card
          title="Software Engineer Intern"
          companyName="Wildcats.io"
          image="/wildpaws.png"
          techStack="NextJS | React Native | TailwindCSS"
          duration="May 2022 - July 2022"
          points={[
            "Developed a React Native mobile application for the company’s new product, Wero, which is a platform to form communities of entrepreneurs. Connected APIs to the front-end and created new features and screens built, together with unit tests.",
            "Developed a NextJS web application for the company’s new Website, Wildpaws NFT, a NFT pet adoption platform. Utilised TailwindCSS to create the UI Design from Figma.",
          ]}
        />
        <Card
          title="Innovation Intern"
          companyName="Wildcats.io"
          image="/wildcatslogo.jpeg"
          techStack="Entrepreneurship | Project Management | Design Thinking"
          duration="January 2021 - August 2021"
          points={[
            "Managed challenges being run for over 300 youth in Thailand, Vietnam and Cambodia to pitch business ideas and develop them into running businesses.",
            "Was responsible for building a new improved Master-class to learn how to develop a business idea into a pitch deck, by creating bite-sized videos about market research, user persona and user journeys, financial projections, prototyping and devising a pitch deck.",
            "Brought together a community of aspiring entrepreneurs and presented workshops to over 200 university students.",
          ]}
        />
        <Card
          title="Digital Marketing Intern"
          companyName="DoctorxDentist"
          image="/dxd.jpg"
          techStack="SEO | Social Media Marketing | Google Ads"
          duration="Dec 2016 - Mar 2017"
          points={[
            "Improved the SEO of website by optimizing images and adding new backlinks.",
            "Designed free e-book to obtain email database and utilised influencer marketing to increase company's reach, growing company's Instagram and Facebook pages by 30%.",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
