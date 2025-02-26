/* eslint-disable react/prop-types */
import PlacesToVisitCard from '../common/Cards/PlacesToVisitCard';
import map from "../../assets/images/all-destination/map.png"

const DestinationPlacesToVisit = ({ placesToVisitInfo }) => {
  return (
    <div id='places-to-visit' className="flex flex-col my-16 lg:my-0 2xl:flex-row gap-12">
      {/* left side */}
      <div className=" w-full 2xl:w-1/2">
        <img
          src={map}
          alt="not found"
          className="h-full  w-full object-cover"
        />
      </div>
      {/* right side */}
      <div className=" w-full 2xl:w-1/2">
        {/* title */}
        <h4 className="text-3xl font-editorsNoteNormal text-primary">
          Top Place to
          <span className="font-editorsNoteItalic">Visit in Alaska</span>
        </h4>

        {/* top places cards */}
        <div className="space-y-5 mt-8">
          {placesToVisitInfo?.map((item) => (
            <PlacesToVisitCard key={item?.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationPlacesToVisit;
