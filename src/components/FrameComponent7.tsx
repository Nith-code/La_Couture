import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onTestimonialTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <header
      className={`w-[1280px] flex flex-row items-start justify-end py-0 px-2 box-border max-w-full text-center text-13xl text-sandybrown font-josefin-slab ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5">
        <div className="h-[104px] w-[299px] relative">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[108px] object-cover"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <h2 className="m-0 absolute top-[39px] left-[97px] text-inherit leading-[26px] font-semibold font-[inherit] inline-block w-[203px] h-[26px] whitespace-nowrap z-[1]">
            La Couture
          </h2>
        </div>
        <div className="w-[573px] flex flex-col items-start justify-end pt-0 px-0 pb-[33px] box-border max-w-full text-left text-xl font-display-sm-semibold">
          <div className="self-stretch flex flex-row items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="h-[15px] flex-1 relative max-w-full">
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
              <a
                className="[text-decoration:none] absolute top-[0px] left-[205px] font-semibold text-[inherit] inline-block w-[120px] h-[15px] min-w-[120px] cursor-pointer"
                onClick={onTestimonialTextClick}
              >
                Testimonial
              </a>
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px]">
              <a
                className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block shrink-0 min-w-[94px] cursor-pointer"
                onClick={onAboutUsTextClick}
              >
                About us
              </a>
              <div className="w-[87px] h-1 relative bg-sandybrown" />
            </div>
            <a
              className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block min-w-[87px] cursor-pointer"
              onClick={onContactTextClick}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent7;
