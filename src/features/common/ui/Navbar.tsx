import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const handleClick = () => setIsMobileNavOpen(!isMobileNavOpen);
  const inactiveLink = "p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
  const activeLink = "p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-secondary "
  const acitvemobileLink = "my-2 p-2 text-secondary font-bold bg-primary rounded  flex-1 flex"
  const inacitvemobileLink = "p-2 text-primary border-b border-menu/40  flex-1 flex"

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
        <div className="flex items-center text-md">
          <ul className="hidden md:flex">
            <NavLink to="/"
              className={({ isActive }) => (isActive ? `${activeLink}` : inactiveLink)}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/resturants"
              className={({ isActive }) => (isActive ? `${activeLink}` :
                inactiveLink)}
            >
              <li>Restaurants</li>
            </NavLink>
            <NavLink to="/deals"
              className={({ isActive }) => (isActive ? `${activeLink}` :
                inactiveLink)}
            >
              <li>Deals</li>
            </NavLink>
            <NavLink to="/food-category"
              className={({ isActive }) => (isActive ? `${activeLink}` :
                inactiveLink)}
            >
              <li>Food Category</li>
            </NavLink>
          </ul>
        </div>
        <div className="hidden md:flex">
          <NavLink to="/login" className="p-4 text-secondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Login
          </NavLink>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <GiHamburgerMenu />
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
        <li >
          <NavLink to="/"
            onClick={() => setIsMobileNavOpen(false)}
            className={({ isActive }) => (isActive ? `${acitvemobileLink}` :
              inacitvemobileLink)}
          >
            Home
          </NavLink>
        </li>
        <li >
          <NavLink to="/resturants"
            onClick={() => setIsMobileNavOpen(false)}
            className={({ isActive }) => (isActive ? `${acitvemobileLink}` :
              inacitvemobileLink)}
          >
            Resturants
          </NavLink>
        </li>
        <li >
          <NavLink to="/deals"
            onClick={() => setIsMobileNavOpen(false)}
            className={({ isActive }) => (isActive ? `${acitvemobileLink}` :
              inacitvemobileLink)}
          >
            Deals
          </NavLink>
        </li>
        <li >
          <NavLink to="/food-categories"
            onClick={() => setIsMobileNavOpen(false)}
            className={({ isActive }) => (isActive ? `${acitvemobileLink}` :
              inacitvemobileLink)}
          >
            Food Categories
          </NavLink>
        </li>
        <li >
          <NavLink to="/login"
            onClick={() => setIsMobileNavOpen(false)}
            className={({ isActive }) => (isActive ? `${acitvemobileLink}` :
              inacitvemobileLink)}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
