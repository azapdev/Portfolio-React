import { motion } from 'framer-motion';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { t } = useTranslation();
  type Skill = {
    label: string;
    icon: string;
    link: string;
  };
  const skills: Skill[] = [
    {
      label: 'HTML',
      icon: 'fa-brands fa-html5',
      link: '',
    },
    {
      label: 'CSS',
      icon: 'fa-brands fa-css3',
      link: '',
    },
    {
      label: 'Sass',
      icon: 'fa-brands fa-sass',
      link: '',
    },
    {
      label: 'Javascript',
      icon: 'fa-brands fa-js',
      link: '',
    },
    {
      label: 'React.js',
      icon: 'fa-brands fa-react',
      link: '',
    },

    {
      label: 'Bootstrap',
      icon: 'fa-brands fa-bootstrap',
      link: '',
    },
    {
      label: 'TailwindCSS',
      icon: '/icons/icons8-tailwindcss-48.svg',
      link: '',
    },
    {
      label: 'Github',
      icon: 'fa-brands fa-github',
      link: '',
    },
    {
      label: 'Typescript',
      icon: '/icons/icons8-typescript-48.svg',
      link: '',
    },
    {
      label: 'Figma',
      icon: 'fa-brands fa-figma',
      link: '',
    },
  ];
  return (
    <>
      <div className="mx-auto my-14 grid h-full max-w-6xl grid-cols-1 items-center justify-center gap-5 bg-black/80 p-4 lg:grid-cols-[70%_30%]">
        {/* info */}
        <div className="ms-8 flex flex-col items-start gap-6 p-5">
          {/* ABOUT ME */}
          <motion.div
            className=""
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, duration: 1 }}
          >
            <h1 className="text-main flex items-baseline gap-3 text-4xl font-bold md:text-6xl">
              <span className="h-7 w-2 rounded-3xl bg-white text-white md:h-10 md:text-5xl"></span>
              {t('common:ABOUTpage.ABOUT_ME')}
            </h1>
            <p className="text-sec-title px-5 py-4 sm:px-9">
              {t('common:ABOUTpage.DESCRIPTION')}
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 150, duration: 3 }}
          >
            <h2 className="flex items-baseline gap-2 text-2xl font-bold text-white">
              <span className="h-5 w-1 rounded-3xl bg-white text-white md:h-7 md:w-1"></span>
              <span className="text-main text-2xl font-bold md:text-3xl">
                {t('common:ABOUTpage.SKILL')}
              </span>
              {t('common:ABOUTpage.TECHNOLOGIES')}
            </h2>
            {/* tec */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <a
                  key={i}
                  href={skill.link}
                  className="group flex w-fit items-center gap-2"
                >
                  {skill.icon.startsWith('fa') ? (
                    <i
                      className={`${skill.icon} size-4 text-white brightness-50 transition duration-150 group-hover:brightness-125`}
                    ></i>
                  ) : (
                    <img
                      src={skill.icon}
                      className="size-4 p-0 brightness-50 grayscale transition duration-200 group-hover:brightness-125"
                      alt={skill.label}
                    />
                  )}

                  <span className="group-hover:text-main text-sm tracking-[1.5px] text-white brightness-50 transition duration-200 group-hover:brightness-125">
                    {skill.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* img */}
        <motion.div
          className="order-first flex items-center justify-center object-contain lg:order-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, duration: 2 }}
        >
          <img
            src="/img/me.webp"
            alt=""
            className="flex w-50 justify-center rounded-2xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
