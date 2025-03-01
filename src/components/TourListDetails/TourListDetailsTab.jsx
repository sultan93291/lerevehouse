/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-scroll';

const TourListDetailsTab = ({ sectionTabs }) => {
  const [activeTab, setActiveTab] = useState(sectionTabs[0]);
  return (
    <div className="py-4 2xl:sticky z-[600] top-[152px] left-0 font-interTight w-full bg-[#f4f4f4] flex flex-row flex-wrap items-center lg:justify-center gap-3 3xl:gap-12 px-4 lg:px-8 2xl:px-16 3xl:px-32 ">
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
          } text-base xl:text-lg cursor-pointer py-2 font-medium px-3 lg:px-6 `}
        >
          {tab?.label}
        </Link>
      ))}
    </div>
  );
};

export default TourListDetailsTab;
