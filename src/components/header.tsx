import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

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
      className={`self-stretch flex flex-row items-end justify-between max-w-full gap-5 text-center text-13xl text-sandybrown font-josefin-slab ${className}`}
    >
      <div className="h-[104px] w-[299px] relative">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[108px] object-cover"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <a className="[text-decoration:none] absolute top-[39px] left-[97px] leading-[26px] font-semibold text-[inherit] inline-block w-[203px] h-[26px] whitespace-nowrap z-[1]">
          La Couture
        </a>
      </div>
      <div className="w-[573px] flex flex-col items-start justify-end pt-0 px-0 pb-[30px] box-border max-w-full text-left text-xl font-display-sm-semibold">
        <div className="self-stretch h-[29px] relative">
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
          <a
            className="[text-decoration:none] absolute top-[0px] left-[359px] font-semibold text-[inherit] inline-block w-[94px] h-[15px] min-w-[94px] whitespace-nowrap cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About us
          </a>
          <a
            className="[text-decoration:none] absolute top-[0px] left-[487px] font-semibold text-[inherit] inline-block w-[87px] h-[15px] min-w-[87px] cursor-pointer"
            onClick={onContactTextClick}
          >
            Contact
          </a>
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5">
            <a className="[text-decoration:none] h-[15px] relative font-semibold text-[inherit] inline-block shrink-0 min-w-[66px]">
              Home
            </a>
            <div className="w-[55px] h-1 absolute !m-[0] bottom-[0px] left-[0px] bg-sandybrown" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
