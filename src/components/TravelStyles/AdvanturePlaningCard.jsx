/* eslint-disable react/prop-types */

const AdvanturePlaningCard = ({ item }) => {

    const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div className="font-interTight">
      <img
        className="max-w-[134px] h-[100px] mx-auto"
        src={`${imgBaseurl}/${item?.background_image}`}
        alt={item?.title}
      />
      <div className="mt-6 text-center">
        <h3 className="text-[25px] 2xl:text-[32px] font-medium leading-normal text-[#161921]">
          {item.title}
        </h3>
        <div
          dangerouslySetInnerHTML={{ __html: item?.short_description }}
          className="2xl:text-[18px] leading-normal mt-[14px]"
        ></div>
      </div>
    </div>
  );
};

export default AdvanturePlaningCard;
