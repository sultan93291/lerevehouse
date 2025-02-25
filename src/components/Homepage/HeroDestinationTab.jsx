/* eslint-disable react/prop-types */

const HeroDestinationTab = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div>
      {/* custom tab */}
      <div className="flex items-center gap-8 w-full justify-evenly">
        {tabs?.map((tab) => (
          <div
            onClick={() => setActiveTab(tab)}
            key={tab?.id}
            className={`font-editorsNoteNormal text-xl cursor-pointer border-b-2 pb-1 w-full text-center text-nowrap
            ${
              activeTab?.id == tab.id
                ? 'text-secondary border-secondary'
                : ' border-none'
            }`}
          >
            {tab?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroDestinationTab;
