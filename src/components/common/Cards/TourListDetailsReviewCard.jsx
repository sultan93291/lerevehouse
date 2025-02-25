/* eslint-disable react/prop-types */
import ReviewStarYellowButton from '../Stars/ReviewStarYellowButton';

const TourListDetailsReviewCard = ({ item }) => {
  return (
    <div className="p-6 bg-[#f4f4f4] font-interTight">
      {/* stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: item?.review }).map((_, idx) => (
          <ReviewStarYellowButton key={idx} />
        ))}
      </div>

      {/* info */}
      <div className="mt-4">
        <h5 className="font-medium text-xl text-primary">{item?.title}</h5>
        <p className="text-text-gray pt-1">{item?.description}</p>
        {/* Reviewer Name */}
        <h4 className=" font-medium text-primary mt-2">{item?.name}</h4>
      </div>
    </div>
  );
};

export default TourListDetailsReviewCard;
