/* eslint-disable react/prop-types */

const HeroDestinationTab = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-4 2xl:gap-8 w-full  justify-evenly">
      {tabs?.map(tab => (
        <div
          onClick={() => setActiveTab(tab)}
          key={tab?.id}
          className={`font-editorsNoteNormal text-xl cursor-pointer border-b-2 pb-1 text-center text-nowrap
      ${
        activeTab?.id == tab.id
          ? "text-secondary border-secondary"
          : " border-none"
      }`}
        >
          {tab?.title}
        </div>
      ))}
    </div>
  );
};

export default HeroDestinationTab;
