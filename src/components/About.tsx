import Image from "next/image";
import React from "react";
import aboutImage from "../images/sysadmin_03-removebg-preview.png";

const About = () => {
  return (
    <div className="card lg:card-side  shadow-xl">
      <figure className="lg:w-[600px] md:hidden">
        <Image width={500} height={300} alt="image" src={aboutImage} />
      </figure>
      <div className="card-body lg:w-[350px] sm:w-[100%]">
        <h2 className="card-title text-white text-3xl">About Me</h2>
        <p className="text-white">
          I am a passionate and detail-oriented full-stack developer with
          expertise in both front-end and back-end technologies. My skill set
          spans from creating intuitive, user-friendly interfaces to developing
          robust server-side logic and database management. With proficiency in
          language JavaScript and frameworks like React, Node.js, and Express, I
          am dedicated to building responsive web applications that provide
          seamless user experiences. In addition to coding, I thrive in
          collaborative environments where innovative problem-solving is key. I
          constantly seek to stay updated with the latest industry trends and am
          committed to writing clean, scalable code that can evolve with the
          growing needs of the business.
        </p>
      </div>
    </div>
  );
};

export default About;
