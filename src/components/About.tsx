"use client";
import Image from "next/image";
import React from "react";
import aboutImage from "../images/sysadmin_03-removebg-preview.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="card lg:card-side  shadow-xl">
        <figure className="lg:w-[500px] md:hidden">
          <Image width={500} height={300} alt="image" src={aboutImage} />
        </figure>

        <div className="card-body lg:w-[350px] sm:w-[100%]" data-aos="fade-up">
          <div className="divider divider-success text-white text-3xl w-2/3 md:full mx-auto">
            {" "}
            About Me
          </div>
          <p className="text-white pb-8 font-normal">
            I am a passionate and detail-oriented full-stack developer with
            expertise in both front-end and back-end technologies. My skill set
            spans from creating intuitive, user-friendly interfaces to
            developing robust server-side logic and database management. With
            proficiency in language JavaScript and frameworks like React,
            Node.js, and Express, I am dedicated to building responsive web
            applications that provide seamless user experiences. In addition to
            coding, I thrive in collaborative environments where innovative
            problem-solving is key. I constantly seek to stay updated with the
            latest industry trends and am committed to writing clean, scalable
            code that can evolve with the growing needs of the business.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
