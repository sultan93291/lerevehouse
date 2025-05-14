import { Link } from "react-router-dom";
import ReviewStarYellowButton from "../common/Stars/ReviewStarYellowButton";

const ActivitiesSubcategoryRightDescription = () => {
  return (
    <div className="xl:w-1/2 w-full">
      <div className="bg-[#f4f4f4] lg:p-16 p-8 flex flex-col gap-10 items-center justify-center font-interTight">
        <div className="text-center space-y-2">
          <h3 className="font-medium text-xl">
            Creating tailor-made tours for over 20 years
          </h3>
          <p className="text-lg text-primary">Excellent</p>
          {/* stars */}
          <div className="w-full flex items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-1">
              <ReviewStarYellowButton />
              <ReviewStarYellowButton />
              <ReviewStarYellowButton />
              <ReviewStarYellowButton />
              <ReviewStarYellowButton />
            </div>
            <div className="text-[#565656]">
              <p>
                4.9 <span>| 500 Reviews</span>
              </p>
            </div>
          </div>
        </div>

        {/* cta buttons */}
        <div className="w-full font-interTight space-y-6">
          <Link className="block text-white text-center py-2 xl:py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 w-full bg-primary">
            Make An Enquiry
          </Link>
          {/* <Link className="block text-center bg-transparent text-primary py-2 xl:py-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full bg-primary">
            Request A Brouchre
          </Link> */}
        </div>
      </div>

      {/* details */}
      <div className="mt-10">
        <div className="space-y-2">
          <h5 className="text-3xl font-editorsNoteNormal font-light text-primary tracking-wide">
            Trips Related to Water
          </h5>
          <p className="font-interTight md:text-lg text-text-gray">
            Water adventures are an exciting aspect of travel, offering a mix of
            thrill, exploration, and tranquility that appeals to a wide range of
            travelers. These experiences connect adventurers with the beauty and
            power of aquatic environments, whether it&lsquo;s beneath the waves,
            on serene lakes, or along roaring rivers. For those who seek
            underwater marvels, activities like snorkeling and scuba diving
            unveil a vibrant world of coral reefs, and shipwrecks, making them
            unforgettable experiences.
          </p>
          <p className="font-interTight md:text-lg text-text-gray">
            Above the surface, kayaking and stand-up paddleboarding provide a
            peaceful way to explore coastlines, mangroves, or picturesque bays,
            blending adventure with a chance to soak in the natural
            surroundings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSubcategoryRightDescription;
