"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import headerImage from "../images/Man developing website on desk.gif";

const Banner = () => {
  return (
    <section className="lg:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-xl sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="gradinent-text">Hello, I&apos;m Mahbub</span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                1000,
                "Web Application Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div>
            <Link href="/#contact">
              <button className="btn btn-outline btn-secondary">
                Download Resume{" "}
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src={headerImage}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={350}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
