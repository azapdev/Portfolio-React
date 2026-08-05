import { useEffect, type FC } from 'react';

const ErrorPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <h1 className="text-4xl text-white text-center">Wating...</h1>;
};

export default ErrorPage;
