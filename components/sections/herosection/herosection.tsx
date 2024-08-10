import React from "react";

const HeroSection = () => {
  return (
    <div className=" relative h-[650px]">
      <div className=" h-[650px] w-full">
        <div className=" h-[650px]  relative flex flex-col overflow-hidden">
          <a
            href=""
            className=" absolute h-full w-full bottom-0 left-0 z-30"
          ></a>
          <div className=" text-center relative z-40 pt-20">
            <h1 className=" text-[56px] font-bold text-[#fff]">iPhone</h1>
            <p className=" text-[26px] mt-[6px] font-[300] text-[#fff] max-w-[480px] block w-full mx-auto">
              Our most powerful cameras yet. Ultrafast chips.And USB-C
            </p>
            <div className=" mt-5">
              <button className=" text-[17px] cursor-pointer inline-block text-center rounded-full text-[#fff] bg-[#0071e3] font-[400] border-[] min-w-[28px] px-[21px] py-[11px]">
                Learn More
              </button>
              <button className=" text-[17px] ms-5 hover:bg-[#0071e3] hover:text-[#fff] cursor-pointer inline-block text-center rounded-full text-[#2997ff] bg-[rgba(0, 0, 0, 0] font-[400] border-2  border-[#0071e3] min-w-[28px] px-[21px] py-[11px]">
                Shop iPhone
              </button>
            </div>
          </div>
        </div>

        <div className=" absolute top-0 left-0 right-0 h-full w-full z-10 flex-1 overflow-visible">
          <div
            className=" bg-iphone min-w-[1068px] h-[750px] bg-no-repeat object-contain"
            style={{
              backgroundSize: "100vw 750px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
