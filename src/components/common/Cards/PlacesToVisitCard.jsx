const PlacesToVisitCard = ({ item }) => {
  const imgBaseurl = import.meta.env.VITE_SERVER_URL;


  return (
    <div className=" p-4 lg:p-6 cursor-pointer ease-in-out duration-300 hover:bg-[#f4f4f4] border-[1px] border-solid border-[#9C9EA166]  flex flex-col-reverse lg:flex-col gap-5  hover:border-transparent ">
      <div className="font-interTight space-y-3 w-full lg:w-3/5 flex items-start ">
        <h5 className=" text-lg lg:text-xl font-semibold">
          {item?.trip_package_title}
        </h5>
      </div>
      <div className=" w-full h-[214px] overflow-hidden relative ">
        <img src={`${imgBaseurl}/${item?.trip_package_image}`} className="h-full w-full object-cover "  alt="not found" />
      </div>
    </div>
  );
};

export default PlacesToVisitCard;
