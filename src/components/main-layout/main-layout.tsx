import { Header } from "@components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "@components/footer/Footer.tsx";

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
