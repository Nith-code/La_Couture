import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type InnerContentType = {
  className?: string;
};

const InnerContent: FunctionComponent<InnerContentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-6 box-border max-w-full text-center text-13xl text-sandybrown font-josefin-slab ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5">
        <div className="h-[104px] w-[299px] relative">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[108px] object-cover"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <a className="[text-decoration:none] absolute top-[39px] left-[97px] leading-[26px] font-semibold text-[inherit] inline-block w-[203px] h-[26px] whitespace-nowrap">
            La Couture
          </a>
        </div>
        <div className="w-[573px] flex flex-col items-start justify-end pt-0 px-0 pb-8 box-border max-w-full text-left text-xl font-display-sm-semibold">
          <div className="self-stretch flex flex-row items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="h-[15px] w-[170px] relative">
              <a
                className="[text-decoration:none] absolute top-[0px] left-[0px] font-semibold text-[inherit] inline-block w-[66px] h-[15px] min-w-[66px] cursor-pointer"
                onClick={onHomeTextClick}
              >
                Home
              </a>
              <a
                className="[text-decoration:none] absolute top-[0px] left-[100px] font-semibold text-[inherit] inline-block w-[71px] h-[15px] min-w-[71px] cursor-pointer"
                onClick={onGalleryTextClick}
              >
                Gallery
              </a>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[35px] mq450:gap-[17px] mq1050:hidden">
                <a className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block min-w-[120px]">
                  Testimonial
                </a>
                <a
                  className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block min-w-[94px] cursor-pointer"
                  onClick={onAboutUsTextClick}
                >
                  About us
                </a>
                <a
                  className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block min-w-[87px] cursor-pointer"
                  onClick={onContactTextClick}
                >
                  Contact
                </a>
              </div>
              <div className="w-[116px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                <div className="h-1 flex-1 relative bg-sandybrown" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default InnerContent;
