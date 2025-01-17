import { FunctionComponent, useCallback } from "react";
import InnerContent from "../components/InnerContent";
import { useNavigate } from "react-router-dom";

const Testimony: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-end justify-start pt-[35px] px-0 pb-[0.2px] box-border gap-[215.2px] leading-[normal] tracking-[normal] mq750:gap-[108px] mq450:gap-[54px]">
      <main className="w-[1402px] flex flex-row items-start justify-end py-0 px-[47px] box-border max-w-full lg:pl-[23px] lg:pr-[23px] lg:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[123px] max-w-full text-center text-13xl text-sandybrown font-inria-sans lg:gap-[61px] mq750:gap-[31px] mq450:gap-[15px]">
          <InnerContent />
          <div className="self-stretch flex flex-col items-start justify-start gap-[105px] max-w-full mq750:gap-[52px] mq450:gap-[26px]">
            <div className="flex flex-row items-start justify-start py-0 pl-[519px] pr-[518px] box-border max-w-full lg:pl-[259px] lg:pr-[259px] lg:box-border mq750:pl-[129px] mq750:pr-[129px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <h2 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] mq450:text-lgi mq1050:text-7xl">
                Our Testimonials
              </h2>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[51px] max-w-full text-5xl text-background-default-default font-display-sm-semibold lg:flex-wrap mq750:gap-[25px]">
              <div className="h-[458px] flex-1 relative min-w-[422px] max-w-full mq750:min-w-full">
                <img
                  className="absolute top-[0px] left-[0px] rounded-26xl w-[457px] h-[305px] object-contain"
                  alt=""
                  src="/image-31@2x.png"
                />
                <img
                  className="absolute top-[153px] left-[193px] rounded-26xl w-[457px] h-[305px] object-contain z-[1]"
                  alt=""
                  src="/image-11@2x.png"
                />
              </div>
              <div className="w-[607px] flex flex-col items-start justify-start pt-[43px] px-0 pb-0 box-border max-w-full lg:flex-1 mq750:min-w-full mq450:pt-7 mq450:box-border">
                <div className="self-stretch flex flex-col items-end justify-start gap-[34px] mq750:gap-[17px]">
                  <div className="relative mq450:text-lgi">
                    <p className="m-0">
                      Your team turned our wedding into a magical experience!
                      The flower arrangements were beautiful, and the
                      decorations were beyond our expectations. Every detail was
                      handled with care and professionalism. Thank you for
                      making our special day so memorable!
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">{`Sokha & Dara`}</p>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[150px] pr-[142px] mq750:pl-[75px] mq750:pr-[71px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <button
                      className="cursor-pointer [border:none] pt-[20.9px] px-[5px] pb-[23px] bg-darkseagreen-100 flex-1 rounded-xl flex flex-row items-start justify-start hover:bg-darkolivegreen-100"
                      onClick={onButtonClick}
                    >
                      <div className="h-[63.7px] w-[315px] relative rounded-xl bg-darkseagreen-100 hidden" />
                      <div className="flex-1 relative text-xl leading-[19.8px] font-black font-display-sm-semibold text-background-default-default text-center z-[1]">
                        Book Your Experience Today
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch bg-gray-300 flex flex-row items-start justify-start pt-[20.4px] px-[218px] pb-[22.5px] box-border max-w-full text-center text-5xl text-background-default-default font-inria-serif mq750:pl-[109px] mq750:pr-[109px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[86.6px] w-[1440px] relative bg-gray-300 hidden max-w-full" />
        <div className="h-[43.7px] flex-1 relative inline-block max-w-full z-[1] mq450:text-lgi">
          © 2024 All rights reserved by the Incubation Center of Kirirom
          Institute of Technology. This project is for practice purposes only
          and is not intended for real-world use
        </div>
      </footer>
    </div>
  );
};

export default Testimony;
