import { motion } from 'framer-motion';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

const Works: FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <motion.div
      className="bg-black-glass my-14 flex w-full animate-pulse flex-col items-center justify-center p-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0 }}
    >
      <img src="/img/logo.webp" alt="" className="size-80 object-contain" />
      <h1 className="text-4xl text-white">
        {t('common:WORKpage.COMING_SOON')}
      </h1>
    </motion.div>
  );
};

export default Works;
