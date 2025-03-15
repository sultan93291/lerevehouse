const PlacesToVisitCard = ({ item }) => {
  return (
    <div className=" p-4 lg:p-6 cursor-pointer ease-in-out duration-300 hover:bg-[#f4f4f4] border-[1px] border-solid border-[#9C9EA166]  flex flex-col-reverse lg:flex-row gap-5 items-center hover:border-transparent ">
      <div className="font-interTight space-y-3 w-full lg:w-3/5">
        <h5 className=" text-lg lg:text-xl font-semibold">{item?.title}</h5>
        <p className="text-[#565656] text-sm lg:text-base ">
          {item?.description}
        </p>
      </div>
      <div className=" w-full lg:w-2/5">
        <img src={item?.image} alt="" />
      </div>
    </div>
  );
};

export default PlacesToVisitCard;
