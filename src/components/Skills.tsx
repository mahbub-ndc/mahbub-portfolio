import Image from "next/image";
import React from "react";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import bootstrapImage from "../images/bootstrap.png";
import tainwindcssImage from "../images/tailwind_css.png";
import jsImage from "../images/js.png";
import tsImage from "../images/typescript.png";
import reactImage from "../images/react.png";
import nextImage from "../images/nextjs.png";
import hookImage from "../images/react-hook-form.png";
import queryImage from "../images/react-query.png";
import reduxImage from "../images/redux.png";
import firebaseImage from "../images/firebase.png";
import mongoImage from "../images/node-js.png";
import expressImage from "../images/express.png";

const Skills = () => {
  return (
    <div>
      <div className="divider divider-success text-white text-3xl w-5/12 md:full mx-auto pt-20 pb-10">
        {" "}
        Technologies I use
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center w-full max-w-[1000px] mx-auto mt-6">
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={htmlImage}
            alt="image"
          />
          <span className="text-sm font-semibold">HTML5</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={cssImage}
            alt="image"
          />
          <span className="text-sm font-semibold">CSS3</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={bootstrapImage}
            alt="image"
          />
          <span className="text-sm font-semibold">Bootstrap</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={tainwindcssImage}
            alt="image"
          />
          <span className="text-sm font-semibold">Tailwind CSS</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={jsImage}
            alt="image"
          />
          <span className="text-sm font-semibold">Javascript</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={tsImage}
            alt="js"
          />
          <span className="text-sm font-semibold">Typescript</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={reactImage}
            alt="js"
          />
          <span className="text-sm font-semibold">React Js</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={nextImage}
            alt="js"
          />
          <span className="text-sm font-semibold">Next Js</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={hookImage}
            alt="js"
          />
          <span className="text-sm font-semibold">React Hook Forms</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={queryImage}
            alt="js"
          />
          <span className="text-sm font-semibold">React Query</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={reduxImage}
            alt="js"
          />
          <span className="text-sm font-semibold">Redux</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={firebaseImage}
            alt="js"
          />
          <span className="text-sm font-semibold">Firebase</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={mongoImage}
            alt="js"
          />
          <span className="text-sm font-semibold">Node Js</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={expressImage}
            alt="js"
          />
          <span className="text-sm font-semibold">Express Js</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={mongoImage}
            alt="js"
          />
          <span className="text-sm font-semibold">MongoDB</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={mongoImage}
            alt="js"
          />
          <span className="text-sm font-semibold">Mongoose</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <Image
            className="w-5"
            height="50"
            width="50"
            src={expressImage}
            alt="js"
          />
          <span className="text-sm font-semibold">NestJs</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <img
            className="w-5"
            height="50"
            width="50"
            src="/image/skills/prisma.png"
            alt="/image/skills/prisma.png"
          />
          <span className="text-sm font-semibold">Prisma</span>
        </button>
        <button className="bg-white flex items-center gap-2 px-5 py-2 rounded-full justify-center md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] h-10">
          <img
            className="w-5"
            height="50"
            width="50"
            src="/image/skills/postgresql.png"
            alt="/image/skills/postgresql.png"
          />
          <span className="text-sm font-semibold">Postgres SQL</span>
        </button>
      </div>
    </div>
  );
};

export default Skills;
