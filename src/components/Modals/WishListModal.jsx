import { useForm } from "react-hook-form";
import {
  CrossModalSvg,
  ResetButtonSvg,
  Star,
} from "../common/SvgContainer/SvgContainer";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import city from "../../assets/images/recomended-attraction/city.png";
import evening from "../../assets/images/recomended-attraction/evening.png";
import hangingBridge from "../../assets/images/recomended-attraction/hangingBride.png";
import sea from "../../assets/images/recomended-attraction/sea.png";
import React, { useState, useEffect, useRef } from "react";
import WishListCard from "../Cards/WishListCard";
import { Dialog } from "@radix-ui/react-dialog";

const WishListModal = ({ open, setOpen, onSpeakToExpertClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form Submitted Successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[400px] md:w-full border z-[9999] text-center font-nunito">
        {/* Wrap everything in a container that can scroll and hide scrollbar */}
        <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
          <DialogHeader>
            <DialogTitle className="py-3 md:w-full flex items-center justify-between">
              {/* title */}
              <div className="flex flex-col md:w-full items-center justify-center md:gap-y-6 gap-y-3">
                <h2 className="font-fontSpring text-[#004265] text-2xl font-light leading-[120%]">
                  Your Wishlist
                </h2>
                <span className="text-base md:text-[22px] text-center font-interTight text-[#565656] md:max-w-[422px] px-5 font-normal leading-[150%]">
                  Your journey awaits here. See your listing on here.
                </span>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="flex flex-col md:gap-y-5">
                <div className="md:pt-10 pb-6 flex flex-col gap-y-5 px-4">
                  {[1, 2, 3, 4].map((item, index) => (
                    <WishListCard key={index} count={item} />
                  ))}
                </div>
                <button
                  onClick={onSpeakToExpertClick}
                  className="md:w-full w-[250px] mx-auto text-white h-auto md:py-4 py-2 bg-[#004265] md:text-base text-sm font-semibold font-interTight"
                >
                  Speak To An Expert
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WishListModal;
