import { useState } from "react";
import heroBg from "../../assets/video/hero-bg.mp4";
import HeroBtn from "../common/Buttons/HeroBtn";
import { Modal } from "../Modals/Modal";
import HeroReviewButton from "./HeroReviewButton";
import TestModal from "../Modals/TestModal";

const HeroSlide = ({ vidoeUrl, title, subTitle, btnTxt }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  const [open, setOpen] = useState(false);

  const renderTitle = text => {
    const regex = /(.*?)\s*(?:&|and)\s+(\w+)\s*(.*)/i;
    const match = text.match(regex);

    if (!match) {
      return (
        <h1 className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-editorsNoteNormal">
          {text}
        </h1>
      );
    }

    const [, firstPart, highlightedWord, rest] = match;

    return (
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-editorsNoteNormal space-y-2">
        {firstPart.trim()} & <br />
        <span className="!font-editorsNoteItalic">{highlightedWord}</span>{" "}
        {rest}
      </h1>
    );
  };

  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          src={`${imgBaseurl}/${vidoeUrl}`}
        ></video>

        {/* Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00426533] to-[#00426533] z-10"></div>

        {/* Content */}
        <div className="relative px-6 lg:px-0 z-20 flex pt-20 lg:pt-0 items-center justify-center flex-col text-center space-y-6 lg:space-y-8">
          <HeroReviewButton />
          {renderTitle(title)}
          <h4 className="font-interTight font-semibold text-lg lg:text-xl">
            {subTitle}
          </h4>
          <div onClick={() => setOpen(true)}>
            <HeroBtn btnTxt={btnTxt} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <TestModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default HeroSlide;
