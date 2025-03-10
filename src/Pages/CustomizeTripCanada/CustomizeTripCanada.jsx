import { SpecialStar } from "@/components/common/SvgContainer/SvgContainer";
import { HolidayData } from "@/components/DummyData/CustomizeTripData";
import mountainer from "../../assets/images/customize-trip/mountainer.jpg";
import { useNavigate } from "react-router-dom";

const CustomizeTripCanada = () => {
  const navigate = useNavigate();
  const handleSingleTour = () => {
    navigate("/");
  };
  return (
    <section className=" mt-16 xl:mt-20 mb-0 2xl:my-[156px] py-14 md:py-[72px] relative  w-full overflow-hidden  flex flex-col gap-y-10 md:gap-y-16 xl:gap-y-[144px]">
      <div className="flex flex-col relative w-full gap-y-10 md:gap-y-16 xl:gap-y-[120px] ">
        <div className="flex flex-col justify-center text-center gap-y-4 items-center px-1 md:px-0">
          <h2 className="text-[#1687C7] font-interTight text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[56px] font-semibold leading-[160%] ">
            TRAVEL IDEAS FOR YOUR CANADA HOLIDAYS
          </h2>
          <p className="text-text-gray w-full px-5 xl:max-w-[966px] font-interTight text-[15px] md:text-lg 2xl:text-xl text-center 3xl:text-2xl font-normal leading-[140%]">
            Set off to discover this wonderful country, choose the type
            of Canada tour that is best for you! Total freedom and desire to
            drive? Choose from the  Canada car tours  that we offer. If instead
            you prefer not to drive and rely on an organized trip then look at
            the  bus tours in Canada . Finally, the  train tours in Canada  that
            combine train routes with bus routes....or ferry!
          </p>
        </div>
        <div className="flex px-3 w-full items-center justify-center gap-3 xl:gap-0 relative flex-wrap">
          {HolidayData.map((item, index) => (
            <div
              key={index}
              className="w-full group md:w-[480px] relative h-[250px] shrink-0"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${item.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full group-hover:hidden transition-all ease-in-out duration-500 group-hover:transform group-hover:scale-110 w-full flex flex-col gap-y-2 items-center justify-end xl:pb-[18.42px]">
                <span className="text-white xl:text-xl font-semibold leading-[150%] font-interTight tracking-[1px] ">
                  {" "}
                  {item.tittle}{" "}
                </span>
                <SpecialStar />
              </div>
              <div className="h-[190px] px-[13.5px] gap-y-2 flex flex-col items-center justify-center  group-hover:opacity-100 ease-in-out duration-500  opacity-0 xl:w-[480px] absolute left-0 xl:bottom-0 bottom-8 bg-blackRgba">
                <p className="text-white text-xl font-semibold leading-[150%] font-interTight tracking-[1px] ">
                  {item.tittle}
                </p>
                <p className="text-white text-sm text-center font-semibold leading-[150%] font-interTight tracking-[1px] ">
                  Non puoi andare in Canada senza un tour che ti porti a vedere
                  le balene, le orche, gli orsi (bruni e polari), le volpi, i
                  lupi e molti altri esemplari di questo magnifico paese!
                </p>
                <button
                  onClick={() => handleSingleTour()}
                  className="px-6 py-3 rounded-[5px] bg-[#1687C7] text-sm font-medium leading-[120%] font-interTight text-white  "
                >
                  Scopri di più
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col container gap-y-10 md:gap-y-16 xl:gap-y-[171px] items-center">
        <div className="flex flex-col gap-y-8 md:gap-y-[47px]">
          <div className="flex flex-col justify-center text-center gap-y-2 items-center">
            <h2 className="text-[#000] text-2xl md:text-3xl mb-2 xl:text-5xl 2xl:text-[56px] font-light leading-[150%] tracking-[1px]">
              Make your trip to Canada unique
            </h2>
            <span className="text-[#000] md:text-[18px] font-light leading-[150%] tracking-[1px] font-interTight">
              Change your point of view and let yourself be amazed by a
              territory full of surprises!
            </span>
          </div>
          <div className="flex flex-col xl:flex-row gap-5 md:gap-[35px]">
            <p className="text-text-gray 2xl:text-[18px] font-interTight leading-[150%] tracking-[1px]">
              Canada is an exceptional country, and we would like to help you
              experience it to the fullest by customizing your trip to Canada
              with unforgettable services and excursions. A tour of Canada
              cannot be complete without excursions that allow you to observe
              its fauna up close: from polar bears to grizzlies, from whales to
              moose, from killer whales to eagles. Or ask us how to combine your
              itinerary with a train ride; Canada is beautiful when seen from
              panoramic windows, and the Rocky Mountaineer can be the perfect
              train. If Canada is an idea for your honeymoon, no problem: we
              have discounts and dedicated services to offer you, both in the
              national parks and in the splendid cities of Montreal, Toronto,
              Vancouver, or Quebec City!
            </p>
            <p className="text-text-gray 2xl:text-[18px] font-interTight leading-[150%] tracking-[1px]">
              In Canada, you cannot miss out on trying some outdoor activities:
              rafting, kayaking, canoeing, a seaplane tour, a campervan rental,
              or navigation in the fjords. Whatever your type of trip to Canada,
              we recommend adding a bit of adventure and adrenaline. The
              provinces of Yukon, Northwest Territories, and Nunavut can give
              you immense joy and satisfaction if you like adventure and are not
              too sensitive to the cold. If you love snow and skiing, you
              already know that this is the best country in the world in terms
              of quantity and quality of snow.
            </p>
            <p className="text-text-gray 2xl:text-[18px] font-interTight leading-[150%] tracking-[1px]">
              In Canada, dozens and dozens of ski resorts await you in British
              Columbia, Alberta, and Quebec: snowboarding, alpine skiing, and
              the unique spectacle of heliskiing in the Rocky Mountains. Lodges
              in Canadian national parks, some splendid hotels that you can only
              reach by seaplane or boat, and that wonder called glamping: a new
              type of glamorous camping immersed in nature that only Canada can
              offer. Finally, Alaska, the great frontier land, is perfect for a
              trip that mixes Canada and the United States with exciting
              itineraries, ferries, and unique scenery. Contact us, write to us,
              call us... let us help you discover the wonders of Canada!
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-[45px] items-center  ">
          <div className="flex flex-col gap-y-5">
            <h4 className="text-[#000] text-3xl md:text-4xl xl:text-[56px] font-medium font-inter leading-[150%] tracking-[1px]">
              100% Canada
            </h4>
            <span className="text-[#000] lg:text-[18px] font-interTight xl:max-w-[525px] font-light leading-[150%] tracking-[1px]">
              Enjoy the best of Canada, in total relaxation and surrounded by
              nature! On your next trip to Canada, choose to unplug, not drive
              and immerse yourself in Canadian nature. Discover our packages of
              2 or more days in facilities far from urban centers where you can
              do activities and excursions every day: lodges reachable by
              seaplane, ranches where you can go horseback riding, kayaking
              adventures or in search of bears, moose, reindeer and eagles!
              Without forgetting the Rocky Mountaineer, one of the most
              beautiful and famous trains in the world
            </span>
          </div>
          <div
            className="w-full xl:w-[700px] 2xl:max-w-[1063px] h-[250px] md:h-[400px] xl:h-[574px]  relative "
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${mountainer})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="md:h-full md:w-full flex flex-col justify-end py-8">
              <span className="text-white text-[18px] font-interTight ml-[10px]  max-w-[988px] font-light leading-[150%] tracking-[1px]">
                Rocky Mountaineer One of the most beautiful train journeys in
                the world, are you ready to get on board?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeTripCanada;
