/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PlacesToVisitCard = ({ item }) => {
  return (
    <div className="bg-[#f4f4f4] p-4 lg:p-6 flex flex-col-reverse lg:flex-row gap-5 items-center ">
      <div className="font-interTight space-y-3 w-full lg:w-3/5">
        <h5 className=" text-lg lg:text-xl font-semibold">{item?.title}</h5>
        <p className="text-[#565656] text-sm lg:text-base ">{item?.description}</p>
        <Link className="block text-primary">Discover Package</Link>
      </div>
      <div className=" w-full lg:w-2/5">
        <img src={item?.image} alt="" />
      </div>
    </div>
  );
};

export default PlacesToVisitCard;
