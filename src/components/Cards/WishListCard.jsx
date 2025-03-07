import classicCity from "../../assets/images/tour-details/classicCity.png";
import trash from "../../assets/images/tour-details/trash.svg";

const WishListCard = ({ count }) => {
  return (
    <section className="">
      <div className="w-full h-auto p-4 bg-white shadow-cardShadow flex  flex-col gap-y-10  ">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row gap-x-6 ">
            <span className="px-2 py-1 text-base text-[#004265] font-interTight font-medium leading-[150%]   bg-offGray ">
              0{count}
            </span>
            <p className=" text-xl text-[#004265] font-fontSpring font-medium leading-[150%]    ">
              Arrival in Vancouver
            </p>
          </div>
          <span className=" text-[14px] text-[#004265] font-interTight font-medium leading-[114%]    ">
            2 days
          </span>
        </div>
        <div className="flex flex-row justify-between w-full ">
          <div className="flex flex-row gap-x-4 ">
            <img
              src={classicCity}
              className="w-20 h-20 object-cover"
              alt="not found"
            />
            <h5 className=" text-xl text-[#004265] font-interTight font-medium leading-[150%]    ">
              Arrival in Vancouver
            </h5>
          </div>
          <div className="h-20 w-20 rounded-[4px] bg-offGray cursor-pointer flex flex-col items-center justify-center ">
            <img src={trash} className="h-6 w-6 " alt="not found" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishListCard;
