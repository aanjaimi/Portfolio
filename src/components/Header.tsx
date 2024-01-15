import React from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import { Button } from "react-scroll";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <Image width={111} height={48} src={Logo} alt="" />
          </a>
          <button className="btn btn-sm">
            <a href="#contact">Work with me</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
