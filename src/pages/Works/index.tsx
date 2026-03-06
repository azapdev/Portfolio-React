import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
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
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="mx-auto my-14 flex items-center justify-center gap-5 overflow-hidden p-4">
        <div className="mx-auto my-5 flex max-w-6xl flex-wrap items-center justify-center gap-8 bg-black/80 px-6">
          {' '}
          {/* WEBSITEs */}
          {WebSites.map(({ link, img, label }, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              key={index}
              className="my-10 max-w-75 transition-transform duration-300 hover:scale-105"
            >
              <Card className="group relative mx-auto max-w-80 border border-gray-300 bg-transparent pt-0">
                <div className="object-cover p-4">
                  <img
                    src={img}
                    alt="Event cover"
                    className="relative aspect-video rounded-2xl object-cover brightness-60 transition duration-300 group-hover:scale-105 group-hover:brightness-100"
                  />
                </div>
                <CardHeader>
                  <CardDescription className="line-clamp-3 text-sm">
                    {label}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    className="bg-main hover:text-main border-main w-full rounded-2xl font-bold text-white hover:bg-transparent"
                    variant="outline"
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      {t('common:WORKpage.BUTTON_LABEL')}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
