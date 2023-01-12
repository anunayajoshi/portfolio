import React from "react";
import { motion } from "framer-motion";

type Props = {
  skill: {
    name: string;
    image: string;
    proficiency: number;
  };

  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ x: 0, opacity: 1 }}
        src={skill.image}
        className="rounded-full border border-gray-500 object-fill w-24 h-24 md:w-28 md:h-28 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-30 xl:h-30 rounded-full z-0">
        <div className="flex items-center justify-center h-full flex-col">
          <p className="text-lg text-black ">{skill.name}</p>
          <p className="text-2xl font-bold text-black opacity-100">
            {skill.proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
