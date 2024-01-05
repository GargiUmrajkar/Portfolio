import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [socialDropdownVisible, setSocialDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <HashLink
          to="/#home"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Gargi Umrajkar
          </p>
        </HashLink>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <HashLink
                smooth
                to={`/#${nav.id}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </HashLink>
            </li>
          ))}
          {/* Social Dropdown */}
          <li className="relative">
            <button
              onClick={() => setSocialDropdownVisible(!socialDropdownVisible)}
              className="text-white text-[18px] font-medium cursor-pointer flex items-center"
            >
              Social <span className="ml-1">&#9662;</span>
            </button>
            {socialDropdownVisible && (
              <ul className="absolute top-full mt-2 w-40 rounded-lg shadow-lg bg-primary py-2">
                <li className="text-white font-medium cursor-pointer hover:text-secondary px-4 py-2">
                  <a
                    href="https://www.linkedin.com/in/gargi-umrajkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-white font-medium cursor-pointer hover:text-secondary px-4 py-2">
                  <a
                    href="https://github.com/GargiUmrajkar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div className="absolute top-full right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl black-gradient p-6 flex flex-col items-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
                >
                  <HashLink
                    smooth
                    to={`/#${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </HashLink>
                </li>
              ))}
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                <a
                  href="https://www.linkedin.com/in/gargi-umrajkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                <a
                  href="https://github.com/GargiUmrajkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
