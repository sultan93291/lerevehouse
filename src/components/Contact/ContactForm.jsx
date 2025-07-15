import { useForm } from "react-hook-form";
import { WhiteDotSvg } from "../common/SvgContainer/SvgContainer";
import { useSendQueryMutation } from "@/Redux/features/api/apiSlice";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [sendQuery, { error: mutationError }] = useSendQueryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async formData => {
    try {
      const response = await sendQuery(formData).unwrap();
      if (response) {
        toast.success(response.message);
      }
      reset();
    } catch (error) {
      const errorMessage =
        error.data?.message || error.error || error.status || error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-primary w-full lg:w-1/2 px-4 lg:pl-8 3xl:pl-52 2xl:pl-16 3xl:pr-12 lg:pr-8 2xl:py-16 py-8 text-white"
    >
      <div className="flex items-center gap-2 font-interTight text-lg">
        <WhiteDotSvg />
        <span>{t("contact.planYourTrip")}</span>
      </div>

      <div>
        <h2 className="font-editorsNoteNormal text-3xl lg:text-4xl 2xl:text-5xl font-medium mt-3">
          {t("contact.getInTouch")}
        </h2>

        <div className="mt-4 lg:mt-8 font-interTight">
          <div className="pb-3 lg:pb-5">
            <h5 className="font-interTight text-xl">
              {t("contact.sendMessage")}
            </h5>
          </div>

          <div className="space-y-3 lg:space-y-5">
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="name">{t("contact.name")}</label>
              <input
                placeholder={t("contact.placeholderName")}
                className="md:py-3 py-2 focus:outline-none text-black px-5 placeholder:text-[#9C9EA166]"
                type="text"
                id="name"
                {...register("name", {
                  required: t("contact.errors.nameRequired"),
                  minLength: {
                    value: 2,
                    message: t("contact.errors.nameMin"),
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-500">* {errors.name.message}</span>
              )}
            </div>

            <div className="w-full flex flex-col gap-3">
              <label htmlFor="email">{t("contact.email")}</label>
              <input
                placeholder={t("contact.placeholderEmail")}
                className="md:py-3 py-2 focus:outline-none text-black px-5 placeholder:text-[#9C9EA166]"
                type="email"
                id="email"
                {...register("email", {
                  required: t("contact.errors.emailRequired"),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t("contact.errors.emailInvalid"),
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">* {errors.email.message}</span>
              )}
            </div>

            <div className="w-full flex flex-col gap-3">
              <label htmlFor="query">{t("contact.message")}</label>
              <textarea
                id="query"
                placeholder={t("contact.placeholderMessage")}
                className="resize-none w-full focus:outline-none px-6 py-4 text-black placeholder:text-[#9C9EA166] h-[80px] xl:h-[118px]"
                {...register("query", {
                  required: t("contact.errors.messageRequired"),
                  minLength: {
                    value: 10,
                    message: t("contact.errors.messageMin"),
                  },
                })}
              />
              {errors.query && (
                <span className="text-red-500">* {errors.query.message}</span>
              )}
            </div>

            {mutationError && (
              <div className="text-red-500">
                {t("contact.submitError")}{" "}
                {mutationError.data?.message || "Please try again later"}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-secondary px-10 2xl:px-20 py-2 lg:py-3 font-interTight text-white font-semibold transition-all duration-300 hover:bg-white border border-secondary hover:text-secondary ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {isSubmitting
                  ? t("contact.submitting")
                  : t("contact.submit")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
