const Preloader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <img
        src="/img/logo.webp"
        alt=""
        className="size-90 animate-pulse"
        loading="lazy"
      />
    </div>
  );
};

export default Preloader;
