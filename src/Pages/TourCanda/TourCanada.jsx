import React from "react";
import lake from "../../assets/images/canada-tour/lake.jpg";
import redLight from "../../assets/images/canada-tour/redLight.jpg";
import ship from "../../assets/images/canada-tour/ship.jpg";
import uk from "../../assets/images/canada-tour/uk.jpg";
import farming from "../../assets/images/canada-tour/farming.jpg";

const selfDriventours = [
  {
    id: 1,
    src: ship,
    heading: "Self Drive Tour in Canada",
    subHeading:
      "Choosing a self-drive tour in Canada means having no constraints: you can modify them as you wish by adding or removing nights from the route and you can also choose the category of hotels used for overnight stays along the way.   ",
    btnTxt: "Choose a car tour",
  },
  {
    id: 2,
    src: lake,
    heading: "Canada Coach Tours",
    subHeading:
      "This type of trip in Canada is perfect if you prefer not to drive and not to worry about accommodations, just relax and look out the window, our guides will take care of the rest.",
    btnTxt: "Choose a coach tour in Canada",
  },
  {
    id: 3,
    src: redLight,
    heading: "Canada Train Tours",
    subHeading:
      "Your trip to Canada in total freedom but without having to drive, look at the tours that combine train routes with bus or ferry parts to make your tour of Canada unique!  ",
    btnTxt: "Choose a train tour in Canada",
  },
];

const tripCanda = [
  {
    id: 1,
    src: uk,
    heading: "Your trip to Canada",
    paraOne:
      "Ready to discover the wonders of Canada while enjoying the road and the magnificent landscapes that only Canada can offer you? Wonderful scenery, uncontaminated nature, eco-sustainable cities, wild nature and above all superlative roads: Canada is the perfect country for your road trip! Choose a car tour to have maximum freedom but the hotels and lodges booked stage by stage.",
    paraTwo:
      "Coach tours are instead suitable for those who already drive too much during the year or for those who prefer to travel in a group and with an Italian guide . You will travel on  luxury coaches , with air conditioning and bathrooms. Our Italian-speaking guides will be at your disposal, both during the trip and during the numerous stops. Choose with us the type of hotel and board, with  dinners and breakfasts of your choice .",
    paraThree:
      "Car tours in Canada can also be done...on a motorbike! Yes, you read that right, we can rent a Harley Davidson and create an ad hoc route to make your trip to Canada on two wheels unique!",
  },
  {
    id: 1,
    src: farming,
    heading: "Do it yourself or accompanied?",
    paraOne:
      "Everyone has their own way of travelling, whether it is a group trip to Canada or an individual tour, the important thing is to enjoy the landscape and the stories that flow before you, whether they are thousand-year-old glaciers in Alberta or a coastal road that leads to the lighthouse on a cliff in Quebec .",
    paraTwo:
      "A trip to Canada by car is more  flexible , it gives you the freedom to decide the route, the duration and the stops. You can combine it with a stay in a large Canadian city at the beginning or at the end and we assure you that you will not have any difficulty.  The roads are always very well signposted  and with the help of the navigator in Italian you really will not have to  worry about anything .",
    paraThree:
      "Coach tours in Canada are for those who want to be accompanied and followed daily so as not to miss any travel details, without the worries of having to drive. Comfortable coaches, wonderful roads, driver and guide in Italian... ready to enjoy Canada in complete relaxation ?",
  },
];

const TourCanada = () => {
  return (
    <section className=" my-[156px] py-[72px]  container flex flex-col gap-y-[148px] ">
      <div className="flex flex-col gap-y-[148px] ">
        <div className="flex flex-col gap-y-4 items-center ">
          <h2 className="text-[#1687C7] font-interTight text-[56px] font-semibold leading-[160%] ">
            Canada Tour
          </h2>
          <p className="text-text-gray max-w-[966px] font-interTight text-2xl font-normal leading-[140%] ">
            Set off to discover this wonderful country, choose the type
            of Canada tour that is best for you! Total freedom and desire to
            drive? Choose from the  Canada car tours  that we offer. If instead
            you prefer not to drive and rely on an organized trip then look at
            the  bus tours in Canada . Finally, the  train tours in Canada  that
            combine train routes with bus routes....or ferry!
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-y-4  gap-x-4  items-center   ">
          {selfDriventours.map((item, index) => {
            console.log(item);

            return (
              <div
                key={index}
                className={`group ${
                  index == 2 ? "h-[570px] w-full " : "h-[521px] w-[49.4%]"
                } flex flex-col items-center justify-center relative overflow-hidden`}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* Content inside should only be visible on hover */}
                <div className="h-full w-full flex flex-col items-center justify-center gap-y-[38px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform scale-95 group-hover:scale-100">
                  <div className="flex flex-col items-center justify-center gap-y-[22px]">
                    <h2 className="text-white text-[32px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                      {item.heading}
                    </h2>
                    <span className="max-w-[629px] text-white text-[16px] font-normal leading-[150%] tracking-[1px] font-interTight">
                      {item.subHeading}
                    </span>
                  </div>
                  <button className="bg-[#1687C7] px-4 py-3 text-lg font-semibold leading-[150%] tracking-[1px] text-white font-interTight rounded-[8px]">
                    {item.btnTxt}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-y-[72px] ">
        {tripCanda.map((item, idx) => {
          return (
            <div
              className={`${
                idx == 1
                  ? "flex flex-row-reverse gap-x-8 "
                  : "flex  flex-row gap-x-8"
              }`}
            >
              <div
                className="w-[868px] h-[434px] "
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="flex flex-col gap-y-6 max-w-[698px] ">
                <h4 className="text-[#000] font-interTight text-[32px] font-semibold leading-[150%] tracking-[1px] ">
                  {item.heading}
                </h4>
                <div className="flex flex-col gap-y-6 font-interTight ">
                  <span className="text-[#000] text-[16px] font-normal leading-[150%] tracking-[1px] ">
                    {item.paraOne}
                  </span>
                  <span className="text-[#000] text-[16px] font-normal leading-[150%] tracking-[1px] ">
                    {item.paraTwo}
                  </span>
                  <span className="text-[#000] text-[16px] font-normal leading-[150%] tracking-[1px] ">
                    {item.paraThree}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TourCanada;
