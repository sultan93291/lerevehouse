import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { CrossModalSvg } from "../common/SvgContainer/SvgContainer"; // Import the close button icon

import img from "../../assets/images/start-journey/startJourneyPic.png";
import WishListCard from "../Cards/WishListCard";

const StartYourJourney = ({ setOpen }) => {
  return (
    <DialogContent className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[900px] z-[9999] 3xl:min-w-[1200px] py-6 text-center font-nunito">
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          {/* Updated DialogTitle with Left Text and Right Close Button */}
          <DialogTitle className="py-3 w-full flex items-center justify-between">
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

          <DialogDescription>
            {/* Modal Content */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Side: Image */}
              <div className="w-full  relative">
                <img
                  src={img}
                  alt="Modal Image"
                  className="w-full h-full object-cover rounded-lg "
                />
                {/* Wish list Card */}
                <div className="absolute top-32 left-8 hidden 2xl:block">
                  <WishListCard width="422px" />
                </div>
              </div>
              {/* Right Side: Input Field */}
              <div className="w-full  flex flex-col justify-center">
                {/* This is the Name */}
                <div className="">
                  <label className="text-lg text-primary font-inter font-medium">
                    Your name*
                  </label>
                  {/* This is the input Field */}
                  <div className="flex flex-col md:flex-row gap-3 mt-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-4 border text-base"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-4 border text-base"
                    />
                  </div>
                </div>
                {/* This is the Email */}
                <div className="mt-6">
                  <label className="text-lg text-primary font-inter font-medium">
                    Email address*
                  </label>
                  {/* This is the input Field */}
                  <div className="flex flex-col md:flex-row gap-3 mt-3">
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="w-full p-4 border text-base"
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
                      className="w-[50%] p-4 border text-base"
                    />
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full p-4 border text-base"
                    />
                  </div>
                </div>
                {/* This is the Notes */}
                <div className="mt-6">
                  <label className="text-lg text-primary font-inter font-medium">
                    Notess
                  </label>
                  {/* This is the input Field */}
                  <div className="flex flex-col md:flex-row gap-3 mt-3">
                    <textarea
                      type="text"
                      placeholder="Select as many option you want"
                      className="w-full p-3 border text-base md:h-[242px]"
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
            <div className="flex mt-5 gap-3 items-baseline">
              <input type="checkbox" />
              <p className="text-base leading-6">
                I consent to the processing of personal data in compliance with
                the provisions of Legislative Decree 196/03 and subsequent
                amendments on the protection of the same.
              </p>
            </div>
            {/* This is the Button section */}
            <div className="mt-11 flex justify-end">
              <button className="text-[#FFF] text-base bg-[#004265] font-semibold py-4 px-8 md:w-[205px] w-[90%]">
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
