import { motion } from "framer-motion";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="md:h-screen flex md:flex-row relative
      w-auto flex-col px-10 justify-evenly mx-auto items-center text-left"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Testimonial
      </h3>
      {/* create a div in which it is a flex row container of testimonial cards */}
      <div className="mt-40 md:mt-10 relative flex flex-col md:flex-row justify-around z-20">
        {/* Testimonial Card */}
        <TestimonialCard image="testimonial1.png" text="Some old aunty" />
        <TestimonialCard
          image="testimonial2.png"
          text="Someone you should listen to"
        />
        <TestimonialCard
          image="testimonial3.png"
          text="A very good looking man"
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12" />
    </motion.div>
  );
};

export default Testimonial;
