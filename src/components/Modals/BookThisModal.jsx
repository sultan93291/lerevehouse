/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import {
  CrossModalSvg,
  ResetButtonSvg,
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

const BookThisModal = ({ setOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    toast.success("Form Submitted Successfully");
    setOpen(false);
  };
  return (
    <DialogContent className=" w-[350px] sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[900px]  3xl:min-w-[1200px] z-[9999999] px-2 py-3  lg:py-6 text-center font-nunito">
      {/* Wrap everything in a container that can scroll and hide scrollbar */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="py-3 w-full flex items-center justify-between">
            {/* title */}
            <div>
              <h2 className="font-editorsNoteNormal text-primary font-semibold text-2xl tracking-wide">
                General trip form
              </h2>
            </div>

            {/* close Btn */}
            <div
              onClick={() => setOpen(false)}
              className="size-7 cursor-pointer group hover:bg-primary transition-all duration-300 border border-primary rounded-full flex items-center justify-center"
            >
              <CrossModalSvg />
            </div>
          </DialogTitle>
          <DialogDescription className="text-[#052D4C] text-base flex ">
            {/* modal body */}
            <div className="w-full mt-2">
              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex 3xl:flex-row flex-col gap-6 lg:gap-12 font-inter text-primary"
              >
                {/* Right Side */}
                <div className="space-y-5 w-full">
                  <div className="space-y-2 w-full ">
                    <div className="space-y-2 flex flex-col gap-y-1 items-start">
                      <label
                        htmlFor="name"
                        className=" text-base lg:text-lg font-medium text"
                      >
                        Your name*
                      </label>
                      <div className="w-full">
                        <div className="w-full flex-col md:flex-row   flex gap-4">
                          <input
                            required
                            placeholder="First Name"
                            className="px-4  font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                            type="text"
                            name=""
                            id="firstName"
                          />
                          <input
                            required
                            placeholder="Last Name"
                            className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                            type="text"
                            name=""
                            id="lastName"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="space-y-2 flex flex-col gap-y-1 items-start ">
                      <label
                        htmlFor="email"
                        className=" text-base lg:text-lg font-medium text"
                      >
                        Email address*
                      </label>
                      <div className="w-full">
                        <input
                          required
                          placeholder="example@gmail.com"
                          className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                          type="email"
                          name=""
                          id="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="space-y-2 flex flex-col gap-y-1 items-start">
                      <label
                        htmlFor="confirmEmail"
                        className="text-base lg:text-lg font-medium text"
                      >
                        Confirm email address*
                      </label>
                      <div className="w-full">
                        <input
                          required
                          placeholder="example@gmail.com"
                          className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                          type="email"
                          name=""
                          id="confirmEmail"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="space-y-2 flex flex-col gap-y-1 items-start ">
                      <label
                        htmlFor="telephone"
                        className=" text-base lg:text-lg font-medium text"
                      >
                        Telephone*
                      </label>
                      <div className="w-full">
                        <div className="flex items-center gap-2">
                          <input
                            required
                            placeholder="Bangladesh (+880)"
                            className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-3/5 read-only"
                            type="email"
                            name=""
                            readOnly
                            id="numberCode"
                          />
                          <input
                            required
                            placeholder="17********"
                            className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                            type="number"
                            name=""
                            id="telephone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="space-y-2 flex flex-col gap-y-1 items-start">
                      <label
                        htmlFor="message"
                        className=" text-base lg:text-lg font-medium text"
                      >
                        How did you hear about us?
                      </label>
                      <div className="w-full">
                        <input
                          required
                          placeholder="I've enquired with you before"
                          className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                          type="text"
                          name=""
                          id="message"
                        />
                      </div>
                    </div>
                  </div>

                  {/* submit btn */}
                  <div className="flex items-end  w-full justify-end">
                    <div className="flex   md:justify-normal  items-end justify-end gap-4">
                      <button
                        onClick={() => {
                          reset();
                        }}
                        className="flex shadow-md items-center text-sm lg:text-base px-3 lg:px-6 py-3 border border-primary gap-2"
                      >
                        <span>
                          <ResetButtonSvg />
                        </span>
                        Clean all
                      </button>
                      <button
                        onClick={() => handleSubmit}
                        className="flex items-center bg-primary text-sm lg:text-base text-white px-6 py-3 border border-primary  gap-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

export default BookThisModal;
