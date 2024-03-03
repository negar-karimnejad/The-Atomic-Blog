/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className="max-md:mt-20 w-[33rem] flex flex-col justify-between h-screen items-center py-5 pb-16">
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <Logo />
        <AppNav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Sidebar;
