import { useEffect, useState } from "react";
import Preloader from "../pages/preloader";
import AppRouter from "../routes/AppRouter";
import Footer from "./Footer";
import Header from "./Header";

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
    <div className="flex flex-col justify-between min-h-screen items-center">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
