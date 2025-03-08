import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { CrossModalSvg } from "../common/SvgContainer/SvgContainer"; // Import the close button icon

import mountain from "../../assets/images/tourist-guide/mountain.png";
import WishListCard from "../Cards/WishListCard";

const StartYourJourney = ({ setOpen }) => {
  return (
    <DialogContent className="w-full xl:w-[900px] z-[9999] 3xl:min-w-[1200px] py-6 text-center font-nunito">
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          {/* Updated DialogTitle with Left Text and Right Close Button */}
          <DialogTitle className="py-3 w-full flex items-center justify-between px-4">
            {/* Left Side: Text */}
            <h1 className="font-fontSpring font-light leading-[150%] text-primary text-xl md:text-2xl tracking-wide">
              Start your journey today
            </h1>
            {/* Right Side: Close Button */}
            <div
              onClick={() => setOpen(false)}
              className="size-7 cursor-pointer group hover:bg-primary transition-all duration-300 border border-primary rounded-full flex items-center justify-center"
            >
              <CrossModalSvg />
            </div>
          </DialogTitle>

          <DialogDescription className="w-full relative">
            {/* Modal Content */}
            <div className="flex flex-col w-full xl:flex-row gap-x-6">
              {/* Left Side: Image */}
              <div
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${mountain})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="xl:!w-[600px] w-full xl:!h-[600px] xl:pt-[128px] pt-16 bg-red-500 px-8"
              >
                <div className=" flex flex-col h-[472px] overflow-y-scroll gap-y-5  ">
                  {[1, 2, 3, 4].map((item, index) => {
                    return <WishListCard key={index} count={item} />;
                  })}
                </div>
              </div>
              {/* Right Side: Input Field */}
              <div className="xl:w-1/2 flex flex-col justify-center mx-4 md:mx-0 mt-5 xl:mt-0">
                {/* This is the Name */}
                <div className="">
                  <label className="md:text-lg text-base text-primary font-inter font-medium">
                    Your name*
                  </label>
                  {/* This is the input Field */}
                  <div className="flex flex-col xl:flex-row gap-3 mt-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full md:p-4 p-2 border md:text-base"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full md:p-4 p-2 border md:text-base"
                    />
                  </div>
                </div>
                {/* This is the Email */}
                <div className="mt-6">
                  <label className="md:text-lg text-base text-primary font-inter font-medium">
                    Email address*
                  </label>
                  {/* This is the input Field */}
                  <div className="flex flex-col md:flex-row gap-3 mt-3">
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="w-full md:p-4 p-2 border md:text-base"
                    />
                  </div>
                </div>
                {/* This is the Telephone */}
                <div className="mt-6">
                  <label className="text-lg text-primary font-inter font-medium">
                    Telephone*
                  </label>
                  {/* This is the input Field */}
                  <div className="flex flex-col md:flex-row gap-3 mt-3">
                    <input
                      type="number"
                      placeholder="Bangladesh (+880)"
                      className="md:w-[50%] w-full md:p-4 p-2 border md:text-base"
                    />
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full md:p-4 p-2  border md:text-base"
                    />
                  </div>
                </div>
                {/* This is the Notes */}
                <div className="mt-6">
                  <label className="md:text-lg text-base text-primary font-inter font-medium">
                    Notess
                  </label>
                  {/* This is the input Field */}
                  <div className="flex flex-col md:flex-row gap-3 mt-3">
                    <textarea
                      type="text"
                      placeholder="Select as many option you want"
                      className="w-full md:p-3 p-2 border md:text-base text-sm md:h-[203px]"
                    />
                  </div>
                </div>
                {/* <button
                  onClick={() => setOpen(false)}
                  className="mt-4 w-full text-white h-auto py-2 bg-[#004265] text-base font-semibold font-interTight rounded-lg"
                >
                  Submit
                </button> */}
              </div>
            </div>
            {/* This is the check box */}
            <div className="flex mt-5 gap-3 items-baseline mx-4 md:mx-0">
              <input type="checkbox" />
              <p className="md:text-base text-sm leading-6">
                I consent to the processing of personal data in compliance with
                the provisions of Legislative Decree 196/03 and subsequent
                amendments on the protection of the same.
              </p>
            </div>
            {/* This is the Button section */}
            <div className="md:mt-11 mt-5 flex md:justify-end justify-center">
              <button className="text-[#FFF] md:text-base text-sm bg-[#004265] font-semibold md:py-4 py-2 px-8 md:w-[205px] w-[90%]">
                Speak To An Expert
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

export default StartYourJourney;
