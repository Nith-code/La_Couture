import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";

const Contact: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-end justify-start pt-[27px] px-0 pb-0 box-border gap-[149px] leading-[normal] tracking-[normal] mq750:gap-[74px] mq450:gap-[37px]">
      <FrameComponent8 />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-4 pl-20 pr-[74px] box-border max-w-full text-center text-21xl text-sandybrown font-inria-serif mq750:pl-10 mq750:pr-[37px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[92px] max-w-full mq750:gap-[46px] mq450:gap-[23px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[26px]">
            <div className="flex flex-col items-start justify-start gap-7">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq450:text-5xl mq1050:text-13xl">
                Have questions?
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-[3px] text-5xl text-snow">
                <i className="flex-1 relative mq450:text-lgi">
                  Call us at +855-123-456-789
                </i>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-32 max-w-full text-5xl lg:gap-16 lg:flex-wrap mq750:gap-8 mq450:gap-4">
            <div className="flex-1 rounded-21xl bg-dimgray flex flex-col items-end justify-start pt-[51px] pb-9 pl-11 pr-[52px] box-border relative gap-[30px] min-w-[409px] max-w-full mq750:gap-[15px] mq750:pt-[33px] mq750:pb-[23px] mq750:pl-[22px] mq750:pr-[26px] mq750:box-border mq750:min-w-full">
              <div className="w-[630px] h-[697px] relative rounded-21xl bg-dimgray hidden max-w-full z-[0]" />
              <i className="w-[107px] absolute !m-[0] bottom-[259px] left-[57px] inline-block min-w-[107px] z-[1] mq450:text-lgi">
                Messages
              </i>
              <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-3">
                  <i className="flex-1 relative z-[1] mq450:text-lgi">Name</i>
                </div>
                <input
                  className="[border:none] [outline:none] bg-snow self-stretch h-[54px] relative rounded-xl min-w-[250px] z-[1]"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-3">
                  <i className="flex-1 relative inline-block min-w-[66px] z-[1] mq450:text-lgi">
                    Email
                  </i>
                </div>
                <input
                  className="[border:none] [outline:none] bg-snow self-stretch h-[54px] relative rounded-xl min-w-[250px] z-[2]"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[29px] gap-1">
                <div className="w-56 flex flex-row items-start justify-start py-0 pl-[13px] pr-3 box-border">
                  <i className="flex-1 relative z-[1] mq450:text-lgi">
                    Consultation Date
                  </i>
                </div>
                <input
                  className="[border:none] [outline:none] bg-snow self-stretch h-[54px] relative rounded-xl min-w-[250px] z-[1]"
                  type="text"
                />
              </div>
              <textarea
                className="[border:none] bg-snow h-[135px] w-auto [outline:none] self-stretch rounded-xl flex flex-row items-start justify-start"
                rows={7}
                cols={27}
              />
              <button className="cursor-pointer [border:none] pt-[13px] pb-4 pl-3 pr-[9px] bg-darkseagreen-300 rounded-xl flex flex-row items-start justify-start z-[1] hover:bg-darkolivegreen-300">
                <div className="h-[58px] w-[249px] relative rounded-xl bg-darkseagreen-300 hidden" />
                <i className="flex-1 relative text-5xl font-bold font-inria-serif text-snow text-center z-[1]">
                  Submit Your Inquiry
                </i>
              </button>
            </div>
            <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-full text-7xl text-snow lg:flex-1 mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[78px] max-w-full mq750:gap-[39px] mq450:gap-[19px]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[21px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1.5 box-border max-w-full">
                    <img
                      className="h-[289px] flex-1 relative rounded-[44px] max-w-full overflow-hidden object-cover"
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                  <i className="w-[495px] relative inline-block max-w-full mq450:text-[21px]">
                    St.123 Sen Sok, Phnom Penh, Cambodia
                  </i>
                </div>
                <div className="w-[503px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-5xl text-background-default-default">
                  <div className="w-[295px] flex flex-col items-end justify-start gap-6">
                    <a
                      className="self-stretch relative [text-decoration:underline] italic text-[inherit] mq450:text-lgi"
                      href={`https://www.facebook.com/lacouturephnompenh?__cft__[0]=AZURskPSRkx4U11FPbtHMwRrAkyEeOQoN3V2ggr0ZH0vEW_Gzwsi2TTZhF1V7Wx3_WghoGus3gb2QPZ7UgwRrXO1Imj4qxAE5B4ekf8W5A9Umu1O4iPbBIfLF0EtEH_Ho2uyUF-U1V2rV61g3hmkl0zE4GoxP4lKMb_DQ51OXR9bM1UQ96oEG9U9Dqx5hryF2MI&__tn__=-UC*F`}
                      target="_blank"
                    >
                      La Couture Phnom Penh
                    </a>
                    <div className="flex flex-row items-start justify-end py-0 px-1">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
                        <a
                          className="w-52 relative [text-decoration:underline] inline-block italic text-[inherit] mq450:text-lgi"
                          href={`https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Flacouture_wedding%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1qciAEPSa3zMwXbOa7DLlx3iRMHfcFySlzClrs9U5g9BI8wpyWmQQvgeA_aem_vWIAm9T50c3rWxpvlH-Hnw&h=AT3VML4PKojszVZ33Zyuv2w6sZ4r2FZnVq8Rdorg72M_1akO_XTp6OMO3g1G9HCHX7wBhGOosH8m3Kxq8UTD1DBP18NzKOY-8iwNbWzXfirDPU8c7gO9QUAayg9pmkrBU9-n`}
                          target="_blank"
                        >
                          lacouture_wedding
                        </a>
                        <i className="self-stretch relative mq450:text-lgi">
                          lacouturepp@gmail.com
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-gray-300 flex flex-row items-start justify-start pt-[27px] px-[218px] pb-[30px] box-border max-w-full text-center text-5xl text-snow font-inria-serif mq750:pl-[109px] mq750:pr-[109px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
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

export default Contact;
