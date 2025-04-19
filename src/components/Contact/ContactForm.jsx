import { useForm } from "react-hook-form";
import { WhiteDotSvg } from "../common/SvgContainer/SvgContainer";
import { useSendQueryMutation } from "@/Redux/features/api/apiSlice";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [sendQuery, { data, error: mutationError, isLoading }] =
    useSendQueryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async formData => {
    try {
      const response = await sendQuery(formData).unwrap();
      console.log("Query submitted successfully:", response);
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
        <span>Plan Your Trip</span>
      </div>

      <div>
        <h2 className="font-editorsNoteNormal text-3xl lg:text-4xl 2xl:text-5xl font-medium mt-3">
          Get In Touch
        </h2>

        <div className="mt-4 lg:mt-8 font-interTight">
          <div className="pb-3 lg:pb-5">
            <h5 className="font-interTight text-xl">Send us a message</h5>
          </div>

          <div className="space-y-3 lg:space-y-5">
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Enter Your Name"
                className="md:py-3 py-2 focus:outline-none text-black px-5 placeholder:text-[#9C9EA166]"
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-500">* {errors.name.message}</span>
              )}
            </div>

            <div className="w-full flex flex-col gap-3">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter Your Email"
                className="md:py-3 py-2 focus:outline-none text-black px-5 placeholder:text-[#9C9EA166]"
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">* {errors.email.message}</span>
              )}
            </div>

            <div className="w-full flex flex-col gap-3">
              <label htmlFor="query">Comments / Questions</label>
              <textarea
                id="query"
                placeholder="Enter your comment"
                className="resize-none w-full focus:outline-none px-6 py-4 text-black placeholder:text-[#9C9EA166] h-[80px] xl:h-[118px]"
                {...register("query", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              />
              {errors.query && (
                <span className="text-red-500">* {errors.query.message}</span>
              )}
            </div>

            {mutationError && (
              <div className="text-red-500">
                Error submitting form:{" "}
                {mutationError.data?.message || "Please try again later"}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-secondary px-10 2xl:px-20 py-2 lg:py-3 font-interTight text-white font-semibold transition-all duration-300 hover:bg-white border border-secondary hover:text-secondary ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
