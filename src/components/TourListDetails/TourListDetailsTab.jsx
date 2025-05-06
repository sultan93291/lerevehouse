/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";
import { Modal } from "../Modals/Modal";
import TestModal from "../Modals/TestModal";
import StartYourJourney from "../Modals/StartYourJourney";
import BookThisModal from "../Modals/BookThisModal";

const TourListDetailsTab = ({ sectionTabs }) => {
  const [activeTab, setActiveTab] = useState(sectionTabs[0]);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="py-4 2xl:sticky z-[10] top-[152px] left-0 font-interTight w-full bg-[#f4f4f4] flex flex-row flex-wrap items-center lg:justify-center gap-3 3xl:gap-12  ">
        <div className="font-editorsNoteItalic text-primary text-3xl lg:text-3xl border-b-[3px] pb-2 px-4 lg:px-8 border-[#f4f4f4]">
          Trip Details
        </div>
        {sectionTabs?.map(tab => (
          <Link
            offset={-250}
            to={tab?.link}
            onClick={() => setActiveTab(tab)}
            key={tab?.label}
            className={`${
              activeTab.label == tab?.label
                ? "bg-primary text-white"
                : "bg-transparent"
            } text-base xl:text-lg cursor-pointer py-1 sm:py-2 font-medium px-3 lg:px-6 `}
          >
            {tab?.label}
          </Link>
        ))}
        <div>
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="text-base xl:text-lg cursor-pointer py-1 sm:py-2 font-medium px-3 lg:px-6 bg-primary text-white "
          >
            Book this tour
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <BookThisModal setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default TourListDetailsTab;
