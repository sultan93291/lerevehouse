import { Link } from "react-router-dom";
import ReviewStarYellowButton from "../common/Stars/ReviewStarYellowButton";
import { useState } from "react";
import { Modal } from "../Modals/Modal";
import TestModal from "../Modals/TestModal";

const DestinationDetailsDescriptionRightSide = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className=" w-full xl:w-1/2">
        <div className="mb-10">
          <div
            dangerouslySetInnerHTML={{ __html: data?.description }}
            className="prose prose-lg "
          ></div>
        </div>
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
            {/* <Link className="block text-center bg-transparent text-sm lg:text-base text-primary py-3 lg:py-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full bg-primary">
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

export default DestinationDetailsDescriptionRightSide;
