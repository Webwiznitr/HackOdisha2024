"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  id: number;
  title: string;
  path: string;
  cName: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavData: NavItem[] = [
    {
      id: 1,
      title: "Home",
      path: "/#",
      cName: "nav-text",
    },
    {
      id: 2,
      title: "About Us",
      path: "#about",
      cName: "nav-text",
    },
    {
      id: 3,
      title: "Contact Us",
      path: "#contact",
      cName: "nav-text",
    },
    {
      id: 4,
      title: "Events",
      path: "/events",
      cName: "nav-text",
    },
  ];

  return (
    <>
      <nav
        className={
          "bg-[#FBCB93] static sm-0 w-full flex "
        }
      >
        <div className="m-3 hidden md:flex pt-2">
          <Link href="/">
          <img
              src="./images/HO4.svg"
              alt="logo"
              className="w-4 h-1 md:w-36 md:h-10 cursor-pointer border-2"
            />
          </Link>
        </div>
        <div className="mx-auto md:flex hidden justify-center min-h-fit">
          {NavData.map((item) => {
            return (
              <div
                key={item.id}
                className="justify-between items-center md:text-xl py-4"
              >
                <Link className="md:px-7 hidden md:flex mt-4 font-bold md:text-sm font-oxanium" href={item.path}>
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="w-screen md:hidden flex flex-col z-[300]">
          <div className="flex  justify-between m-4  md:hidden">
            <Link href="/">
            <Image
                src="./images/HO4.svg"
                alt="logo"
                className=" cursor-pointer"
                width={128}
                height={128}
              />
            </Link>
            <button
              aria-label="Menu toggle"
              onClick={toggleMenu}
              className=" p-2 "
            >
              {/* Close Button X */}
              <svg
                className={`transform transition-transform ease-in-out text-[#E16C00] duration-300 relative ${isMenuOpen ? "scale-0 w-0 h-0" : ""
                  }`}
                  style={{ filter: "drop-shadow(0px 0.8px 0px #000)" }}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                />

                {/* Hamburger Button  */}
              </svg>
              <svg
                className={`transform transition-transform ease-in-out duration-300 text-[#E16C00] ${isMenuOpen ? "" : "scale-0 w-0 h-0"
                  }`}
                  style={{ filter: "drop-shadow(0px 0.8px 0px #000)" }}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="flex md:hidden w-screen absolute z-300">
              {isMenuOpen ? (
                <div className="flex flex-col justify-center gap-8 items-center text-center w-full h-screen bg-[#FBCB93] text-black font-bold">
                  {NavData.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`justify-between cursor-pointer items-center py-4 transform transition-transform ease-in-out`}
                      >
                        <Link
                          className=" text-black font-bold text-2xl"
                          onClick={toggleMenu}
                          href={item.path}
                        >
                          {item.title}
                        </Link>
                      </div>
                    );
                  })}
                  <div className="mt-8">
                  <button
                  type="button"
                  className="rounded-[13px] text-2xl font-medium border-solid border-opacity-70 px-[20px] py-[10px] text-center me-2 mb-2 bg-orange-500 text-white"
                  style={{ 
                    boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.75)", 
                    border: "3px solid rgba(0, 0, 0, 0.70)" 
                  }}
                >
                  Join Discord
                </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="hidden p-3 md:flex">
          <button
            type="button"
            className="rounded-[13px] font-medium border-solid border-opacity-70 text-sm px-[20px] py-[10px] text-center me-2 mb-2 bg-orange-500 text-white"
            style={{ boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.75); border: 3px solid rgba(0, 0, 0, 0.70)" }}
          >
            Join Discord
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;