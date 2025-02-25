/* eslint-disable react/prop-types */
const ActivitiesSubcategoryTab = ({ tab, activeTab, setActiveTab }) => {
  return (
    <div
      onClick={() => setActiveTab(tab)}
      className={`font-interTight p-7 border cursor-pointer space-y-2 rounded-sm ${
        tab.title == activeTab.title
          ? 'border-[#1687C7] bg-[#efefef]'
          : 'border-black/10 bg-transparent'
      }`}
    >
      <h3 className="text-xl font-semibold text-primary">{tab?.title}</h3>
      <p className="text-text-gray text-lg">{tab?.items} things to do</p>
    </div>
  );
};

export default ActivitiesSubcategoryTab;
