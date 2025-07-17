import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../Modals/Modal";
import BookThisModal from "../Modals/BookThisModal";
import { useGetOfficeDataQuery } from "@/Redux/features/api/apiSlice";
import { useTranslation } from "react-i18next";

const TourListDetailsDatesPrices = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const { data: contactData, error, isLoading } = useGetOfficeDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;
  const brochure = `${imgBaseurl}/${data?.brouchure}`;

  return (
    <>
      <div
        id="dates-and-price"
        className="flex flex-col gap-y-[30px] xl:gap-y-[60px]"
      >
        {/* title */}
        <div>
          <h3 className="text-2xl md:text-3xl xl:text-4xl text-center text-primary font-editorsNoteNormal">
            <span>{t("tourPrice.title")} </span>
            <span className="font-editorsNoteItalic">{t("tourPrice.titleItalic")}</span>
          </h3>
        </div>

        <div className="flex flex-col gap-y-5 xl:gap-y-10">
          <div className="w-full h-auto py-10 xl:py-20 px-5 xl:px-10 bg-[#F4F4F4] flex flex-col gap-y-8">
            <div className="flex flex-col xl:flex-row gap-y-10 gap-x-10 3xl:gap-x-20">
              <div
                dangerouslySetInnerHTML={{ __html: data?.priceInclusiveData }}
                className="price-inclusive w-full flex flex-col gap-y-2 xl:w-2/3 p-6 xl:p-10 
                  bg-[#f4f4f4] font-editorsNoteNormal font-medium text-lg xl:text-xl 
                  leading-[150%] text-primary overflow-x-auto break-words"
              ></div>
            </div>
          </div>

          {/* brochure */}
          <div className="w-full flex flex-col xl:flex-row gap-y-5 gap-x-10 3xl:gap-x-20 2xl:my-10">
            {/* left side */}
            <div
              dangerouslySetInnerHTML={{ __html: data?.basic_package_price_with_details }}
              className="price-inclusive w-full flex flex-col gap-y-2 xl:w-2/3 p-6 xl:p-10 bg-[#f4f4f4] font-editorsNoteNormal font-medium text-lg xl:text-xl leading-[150%] text-primary"
            ></div>

            {/* right side */}
            <div className="w-full xl:w-1/3 bg-[#f4f4f4] p-8 xl:p-16 flex flex-col gap-10 items-center justify-center font-interTight">
              <div className="text-center space-y-2">
                <h3 className="font-medium text-text-black font-editorsNoteNormal text-xl lg:text-2xl">
                  {t("tourPrice.requestInfo")}
                </h3>
                <p className="font-editorsNoteNormal font-semibold text-primary text-2xl lg:text-3xl">
                  {contactData?.data[0]?.phone}
                </p>
              </div>

              {/* cta buttons */}
              <div id="brochure-download" className="w-full font-interTight space-y-3 md:space-y-6">
                <button
                  onClick={() => setOpen(true)}
                  className="block text-white text-center py-2 text-sm lg:text-base lg:py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 w-full bg-primary"
                >
                  {t("tourPrice.bookButton")}
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = brochure;
                    link.setAttribute("download", "brochure.pdf");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="block text-center bg-transparent text-primary py-2 text-sm lg:text-base lg:py-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full"
                >
                  {t("tourPrice.brochureButton")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} setOpen={setOpen}>
        <BookThisModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default TourListDetailsDatesPrices;
