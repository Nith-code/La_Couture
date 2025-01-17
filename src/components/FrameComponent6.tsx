import { FunctionComponent } from "react";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-3.5 box-border max-w-full text-center text-21xl text-sandybrown font-inria-serif ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[55px] max-w-full mq750:gap-[27px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[543px] lg:pl-[271px] lg:pr-[271px] lg:box-border mq750:pl-[135px] mq750:pr-[135px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h1 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] mq1050:text-13xl mq450:text-5xl">
            About Us
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[483px] text-17xl lg:pl-[241px] lg:pr-[241px] lg:box-border mq750:pl-[120px] mq750:pr-[120px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h2 className="m-0 flex-1 relative text-inherit italic font-normal font-[inherit] mq1050:text-10xl mq450:text-3xl">
            Our Commitment
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-14 max-w-full text-5xl text-border-default-default mq750:gap-7">
          <img
            className="h-[340px] w-[227px] relative rounded-26xl object-cover"
            loading="lazy"
            alt=""
            src="/image2@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[55px] min-w-[631px] max-w-full mq750:gap-[27px] mq1050:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[35px] max-w-full mq750:gap-[17px] mq1050:flex-wrap">
              <img
                className="h-[340px] w-[227px] relative rounded-26xl object-cover"
                alt=""
                src="/image-13@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[73px] px-0 pb-0 box-border min-w-[461px] max-w-full mq750:min-w-full">
                <b className="relative mq450:text-lgi">
                  With a dedication to luxury and tradition, La Couture is more
                  than a fashion boutique—it's an experience. We are passionate
                  about preserving the beauty of Khmer culture while embracing
                  modern design principles, ensuring that each creation is a
                  masterpiece of authenticity and style.
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[187px] pr-[186px] box-border max-w-full text-17xl text-sandybrown mq750:pl-[93px] mq750:pr-[93px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <h2 className="m-0 flex-1 relative text-inherit italic font-normal font-[inherit] mq1050:text-10xl mq450:text-3xl">
                What Sets Us Apart
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
