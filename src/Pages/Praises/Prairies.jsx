import React, { useState } from "react";
import polarBear from "../../assets/images/canada-tour/polarBear.jpg";
import MapSection from "../SingleCanadaTour/Sections/MapSection";
import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import ConsultCard from "@/components/common/Cards/ConsultCard";
import praises from "../../assets/images/all-provinces-map/praises.svg";
import praisesIMg from "../../assets/images/all-provinces-map/praises.jpg";

const Tabs = ["Yukon", "Northwest Territories", "Nunavut"];
const Prairies = () => {
  const [activeTab, setactiveTab] = useState("Yukon");
  return (
    <section className=" mt-10 flex flex-col">
      <CommonHeroBanner
        title={"Prairies"}
        italic={false}
        subTittle={"Vast, flat, endless and beautiful"}
        bg={praisesIMg}
      />
      <div className="flex flex-col 2xl:pt-[110px] pt-0 md:pt-12 2xl:gap-y-[108px] md:gap-y-14 gap-y-7">
        <MapSection BgImg={praises} />
        <div className="flex flex-col">
          <div>
            <div className="flex items-center border-t shadow-lg shadow-[rgba(0,0,0,0.7)] bg-white border-solid  h-[75px] justify-center">
              <span className="text-[#1687C7] text-[18px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                Consult by State
              </span>
            </div>
            <div className="cursor-pointer flex flex-row items-center justify-evenly md:justify-start h-[75px] gap-x-3 bg-[#1687C7] md:px-[180px] px-2">
              {Tabs.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setactiveTab(item);
                    }}
                    className={` ${
                      activeTab == item && "bg-[#56C2FF] "
                    }  md:px-3 px-1 md:py-4 py-2 md:h-[59px] text-white`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col xl:py-[64px] py-10 bg-[#78787836]">
              <div className="container flex flex-col md:gap-y-[64px] gap-y-8">
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

export default Prairies;
