import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent5 from "../components/FrameComponent5";

const Gallery: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-200 flex flex-col items-center justify-start py-8 px-4 lg:px-8 gap-8 leading-normal tracking-normal">
      {/* Top Frame */}
      <FrameComponent4 />

      {/* Middle Section */}
      <section className="w-full max-w-[1400px] flex flex-row items-start justify-center px-4 lg:px-8">
        <FrameComponent3 />
      </section>

      {/* Bottom Frame */}
      <FrameComponent5 />

      {/* Footer */}
      <footer className="w-full bg-gray-300 flex flex-col items-center justify-center text-center text-sm md:text-base lg:text-lg text-gray-100 font-inria-serif py-6 px-4">
        <div className="w-full max-w-[1400px]">
          © 2024 All rights reserved by the Incubation Center of Kirirom
          Institute of Technology. This project is for practice purposes only
          and is not intended for real-world use.
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
