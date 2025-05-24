import person from "@/assets/images/person.png";
import { TestimonialStarSvg } from "../SvgContainer/SvgContainer";

const TestimonialSliderHomepage = ({ data }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div className="xl:max-w-[760px] 4xl:max-w-[1060px] mx-auto text-white pb-10 2xl:pb-20">
      {/* Avatar */}
      <div className="w-full flex items-center justify-center">
        <div className="size-24">
          <img
            className="w-full h-full object-cover rounded-full"
            src={data?.image ? `${imgBaseurl}/${data.image}` : person}
            alt={data?.name || "User"}
          />
        </div>
      </div>

      {/* Name & Country */}
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-semibold">{data?.name || "Anonymous"}</h3>
        <p className="text-sm italic text-gray-300">
          {data?.country || "Unknown Country"}
        </p>
      </div>

      {/* Title */}
      <p className="text-center text-md font-medium mt-3 text-yellow-200">
        {data?.title}
      </p>

      {/* Comment */}
      <p className="font-editorsNoteNormal text-lg lg:text-xl tracking-wider font-light mt-6 text-center leading-[1.6]">
        {data?.comment}
      </p>

      {/* Star Rating */}
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
