const WhatToDo = ({ data }) => {
  console.log(data);

  const imgBaseUrl = import.meta.env.VITE_SERVER_URL;

  return (
    <div className="space-y-5 md:space-y-10">
      {data?.map((item, idx) => {
        const isEven = idx % 2 === 0; // Check if index is even
        return (
          <div
            key={idx}
            className={`flex flex-col ${
              isEven ? "xl:flex-row" : "xl:flex-row-reverse"
            } 2xl:gap-24 gap-6 items-center`}
          >
            <div className="2xl:w-[655px] xl:w-[500px] flex-shrink-0">
              <img
                src={`${imgBaseUrl}/${item?.image}`}
                className="w-full h-full object-cover"
                alt="not found"
              />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: item?.description }}
              className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm"
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default WhatToDo;
