import type { FC } from "react";

const Works: FC = () => {
  return (
    <div className="lg:h-[calc(100vh-80px)]  bg-black-glass flex flex-col items-center justify-center p-8 animate-pulse">
      {" "}
      <img
        src="../../../public/img/logo.webp"
        alt=""
        className="size-80 object-contain"
      />
      <h1 className=" text-white text-4xl ">Wating.....</h1>
    </div>
  );
};

export default Works;
