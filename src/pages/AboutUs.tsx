import { FunctionComponent } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent from "../components/FrameComponent";

const AboutUs: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-end justify-start pt-12 pb-0 pl-px pr-20 box-border gap-[153px] leading-[normal] tracking-[normal] mq750:gap-[76px] mq750:pr-10 mq750:box-border mq450:gap-[38px]">
      <FrameComponent7 />
      <section className="w-[1300px] flex flex-col items-start justify-start pt-0 pb-9 pl-5 pr-0 box-border gap-[75px] max-w-full mq750:gap-[37px] mq450:gap-[19px]">
        <FrameComponent6 />
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap">
          <FrameComponent
            freshFlower="Fresh Flower "
            image="/image-21@2x.png"
          />
          <FrameComponent
            frameDivAlignItems="flex-end"
            frameDivJustifyContent="flex-end"
            freshFlower="Creative Design"
            image="/image-31@2x.png"
          />
          <FrameComponent
            frameDivAlignItems="flex-start"
            frameDivJustifyContent="flex-start"
            freshFlower="Experienced Team"
            image="/image-41@2x.png"
          />
        </div>
      </section>
      <footer className="mr-[-81px] bg-gray-300 flex flex-row items-start justify-start pt-[27px] px-[218px] pb-[30px] box-border max-w-[106%] text-center text-5xl text-border-default-default font-inria-serif mq750:pl-[109px] mq750:pr-[109px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[115px] w-[1440px] relative bg-gray-300 hidden max-w-full" />
        <div className="flex-1 relative inline-block max-w-full z-[1] mq450:text-lgi">
          © 2024 All rights reserved by the Incubation Center of Kirirom
          Institute of Technology. This project is for practice purposes only
          and is not intended for real-world use
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
