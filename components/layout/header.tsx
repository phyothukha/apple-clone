import React from "react";
import Image from "next/image";
import Container from "./container";
import { NavLinks } from "@/data/headNavdata";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  return (
    <header className="text-gray-600 body-font  fixed top-0 py-2 backdrop-filter backdrop-blur-[10px] z-50 bg-[rgba(0,0,0,0.8)]  left-0 w-full">
      <nav className=" flex items-center gap-5 justify-between container mx-auto max-w-[1024px]">
        <a className="flex title-font font-medium items-center text-gray-900 ">
          <Image src="/app-logo.svg" width={0} height={30} alt="APP Studio" />
        </a>
        {NavLinks.map((nav, idx) => (
          <HoverCard key={idx}>
            <HoverCardTrigger asChild className=" md:inline-block hidden">
              <small className=" text-xs cursor-pointer text-white">
                {nav.mainlabel}
              </small>
            </HoverCardTrigger>
            <HoverCardContent className=" w-screen border-none bg-[rgb(0,0,0)]">
              <Container>
                <div className=" grid grid-cols-3 gap-5">
                  {nav.childLabel.map((child, idx) => (
                    <div key={idx}>
                      <h4 className=" text-muted-foreground text-white font-sm p-2">
                        {child.maintitle}
                      </h4>
                      {child.childTitle.map((ch, idx) => (
                        <div key={idx}>
                          <p className=" cursor-pointer p-2 text-sm text-white hover:bg-blue-100 transition-colors duration-150  hover:text-blue-800">
                            {ch}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Container>
            </HoverCardContent>
          </HoverCard>
        ))}
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
        <Sheet>
          <SheetTrigger className=" md:hidden inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 fill-white"
            >
              <path
                fillRule="evenodd"
                d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side={"top"} className=" h-screen">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
