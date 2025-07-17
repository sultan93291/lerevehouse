import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AccordionMinus,
  AccrodionPlus,
} from "@/components/common/SvgContainer/SvgContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

const TourAutoFAqSections = () => {
  const [activeIndex, setActiveIndex] = useState("item-1");
  const { t } = useTranslation();
  const faqs = t("tourAutoFaq.faqs", { returnObjects: true });

  return (
    <div className="w-full font-interTight">
      <Accordion
        type="single"
        collapsible
        value={activeIndex}
        onValueChange={setActiveIndex}
        className="w-full"
      >
        {faqs.map((faq, index) => {
          const itemValue = `item-${index + 1}`;
          return (
            <AccordionItem
              key={index}
              value={itemValue}
              className="border-b border-gray-200 transition-all duration-500 ease-in-out"
            >
              <AccordionTrigger
                className="p-4 text-lg lg:text-xl text-[#3E3E3E] hover:no-underline text-left rounded-md transition-colors flex flex-row w-full justify-between 
                data-[state=open]:bg-[#E8F5FC] data-[state=open]:font-semibold"
              >
                <p className="font-fontSpring text-xl leading-[160%] font-light text-[#004265]">
                  {faq.question}
                </p>
                <span
                  className={`transition-transform duration-700 ${activeIndex === itemValue ? "rotate-180" : "rotate-0"
                    }`}
                >
                  {activeIndex === itemValue ? (
                    <AccordionMinus />
                  ) : (
                    <AccrodionPlus />
                  )}
                </span>
              </AccordionTrigger>
              <AccordionContent
                className="p-4 text-base lg:text-lg text-[#565656] bg-[#E8F5FC] rounded-b-md 
                transition-all duration-500 ease-in-out transform opacity-0 data-[state=open]:opacity-100 data-[state=open]:translate-y-0"
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default TourAutoFAqSections;
