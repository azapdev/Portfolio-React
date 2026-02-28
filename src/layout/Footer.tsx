import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="bg-footer-bg bottom-0 order-last flex h-35 w-full flex-col items-center">
      <Link to={'/'}>
        <img
          src="/img/logo.webp"
          alt=""
          className="size-24 cursor-pointer object-contain brightness-50 transition duration-300 hover:brightness-100"
          loading="lazy"
        />
      </Link>
      {/* LINKES */}
      <div className="flex justify-center gap-3">
        {/* <!-- instagram --> */}
        <a href="https://www.instagram.com/azapdev/" target="_blank">
          <span className="hover:text-danger bg-icon-bg flex h-10 w-10 items-center justify-center rounded-full text-xl text-white brightness-50 transition duration-150 hover:bg-black hover:brightness-100">
            <i className="fa-brands fa-instagram"></i>
          </span>
        </a>

        {/* <!-- facebook --> */}
        <a href="https://www.facebook.com/azapdev" target="_blank">
          <span className="bg-icon-bg hover:text-danger flex h-10 w-10 items-center justify-center rounded-2xl text-xl text-white brightness-50 transition duration-150 hover:bg-black hover:brightness-100">
            <i className="fa-brands fa-facebook"></i>
          </span>
        </a>

        {/* <!-- linkedin --> */}
        <a
          href="https://www.linkedin.com/in/ahmed-elazap-5a85b2377/"
          target="_blank"
        >
          <span className="bg-icon-bg hover:text-danger flex h-10 w-10 items-center justify-center rounded-2xl text-xl text-white brightness-50 transition duration-150 hover:bg-black hover:brightness-100">
            <i className="fa-brands fa-linkedin"></i>
          </span>
        </a>

        {/* <!-- whatsapp --> */}

        <a href="https://wa.me/201092672558" target="_blank">
          <span className="bg-icon-bg hover:text-danger flex h-10 w-10 items-center justify-center rounded-2xl text-xl text-white brightness-50 transition duration-150 hover:bg-black hover:brightness-100">
            <i className="fa-brands fa-whatsapp"></i>
          </span>
        </a>

        {/* <!-- google --> */}
        <a href="mailto:your-a7mad3zap@gmail.com" target="_blank">
          <span className="bg-icon-bg hover:text-danger flex h-10 w-10 items-center justify-center rounded-2xl text-xl text-white brightness-50 transition duration-150 hover:bg-black hover:brightness-100">
            <i className="fa-brands fa-google"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
