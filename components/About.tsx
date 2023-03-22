import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="newspaper2.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-96 xl:w-[700px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          I was featured on <br />
          <a
            href="https://www.scholarschoice.com.sg/experience/learning-a-new-language-to-help-others-bring-their-dreams-to-life/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="underline decoration-[#F7AB0A]/50">
              The Straits Times!
            </span>{" "}
            <h3 className="text-lg font-light italic">
              (Singapore's newspaper)
            </h3>
          </a>
        </h4>

        <p className="text-base">
          You can call me Anun. I enjoy making my life easier, and coding has
          helped me achieve that in different ways which you can see through my
          projects. I like to solve real problems, and am eager to wear multiple
          hats to solve a problem instead of purely from a technical
          perspective.
          <br />
          <br />
          If you want to hear it from someone else,{" "}
          <a
            className="underline text-[#F7AB0A] hover:no-underline"
            href="https://www.scholarschoice.com.sg/experience/learning-a-new-language-to-help-others-bring-their-dreams-to-life/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          is the article written about me in The Straits Times!
        </p>
      </div>
    </div>
  );
};

export default About;
