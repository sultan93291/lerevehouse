/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import {
  CrossModalSvg,
  ResetButtonSvg,
} from '../common/SvgContainer/SvgContainer';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  //   SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import toast from 'react-hot-toast';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const TestModal = ({ setOpen }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success('Form Submitted Successfully');
    setOpen(false);
  };
  return (
    <DialogContent className=" w-[300px] 2xl:min-w-[1200px] px-10 py-6 text-center font-nunito">
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
          <DialogDescription className="text-[#052D4C] text-base">
            {/* modal body */}
            <div className="w-full mt-2">
              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-12 font-inter text-primary"
              >
                {/* left side */}
                <div className="space-y-5 w-full">
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="destination"
                      className="text-lg font-medium text"
                    >
                      Where would you like to go?*
                    </label>
                    <div className="w-full">
                      <Select>
                        <SelectTrigger className="w-full h-12 px-4 text-base">
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
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="destination"
                      className="text-lg font-medium text"
                    >
                      When would you like to go?
                    </label>
                    <div className="w-full flex items-center gap-3">
                      {/* Month */}
                      <Select>
                        <SelectTrigger className="w-full h-12 px-4 text-base">
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
                      <Select>
                        <SelectTrigger className="w-full h-12 px-4 text-base">
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
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="destination"
                      className="text-lg font-medium text"
                    >
                      How long for?*
                    </label>
                    <div className="w-full">
                      {/* Days */}
                      <Select>
                        <SelectTrigger className="w-full h-12 px-4 text-base">
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
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="destination"
                      className="text-lg font-medium text"
                    >
                      How many people are traveling?
                    </label>
                    <div className="w-full">
                      {/* Days */}
                      <Select>
                        <SelectTrigger className="w-full h-12 px-4 text-base">
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
                  <div className="space-y-2 w-full">
                    <label
                      htmlFor="destination"
                      className="text-lg font-medium text"
                    >
                      How much would you like to spend per person?
                    </label>
                    <div className="w-full">
                      <h5 className="font-semibold text-xl">
                        £10,000 - £20,000
                      </h5>
                      <div className='mt-5'>
                        <RangeSlider />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Side */}
                <div className="space-y-5 w-full">
                  <div className="space-y-2 w-full">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-lg font-medium text"
                      >
                        Your name*
                      </label>
                      <div className="w-full">
                        <div className="w-full flex gap-4">
                          <input
                            required
                            placeholder="First Name"
                            className="px-4 py-2 font-inter text-[#565656] h-12 focus:outline-none border border-black/10 w-full"
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
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-lg font-medium text"
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
                    <div className="space-y-2">
                      <label
                        htmlFor="confirmEmail"
                        className="text-lg font-medium text"
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
                    <div className="space-y-2">
                      <label
                        htmlFor="telephone"
                        className="text-lg font-medium text"
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
                            placeholder="example@gmail.com"
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
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-lg font-medium text"
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
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleSubmit}
                        className="flex shadow-md items-center px-6 py-3 border border-primary gap-2"
                      >
                        <span>
                          <ResetButtonSvg />
                        </span>
                        Clean all
                      </button>
                      <button
                        onClick={() => handleSubmit}
                        className="flex items-center bg-primary text-white px-6 py-3 border border-primary  gap-2"
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
