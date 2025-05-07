/* eslint-disable react/prop-types */
import ReviewStarYellowButton from "../Stars/ReviewStarYellowButton";

const TourListDetailsReviewCard = ({ item }) => {
  
  const imageBaseUrl = import.meta.env.VITE_SERVER_URL;
  return (
    <div className="p-6 z-[0] bg-[#f4f4f4] font-interTight">
      {/* stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: item?.rating || 0 }).map((_, idx) => (
          <ReviewStarYellowButton key={idx} />
        ))}
      </div>

      {/* info */}
      <div className="mt-4">
        <h5 className="font-medium lg:text-xl text-primary">{item?.title}</h5>
        <p className="text-text-gray text-sm lg:text-base pt-1">
          {item?.comment}
        </p>
        {/* Reviewer Name */}
        <h4 className=" font-medium text-primary mt-2">{item?.name}</h4>
      </div>
    </div>
  );
};

export default TourListDetailsReviewCard;
