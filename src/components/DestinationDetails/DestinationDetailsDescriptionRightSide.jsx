import { Link } from "react-router-dom";
import ReviewStarYellowButton from "../common/Stars/ReviewStarYellowButton";
import { useState } from "react";
import { Modal } from "../Modals/Modal";
import TestModal from "../Modals/TestModal";

const DestinationDetailsDescriptionRightSide = () => {
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className=" w-full xl:w-1/2">
        <div className="bg-[#f4f4f4] p-4 md:p-8 xl:p-16 flex flex-col gap-10 items-center justify-center font-interTight">
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
            <div
              onClick={() => {
                setOpen(true);
              }}
              className="block text-white text-sm lg:text-base text-center py-3 lg:py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 w-full bg-primary"
            >
              Make An Enquiry
            </div>
            <Link className="block text-center bg-transparent text-sm lg:text-base text-primary py-3 lg:py-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full bg-primary">
              Request A Brouchre
            </Link>
          </div>
        </div>

        {/* details */}
        <div className="mt-10">
          <div className="space-y-2">
            <h5 className="text-2xl font-editorsNoteNormal font-light text-primary tracking-wide">
              Destination Alaska
            </h5>
            <p className="font-interTight text-base lg:text-lg text-primary">
              Alaska is the largest state in the USA and one of the least
              populated (with a population greater than Vermont and Wyoming). It
              is the land of adventure, a land that allows you to experience
              exciting excursions and a variety of outdoor activities, such as
              driving a dog sled on a glacier or heli-hiking in Denali National
              Park , in central Alaska, a state that is also home to the highest
              peak in North America,
            </p>
            <p className="font-interTight text-primary">
              Mount McKinley ( Denali means &ldquo;the largest&ldquo; in the
              Athabaska language ). Or go kayaking along the winding banks of
              the waterways or admire the large cetaceans of Glacier Bay, which
              has been a UNESCO &ldquo;World Heritage&ldquo; site since 1979 .
              Destination Alaska : imagine an encounter with the grizzly bear ,
              a creature that has now become mythical in our eyes, as well as
              the giant moose , whose size reminds us of prehistoric animals,
              the gentle but very resistant caribou , the wolves that remind us
              of White Fang ... and the Moby Dick whales, and the enormous
              Stellar, the ......
            </p>

            {isExpanded && (
              <p className="font-interTight text-primary">
                {` ... Finally, the towering glaciers of the Kenai Peninsula, and the
          vast tundras that stretch for miles. You can spot more wildlife in the
          Alaskan wilderness, such as the elusive lynx or the playful sea otter.
          It's a paradise for those who seek the beauty of untouched nature and
          the thrill of adventure. Alaska is truly a destination that offers
          something for everyone, from quiet reflection to heart-pounding
          activities.`}
              </p>
            )}

            <button
              className="underline font-medium cursor-pointer"
              onClick={handleToggle}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <TestModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default DestinationDetailsDescriptionRightSide;
