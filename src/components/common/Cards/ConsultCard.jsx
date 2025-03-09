import React from "react";
import Mountain from "../../../assets/images/canada-tour/lake.jpg";

const ConsultCard = () => {
  return (
    <div className="flex flex-col h-auto max-w-[1600px] bg-white p-4 md:p-8 2xl:p-[64px] gap-y-6 lg:gap-y-12">
      <div className="flex flex-col gap-y-[22px] ">
        <div className="flex flex-col md:gap-y-8 gap-y-4">
          <h2 className="text-[#1687C7] text-[32px] md:text-[40px] font-bold leading-[150%] font-interTight tracking-[1px]">
            Yukon
          </h2>
          <span className="text-[#484848] text-lg md:text-[24px] font-bold leading-[150%] font-interTight tracking-[1px]  ">
            On the trail of gold and spectacular nature
          </span>
        </div>
        <div className="flex flex-col gap-y-[22px]">
          <p className="text-[#787878] text-sm md:text-[16px] font-normal leading-[150%] font-interTight tracking-[1px]  ">
            Adventure, far north, moose and wild landscapes. An unspoiled
            province, vast and fascinating for the expeditions and memories it
            evokes, above all the gold rush in the Klondike. A trip to the Yukon
            means spending a lot of time outdoors between trekking, snowy
            valleys, canoeing and relaxing!
          </p>
          <p className="text-[#787878] text-[16px] font-normal leading-[150%] font-interTight tracking-[1px]  ">
            There are many activities in  {" "}
            <span className="text-[#484848] font-bold ">Dawson City  </span> all
            year round, from dancing on the grass to hearing folk music at the
            Dawson City Music Festival in the summer or canoeing on the crystal
            clear waters of Quiet Lake at the base of Salmon Mountain, where you
            can find mountain sheep, moose and bears. As winter approaches you
            can see the 
            <span className="text-[#484848] font-bold "> Northern Lights </span>
            with their fantastic emerald green light. Driving on the  
            <span className="text-[#484848] font-bold ">
              {" "}
              Klondike Highway{" "}
            </span>
              to Whitehorse stop in quaint towns like Carmacks (along the Yukon
            River) and discover the rich local culture and language.
          </p>
          <p className="text-[#787878] text-sm md:text-[16px] font-normal leading-[150%] font-interTight tracking-[1px]  ">
            Green rivers through rock canyons, eagles soaring over the beautiful
            landscapes below, and you walking through purple hills just minutes
            from Whitehorse ,  the Wild City . Nature thrives everywhere and the
            Yukon River flows straight through the city. Whitehorse is home to
            two First Nations (Kwanlin Dun and Ta'an Kwach'an) and has a vibrant
            community of artists. We recommend the Yukon Artists at Work
            Gallery, Takhini Hot Springs, a hike along the Millennium Trail, a
            visit to Miles Canyon - there are so many ways to enjoy Whitehorse,
            you'll be spoiled for choice!
          </p>
          <p className="text-[#787878] text-[16px] font-normal leading-[150%] font-interTight tracking-[1px]  ">
            <span className="text-[#484848] font-bold ">
              Dawson City is experiencing a resurgence after its gold rush
            </span>
             heyday  ! One of the largest cities north of Seattle and west of
            Winnipeg is home to the  
            <span className="text-[#484848] font-bold ">
              Dawson City Music Festival
            </span>
             , the largest festival north of the 60th parallel. At the edge of
            town you can stroll along the boardwalk-lined Front Street, walk
            past storefronts and step back in time even though the city boasts
            modern amenities. For a pre-gold rush experience visit the Danoja
            Zho Cultural Centre
            <span className="text-[#484848] font-bold ">
               Tombstone Territorial Park  was
            </span>
            built to protect the life, landforms and heritage of the subarctic
            wilderness. The Dempster Highway now runs through the park to make
            access to this  
            <span className="text-[#484848] font-bold ">
              {" "}
              spectacular land{" "}
            </span>
             easy . Hikers and photographers will be enticed by this dramatic
            backdrop, the views of the  tundra  and the massive granite peaks.
            <span className="text-[#484848] font-bold ">
               Kluane National Park  {" "}
            </span>{" "}
            Which forms one of the three largest protected areas in the world
            and is a UNESCO World Heritage Site.  {" "}
            <span className="text-[#484848] font-bold ">
              {" "}
              Herschel Island Qikiqtaruk Park  
            </span>{" "}
            became Yukon's first territorial park in July 1987. You can arrive
            by plane or boat and explore its rich cultural and natural heritage
            including a small town that features whaling-era buildings as well
            as archaeological remains of early cultures.
          </p>
          <p className="text-[#787878] text-sm md:text-[16px] font-normal leading-[150%] font-interTight tracking-[1px]  ">
            The 
            <span className="text-[#404040] font-bold ">
              long days of daylight
            </span>
              in the Yukon during the summer allow visitors to virtually double
            their vacation. This means more time for adventures: hike the  
            <span className="text-[#404040] font-bold ">Chilkoot Trail</span> ,
            raft the Tatshenshini and Alsek Rivers, fish at concessions at the
            area's beautiful lodges, bike the many trails, or camp under the  
            <span className="text-[#404040] font-bold ">midnight sun</span> . 
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 2xl:h-[383px] h-full">
        {[0, 1, 3].map((item, index) => {
          return (
            <img
              className="xl:w-[480px] w-full 2xl:h-[383px] h-[180px] object-cover"
              src={Mountain}
              alt="not found"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConsultCard;
