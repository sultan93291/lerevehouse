import { useParams } from "react-router-dom";
import { Trash } from "../common/SvgContainer/SvgContainer"; // Assuming a Trash SVG component

const imgBaseurl = import.meta.env.VITE_SERVER_URL;

const WishListCard = ({ data, count, onRemove }) => {
  const { id: tripId } = useParams();

  // Return null if tripId doesn't match
  if (!data || data.tripId !== tripId) {
    return null;
  }

  // Fallback values for missing data
  const title = data.title || "Untitled Itinerary";
  const placeName = data.place_name || "Unknown Place";
  const dayCount = data.dayCount || 1;
  const image = data.image ? `${imgBaseurl}/${data.image}` : null;

  return (
    <section className="w-full">
      <div className="h-auto md:p-4 p-2 bg-white shadow-primaryShadow flex flex-col md:gap-y-10 gap-y-5">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-x-6">
            <span className="px-2 py-1 text-base text-primary font-interTight font-medium leading-[150%] bg-[#F4F4F4]">
              {count}
            </span>
            <p className="text-base md:text-xl text-primary font-fontSpring font-medium leading-[150%]">
              {title}
            </p>
          </div>
          <span className="text-[14px] text-primary font-interTight font-medium leading-[114%]">
            {dayCount} {dayCount === 1 ? "day" : "days"}
          </span>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center md:items-baseline flex-row gap-x-4">
            {image ? (
              <img
                src={image}
                className="md:w-20 w-10 md:h-20 h-10 object-cover"
                alt={`${placeName} image`}
              />
            ) : (
              <div className="md:w-20 w-10 md:h-20 h-10 bg-gray-200 flex items-center justify-center">
                <span className="text-sm text-gray-500">No Image</span>
              </div>
            )}
            <h5 className="text-base md:text-xl text-primary font-interTight font-medium leading-[150%]">
              {placeName}
            </h5>
          </div>
          <button
            onClick={() => onRemove(data.id)}
            className="md:h-20 h-10 md:w-20 w-10 rounded-[4px] bg-[#F4F4F4] hover:bg-red-100 transition-all duration-300 flex items-center justify-center"
            aria-label={`Remove ${title} from wishlist`}
          >
            <Trash className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WishListCard;
