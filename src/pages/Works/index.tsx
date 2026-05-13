import ParticlesComponent from '@/assets/AnimatedBG';
import type { Websites } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

const Works: FC = () => {
  const { t } = useTranslation();
  const WebSites: Websites[] = [
    {
      link: 'https://lepicurieux.azapdev.workers.dev/',
      img: '/img/works/website.jpg',
      label: t('common:WORKpage.PARAGRAPH1'),
    },
    {
      link: 'https://kllh.azapdev.workers.dev/',
      img: '/img/works/klh.jpg',
      label: t('common:WORKpage.PARAGRAPH2'),
    },
    {
      link: 'https://themightyspiceco.azapdev.workers.dev/',
      img: '/img/works/themightyspiceco.webp',
      label: t('common:WORKpage.PARAGRAPH3'),
    },
    {
      link: 'https://porty.azapdev.workers.dev/',
      img: '/img/works/porty.webp',
      label: t('common:WORKpage.PARAGRAPH4'),
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="my-14 w-full overflow-hidden p-4">
        <ParticlesComponent />
        <div className="my-12 grid grid-cols-1 gap-8 py-18 md:mx-8 md:grid-cols-2 md:px-8">
          {/* WEBSITEs */}
          {WebSites.map(({ link, img, label }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              className="border-main flex h-full flex-col justify-between gap-8 rounded-2xl border-s-4 bg-black p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Content */}
              <div className="flex flex-col flex-wrap items-center gap-8 md:flex-row">
                <img
                  src={img}
                  alt={label}
                  className="rounded-2xl object-contain"
                />

                <p className="line-clamp-3 text-start text-sm text-gray-200 md:line-clamp-2 md:text-lg">
                  {label}
                </p>
              </div>

              {/* Button */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-main bg-main hover:text-main mt-auto w-full rounded-xl border py-2 text-center font-bold text-white transition duration-200 hover:bg-transparent md:w-60"
              >
                {t('common:WORKpage.BUTTON_LABEL')}
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
