import mountain from "../../assets/images/guida-turistica/mountain.jpg";
import polarBear from "../../assets/images/guida-turistica/polarBear.jpg";
import parises from "../../assets/images/guida-turistica/praises.jpg";
import quebec from "../../assets/images/guida-turistica/quebec.jpg";
import seaHouse from "../../assets/images/guida-turistica/seaHouse.jpg";
import canadaMap from "../../assets/images/guida-turistica/canadaMap.png";
import { ArrowSignSvg } from "@/components/common/SvgContainer/SvgContainer";
import bear from "../../assets/images/guida-turistica/icons/bear.png";
import beast from "../../assets/images/guida-turistica/icons/beast.png";
import boat from "../../assets/images/guida-turistica/icons/boat.png";
import industry from "../../assets/images/guida-turistica/icons/industry.png";
import piano from "../../assets/images/guida-turistica/icons/piano.png";
import TravelDetailsSlider from "@/components/GuidaTuristica/GuidaTuristica";

import tent from "../../assets/images/guida-turistica/tent.jpg";
import dolphin from "../../assets/images/guida-turistica/dolphin.jpg";
import helicopter from "../../assets/images/guida-turistica/helicopter.jpg";
import lakeMountain from "../../assets/images/guida-turistica/lakeMountain.jpg";

const RedirectData = [
  {
    id: 1,
    src: mountain,
    redirectLink: "/",
    txt: "The Great West Western Canada",
  },
  {
    id: 2,
    src: quebec,
    redirectLink: "/",
    txt: "Ontario & Quebec",
  },
  {
    id: 3,
    src: parises,
    redirectLink: "/",
    txt: "Prairies",
  },
  {
    id: 4,
    src: seaHouse,
    redirectLink: "/",
    txt: "Atlantic Provinces",
  },
  {
    id: 5,
    src: polarBear,
    redirectLink: "/",
    txt: "Atlantic Provinces",
  },
];

const FeaturedLinks = [
  {
    txt: "View the map of Canada",
    redirect: "/",
  },
  {
    txt: "Natural Wonders: National Parks Special",
    redirect: "/",
  },
  {
    txt: "Eating and drinking in Canada, discover our tips",
    redirect: "/",
  },
  {
    txt: "Discover one of our tours in Canada",
    redirect: "/",
  },
  {
    txt: "Customize your trip to Canada",
    redirect: "/",
  },
];

const canadaFeatures = [
  {
    icon: beast,
    text: "Eating & Drinking in Canada",
  },
  {
    icon: industry,
    text: "Eating & Drinking in Canada",
  },
  {
    icon: boat,
    text: "Eating & Drinking in Canada",
  },
  {
    icon: piano,
    text: "Eating & Drinking in Canada",
  },
  {
    icon: bear,
    text: "Eating & Drinking in Canada",
  },
];

const imagesData = [
  {
    src: dolphin,
    txt: "Bears, whales and more!",
    link: "/",
  },
  {
    src: helicopter,
    txt: "City excursions",
    link: "/",
  },
  {
    src: tent,
    txt: "Glamping... in a tent with class",
    link: "/",
  },
  {
    src: lakeMountain,
    txt: "Bears, whales and more!",
    link: "/",
  },
  {
    src: dolphin,
    txt: "Bears, whales and more!",
    link: "/",
  },
];

const TouristGuide = () => {
  return (
    <section className=" mt-[128px] py-[96px] container flex flex-col gap-y-[153px] ">
      <div className="flex flex-col gap-y-[96px]">
        <div className="flex flex-col gap-y-8  items-center justify-center ">
          <h3 className="text-[#1687C7] text-[64px] font-interTight font-bold leading-[160%]  ">
            Canada Travel Guide
          </h3>
          <div className="flex items-center flex-row gap-x-[155px]">
            <img
              src={canadaMap}
              className=" w-[750px] h-[471px] "
              alt="not foun"
            />
            <div className="flex flex-col gap-y-4 ">
              <p className="text-text-gray text-base leading-[180%] font-normal tracking-[1px]  ">
                Welcome to our little tourist guide to Canada , designed to give
                you more and more useful information for your trip to Canada!
                Here you will find all the information divided by geographical
                area and you will be able to delve into other topics such as
                music festivals, Canadian national parks , the growing food
                culture, curiosities and many other practical information. Not
                to mention the 50 'gems' of Xplore: curiosities and experiences
                that we can recommend to you when organizing your trip to
                Canada.Contact us for a free quote even if you are not clear
                about the route, it will mean that we will discover together
                which part of Canada is best for you! We hope to inspire you
                to travel to Canada – the second largest country in the world,
                and we’re sure it will amaze you, whether you’re looking for a
                relaxing trip or a more adventurous one.
              </p>
              <div className="flex flex-col gap-y-[6px]">
                {FeaturedLinks.map((item, index) => {
                  return (
                    <div className=" flex flex-row gap-x-3 hover:underline ease-in-out duration-300 items-center ">
                      <div className="h-[18px] flex items-center cursor-pointer justify-center w-[18px] rounded-full bg-[#1687C7]  ">
                        <ArrowSignSvg className="bg-red-500" />
                      </div>
                      <p className=" text-[#000000] font-interTight text-base font-normal leading-[180%]  ">
                        {item.txt}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 ">
          {RedirectData.map((item, index) => {
            return (
              <div
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="h-[404px] w-[312px] relative  "
              >
                <div className="h-full w-full flex items-center  justify-center ">
                  <span className="text-white max-w-[238px] text-center cursor-pointer font-interTight text-2xl font-bold leading-[160%] ">
                    {item.txt}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-y-[96px] items-center ">
        <div className="flex flex-col gap-y-6 items-center ">
          <div className="flex flex-col items-center ">
            <h3 className="text-[#000000] font-fontSpring text-[56px] font-light leading-[160%]  ">
              Travel to Canada with the specialists
            </h3>
            <span className="max-w-[1001px] leading-[160%] text-xl font-interTight text-[#000] text-center ">
              Discover the charm of a spectacular country of many contrasts: the
              great metropolises, the spectacle of the Canadian national parks
              but also the variety of food and wine, outdoor activities and some
              of the coolest festivals in the world!
            </span>
          </div>
          <div className="flex flex-col gap-y-[48px] ">
            <div className="flex flex-row gap-x-6 ">
              <span className="text-[#787878] max-w-[517.3px] font-interTight text-xl font-normal leading-[180%] tracking-[1px]  ">
                Go beyond the classic trip to Canada , take inspiration from our
                insights and get advice from the Xplore staff to create an
                itinerary that allows you to discover lesser-known areas and
                realities of Canada. You can decide to follow the tracks of gold
                prospectors between Yukon and nearby Alaska or let yourself be
                transported by food and wine or music itineraries,
              </span>
              <span className="text-[#787878] max-w-[517.3px]  font-interTight text-xl font-normal leading-[180%] tracking-[1px]  ">
                choose with us the Canadian national parks that are best for you
                or the cities that most intrigue you. Traveling with Xplore does
                not only mean planning your tour of Canada together by choosing
                the camper or car that you like best, but above all it means
                being able to count on Canadian specialists who will try to make
                you fall in love with this country full of
              </span>
              <span className="text-[#787878] font-interTight max-w-[517.3px]  text-xl font-normal leading-[180%] tracking-[1px]  ">
                beauties waiting to be discovered! Start browsing our tourist
                guides on the main Canadian cities, the fabulous national parks
                and the Canadian experiences that we can offer you to make
                your tour of Canada unique !
              </span>
            </div>
            <div className="flex flex-row w-full items-center justify-center gap-y-8 flex-wrap gap-x-12">
              {canadaFeatures.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-row items-center  gap-x-3 "
                  >
                    <img src={item.icon} alt="not found" />
                    <p className="2xl:w-[300px] text-[#000000] text-xl font-semibold leading-[180%] tracking-[1px]  ">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row gap-x-6 ">
              <span className="text-[#787878] max-w-[517.3px] font-interTight text-xl font-normal leading-[180%] tracking-[1px]  ">
                If you need help planning your next trip to Canada, you can take
                inspiration from our guide and decide to visit an area or two
                depending on the time you have available. If you love
                adventurous travel, Canada is the perfect place for you:
                forests, trekking and refuges in the Rocky Mountains , in
                addition to exploring the
              </span>
              <span className="text-[#787878] max-w-[517.3px]  font-interTight text-xl font-normal leading-[180%] tracking-[1px]  ">
                Great North. Areas like Nunavut are difficult to reach but will
                leave you speechless.Car tours or bus tours, just cities or a
                mix between metropolises and the vastness of Canadian nature...
                between a craft beer, an ice hockey game , a stretch with a
                panoramic train and tours to observe moose
              </span>
              <span className="text-[#787878] font-interTight max-w-[517.3px]  text-xl font-normal leading-[180%] tracking-[1px]  ">
                and bears in their natural habitat. In short, this large
                country, which encompasses six time zones, is truly unique,
                populated by hospitable people and with scenery of unparalleled
                beauty.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 ">
          <div className="flex flex-col items-center ">
            <h3 className="text-[#000000] font-fontSpring text-[56px] font-light leading-[160%]  ">
              Our travel ideas in Canada
            </h3>
            <span className="max-w-[1001px] leading-[160%] text-xl font-interTight text-[#000] text-center ">
              Discover the tourist services available to you, make your holiday
              in Canada unique and customize your trip with Xplore. For tours,
              excursions, services and special requests for your trip to Canada,
              do not hesitate to contact us!
            </span>
          </div>
          <div className="flex flex-row gap-x-6 ">
            <span className="text-[#787878] max-w-[517.3px] font-interTight text-xl font-normal leading-[180%] tracking-[1px]  ">
              Choosing Xplore for your trip to Canada doesn't just mean
              receiving free quotes in 24 hours and having great prices on
              flights, hotels, rentals and excursions, but also being able to
              count on a staff of travel agents who are passionate about Canada
              and the United States . This means receiving suggestions and
            </span>
            <span className="text-[#787878] max-w-[517.3px]  font-interTight text-xl font-normal leading-[180%] tracking-[1px]  ">
              valuable advice in creating the itinerary, discovering curiosities
              that are worth a detour along your tour of Canada and all the
              experience of those who have always dealt with trips to Canada
              (and the United States)! Whether you have clear ideas about the
              travel itinerary or you don't know exactly where you want to
            </span>
            <span className="text-[#787878] font-interTight max-w-[517.3px]  text-xl font-normal leading-[180%] tracking-[1px]  ">
              beauties waiting to be discovered! Start browsing our tourist
              guides on the main Canadian cities, the fabulous national parks
              and the Canadian experiences that we can offer you to make
              your tour of Canada unique !
            </span>
          </div>
          <div className=" w-full h-[345px] flex flex-col items-center  justify-center  ">
            <TravelDetailsSlider data={imagesData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristGuide;
