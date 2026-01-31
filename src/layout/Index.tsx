import AppRouter from "../routes/AppRouter";
import Footer from "./Footer";
import Header from "./Header";

const Index = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};

export default Index;
