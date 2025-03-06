import map from "../../../assets/images/tourist-guide/map.png";
import { BestPark } from "@/components/DummyData/TourGuidData";
import { Arrow } from "@/components/common/SvgContainer/SvgContainer";

const MapSection = () => {
  return (
    <div className="container py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 2xl:gap-20 hidden xl:grid">
      <img src={map} alt="not found" />
      <div className="flex flex-col gap-y-5 ">
        <h2 className="text-2xl md:text-[32px] font-inter font-bold leading-[160%] text-prmiary-blue ">
          Best Parks In Canada
        </h2>
        <p className="leading-[160%] font-normal text-[15px] xs:text-base max-w-[655px] font-inter text-text-gray ">
          in the heart of central Alaska we find Denali National Park, which Le
          Reve House Adventure with the Alaska Adventure Trip makes us magically
          discover. Denali Park offers incredible landscapes and wildlife in
          abundance. Going south, Kenai Fjords National Park awaits us with its
          imposing glaciers and rich marine life. Then, the crystalline waters
          of Lake Clarke National Park, where the mountain ranges of Alaska and
          the Aleutian Islands meet and the bears of Katmai in their natural
          habitat, in the wild and truly remote Alaska Peninsula . In western
          Alaska there is the Yukon Delta National Wildlife Refuge, a paradise
          for migratory birds.
        </p>
        <ul className="flex flex-col gap-y-[14px] ">
          {BestPark.map((item, index) => {
            return (
              <li
                key={index}
                className="flex cursor-pointer flex-row gap-x-[8px] group  ease-in-out duration-300 "
              >
                <div
                  className={` w-5 h-5 md:h-[24px] md:w-[24px] flex items-center justify-center ease-out duration-300 group-hover:bg-light-blue  rounded-full bg-primary `}
                >
                  <Arrow />
                </div>
                <p className="text-sm md:text-[16px] leading-[160%] font-medium ease-in-out duration-300 group-hover:underline font-inter text-text-black ">
                  {item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MapSection;
