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
          "bg-[#FBCB93] fixed z-50 sm-0 w-full flex "
        }
      >
        <div className="m-3 hidden md:flex pt-2">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="121.21" height="40" viewBox="0 0 175 59" fill="none">
  <g filter="url(#filter0_d_1239_3965)">
    <path d="M38.5918 11.4628V0.907227H54.0733V15.6851H44.9252L38.5918 11.4628Z" fill="#E16C00"/>
    <path d="M16.7778 0.907227H4.11112H2V55.0926H16.7778V38.9074H40.7039V55.0926H54.0743V24.1295H16.7778V0.907227Z" fill="#E16C00"/>
    <path d="M122.333 45.9687H153.296V39.0037C153.296 38.9432 153.268 38.8862 153.219 38.85L147.718 34.7238C147.684 34.6988 147.644 34.6854 147.602 34.6854H142.037V31.1668L156.001 18.5988C156.072 18.5352 156.163 18.5001 156.258 18.5001H158.926V55.0929H173V5.83338L170.185 3.01855H149.778L122.333 31.1668V45.9687Z" fill="#E16C00"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8145 25.5372V55.0929H108.963L113.889 48.7595V8.64821L108.963 3.01855H84.3331L61.8145 25.5372ZM99.8146 17.0927V41.0187H75.8886V32.5742L89.9627 17.0927H99.8146Z" fill="#E16C00"/>
  </g>
  <defs>
    <filter id="filter0_d_1239_3965" x="0.417939" y="0.907227" width="174.164" height="57.3497" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1.58206"/>
      <feGaussianBlur stdDeviation="0.79103"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1239_3965"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1239_3965" result="shape"/>
    </filter>
  </defs>
</svg>
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
        <div className="w-screen md:hidden flex flex-col ">
          <div className="flex  justify-between m-4  md:hidden">
            <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="121.21" height="40" viewBox="0 0 175 59" fill="none">
  <defs>
    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feOffset result="offOut" in="SourceGraphic" dx="0" dy="1.582" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1.582" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
  <g filter="url(#drop-shadow)">
    <path d="M38.5918 11.4628V0.907227H54.0733V15.6851H44.9252L38.5918 11.4628Z" fill="#E16C00"/>
    <path d="M16.7778 0.907227H4.11112H2V55.0926H16.7778V38.9074H40.7039V55.0926H54.0743V24.1295H16.7778V0.907227Z" fill="#E16C00"/>
    <path d="M122.333 45.9687H153.296V39.0037C153.296 38.9432 153.268 38.8862 153.219 38.85L147.718 34.7238C147.684 34.6988 147.644 34.6854 147.602 34.6854H142.037V31.1668L156.001 18.5988C156.072 18.5352 156.163 18.5001 156.258 18.5001H158.926V55.0929H173V5.83338L170.185 3.01855H149.778L122.333 31.1668V45.9687Z" fill="#E16C00"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8145 25.5372V55.0929H108.963L113.889 48.7595V8.64821L108.963 3.01855H84.3331L61.8145 25.5372ZM99.8146 17.0927V41.0187H75.8886V32.5742L89.9627 17.0927H99.8146Z" fill="#E16C00"/>
  </g>
</svg>

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
            <div className="flex md:hidden w-screen absolute ">
              {isMenuOpen ? (
                <div className="flex flex-col justify-center  gap-8 items-center text-center w-full h-screen bg-[#FBCB93] text-black font-bold">
                  {NavData.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`justify-between cursor-pointer items-center py-4 transform transition-transform ease-in-out`}
                      >
                        <Link
                          className=" text-black font-bold text-3xl font-Oxanium"
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
                    className="rounded-[13px] text-2xl font-medium border-opacity-70 px-[20px] py-[10px] text-center me-2 mb-4 bg-orange-500 text-white font-oxanium"
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
            className="rounded-[13px] font-medium border-solid border-opacity-70 text-md px-[20px] py-[10px] text-center me-2  mr-4 bg-orange-500 text-white"
            style={{ boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.75); border: 3px solid rgba(0, 0, 0, 0.70)" }}
          >
            Join Discordd
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;