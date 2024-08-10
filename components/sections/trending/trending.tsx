import Container from "@/components/layout/container";
import React from "react";
import TrendingHover from "./trendinghover";

const Trending = () => {
  return (
    <section className="text-gray-600 body-font">
      <Container className=" px-5 py-24">
        {/* <div className="flex flex-col text-center w-full mb-20"> */}
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Master Cleanse Reliac Heirloom
        </h1>
        {/* </div> */}
        <div className="flex flex-wrap -m-4">
          <TrendingHover />
          <TrendingHover />
          <TrendingHover />
          <TrendingHover />
          <TrendingHover />
          <TrendingHover />
        </div>
        {/* </div> */}
      </Container>
    </section>
  );
};

export default Trending;
