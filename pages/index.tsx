import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Testimonial from "../components/Testimonial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <Head>
        <title>Anunaya Joshi</title>
        <meta
          name="description"
          content="Anunaya Joshi's personal website portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/anun.jpg" />
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="md:snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="md:snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="md:snap-end">
        <WorkExperience />
      </section>

      <section id="skills" className="md:snap-start">
        <Skills />
      </section>

      <section id="projects" className="md:snap-start">
        <Projects />
      </section>

      <section id="testimonial" className="md:snap-start">
        <Testimonial />
      </section>

      <section id="contact" className="md:snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="relative bottom-14 left-5 cursor-pointer">
          <div>
            <ArrowUpCircleIcon className="h-10 w-10 filter grayscale text-[#F7AB0A] cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
