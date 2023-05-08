import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaWineGlass,
  FaShoppingBag,
  FaThList,
  FaLock,
  FaBars,
} from "react-icons/fa";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleClick = () => setIsMobileNavOpen(!isMobileNavOpen);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMobileNavOpen(false);
    }
  }, [isMobile]);

  // Navbar scroll
  const scrollPositon = () => {
    if (window.pageYOffset >= 64) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", scrollPositon);

  return (
    <div
      className={`${
        isScroll ? "bg-primary" : "bg-transparent"
      } text-menu w-full h-[64px] fixed z-50 top-0 drop-shadow-md`}
    >
      <div className="px-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center text-sm">
          <h1 className="text-xl font-bold mr-4 md:text-2xl">Logo</h1>
          <ul className="hidden md:flex text-lg">
            <NavLink
              to="/"
              className="p-4 flex items-center gap-x-1.5 hover:text-secondary"
            >
              <FaHome />
              Home
            </NavLink>
            <li className="p-4 flex items-center gap-x-1.5 hover:text-secondary">
              <FaWineGlass />
              Restaurants
            </li>
            <li className="p-4 flex items-center gap-x-1.5 hover:text-secondary">
              <FaShoppingBag />
              Deals
            </li>
            <li className="p-4 flex items-center gap-x-1.5 hover:text-secondary">
              <FaThList />
              Food Category
            </li>
          </ul>
        </div>
        <ul className="hidden md:flex">
          <NavLink
            to="/login"
            className="p-4 flex items-center gap-x-1.5 hover:text-secondary"
          >
            <FaLock />
            Login
          </NavLink>
        </ul>
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          <FaBars />
        </div>
      </div>

      {/* Dropdown window */}
      <ul
        className={
          isMobileNavOpen && isMobile
            ? "absolute bg-secondary w-full px-8 duration-500 ease-in"
            : "hidden"
        }
      >
        <li className="p-4 text-primary border-b border-menu/40 w-full">
          Home
        </li>
        <li className="p-4 text-primary border-b border-menu/40 w-full">
          Restaurants
        </li>
        <li className="p-4 text-primary border-b border-menu/40 w-full">
          Deals
        </li>
        <li className="p-4 text-primary border-b border-menu/40 w-full">
          Food Category
        </li>
        <li className="my-4 p-4 text-secondary font-bold bg-primary rounded w-full">
          Login
        </li>
      </ul>
    </div>
  );
}
