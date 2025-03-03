import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React, { useState } from "react";
import polarBear from "../../assets/images/canada-tour/polarBear.jpg";
import MapSection from "./Sections/MapSection";
import ConsultCard from "@/components/common/Cards/ConsultCard";

const Tabs = ["Yukon", "Northwest Territories", "Nunavut"];
const SingleCanadaTour = () => {
  const [activeTab, setactiveTab] = useState("Yukon");
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
      <div className="flex  flex-col pt-[110px]   gap-y-[108px]  ">
        <MapSection />
        <div className="flex flex-col">
          <div>
            <div className="flex items-center border-t shadow-lg shadow-[rgba(0,0,0,0.7)] bg-white border-solid  h-[75px] justify-center">
              <span className="text-[#1687C7] text-[18px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                Consult by State
              </span>
            </div>
            <div className=" cursor-pointer flex flex-row items-center h-[75px] gap-x-3 bg-[#1687C7] px-[180px] ">
              {Tabs.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setactiveTab(item);
                    }}
                    className={` ${
                      activeTab == item && "bg-[#56C2FF] "
                    }  px-3  py-4 h-[59px]  text-white `}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col    py-[64px] bg-[#78787836]  ">
              <div className="container flex flex-col gap-y-[64px] ">
                {[0, 1, 2].map((item, index) => {
                  return <ConsultCard key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCanadaTour;
