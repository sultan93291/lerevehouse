/* eslint-disable react/prop-types */
import { TourListDetailsClockSvg } from "../SvgContainer/SvgContainer";

const CommonHeroBanner = ({
  bg,
  title,
  italic,
  duration,
  uppercaseTitle,
  uppercaseItalic,
  subTittle,
  subSubTittle,
}) => {
  return (
    <section
      className="h-[350px] sm:h-[400px] px-8 xl:px-0 xl:h-[600px] mt-20 xl:mt-24 bg-cover bg-center flex flex-col gap-5 lg:gap-10 items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${bg})`,
        backgroundColor: "lightgray",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col max-w-[932px] items-center justify-center gap-y-2">
        {subSubTittle && (
          <span className="text-[24px] text-white font-medium leading-[150%] tracking-[1px] ">
            {subSubTittle}
          </span>
        )}
        <h1 className="text-2xl md:text-4xl xl:text-6xl text-center xl:text-left font-editorsNoteNormal font-light text-white xl:leading-[102.4px]">
          <span
            className={`${
              uppercaseTitle ? "uppercase" : "capitalize"
            } text-center `}
          >
            {title && title.toLowerCase()}
          </span>
          {italic && (
            <span
              className={`font-editorsNoteItalic ml-4 ${
                uppercaseItalic ? "uppercase" : "capitalize"
              }`}
            >
              {italic}
            </span>
          )}
        </h1>
        {subTittle && (
          <span className="text-[#fff] text-center text-base xl:text-2xl font-medium md:leading-[150%] ">
            {subTittle}
          </span>
        )}
      </div>

      {duration && (
        <div className="bg-white px-2 lg:px-5 py-2 text-sm lg:text-base text-primary font-interTight font-semibold flex items-center gap-3">
          <TourListDetailsClockSvg />
          <span>{duration} </span>
        </div>
      )}
    </section>
  );
};

export default CommonHeroBanner;
