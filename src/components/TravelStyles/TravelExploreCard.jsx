/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TravelExploreCard = ({ item, link }) => {
  return (
    <div
      className="TravelExploreCard flex flex-col h-[300px] xs:h-[350px] sm:h-[400px] 2xl:h-[520px] overflow-hidden items-center justify-cente relative bg-cover bg-no-repeat z-[1]"
      style={{
        backgroundImage: `url(${item?.image})`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full front duration-500 ease-in-out">
        <h3 className="text-2xl md:text-[30px] xl:text-[40px] font-semibold font-editorsNoteNormal text-white mx-auto text-center leading-[48px]">

          {item?.title}
        </h3>
      </div>
      <div className="p-5 2xl:p-[64px] back text-center absolute w-full h-full flex flex-col items-center justify-center duration-500 ease-in-out">
        <h3 className="text-[24px] sm:text-[32px] 2xl:text-[40px] font-semibold font-editorsNoteNormal text-white mx-auto text-center">
          {item?.title}
        </h3>
        <p className="text-sm xs:text-base text-white leading-normal mt-4 font-inter">
          Every A&K private journey is unique. Whether you want to personalize
          one of our expert-designed Tailormade Journeys
        </p>
        <Link
          className="mt-9 inline-block py-[19px] text-white px-[62px] text-sm font-medium font-inter bg-secondary rounded-[5px]"
          to={
            link
              ? `/activities/subcategory/${item?.id}`
              : `/travel-styles-details/${item?.id}`
          }
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default TravelExploreCard;
