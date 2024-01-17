import React from "react";
import navImg from "../assets/img/lws-logo-en.svg";

const NavBar = () => {
  return (
    <div>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* Logo */}
          <a href="/">
            <img className="h-[40px]" src={navImg} alt="Lws" />
          </a>
          {/* Logo Ends */}
          <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
