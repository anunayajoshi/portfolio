import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Card = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/wildcatslogo.jpeg"
        alt="logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Frontend Software Engineer Internship
        </h4>
        <p className="font-bold text-2xl mt-1">Wildcats.io</p>
        <div className="flex space-x-2 my-2">NextJS | TailwindCSS</div>

        <p className="flex uppercase py-5 text-gray-500">
          Start work ... - Ended ...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
