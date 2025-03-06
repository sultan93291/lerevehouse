import { Link } from "react-router-dom";
import TourListDetailsDescriptionItem from "./TourListDetailsDescriptionItem";
import { CheckMark } from "../common/SvgContainer/SvgContainer";
import { tickPriceLeft, tickPriceRight } from "../DummyData/priceDummyData";

const TourListDetailsDatesPrices = () => {
  const priceDetailsItems = [
    {
      description:
        "Overnight stay in a double room in 2/3 star hotels and/or lodges",
    },
    {
      description:
        "basic car rental, compact type without comprehensive insurance",
    },
    {
      description:
        "Transport: Transfers, ferries, including the Inside Passage cruise",
    },
    {
      title: "Single supplement:",
      description: "quote on request",
    },
    {
      title: "Children up to 3 years:",
      description: "free - from 3 to 12 years: price on request:",
    },
  ];
  return (
    <div id="brochure-download" className="flex flex-col gap-y-[30px] xl:gap-y-[60px]">
      {/* title */}
      <div>
        <h3 className="text-2xl md:text-3xl xl:text-4xl text-center text-primary font-editorsNoteNormal">
          Prices for basic and
          <span className="font-editorsNoteItalic">
            Full Inclusive packages
          </span>
        </h3>
      </div>

      <div className="flex flex-col gap-y-5 xl:gap-y-10 ">
        <div className="w-full h-auto py-10 xl:py-20 px-5 xl:px-10 bg-[#F4F4F4] flex flex-col gap-y-8  ">
          <div className="flex flex-col xl:flex-row gap-y-10 gap-x-10 3xl:gap-x-20">
            <div className="flex flex-col flex-wrap gap-y-4  ">
              {tickPriceLeft.map((item, idx) => {
                return (
                  <div className="flex gap-x-2">
                    <div className="w-[22px] h-[22px]">
                      <CheckMark />
                    </div>
                    <span className=" text-text-gray text-base lg:text-lg font-medium leading-[150%] font-interTight ">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col flex-wrap gap-y-4  ">
              {tickPriceRight.map((item, idx) => {
                return (
                  <div className="flex gap-x-2  ">
                    <div className="w-[22px] h-[22px]">
                      <CheckMark />
                    </div>
                    <span className=" text-text-gray text-base lg:text-lg font-medium leading-[150%] font-interTight ">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className=" font-editorsNoteNormal font-medium  text-lg xl:text-xl leading-[150%] text-primary ">
              Exclusive: Everything not included in the list above. Price fixed{" "}
              <br /> subject to fluctuation not excedding 10 % + or - of the
              exchange rate fixed upon the recipt of the bank recipt
            </h2>
          </div>
        </div>
        {/* brochure */}
        <div className="w-full flex flex-col xl:flex-row gap-y-5 gap-x-10 3xl:gap-x-20 2xl:my-10">
          {/* left side */}
          <div className=" w-full xl:w-2/3 p-6 xl:p-10 bg-[#f4f4f4]">
            {/* title */}
            <div>
              <h5 className=" text-2xl xl:text-4xl font-editorsNoteNormal text-primary">
                Basic package
                <span className="font-editorsNoteItalic ">
                  {" "}
                  price €2,850.00
                </span>
              </h5>
              <p className=" text-base xl:text-xl text-text-black font-interTight font-medium mt-4">
                The basic package includes exclusively:
              </p>
            </div>
            {/* items */}
            <div className="mt-5 space-y-4">
              {priceDetailsItems?.map((item, idx) => (
                <TourListDetailsDescriptionItem key={idx} item={item} />
              ))}

              <p className="font-editorsNoteNormal text-primary font-bold text-base xl:text-xl tracking-wide">
                Package option with flight included on request
              </p>
            </div>
          </div>
          {/* right side */}
          <div className=" w-full xl:w-1/3 bg-[#f4f4f4] p-8 xl:p-16 flex flex-col gap-10 items-center justify-center font-interTight">
            <div className="text-center space-y-2">
              <h3 className="font-medium text-text-black font-editorsNoteNormal text-xl lg:text-2xl">
                Speak to a Alaska specialist to start planning your tailor-made
                tour.
              </h3>
              <p className="font-editorsNoteNormal font-semibold text-primary text-2xl lg:text-3xl">
                +39 351 776 7276{" "}
              </p>
            </div>

            {/* cta buttons */}
            <div className="w-full font-interTight space-y-3 md:space-y-6">
              <Link className="block text-white text-center py-2 text-sm lg:text-base lg:py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 w-full bg-primary">
                Make An Enquiry
              </Link>
              <Link className="block text-center bg-transparent text-primary py-2 text-sm lg:text-base lg:py-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full bg-primary">
                Request A Brouchre
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourListDetailsDatesPrices;
