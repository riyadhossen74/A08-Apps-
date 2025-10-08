import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
   <div className="flex-1">
      <Outlet></Outlet>
   </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
