import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { CrossModalSvg } from "../common/SvgContainer/SvgContainer";
import mountain from "../../assets/images/tourist-guide/mountain.png";
import WishListCard from "../Cards/WishListCard";
import { useSelector, useDispatch } from "react-redux";
import { removeItinerary } from "@/Redux/features/itenariesSlice";
import { useParams } from "react-router-dom";

const StartYourJourney = ({ setOpen }) => {
  const { id: tripId } = useParams(); // Get trip ID from URL
  const itineraries = useSelector(state =>
    state.itineraries.filter(item => item.tripId === tripId)
  ); // Filter itineraries by tripId
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    notes: "",
    consent: false,
  });
  const [formErrors, setFormErrors] = useState({});

  // Handle itinerary removal
  const handleRemove = idToRemove => {
    dispatch(removeItinerary(idToRemove));
  };

  // Handle form input changes
  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for the field when user starts typing
    setFormErrors(prev => ({ ...prev, [name]: "" }));
  };

  // Validate form before submission
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!formData.consent) {
      errors.consent = "You must consent to data processing";
    }
    if (itineraries.length === 0) {
      errors.itineraries = "At least one itinerary is required";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // TODO: Implement API call to submit form data
    console.log("Form submitted:", { ...formData, itineraries });
    setOpen(false); // Close modal on successful submission
  };

  return (
    <DialogContent className="w-full xl:w-[900px] z-[9999] 3xl:min-w-[1200px] py-6 text-center font-nunito">
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="py-3 w-full flex items-center justify-between px-4">
            <h1 className="font-fontSpring font-light leading-[150%] text-primary text-xl md:text-2xl tracking-wide">
              Start your journey today
            </h1>
            <div
              onClick={() => setOpen(false)}
              className="size-7 cursor-pointer group hover:bg-primary transition-all duration-300 border border-primary rounded-full flex items-center justify-center"
            >
              <CrossModalSvg />
            </div>
          </DialogTitle>

          <DialogDescription className="w-full relative">
            <div className="flex flex-col w-full xl:flex-row gap-x-6">
              {/* Left Side: Image + Itinerary Cards */}
              <div
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${mountain})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="xl:w-[600px] w-full xl:h-[600px] xl:pt-[128px] pt-16 px-8"
              >
                <div
                  className={`flex flex-col h-[472px] ${
                    itineraries.length > 0
                      ? "overflow-y-scroll"
                      : "items-center justify-center"
                  } gap-y-5`}
                >
                  {itineraries.length > 0 ? (
                    itineraries.map((item, index) => (
                      <WishListCard
                        key={`${tripId}-${item.id}`} // Unique key with tripId
                        count={index + 1}
                        data={item}
                        onRemove={() => handleRemove(item.id)}
                      />
                    ))
                  ) : (
                    <p className="text-white text-2xl text-center">
                      <span className="text-red-500">*</span> To send queries,
                      please add at least one itinerary
                    </p>
                  )}
                </div>
              </div>

              {/* Right Side: Input Fields */}
              <div className="xl:w-1/2 flex flex-col justify-center mx-4 md:mx-0 mt-5 xl:mt-0">
                {/* Name */}
                <div className="w-full relative">
                  <label className="md:text-lg text-base text-primary font-inter font-medium">
                    Your name*
                  </label>
                  <div className="flex w-full gap-3 mt-3">
                    <div className="w-full">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full md:p-4 p-2 border md:text-base"
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full md:p-4 p-2 border md:text-base"
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mt-4 lg:mt-6">
                  <label className="md:text-lg text-base text-primary font-inter font-medium">
                    Email address*
                  </label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full mt-3 md:p-4 p-2 border md:text-base"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Telephone */}
                <div className="mt-4 lg:mt-6">
                  <label className="md:text-lg text-base text-primary font-inter font-medium">
                    Telephone*
                  </label>
                  <div className="flex flex-row gap-3 mt-3">
                    <div className="md:w-[50%] w-full">
                      <input
                        type="text"
                        name="countryCode"
                        placeholder="Bangladesh (+880)"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="w-full md:p-4 p-2 border md:text-base"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full md:p-4 p-2 border md:text-base"
                      />
                      {formErrors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-4 lg:mt-6">
                  <label className="md:text-lg text-base text-primary font-inter font-medium">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    placeholder="Select as many options you want"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full mt-3 md:p-3 p-2 border md:text-base text-sm md:h-[203px]"
                  />
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex mt-5 gap-2 sm:gap-3 items-baseline mx-4 md:mx-0">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
              />
              <p className="md:text-base text-sm leading-5 md:leading-6">
                I consent to the processing of personal data in compliance with
                Legislative Decree 196/03 and amendments.
              </p>
              {formErrors.consent && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.consent}
                </p>
              )}
            </div>

            {/* Error for no itineraries */}
            {formErrors.itineraries && (
              <p className="text-red-500 text-sm mt-3 mx-4 md:mx-0">
                {formErrors.itineraries}
              </p>
            )}

            {/* Submit Button */}
            <div className="md:mt-11 mt-5 flex md:justify-end justify-center">
              <button
                onClick={handleSubmit}
                className="text-[#FFF] md:text-base text-sm bg-[#004265] font-semibold md:py-4 py-2 px-8 md:w-[205px] w-[90%]"
              >
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
