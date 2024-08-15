import React from "react";

const TradeIn = () => {
  return (
    <div
      data-unit-id="macbook-air-m3"
      data-analytics-section-engagement="name:promo-macbook-air-m3"
      style={{
        boxSizing: "border-box",
        position: "relative",
        paddingTop: 0,
        borderStyle: "none",
        overflow: "visible",
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}
    >
      <div className=" bg-white text-black  h-[580px] ">
        <div className=" h-[580px] relative  flex flex-col overflow-hidden bg-[#f5f5f7] ">
          <a
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 3,
            }}
            href="/macbook-air/"
            target="_self"
            rel="follow"
            data-analytics-region="learn more"
            aria-hidden="true"
            tabIndex={-1}
          ></a>
          <div
            style={{
              position: "relative",
              WebkitBoxFlex: 0,
              msFlexPositive: 0,
              flexGrow: 0,
              zIndex: 4,
            }}
            className="unit-copy-wrapper"
          >
            <h1
              style={{
                fontSize: 40,
                lineHeight: 1.1,
                fontWeight: 500,
                letterSpacing: "0em",
                fontFamily:
                  "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,sans-serif",
                marginTop: 53,
                maxWidth: 430,
                backgroundImage:
                  "url(https://www.apple.com/v/home/bp/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_large_2x.png)",
                width: 140,
                height: 33,
                backgroundRepeat: "no-repeat",
                backgroundSize: "140px 33px",
                textAlign: "center",
              }}
              className=" w-full mx-auto relative"
              aria-label="Macbook Air"
            ></h1>
            <p
              className=" w-full mx-auto relative text-[#1d1d1f]"
              style={{
                fontSize: 21,
                lineHeight: 1.19048,
                fontWeight: 400,
                letterSpacing: ".011em",
                fontFamily:
                  "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
                marginTop: 9,
                width: "88%",
                maxWidth: 350,
                textAlign: "center",
              }}
            >
              {/* Get up to 3% Daily Cash Back with every purchase */}
              Get $170-$620 in credit when you trade in iPhone 11 or higher
              <sup>2</sup>.
            </p>

            <div
              className=" mt-5 relative mx-auto  z-20 "
              style={{
                width: "88%",
                maxWidth: 430,

                textAlign: "center",
              }}
            >
              <button className=" text-[14px] cursor-pointer inline-block text-center rounded-full text-[#fff] bg-[#0071e3] font-[400] border-[] min-w-[28px] px-[15px] py-[7px]">
                Learn More
              </button>
              <button className="  text-[14px] ms-5 hover:bg-[#0071e3] hover:text-[#fff] cursor-pointer inline-block text-center rounded-full text-[#2997ff] bg-[rgba(0, 0, 0, 0] font-[400] border  border-[#0071e3] min-w-[28px] px-[15px] py-[7px]">
                Buy
              </button>
            </div>
          </div>
          <div
            style={{
              zIndex: 1,
              overflow: "visible",
              WebkitBoxFlex: 1,
              msFlexPositive: 1,
              flexGrow: 1,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            className=" w-full h-full"
          >
            <figure
              className=" bg-tradeIn "
              style={{
                width: 1262,
                height: 590,
                backgroundSize: "1262px 590px",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                position: "absolute",
                border: 0,
                margin: 0,
                padding: 0,
                left: "calc(50% + 0px)",
                right: "auto",
                bottom: 0,
                transform: "translateX(-50%)",
              }}
            ></figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeIn;
