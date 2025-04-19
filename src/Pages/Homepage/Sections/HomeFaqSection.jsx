import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetHomePageFaqDataQuery } from "@/Redux/features/api/apiSlice";

const HomeFaqSection = () => {
  const { data, error, isLoading } = useGetHomePageFaqDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });


  return (
    <section className="container  flex-col mx-auto px-4 lg:px-8 2xl:px-16 3xl:px-32 xl:flex-row gap-14 2xl:gap-16 py-10 2xl:py-20">
      {/* title */}
      <div className=" space-y-1 lg:space-y-2 flex-shrink-0">
        <h2 className=" text-lg lg:text-xl font-interTight text-primary">
          Frequently asked questions
        </h2>
        <h3 className=" text-[26px] lg:text-3xl font-editorsNoteNormal text-secondary">
          Questions? Answers.
        </h3>
      </div>

      {/* Faq */}
      <div className="w-full font-interTight">
        <Accordion type="single" collapsible className="w-full">
          {data?.data.map((item, index) => {
            return (
              <AccordionItem key={item?.id} value={`item-${item.id}`}>
                <AccordionTrigger className=" text-lg lg:text-xl text-[#3E3E3E] hover:no-underline">
                  {item?.question}
                </AccordionTrigger>
                <AccordionContent className=" text-base lg:text-lg text-[#3E3E3E]">
                  {item?.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default HomeFaqSection;
