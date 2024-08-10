import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const TrendingHover = () => {
  return (
    <div className="lg:w-1/5 sm:w-1/2 ">
      <Card className=" overflow-hidden h-auto rounded-none">
        <CardContent className="flex w-full  relative z-0 overflow-hidden p-0 ">
          <div className="flex w-full h-auto relative overflow-hidden">
            <Image
              width={500}
              height={100}
              alt="gallery"
              className="absolute inset-0  object-cover"
              src="https://i.pinimg.com/474x/b7/4f/a4/b74fa4bf86acd729116eaaa784d88f13.jpg"
            />

            <div className="px-8 transition duration-1000 hover:scale-110 overflow-hidden group relative -z-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <div className=" absolute  top-5 transform group-hover:-translate-x-3 transition duration-500 right-2 translate-x-10 flex flex-col ">
                <div className=" bg-white p-1 border">
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
                <div className=" bg-white p-1 border">
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
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <div className=" bg-white p-1 border">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
              <Image
                src="https://i.pinimg.com/564x/1f/af/2a/1faf2a42d3c7b46ced2b270416915249.jpg"
                width={500}
                height={100}
                className=" object-cover object-top"
                alt=""
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className=" p-3">
          <div>
            <h1 className=" block text-sm font-bold text-muted-foreground">
              Macbook
            </h1>
            <p className=" text-xs font-medium mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              quo.
            </p>
            ⭑ ⭑ ⭑ ⭑ ⭑
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrendingHover;
