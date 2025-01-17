import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[88px] max-w-full text-center text-21xl text-sandybrown font-inria-serif mq450:gap-[22px] mq750:gap-11 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[514px] lg:pl-[257px] lg:pr-[257px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-32 mq750:pr-32 mq750:box-border">
        <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] mq1050:text-13xl mq450:text-5xl">
          OUR GALLERY
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[47px] mq750:gap-[23px]">
        <h1 className="m-0 w-[162px] relative text-inherit font-normal font-[inherit] inline-block mq1050:text-13xl mq450:text-5xl">
          Wedding
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-5">
          <img
            className="h-[457px] flex-1 relative rounded-26xl max-w-[305px] overflow-hidden object-cover min-w-[281px]"
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[104px] px-0 pb-0 box-border min-w-[281px] max-w-[305px] mq750:pt-[68px] mq750:box-border">
            <img
              className="self-stretch h-[457px] relative rounded-26xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/image-12@2x.png"
            />
          </div>
          <img
            className="h-[457px] flex-1 relative rounded-26xl max-w-[305px] overflow-hidden object-cover min-w-[281px]"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[104px] px-0 pb-0 box-border min-w-[281px] max-w-[305px] mq750:pt-[68px] mq750:box-border">
            <img
              className="self-stretch h-[457px] relative rounded-26xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
