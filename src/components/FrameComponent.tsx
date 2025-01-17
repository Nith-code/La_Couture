import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  freshFlower?: string;
  image?: string;

  /** Style props */
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameDivAlignItems,
  frameDivJustifyContent,
  freshFlower,
  image,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: frameDivAlignItems,
    };
  }, [frameDivAlignItems]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
    };
  }, [frameDivJustifyContent]);

  return (
    <div
      className={`w-[340px] flex flex-col items-end justify-start gap-[34px] max-w-full text-center text-13xl text-border-default-default font-inria-serif mq450:gap-[17px] ${className}`}
      style={frameDivStyle}
    >
      <div
        className="self-stretch flex flex-row items-start justify-end py-0 px-[73px] mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={frameDiv1Style}
      >
        <h2 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] mq1050:text-7xl mq450:text-lgi">
          {freshFlower}
        </h2>
      </div>
      <img
        className="self-stretch flex-1 relative rounded-26xl max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src={image}
      />
    </div>
  );
};

export default FrameComponent;
