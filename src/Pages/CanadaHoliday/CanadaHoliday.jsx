import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import { useTranslation } from "react-i18next";

import outdoor from "../../assets/images/canada-tour/outdoor.jpg";
import smillingLady from "../../assets/images/canada-tour/smillingLady.jpg";
import cowBoy from "../../assets/images/canada-tour/cowBoy.jpg";
import waterPlane from "../../assets/images/canada-tour/waterPlane.jpg";

const images = [smillingLady, cowBoy];

const CanadaHoliday = () => {
  const { t } = useTranslation();

  const cards = t("section.cards", { returnObjects: true });
  const sectionParagraphs = t("section.paragraphs", { returnObjects: true });

  return (
    <section className="mt-10">
      <CommonHeroBanner
        subSubTittle={t("hero.subSubTittle")}
        title={t("hero.title")}
        subTittle={t("hero.subTittle")}
        bg={outdoor}
      />
      <div className="flex flex-col md:py-[72px] py-8 xl:gap-y-[120px] gap-y-[30px] container">
        <div className="flex flex-col md:gap-y-6 gap-y-3 items-center">
          <h4 className="text-[#000000] font-interTight text-[22px] sm:text-[32px] lg:text-[40px] 2xl:text-[56px] leading-[150%] font-light italic">
            {t("section.heading")}
          </h4>
          <div className="flex flex-col xl:flex-row xl:gap-6 gap-3">
            {sectionParagraphs.map((para, i) => (
              <p
                key={i}
                className="text-text-gray font-interTight text-base xl:text-lg 2xl:text-xl 2xl:max-w-[517px] 2xl:leading-9 font-normal leading-7"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col xl:gap-y-[96px] md:gap-y-10 gap-y-5">
          {cards.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex ${item.isReverse
                    ? "xl:flex-row-reverse flex-col-reverse"
                    : "xl:flex-row flex-col-reverse"
                  } gap-x-8  items-center`}
              >
                <div className="flex flex-col md:gap-y-6">
                  {item.heading && item.subHeading && (
                    <div className=" flex flex-col gap-y-2 mt-10 xl:mt-0">
                      <h3 className="text-[#000] font-interTight text-[24px] md:text-[32px] font-semibold leading-[150%] tracking-[1px]">
                        {item.heading}
                      </h3>
                      <span className="text-[#000] font-interTight text-lg md:text-[20px] font-semibold leading-[150%] tracking-[1px] ">
                        {item.subHeading}
                      </span>
                    </div>
                  )}
                  {item.paragraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-[#000] font-interTight text-sm md:text-[16px] font-normal leading-[24px] md:leading-[150%] tracking-[1px] mt-5 mb-2 xl:my-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <img
                  src={images[index]}
                  className={`3xl:w-[784px] w-[400px] md:w-[784px] xl:w-[450px] 2xl:w-[580px] ${index === 1
                      ? "xl:!h-[512px] h-[220px] md:h-[320px]"
                      : "xl:h-[512px] h-[220px] md:h-[320px]"
                    } object-cover`}
                  alt="not found"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col xl:flex-row gap-9 md:gap-8 lg:gap-4 items-center">
          <div className="flex flex-col gap-y-0 md:gap-y-6">
            <div className="flex flex-col gap-y-2">
              <h4 className="text-[#000] text-[28px] md:text-[32px] font-semibold leading-[150%] tracking-[1px]  font-interTight ">
                {t("section.footer.title")}
              </h4>
              <span className="text-[#000] max-w-[784px] text-sm md:text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                {t("section.footer.description")}
              </span>
            </div>
            <form className="flex flex-col gap-6 mt-5" action="">
              <div className="flex flex-col xl:flex-row gap-x-7 gap-y-5">
                {["nome", "cognome"].map((field, i) => (
                  <div key={field} className="flex flex-col gap-y-[2px]">
                    <h4 className="text-[#000] flex items-center 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                      {t(`section.footer.form.labels.${field}`)}{" "}
                      <span className="text-[#E80032] 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                        {t("section.footer.form.required")}
                      </span>
                    </h4>
                    <input
                      type="text"
                      className="h-[41px] rounded-[8px] 3xl:w-[378px] w-full lg:w-full xl:w-[230px] 2xl:w-[312px] border-[1px] border-solid border-[#A5A5A5] pl-2"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-y-[2px] ">
                <h4 className="text-[#000] flex items-center 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px]  font-interTight ">
                  {t("section.footer.form.labels.email")}{" "}
                  <span className="text-[#E80032] 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px]  font-interTight ">
                    {t("section.footer.form.required")}
                  </span>
                </h4>
                <input
                  type="email"
                  className="h-[41px] rounded-[8px] w-full border-[1px] border-solid border-[#A5A5A5] pl-2"
                />
              </div>
              <div className="flex flex-col gap-y-[2px] ">
                <h4 className="text-[#000] flex items-center 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight ">
                  {t("section.footer.form.labels.messaggio")}{" "}
                  <span className="text-[#E80032] 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight ">
                    {t("section.footer.form.required")}
                  </span>
                </h4>
                <textarea
                  name=""
                  className="h-[163px] rounded-[8px] w-full border-[1px] border-solid border-[#A5A5A5] pl-2"
                  id=""
                ></textarea>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-[#787878] text-sm font-normal leading-[180%] tracking-[1px] font-interTight">
                  {t("section.footer.form.privacyNote")}
                </p>
                <button className="px-6 py-3 rounded-[5px] w-[255px] bg-[#1687C7] text-sm md:text-xs font-medium leading-[120%] font-interTight text-white border-[1px] border-transparent ease-in-out duration-500 hover:bg-transparent hover:border-solid hover:border-[#1687C7] hover:text-[#1687C7]">
                  {t("section.footer.form.submit")}
                </button>
              </div>
            </form>
          </div>
          <img
            src={waterPlane}
            className="3xl:w-[784px] hidden 2xl:block 2xl:w-[580px] w-[400px] md:w-[784px] xl:w-[490px] md:h-[663px] lg:h-[600px] h-[320px] object-cover"
            alt="not found"
          />
        </div>
      </div>
    </section>
  );
};

export default CanadaHoliday;
