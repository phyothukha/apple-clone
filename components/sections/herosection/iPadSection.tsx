import React from "react";

const IPadSection = () => {
  return (
    <div className=" relative h-[750px]">
      <div className=" h-[750px] w-full">
        <div className=" h-[750px]  relative flex flex-col overflow-hidden">
          {/* <a
            href=""
            className=" absolute h-full w-full bottom-0 left-0 z-30"
          ></a> */}
          <div className=" text-center relative z-40 pt-20">
            <h1 className=" lg:text-[56px] md:text-[40px] text-[32px]  font-bold text-[#fff]">
              iPad Pro
            </h1>
            <p className=" lg:text-[26px] md:text-[20px] text-[15px] mt-[6px] font-[300] text-[#fff] max-w-[480px] block w-full mx-auto">
              Unbelievably thin.Incredibly powerful.
            </p>
            <div className=" mt-5">
              <button className="  lg:text-[17px] md:text-[13px] text-[10px]  cursor-pointer inline-block text-center rounded-full text-[#fff] bg-[#0071e3] font-[400] border-[] min-w-[28px] px-[21px] py-[11px]">
                Learn More
              </button>
              <button className="  lg:text-[17px] md:text-[13px] text-[10px]  ms-5 hover:bg-[#0071e3] hover:text-[#fff] cursor-pointer inline-block text-center rounded-full text-[#2997ff] bg-[rgba(0, 0, 0, 0] font-[400] border-2  border-[#0071e3] min-w-[28px] px-[21px] py-[11px]">
                Buy
              </button>
            </div>
          </div>
        </div>

        <div className=" absolute top-0 left-0 right-0 h-full w-full z-10 flex-1 overflow-visible">
          <div
            className=" bg-ipad min-w-[1068px] h-[850px] bg-no-repeat object-contain"
            style={{
              backgroundSize: "100vw 850px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default IPadSection;
