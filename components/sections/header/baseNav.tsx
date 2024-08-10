import Container from "@/components/layout/container";
import React from "react";

const BaseNav = () => {
  return (
    <nav className=" bg-blue-600">
      <Container className="flex flex-wrap justify-between py-2">
        <h1 className=" text-white text-xs">
          The #1 Online Tech Retailer in Myanmar » Reviews{" "}
        </h1>
        <p className=" text-white text-xs">Like us on Facebook</p>
        <p className=" text-white text-xs">🎉 Up to 16% Off Sony 4K Smart TV</p>
      </Container>
    </nav>
  );
};

export default BaseNav;
