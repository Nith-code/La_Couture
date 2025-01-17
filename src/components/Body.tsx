import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type BodyType = {
  className?: string;
};

const Body: FunctionComponent<BodyType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick1 = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  return (
    <div
      className={`w-[1236.5px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-center text-21xl text-sandybrown font-display-sm-semibold ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[45px] max-w-full mq1050:flex-wrap mq750:gap-[22px]">
        <div className="h-[667px] flex-1 relative min-w-[409px] max-w-full mq750:min-w-full">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[351px] h-[526px] object-cover"
            alt=""
            src="/image3@2x.png"
          />
          <img
            className="absolute top-[141px] left-[279px] rounded-26xl w-[351px] h-[526px] object-cover z-[1]"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
        <div className="w-[521.5px] flex flex-col items-start justify-start pt-[141px] px-0 pb-0 box-border max-w-full mq1050:flex-1 mq450:pt-[92px] mq450:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[65px] max-w-full mq450:gap-4 mq750:gap-8">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1">
              <h1 className="m-0 relative text-inherit italic font-normal font-[inherit] mq1050:text-13xl mq450:text-5xl">
                <p className="m-0">La Couture Always Brings</p>
                <p className="m-0">You the Next Level Wedding</p>
              </h1>
            </div>
            <div className="w-[491px] flex flex-row items-start justify-center gap-[32.9px] max-w-full mq750:gap-4 mq750:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[149px]">
                <button
                  className="cursor-pointer [border:none] pt-6 pb-[26px] pl-1.5 pr-0.5 bg-darkseagreen-200 self-stretch rounded-xl flex flex-row items-start justify-start hover:bg-darkolivegreen-200"
                  onClick={onButtonClick}
                >
                  <div className="h-[74px] w-[228.6px] relative rounded-xl bg-darkseagreen-200 hidden" />
                  <div className="flex-1 relative text-xl font-black font-display-sm-semibold text-background-default-default text-center z-[1]">
                    Book a Consultation
                  </div>
                </button>
              </div>
              <button
                className="cursor-pointer [border:none] pt-6 pb-[26px] pl-[7px] pr-0.5 bg-gray-300 flex-[0.9608] rounded-xl flex flex-row items-start justify-start box-border min-w-[149px] hover:bg-darkslategray mq450:flex-1"
                onClick={onButtonClick1}
              >
                <div className="h-[74px] w-[229.5px] relative rounded-xl bg-gray-300 hidden" />
                <div className="flex-1 relative text-xl font-black font-display-sm-semibold text-background-default-default text-center z-[1]">
                  View Our Gallery
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
