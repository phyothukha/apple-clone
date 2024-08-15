"use client";
import React, { useState } from "react";
import { NavLinks } from "@/data/headNavdata";
import { cn } from "@/lib/utils";
import MenuItem from "./navbar-menu";
import HeaderMobile from "./header-mobile";

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  return (
    <header
      className={cn(
        " body-font  fixed top-0 py-1 backdrop-filter backdrop-blur-[10px] z-50   left-0 w-full",
        active
          ? "bg-black"
          : "bg-[rgba(0,0,0,0.8)]  shadow-md backdrop-blur-md",
        show && "bg-black",
      )}
    >
      <nav
        onMouseLeave={() => setActive(null)}
        className=" flex items-center gap-5 justify-between container mx-auto max-w-[1024px]"
      >
        <a className="flex title-font font-medium items-center ">
          <svg
            height="48"
            viewBox="0 0 17 48"
            fill="white"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path>
          </svg>
        </a>
        <ul className="hidden md:flex justify-between w-4/5 gap-5">
          {NavLinks.map((nav, idx) => (
            <MenuItem
              key={idx}
              setActive={setActive}
              active={active}
              item={nav.mainlabel}
              nav={nav}
            />
          ))}
        </ul>
        <div className=" flex items-center gap-5">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 fill-white"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 fill-white"
            >
              <path
                fillRule="evenodd"
                d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="inline cursor-pointer md:hidden"
            onClick={() => setShow(!show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                fill="white"
                className={cn(
                  "transform duration-500 ease-in-out",
                  show && " rotate-45 translate-x-[8px] -translate-y-[2px]",
                )}
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                fill="white"
                className={cn(
                  "transform duration-500",
                  show && " translate-x-10 opacity-0",
                )}
                d="M3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                className={cn(
                  "transform duration-500 ease-in-out",
                  show && " -rotate-45 -translate-x-[10px] translate-y-[8px]",
                )}
                d="M3 17.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
                fill="#BB85FD"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "overflow-hidden  translate-y-3 transition-all duration-500 ease-in-out bg-white",
          show ? "h-screen" : "h-0",
        )}
      >
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
