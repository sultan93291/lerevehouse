/* eslint-disable react/prop-types */
import React from "react";
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
import {
  clearItineraries,
  removeItinerary,
} from "@/Redux/features/itenariesSlice";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostExtraItenariesMutation } from "@/Redux/features/api/apiSlice";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const StartYourJourney = ({ setOpen }) => {
  const { t } = useTranslation();
  const { id: tripId } = useParams();
  const dispatch = useDispatch();
  const itineraries = useSelector(state =>
    state.itineraries.filter(item => item.tripId === tripId)
  );

  const [postExtraItenaries, { isLoading }] = usePostExtraItenariesMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      telephone: "",
      note: "",
    },
  });

  const onSubmit = async data => {
    if (itineraries.length === 0) {
      return alert(t("journey.addItineraryWarning"));
    }

    const payLoadData = {
      ...data,
      trip_package_id: tripId,
      update_tour_plans: itineraries.map(item => ({
        itinerary_id: item.id,
        day_count: item.dayCount,
      })),
    };

    try {
      const response = await postExtraItenaries(payLoadData).unwrap();
      if (response) {
        toast.success(response.message);
        localStorage.removeItem("selectedItineraries");
        dispatch(clearItineraries());
      }
      reset();
      setOpen(false);
    } catch (error) {
      const errorMessage =
        error.data?.message || error.error || error.status || error.message;
      toast.error(errorMessage);
    }
  };

  const handleRemove = idToRemove => {
    dispatch(removeItinerary(idToRemove));
  };

  return (
    <DialogContent className="w-full xl:w-[900px] z-[9999] 3xl:min-w-[1200px] py-6 text-center font-nunito">
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="py-3 w-full flex items-center justify-between px-4">
            <h1 className="font-fontSpring font-light text-primary text-xl md:text-2xl tracking-wide">
              {t("journey.title")}
            </h1>
            <div
              onClick={() => setOpen(false)}
              className="size-7 cursor-pointer group hover:bg-primary transition-all duration-300 border border-primary rounded-full flex items-center justify-center"
            >
              <CrossModalSvg />
            </div>
          </DialogTitle>

          <DialogDescription className="w-full relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col w-full xl:flex-row gap-x-6">
                {/* Left: Image + List */}
                <div
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${mountain})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  className="xl:w-[600px] w-full xl:h-[600px] xl:pt-[128px] pt-16 px-8"
                >
                  <div
                    className={`flex flex-col h-[472px] ${itineraries.length > 0
                        ? "overflow-y-auto"
                        : "items-center justify-center"
                      } gap-y-5`}
                  >
                    {itineraries.length > 0 ? (
                      itineraries.map((item, index) => (
                        <WishListCard
                          key={`${tripId}-${item.id}`}
                          count={index + 1}
                          data={item}
                          onRemove={() => handleRemove(item.id)}
                        />
                      ))
                    ) : (
                      <p className="text-white text-2xl text-center">
                        <span className="text-red-500">*</span>{" "}
                        {t("journey.addItineraryWarning")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: Form */}
                <div className="xl:w-1/2 flex flex-col justify-center mx-4 md:mx-0 mt-5 xl:mt-0">
                  <label className="md:text-lg text-base text-primary font-medium">
                    {t("journey.form.name")}
                  </label>
                  <div className="flex w-full gap-3 mt-3">
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder={t("journey.form.firstName")}
                        className="w-full md:p-4 p-2 border"
                        {...register("first_name", {
                          required: t("journey.errors.firstName"),
                        })}
                      />
                      {errors.first_name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.first_name.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder={t("journey.form.lastName")}
                        className="w-full md:p-4 p-2 border"
                        {...register("last_name", {
                          required: t("journey.errors.lastName"),
                        })}
                      />
                      {errors.last_name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.last_name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-6">
                    <label className="md:text-lg text-base text-primary font-medium">
                      {t("journey.form.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("journey.form.emailPlaceholder")}
                      className="w-full mt-3 md:p-4 p-2 border"
                      {...register("email", {
                        required: t("journey.errors.emailRequired"),
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: t("journey.errors.emailInvalid"),
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 lg:mt-6">
                    <label className="md:text-lg text-base text-primary font-medium">
                      {t("journey.form.telephone")}
                    </label>
                    <div className="flex gap-3 mt-3">
                      <input
                        type="text"
                        disabled
                        placeholder="Bangladesh (+880)"
                        className="w-full md:p-4 p-2 border"
                      />
                      <input
                        type="tel"
                        placeholder={t("journey.form.telephonePlaceholder")}
                        className="w-full md:p-4 p-2 border"
                        {...register("telephone", {
                          required: t("journey.errors.phone"),
                        })}
                      />
                    </div>
                    {errors.telephone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.telephone.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 lg:mt-6">
                    <label className="md:text-lg text-base text-primary font-medium">
                      {t("journey.form.note")}
                    </label>
                    <textarea
                      placeholder={t("journey.form.notePlaceholder")}
                      className="w-full mt-3 md:p-3 p-2 border md:h-[203px]"
                      {...register("note")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-5 gap-2 sm:gap-3 items-baseline mx-4 md:mx-0">
                <input
                  type="checkbox"
                  {...register("consent", {
                    required: t("journey.errors.consent"),
                  })}
                />
                <p className="md:text-base text-sm leading-5 md:leading-6">
                  {t("journey.form.consent")}
                </p>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-sm mt-1 mx-4 md:mx-0">
                  {errors.consent.message}
                </p>
              )}

              <div className="md:mt-11 mt-5 flex md:justify-end justify-center">
                <button
                  type="submit"
                  className="text-white md:text-base text-sm bg-[#004265] font-semibold md:py-4 py-2 px-8 md:w-[205px] w-[90%]"
                >
                  {isLoading
                    ? t("journey.form.submitting")
                    : t("journey.form.submit")}
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

export default StartYourJourney;
