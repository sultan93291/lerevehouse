import React from "react";

const TripAttraction = ({ data }) => {
  
  
  return (
    <section className="2xl:py-20 pt-16 pb-7">
      <div className="container">
        <div className="text-center xl:mb-[45px] mb-6">
          <div
            className=" title--xxl [&_span]:text-secondary  [&_bold]:text-secondary [&p]:text-secondary "
            dangerouslySetInnerHTML={{ __html: data?.title }}
          ></div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className="text-base xl:text-[18px] text-center font-interTight leading-8 flex flex-col gap-y-5  "
        ></div>
      </div>
    </section>
  );
};

export default TripAttraction;

// ok
