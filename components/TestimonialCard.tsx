import { motion } from "framer-motion";
import React from "react";

type Props = {
  image: string;
  text: string;
};

const TestimonialCard = ({ image, text }: Props) => {
  return (
    <div className="flex flex-col rounded-lg items-center flex-shrink bg-[#292929] p-3 md:mx-5 mt-5 hover:opacity-100 opacity-90 transition-opacity duration-200 overflow-hidden overflow-y-auto">
      <img src="quote.png" className="h-10 w-10 self-start ml-8"></img>
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-72 h-32 xl:w-[500px] xl:h-[200px] object-contain object-center"
        src={image}
        alt="logo"
      />
      <h4 className="text-xl font-light">- {text}</h4>
    </div>
  );
};

export default TestimonialCard;
