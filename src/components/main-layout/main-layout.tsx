import { Header } from "@components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "@components/footer/Footer.tsx";
import { AuthProvider } from "@utils/AuthProvider.tsx";

const MainLayout = () => {
  return (
    <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export { MainLayout };
