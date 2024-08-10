import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { NavLinks } from "@/data/headNavdata";
import React from "react";

const MainNavbar = () => {
  return (
    <nav className=" bg-blue-500">
      <div className=" container mx-auto max-w-7xl py-2 flex flex-wrap justify-between">
        <div id="hover-nav">
          {NavLinks.map((nav, idx) => (
            <HoverCard key={idx}>
              <HoverCardTrigger asChild>
                <Button variant="link" color="white" className=" text-white">
                  {nav.mainlabel}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Button>
              </HoverCardTrigger>

              <HoverCardContent className="w-fit">
                <div className=" grid grid-cols-3 gap-5">
                  {nav.childLabel.map((child, idx) => (
                    <div key={idx}>
                      <h4 className=" text-muted-foreground font-sm p-2">
                        {child.maintitle}
                      </h4>
                      {child.childTitle.map((ch, idx) => (
                        <div key={idx}>
                          <p className=" cursor-pointer p-2 text-sm hover:bg-blue-100 transition-colors duration-150  hover:text-blue-800">
                            {ch}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* <h1 className=" text-white text-xs">
          The #1 Online Tech Retailer in Myanmar » Reviews{" "}
        </h1> */}

        <p className=" text-white text-xs inline-flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          09-123456789
        </p>
      </div>
    </nav>
  );
};

export default MainNavbar;
