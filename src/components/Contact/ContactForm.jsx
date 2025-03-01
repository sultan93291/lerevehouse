import { WhiteDotSvg } from "../common/SvgContainer/SvgContainer";

const ContactForm = () => {
  return (
    <div className="bg-primary w-full lg:w-1/2 px-4 lg:pl-8 3xl:pl-52 2xl:pl-16 3xl:pr-12 lg:pr-8 2xl:py-16 py-8 text-white">
      <div className="flex items-center gap-2 font-interTight text-lg">
        <WhiteDotSvg />
        <span>Plan Your Trip</span>
      </div>

      {/* main title */}
      <div>
        <h2 className="font-editorsNoteNormal text-3xl lg:text-4xl 2xl:text-5xl font-medium mt-3">
          Get In Touch
        </h2>

        {/* form start */}

        <div className="mt-8 font-interTight">
          <div className="pb-5">
            <h5 className="font-interTight text-xl">Send us a message</h5>
          </div>

          <form className="space-y-5">
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Enter Your Name"
                className="py-3 focus:outline-none text-black px-5 placeholder:text-[#9C9EA166]"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter Your Email"
                className="py-3 focus:outline-none text-black px-5 placeholder:text-[#9C9EA166]"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="comments">Comments / Questions</label>
              <textarea
                placeholder="Enter your comment"
                className="resize-none w-full focus:outline-none px-6 py-4 text-black placeholder:text-[#9C9EA166]"
                rows={4}
                name="comments"
                id="comments"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-secondary px-20 py-3 font-interTight text-white font-semibold transition-all duration-300 hover:bg-white border border-secondary hover:text-secondary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
