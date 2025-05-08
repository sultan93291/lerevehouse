import person from "@/assets/images/person.png";
import { TestimonialStarSvg } from "../SvgContainer/SvgContainer";

const TestimonialSliderHomepage = ({ data }) => {

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;


  return (
    <div className=" xl:max-w-[760px] 4xl:max-w-[1060px] mx-auto text-white pb-10 2xl:pb-20">
      <div className="w-full flex items-center justify-center">
        <div className="size-24">
          <img
            className="w-full h-full object-cover rounded-full"
            src={`${imgBaseurl}/${data?.image}`}
            alt=""
          />
        </div>
      </div>
      {/* description */}
      <p className="font-editorsNoteNormal text-lg lg:text-xl tracking-wider font-light mt-6 text-center leading-[1.6]">
        {data?.comment}
      </p>
      {/* star */}

      <div className="mt-5 w-full flex items-center justify-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="bg-white size-6 flex items-center justify-center rounded-md"
          >
            <TestimonialStarSvg
              className={i < data?.rating ? "text-yellow-400" : "text-gray-300"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSliderHomepage;