import React from "react";
import { motion } from "framer-motion";

type Props = {};

type CardProps = {
  title: string;
  companyName: string;
  image: string;
  techStack: string;
  duration: string;
  points: string[];
};

const Card = ({
  title,
  companyName,
  image,
  techStack,
  duration,
  points,
}: CardProps) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[384px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-y-auto">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={image}
        alt="logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{companyName}</p>
        <div className="flex space-x-2 my-2">{techStack}</div>

        <p className="flex uppercase py-5 text-gray-500">{duration}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Card;
