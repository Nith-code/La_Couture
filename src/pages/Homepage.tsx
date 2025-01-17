import { FunctionComponent } from "react";
import FrameComponent2 from "../components/header";
import Body from "../components/Body";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full relative shadow-md bg-gray-200 border-black border border-solid flex flex-col items-center justify-start pt-8 pb-0 gap-8 leading-normal tracking-normal">
      <main className="w-full max-w-[1400px] flex flex-row items-start justify-start px-4 md:px-8 lg:px-16">
        <section className="flex-1 flex flex-col items-start justify-start gap-8 md:gap-12 lg:gap-16">
          <FrameComponent2 />
          <Body />
        </section>
      </main>
      <footer className="w-full bg-gray-300 flex flex-col items-center justify-center text-center text-sm md:text-base lg:text-lg text-floralwhite font-inria-serif py-6 px-4 md:px-12 lg:px-24">
        <div className="w-full max-w-[1400px]">
          © 2024 All rights reserved by the Incubation Center of Kirirom
          Institute of Technology. This project is for practice purposes only
          and is not intended for real-world use.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
