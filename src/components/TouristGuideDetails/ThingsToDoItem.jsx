/* eslint-disable react/prop-types */
const ThingsToDoItem = ({ item, index }) => {
  return (
    <div className="space-y-2">
      <h5 className="font-editorsNoteNormal tracking-wider text-primary font-semibold text-lg xs:text-xl">
        {index + 1}. {item?.title}
      </h5>
      <p className="font-interTight text-text-gray text-sm xs:text-base lg:text-lg">
        {item?.description}
      </p>
    </div>
  );
};

export default ThingsToDoItem;
