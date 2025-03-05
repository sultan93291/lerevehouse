/* eslint-disable react/prop-types */

const ActivitesCard = ({ item }) => {
  return (
    <div className="activites--card">
      <div className="md:h-[482px] overflow-hidden">
        <img
          className="md:w-full w-full md:h-full h-[230px] object-cover duration-200 ease-in-out"
          src={item?.image}
          alt=""
        />
      </div>
      <div>
        <h4 className="text-[24px] font-editorsNoteNormal text-[#004265] md:mt-3 mt-6">
          {item?.place}
        </h4>
        <p className="text-base md:text-[18px] 2xl:leading-8 font-interTight mt-2 text-[#65656]">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default ActivitesCard;
