import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [state, setState] = useState(true);

  return (
    <div className="index ">
      <AnimatePresence>
        <motion.div
          className="helloTittle text-8xl flex space-x-2"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.8, delay: 0.5 }}
        >
          <h1>Hello</h1>
          <p>!</p>
        </motion.div>
      </AnimatePresence>
      <div className="aboutMe mt-14 tracking-widest text-md">
        <p>
          I'm Joaquin, I'm a front end developer and a senior in the computer
          science department at the College of Charleston majoring in Computing
          in the Arts and minoring in computing information systems and
          communication.I would describe myself as apasionate developer and
          someone who's always looking to improve. In my free time I like to
          travel, play the guitar and endlessly search the internet for new
          music.
        </p>
      </div>
      <div className="mediaLinks mt-16 flex space-x-8">
        <Link href="https://github.com/JoaquinManchenoP">
          <div
            className="github flex space-x-2 text-purple-800"
            style={{ cursor: "pointer" }}
          >
            <FaGithub size={28} />
            <div className="githubText text-sm font-bold pt-1">
              <p>Github</p>
            </div>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/joaquinjm/">
          <div
            className="linkedIn flex  space-x-2 text-blue-600"
            style={{ cursor: "pointer" }}
          >
            <FaLinkedin size={28} />
            <div className="linkedInText">
              <p>LinkedIn</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="projectSection flex h-52  justify-between mt-20 px-16 space-x-12">
        <Link href="/Projects">
          <div
            className="projects text-md font-semibold  w-1/2 "
            style={{ cursor: "pointer" }}
          >
            <h1>Projects > </h1>
            <div className="section_description font-light text-sm tracking-wides pt-4 ">
              <p>
                A Collection o of the projects I've built on the road to
                becoming a software developer
              </p>
            </div>
          </div>
        </Link>

        <Link href="https://drive.google.com/file/d/1Y68K0j3Zt-AZsbXOpCA2ER3I3OvA6N16/view?usp=sharing">
          <div
            className="education text-md font-semibold w-1/2  "
            style={{ cursor: "pointer" }}
          >
            <h1>Resume ></h1>
            <div className="section_descripion font-light text-sm tracking-wides pt-4 ">
              <h1>Take a look or download my resume.</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
