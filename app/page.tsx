import AppleIntelligence from "@/components/sections/brandDes/appleIntelligence";
import Cardbrand from "@/components/sections/brandDes/cardbrand";
import MacbookAir from "@/components/sections/brandDes/macbookair";
import TradeIn from "@/components/sections/brandDes/tradeIn";
import VisionPro from "@/components/sections/brandDes/visionPro";
import Watch from "@/components/sections/brandDes/watch";
import Carousels from "@/components/sections/carousel/carousels";
import HeroSection from "@/components/sections/herosection/herosection";
import IPadSection from "@/components/sections/herosection/iPadSection";
import Marquee from "@/components/sections/marquee/marquee";

export default function Home() {
  return (
    <main className=" w-full overflow-hidden">
      <div className=" grid gap-28">
        <HeroSection />
        <IPadSection />
      </div>
      <div className=" grid grid-cols-2 gap-3 mt-28 mb-3  mx-2">
        <div className=" col-span-1">
          <MacbookAir />
        </div>
        <div className=" col-span-1">
          <AppleIntelligence />
        </div>
        <div className=" col-span-1">
          <VisionPro />
        </div>
        <div className=" col-span-1">
          <Watch />
        </div>
        <div className=" col-span-1">
          <Cardbrand />
        </div>
        <div className=" col-span-1">
          <TradeIn />
        </div>
      </div>
      <Carousels />
      {/* <AppleCardsCarouselDemo /> */}
      <Marquee />
    </main>
  );
}
