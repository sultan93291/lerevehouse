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
      <DialogContent className="md:max-w-[570px] w-full z-[9999] text-center font-nunito">
        {/* Wrap everything in a container that can scroll and hide scrollbar */}
        <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
          <DialogHeader>
            <DialogTitle className="py-3 w-full flex items-center justify-between">
              {/* title */}
              <div className="flex flex-col items-center gap-y-6">
                <h2 className="font-fontSpring text-[#004265] text-2xl font-light leading-[120%]">
                  Your Wishlist
                </h2>
                <span className="text-[22px] text-center font-interTight text-[#565656] max-w-[422px] font-normal leading-[150%]">
                  Your journey awaits here. See your listing on here.
                </span>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="flex flex-col gap-y-5">
                <div className="pt-10 pb-6 flex flex-col gap-y-5 px-4">
                  {[1, 2, 3, 4].map((item, index) => (
                    <WishListCard key={index} count={item} />
                  ))}
                </div>
                <button
                  onClick={onSpeakToExpertClick}
                  className="w-full text-white h-auto py-4 bg-[#004265] text-base font-semibold font-interTight"
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
