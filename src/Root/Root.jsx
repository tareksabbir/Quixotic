import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
