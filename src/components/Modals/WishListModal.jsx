
/* eslint-disable react/prop-types */
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
  //   SelectLabel,
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


const WishListModal = ({ setOpen }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    toast.success("Form Submitted Successfully");
    setOpen(false);
  };

  

  return (
    <DialogContent className=" w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[900px] z-[9999]  3xl:min-w-[1200px]  py-6 text-center font-nunito">
      {/* Wrap everything in a container that can scroll and hide scrollbar */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="py-3 w-full flex items-center justify-between">
            {/* title */}
            <div className="flex flex-col gap-y-[6px] ">
              <h2 className=" font-fontSpring font-light leading-[150%]  text-primary  text-2xl tracking-wide">
                Dinner cruise in Vancouver
              </h2>
              <span className="flex flex-row items-center gap-x-1 font-interTight font-normal leading-[150%]  ">
                <Star /> 4.3 (243 reviews)
              </span>
            </div>

            {/* close Btn */}
            <div
              onClick={() => setOpen(false)}
              className="size-7 cursor-pointer group hover:bg-primary transition-all duration-300 border border-primary rounded-full flex items-center justify-center"
            >
              <CrossModalSvg />
            </div>
          </DialogTitle>
          <DialogDescription>
           
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

export default WishListModal;