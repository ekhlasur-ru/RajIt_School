import React, { useState, useEffect } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useNavigate, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Header = () => {
  //Props Validation
  Header.propTypes = {
    size: PropTypes.number.isRequired,
    setShow: PropTypes.func.isRequired,
  };
  const [colorTheme, setTheme] = useDarkMode();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menu = [
    { name: "হোম", link: "/" },
    { name: "কোর্স সমূহ", link: "/course" },
    { name: "About", link: "/about" },
    { name: "Join", link: "/join" },
  ];
  //DarkMOde
  function useDarkMode() {
    const [theme, setTheme] = useState(
      typeof window !== "undefined" ? localStorage.theme : "dark"
    );
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
      }
    }, [theme]);
    return [colorTheme, setTheme];
  }

  return (
    <div className="sticky top-0 z-20 w-full bg-white py-1 shadow-md dark:bg-gray-800 dark:text-white">
      <nav className="mx-auto mr-12 flex justify-between px-4 xl:mr-0">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            onClick={() => navigate("/")}
            width={130}
            src="https://school.rajit.net/images/L7QPZikDkfoXRKKIdrUb9oSAgmm1OEQG0WGpfITz.png"
            alt="Logo"
          />
        </div>

        {/* Mobile Menuber icon*/}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-2 text-2xl md:hidden">
          {open ? (
            <FaTimes className="animate-bounce cursor-pointer text-red-500 hover:text-red-700" />
          ) : (
            <FaBars className="cursor-pointer text-blue-500 hover:text-blue-700" />
          )}
        </div>

        {/* NavLink */}
        <div>
          <ul
            className={`md:bg-hidden absolute z-[-20] px-8 py-6 transition-all duration-300 ease-in-out dark:bg-gray-800 md:static md:z-auto md:flex md:px-0 md:py-0 ${
              // open ? "right-[0px]" : "right-[-160px]"
              open ? "right-[0px]" : "top-[-600px]"
              // open ? "top-[30px] " : "top-[-600px]"
            }`}>
            {menu.map((user, dex) => (
              <li
                key={dex}
                className="my-6 font-semibold hover:scale-105 md:my-0 md:ml-2">
                <NavLink
                  to={user.link}
                  className={({ isActive }) =>
                    `block px-2 py-2 duration-200 ${
                      isActive ? "text-red-500" : "text-black dark:text-white"
                    } hover:text-orange-700`
                  }>
                  {user.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Login  Button  */}
        <div className="flex gap-4">
          <button
            onClick={() => setTheme(colorTheme !== "dark" ? "light" : "dark")}>
            {colorTheme === "dark" ? (
              <MdOutlineDarkMode className="text-[30px]" />
            ) : (
              <MdLightMode className="text-[30px]" />
            )}
          </button>
          <button
            className="rounded-lg border px-4 hover:bg-black hover:text-white"
            onClick={() => navigate("/login")}
            aria-label="product">
            লগইন
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
