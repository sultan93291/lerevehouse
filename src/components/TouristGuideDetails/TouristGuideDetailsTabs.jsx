/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";


const TouristGuideDetailsTabs = ({sectionTabs}) => {
     const [activeTab, setActiveTab] = useState(sectionTabs[0]);
  return (
    <div className="py-6 sticky z-[600] top-[152px] left-0 font-interTight w-full bg-[#f4f4f4] flex items-center justify-center gap-12">
      {sectionTabs?.map((tab) => (
        <Link
          offset={-250}
          to={tab?.link}
          onClick={() => setActiveTab(tab)}
          key={tab?.label}
          className={`${
            activeTab.label == tab?.label
              ? 'border-primary rounded-b text-primary'
              : 'border-[#f4f4f4]'
          } text-lg cursor-pointer pb-2 font-semibold border-b-[3px] px-8 `}
        >
          {tab?.label}
        </Link>
      ))}
    </div>
  );
};

export default TouristGuideDetailsTabs;
