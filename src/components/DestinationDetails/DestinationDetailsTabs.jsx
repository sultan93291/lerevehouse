/* eslint-disable react/prop-types */
import { Link } from 'react-scroll';

const DestinationDetailsTabs = ({ sectionTabs,activeTab,setActiveTab }) => {


  return (
    <div className="py-6 2xl:sticky z-[15]  lg:px-8 2xl:px-16 3xl:px-32  top-[152px] left-0 font-interTight w-full bg-[#f4f4f4] flex items-center flex-wrap xl:justify-center gap-2 xl:gap-12">
      {sectionTabs?.map(tab => (
        <Link
          offset={-250}
          to={tab?.link}
          onClick={() => setActiveTab(tab)}
          key={tab?.label}
          className={`${
            activeTab.label == tab?.label
              ? "border-primary rounded-b text-primary"
              : "border-[#f4f4f4]"
          } text-lg cursor-pointer   lg:text-xl pb-2 font-semibold 2xl:border-b-[3px] px-4 xl:px-8 `}
        >
          {tab?.label}
        </Link>
      ))}
    </div>
  );
};

export default DestinationDetailsTabs;
