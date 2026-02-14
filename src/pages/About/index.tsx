import { motion } from "framer-motion";
import type { FC } from "react";

const About: FC = () => {
  type Skill = {
    label: string;
    icon: string;
    link: string;
  };
  const skills: Skill[] = [
    {
      label: "HTML",
      icon: "fa-brands fa-html5",
      link: "",
    },
    {
      label: "CSS",
      icon: "fa-brands fa-css3",
      link: "",
    },
    {
      label: "SCSS",
      icon: "fa-brands fa-sass",
      link: "",
    },
    {
      label: "Javascript",
      icon: "fa-brands fa-js",
      link: "",
    },
    {
      label: "Bootstrap",
      icon: "fa-brands fa-bootstrap",
      link: "",
    },
    {
      label: "TailwindCSS",
      icon: "/icons/icons8-tailwindcss-48.svg",
      link: "",
    },
    {
      label: "Github",
      icon: "fa-brands fa-github",
      link: "",
    },
    {
      label: "Typescript",
      icon: "/icons/icons8-typescript-48.svg",
      link: "",
    },
  ];
  return (
    <>
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-[70%_30%] gap-5 p-4 mx-auto bg-black-glass items-center justify-center h-full my-14">
        {/* info */}
        <div className="flex items-start flex-col ms-8 gap-6 p-5">
          {/* ABOUT ME */}
          <motion.div
            className=""
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
          >
            <h1 className="text-main font-bold text-4xl md:text-6xl flex gap-3 items-baseline ">
              <span className=" text-white bg-white h-7 w-2 md:h-10 md:text-5xl rounded-3xl"></span>
              About Me
            </h1>
            <p className="text-sec-title px-5 sm:px-9 py-4">
              I'm a software engineer with 1 year of experience in Front-End
              development
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, duration: 3 }}
          >
            <h2 className="text-white font-bold text-2xl flex gap-2 items-baseline ">
              <span className=" text-white bg-white h-5 w-1 md:w-1 md:h-7  rounded-3xl"></span>
              <span className="text-main text-2xl md:text-3xl font-bold">
                Skills
              </span>
              & Technologies
            </h2>
            {/* tec */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {skills.map((skill, i) => (
                <a
                  key={i}
                  href={skill.link}
                  className="flex items-center w-fit group gap-2"
                >
                  {skill.icon.startsWith("fa") ? (
                    <i
                      className={`${skill.icon} text-white size-4 brightness-50 group-hover:brightness-125 transition duration-150`}
                    ></i>
                  ) : (
                    <img
                      src={skill.icon}
                      className="size-4 grayscale p-0 brightness-50 group-hover:brightness-125 transition duration-200"
                      alt={skill.label}
                    />
                  )}

                  <span className="text-white text-sm brightness-50 tracking-[1.5px] group-hover:text-main group-hover:brightness-125 transition duration-200">
                    {skill.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* img */}
        <motion.div
          className=" order-first lg:order-1 flex justify-center items-center object-contain "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, duration: 2 }}
        >
          <img
            src="/img/me.webp"
            alt=""
            className=" w-50 flex justify-center rounded-2xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
