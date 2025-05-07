/* eslint-disable react/prop-types */
import PlacesToVisitCard from "../common/Cards/PlacesToVisitCard";
import green_map from "../../assets/images/tourist-guide/green_map.png";
import { Slice } from "lucide-react";

const DestinationPlacesToVisit = ({ placesToVisitInfo }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  console.log(placesToVisitInfo);
  

  return (
    <div
      id="places-to-visit"
      className="flex flex-col  lg:my-0 2xl:flex-row md:gap-12 gap-10"
    >
      {/* left side */}
      <div className=" hidden 2xl:flex  flex-col gap-y-[95px] items-center 2xl:w-1/2 ">
        <h4 className="text-3xl font-editorsNoteNormal text-primary">
          {placesToVisitInfo?.name} Map
        </h4>
        <div className=" w-full ">
          <img
            src={`${imgBaseurl}/${placesToVisitInfo.destination_details?.map}`}
            alt="not found"
            className="h-full max-h-[814px] w-full object-cover"
          />
        </div>
      </div>
      {/* right side */}
      <div className=" w-full 2xl:w-1/2">
        {/* title */}
        <h4 className="text-3xl font-editorsNoteNormal text-primary">
          Top Place to
          <span className="font-editorsNoteItalic">
            Visit in {placesToVisitInfo?.name}{" "}
          </span>
        </h4>

        {/* top places cards */}
        <div className="space-y-5 md:mt-8 mt-4">
          {placesToVisitInfo?.trip_packages?.slice(0, 3).map(item => (
            <PlacesToVisitCard key={item?.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationPlacesToVisit;
