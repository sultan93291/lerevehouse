import React from "react";

const Delights = ({ data }) => {  
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: data?.description,
      }}
      className="xl:py-20 py-10 container items-center flex flex-col md:gap-y-4 gap-y-1 eating-descreption-wrapper "
    ></section>
  );
};

export default Delights;
