import { Header } from "../header";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer.tsx";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export { MainLayout };
