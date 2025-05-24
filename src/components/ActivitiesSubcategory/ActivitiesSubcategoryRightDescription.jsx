import ReviewStarYellowButton from "../common/Stars/ReviewStarYellowButton";
import { useState } from "react";
import { Modal } from "../Modals/Modal";
import TestModal from "../Modals/TestModal";

const ActivitiesSubcategoryRightDescription = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="xl:w-1/2 w-full">
        <div className="mb-10">
          <div className="space-y-4">
            <h5 className="text-3xl font-editorsNoteNormal space-y-2 font-light text-primary tracking-wide">
              {data?.title}
            </h5>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
              className="font-interTight md:text-lg text-text-gray"
            ></div>
            <p className="font-interTight md:text-lg text-text-gray">
              Above the surface, kayaking and stand-up paddleboarding provide a
              peaceful way to explore coastlines, mangroves, or picturesque
              bays, blending adventure with a chance to soak in the natural
              surroundings.
            </p>
          </div>
        </div>
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
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="block text-white text-center py-2 xl:py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 w-full bg-primary"
            >
              Make An Enquiry
            </button>
            {/* <Link className="block text-center bg-transparent text-primary py-2 xl:py-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full bg-primary">
            Request A Brouchre
          </Link> */}
          </div>
        </div>

        {/* details */}
      </div>
      <Modal open={open} setOpen={setOpen}>
        <TestModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default ActivitiesSubcategoryRightDescription;
