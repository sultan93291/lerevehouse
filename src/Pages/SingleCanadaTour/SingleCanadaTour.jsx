import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import polarBear from "../../assets/images/canada-tour/polarBear.jpg";
import MapSection from "./Sections/MapSection";
;




const SingleCanadaTour = () => {
  return (
    <section className=" mt-10 flex flex-col">
      <CommonHeroBanner
        title={"Boundless North"}
        italic={false}
        subTittle={
          "Adventures, boundless territories and uncontaminated landscapes"
        }
        bg={polarBear}
      />
      <div className="flex container flex-col pt-[110px] pb-[64px]  gap-y-[108px]  ">
        <MapSection />
        <div className="flex flex-col" >

        </div>
      </div>
    </section>
  );
};

export default SingleCanadaTour;
