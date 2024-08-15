import { NavLinks } from "@/data/headNavdata";
import React from "react";

const HeaderMobile = () => {
  return (
    <div className=" p-5 bg-black text-white flex flex-col gap-5  h-full">
      {NavLinks.map((nav, idx) => (
        <div
          key={idx}
          className=" flex justify-between group cursor-pointer duration-1000 ease-in-out transition-opacity items-center"
        >
          <h3 className=" text-2xl">{nav.mainlabel}</h3>
          <span className=" opacity-0 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
};

export default HeaderMobile;
