/* eslint-disable react/prop-types */
import { useState } from "react";

const AllTouristGuideTabs = ({ sectionTabs }) => {
  const [activeTab, setActiveTab] = useState(sectionTabs[0]);
  return (
    <div className="py-6 sticky z-[600] top-[90px] 2xl:top-[152px] left-0 font-interTight w-full bg-[#f4f4f4] flex items-center justify-center flex-wrap gap-y-3 gap-x-3 md:gap-x-4 xl:gap-x-7 3xl:gap-x-10">
      {sectionTabs?.map((tab) => (
        <div
          onClick={() => setActiveTab(tab)}
          key={tab?.label}
          className={`${activeTab.label == tab?.label
            ? 'border-primary rounded-b text-primary'
            : 'border-[#f4f4f4]'
            } 2xl:text-lg cursor-pointer pb-1 xl:pb-2 font-semibold border-b-[3px] px-2 md:px-4 2xl:px-7 `}
        >
          {tab?.label}
        </div>
      ))}
    </div>
  );
};

export default AllTouristGuideTabs;
