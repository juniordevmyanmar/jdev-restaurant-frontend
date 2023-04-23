import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
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

  return (
    <div className="bg-primary text-menu w-full h-[64px] sticky top-0 drop-shadow-md">
      <div className="px-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center text-sm">
          <h1 className="text-xl font-bold mr-4 md:text-2xl">Logo</h1>
          <ul className="hidden md:flex">
            <NavLink to="/" className="p-4">
              Home
            </NavLink>
            <li className="p-4">Restaurants</li>
            <li className="p-4">Deals</li>
            <li className="p-4">Food Category</li>
          </ul>
        </div>
        <ul className="hidden md:flex">
          <NavLink to="/login" className="p-4 text-secondary">
            Login
          </NavLink>
        </ul>
        <div className="md:hidden" onClick={handleClick}>
          Ham
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
