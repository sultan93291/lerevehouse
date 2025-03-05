/* eslint-disable react/prop-types */
import LuxuryCard from "../common/Cards/LuxuryCard";

const DestinationLuxurySection = ({ luxuryPlacesInfo }) => {
  return (
    <div id="where-to-stay" className="xl:my-20 mt-12">
      {/* title */}
      <div>
        <h2 className=" text-3xl xl:text-4xl font-editorsNoteNormal text-primary text-center">
          Our luxury accommodation in{" "}
          <span className="font-editorsNoteItalic">Alaska</span>
        </h2>
      </div>
      {/* luxury cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-10 xl:gap-6 mt-5 md:mt-10">
        {luxuryPlacesInfo?.map((item) => (
          <LuxuryCard key={item?.image} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DestinationLuxurySection;
