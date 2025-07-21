import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "../Modals/Modal";
import TestModal from "../Modals/TestModal";
import ReviewStarYellowButton from "../common/Stars/ReviewStarYellowButton";

const DestinationDetailsDescriptionRightSide = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full xl:w-1/2">
        {/* HTML description */}
        <div className="mb-10">
          <div
            className="prose leading-[165%] prose-lg "
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>

        {/* CTA card */}
        <div className="bg-[#f4f4f4] p-4 md:p-8 xl:p-16 flex flex-col gap-10 items-center justify-center font-interTight">
          <div className="text-center space-y-2">
            <h3 className="font-medium text-xl">
              {t("destinationDetails.tailorMadeHeading")}
            </h3>
            <p className="text-lg text-primary">
              {t("destinationDetails.ratingLabel")}
            </p>

            {/* Stars and review count */}
            <div className="w-full flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <ReviewStarYellowButton />
                <ReviewStarYellowButton />
                <ReviewStarYellowButton />
                <ReviewStarYellowButton />
                <ReviewStarYellowButton />
              </div>
              <div className="text-[#565656]">
                <p>
                  4.9 <span>| 500 {t("destinationDetails.reviews")}</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="w-full font-interTight space-y-6">
            <div
              onClick={() => setOpen(true)}
              className="block text-white text-sm lg:text-base text-center py-3 lg:py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 w-full bg-primary cursor-pointer"
            >
              {t("destinationDetails.enquiryBtn")}
            </div>

            {/* Uncomment if needed
            <div className="block text-center bg-transparent text-sm lg:text-base text-primary py-3 lg:py-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full cursor-pointer">
              {t("destinationDetails.brochureBtn")}
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <TestModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default DestinationDetailsDescriptionRightSide;
