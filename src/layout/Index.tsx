import { useEffect, useState } from 'react';
import Preloader from '../pages/preloader';
import AppRouter from '../routes/AppRouter';
import Footer from './Footer';
import Header from './Header';

const Index = () => {
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (isloading) {
    return <Preloader />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
