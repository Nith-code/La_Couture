import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
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
      className={`w-[1392px] flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full text-center text-13xl text-sandybrown font-josefin-slab lg:pl-[34px] lg:pr-[34px] lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between pt-[37px] pb-[35px] pl-[97px] pr-0 box-border relative max-w-full gap-5 lg:pl-12 lg:box-border mq750:pl-6 mq750:box-border">
        <img
          className="h-full w-[108px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="w-[202px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative leading-[26px] font-semibold text-[inherit] z-[1]">
            La Couture
          </a>
        </div>
        <div className="w-[573px] flex flex-row items-start justify-start gap-[35px] max-w-full text-left text-xl font-display-sm-semibold mq750:gap-[17px]">
          <a
            className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block min-w-[66px] cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </a>
          <div className="flex-1 flex flex-col items-start justify-start gap-3 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1050:hidden">
              <a className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block min-w-[71px]">
                Gallery
              </a>
              <a
                className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block min-w-[120px] cursor-pointer"
                onClick={onTestimonialTextClick}
              >
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
            <div className="w-[66px] h-[5px] relative bg-sandybrown" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
