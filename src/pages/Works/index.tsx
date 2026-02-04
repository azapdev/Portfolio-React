import { motion } from "framer-motion";
import type { FC } from "react";

const Works: FC = () => {
  return (
    <motion.div
      className="bg-black-glass flex flex-col items-center justify-center p-8 animate-pulse w-full my-14"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0 }}
    >
      <img src="/img/logo.webp" alt="" className="size-80 object-contain" />
      <h1 className=" text-white text-4xl ">Coming Soon</h1>
    </motion.div>
  );
};

export default Works;
