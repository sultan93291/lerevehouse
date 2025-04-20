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
import { useState } from "react";
import { usePlanTripRequestMutation } from "@/Redux/features/api/apiSlice";

const TestModal = ({ setOpen }) => {
  const [range, setRange] = useState([10000, 20000]);
  const [country, setcountry] = useState();
  const [month, setmonth] = useState();
  const [year, setyear] = useState();
  const [duration, setduration] = useState();
  const [totalPeople, settotalPeople] = useState();
  const [planYourTrip, { data, error: mutationError, isLoading }] =
    usePlanTripRequestMutation();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async data => {
    const allSelectData = {
      destination: country,
      month: month,
      year: year,
      duration: duration,
      number_of_member: parseInt(totalPeople),
      spent_per_person: range.join("-"),
    };

    const payloadData = {
      ...data,
      ...allSelectData,
    };

    console.log(payloadData);

    try {
      const response = await planYourTrip(payloadData).unwrap();
      console.log("Query submitted successfully:", response);
      if (response) {
        toast.success(response.message);
      }
    } catch (error) {
      const errorMessage =
        error.data?.message || error.error || error.status || error.message;
      toast.error(errorMessage);
    } finally {
      settotalPeople("");
      setduration("");
      setyear("");
      setmonth("");
      setcountry("");
      setRange([10000, 20000]);
      reset();
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };
  return (
    <DialogContent className=" w-[350px] sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[900px]  3xl:min-w-[1200px]  px-2 py-3  lg:py-6 text-center font-nunito">
      {/* Wrap everything in a container that can scroll and hide scrollbar */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="py-3 w-full flex items-center justify-between">
            {/* title */}
            <div>
              <h2 className="font-editorsNoteNormal text-primary font-semibold text-2xl tracking-wide">
                Plan your trip
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
                {/* left side */}
                <div className="space-y-5 w-full">
                  <div className="space-y-2 flex flex-col gap-y-1 items-start w-full">
                    <label
                      htmlFor="destination"
                      className=" text-base lg:text-lg font-medium text"
                    >
                      Where would you like to go?*
                    </label>
                    <div className="w-full">
                      <Select
                        onValueChange={value => {
                          setcountry(value);
                        }}
                        value={country}
                      >
                        <SelectTrigger className="w-full h-12 px-2 lg:px-4 text-sm lg:text-base">
                          <SelectValue placeholder="Select a Destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* <SelectLabel>Destination</SelectLabel> */}
                            <SelectItem value="Alaska">Alaska</SelectItem>
                            <SelectItem value="Canada West">
                              Canada West
                            </SelectItem>
                            <SelectItem value="West USA">West USA</SelectItem>
                            <SelectItem value="Canada East">
                              Canada East
                            </SelectItem>
                            <SelectItem value="Caribian">Caribian</SelectItem>
                            <SelectItem value="Yukatan and Baja California">
                              Yukatan and Baja California
                            </SelectItem>
                            <SelectItem value="Travel with Extension">
                              Travel with Extension
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2 flex flex-col gap-y-1 items-start w-full">
                    <label
                      htmlFor="destination"
                      className="text-base lg:text-lg  font-medium text"
                    >
                      When would you like to go?
                    </label>
                    <div className="w-full  flex lg:flex-row flex-col items-center gap-3">
                      {/* Month */}
                      <Select
                        onValueChange={value => {
                          setmonth(value);
                        }}
                        value={month}
                      >
                        <SelectTrigger className="w-full h-12  px-2 lg:px-4 text-sm lg:text-base">
                          <SelectValue placeholder="Select a Month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* <SelectLabel>Destination</SelectLabel> */}
                            <SelectItem value="January">January</SelectItem>
                            <SelectItem value="February">February</SelectItem>
                            <SelectItem value="March">March</SelectItem>
                            <SelectItem value="April">April</SelectItem>
                            <SelectItem value="May">May</SelectItem>
                            <SelectItem value="June">June</SelectItem>
                            <SelectItem value="July">July</SelectItem>
                            <SelectItem value="August">August</SelectItem>
                            <SelectItem value="September">September</SelectItem>
                            <SelectItem value="October">October</SelectItem>
                            <SelectItem value="November">November</SelectItem>
                            <SelectItem value="December">December</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      {/* Year */}
                      <Select
                        onValueChange={value => {
                          setyear(value);
                        }}
                        value={year}
                      >
                        <SelectTrigger className="w-full h-12 px-2 lg:px-4 text-sm lg:text-base">
                          <SelectValue placeholder="Select a Year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* <SelectLabel>Destination</SelectLabel> */}
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                            <SelectItem value="2028">2028</SelectItem>
                            <SelectItem value="2029">2029</SelectItem>
                            <SelectItem value="2030">2030</SelectItem>
                            <SelectItem value="2031">2031</SelectItem>
                            <SelectItem value="2032">2032</SelectItem>
                            <SelectItem value="2033">2033</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2 flex flex-col gap-y-1 items-start  w-full">
                    <label
                      htmlFor="destination"
                      className="text-base lg:text-lg  font-medium text"
                    >
                      How long for?*
                    </label>
                    <div className="w-full">
                      {/* Days */}
                      <Select
                        onValueChange={value => {
                          setduration(value);
                        }}
                        value={duration}
                      >
                        <SelectTrigger className="w-full h-12 px-2 lg:px-4 text-sm lg:text-base">
                          <SelectValue placeholder="Select a Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* <SelectLabel>Destination</SelectLabel> */}
                            <SelectItem value="1 Days">1 Days</SelectItem>
                            <SelectItem value="2 Days">2 Days</SelectItem>
                            <SelectItem value="3 Days">3 Days</SelectItem>
                            <SelectItem value="4 Days">4 Days</SelectItem>
                            <SelectItem value="5 Days">5 Days</SelectItem>
                            <SelectItem value="6 Days">6 Days</SelectItem>
                            <SelectItem value="7 Days">7 Days</SelectItem>
                            <SelectItem value="14 Days">14 Days</SelectItem>
                            <SelectItem value="1 Month">1 Month</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2 w-full flex flex-col gap-y-1 items-start ">
                    <label
                      htmlFor="destination"
                      className=" text-base lg:text-lg text-left font-medium text"
                    >
                      How many people are traveling?
                    </label>
                    <div className="w-full">
                      {/* Days */}
                      <Select
                        onValueChange={value => {
                          settotalPeople(value);
                        }}
                        value={totalPeople}
                      >
                        <SelectTrigger className="w-full  z-[99] h-12 px-2 lg:px-4 text-sm lg:text-base">
                          <SelectValue placeholder="Select the Total Number of People" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* <SelectLabel>Destination</SelectLabel> */}
                            <SelectItem value="1 Person">1 Person</SelectItem>
                            <SelectItem value="2 Person">2 Person</SelectItem>
                            <SelectItem value="3 Person">3 Person</SelectItem>
                            <SelectItem value="4 Person">4 Person</SelectItem>
                            <SelectItem value="5 Person">5 Person</SelectItem>
                            <SelectItem value="6 Person">6 Person</SelectItem>
                            <SelectItem value="7 Person">7 Person</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2 w-full flex flex-col gap-y-1 items-start">
                    <label
                      htmlFor="destination"
                      className="text-base lg:text-lg font-medium text-left"
                    >
                      How much would you like to spend per person?
                    </label>

                    <div className="w-full flex flex-col-reverse gap-y-4 lg:flex-col">
                      <h5 className="font-semibold text-base lg:text-xl">
                        £{range?.[0].toLocaleString()} - £
                        {range?.[1].toLocaleString()}
                      </h5>

                      <div className="mt-5">
                        <RangeSlider
                          min={0}
                          max={50000}
                          step={1000}
                          defaultValue={range}
                          onInput={setRange}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                            id="first_name"
                            {...register("first_name", {
                              required: "First Name is required",
                              minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters",
                              },
                            })}
                          />
                          <input
                            required
                            placeholder="Last Name"
                            className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                            type="text"
                            name=""
                            id="last_name"
                            {...register("last_name", {
                              required: "Last Name is required",
                              minLength: {
                                value: 2,
                                message:
                                  "Last Name must be at least 2 characters",
                              },
                            })}
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
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 w-full">
                    <div className="space-y-2 flex flex-col gap-y-1 items-start ">
                      <label
                        htmlFor="email"
                        className=" text-base lg:text-lg font-medium text"
                      >
                        Confirm Email address*
                      </label>
                      <div className="w-full">
                        <input
                          required
                          placeholder="example@gmail.com"
                          className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                          type="email"
                          name="confirm_email"
                          id="confirm_email"
                          {...register("confirm_email", {
                            required: "Confirm Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                            validate: value =>
                              value === getValues("email") ||
                              "Emails do not match",
                          })}
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
                            type="text"
                            name=""
                            readOnly
                            id="numberCode"
                          />
                          <input
                            required
                            placeholder="example@gmail.com"
                            className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
                            type="number"
                            name=""
                            id="telephone"
                            {...register("telephone", {
                              required: "Telephone number is required",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="space-y-2 flex flex-col gap-y-1 items-start">
                      <label
                        htmlFor="heard_about_us"
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
                          id="heard_about_us"
                          {...register("heard_about_us", {
                            required: "This filed is required",
                          })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* submit btn */}
                  <div className="flex items-end  w-full justify-end">
                    <div className="flex   md:justify-normal  items-end justify-end gap-4">
                      <button
                        // onClick={() => handleSubmit}
                        onClick={() => {
                          settotalPeople("");
                          setduration("");
                          setyear("");
                          setmonth("");
                          setcountry("");
                          setRange([10000, 20000]);
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
                        type="submit"
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

export default TestModal;
