import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <div className="fixed top-[20%] left-[49%] -translate-x-1/2">
      <Loader />
    </div>
  ) : (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="min-h-[90vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
