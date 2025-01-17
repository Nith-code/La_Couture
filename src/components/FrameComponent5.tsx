import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 px-[69px] pb-20 box-border max-w-full text-center text-21xl text-sandybrown font-inria-serif lg:pl-[34px] lg:pr-[34px] lg:box-border mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[52px] max-w-full mq750:gap-[26px]">
        <h1 className="m-0 w-[162px] relative text-inherit font-normal font-[inherit] inline-block mq1050:text-13xl mq450:text-5xl">
          Proposal
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start gap-5 max-w-full">
            <img
              className="h-[457px] flex-1 relative rounded-26xl max-w-[305px] overflow-hidden object-cover min-w-[281px]"
              loading="lazy"
              alt=""
              src="/image-4@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[104px] px-0 pb-0 box-border min-w-[281px] max-w-[305px] mq750:pt-[68px] mq750:box-border">
              <img
                className="self-stretch h-[457px] relative rounded-26xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
            </div>
            <img
              className="h-[457px] flex-1 relative rounded-26xl max-w-[305px] overflow-hidden object-cover min-w-[281px]"
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[104px] px-0 pb-0 box-border min-w-[281px] max-w-[305px] mq750:pt-[68px] mq750:box-border">
              <img
                className="self-stretch h-[457px] relative rounded-26xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
