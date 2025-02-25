import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HomeFaqSection = () => {
  return (
    <section className="container mx-auto px-32 flex gap-16 py-20">
      {/* title */}
      <div className="space-y-2 flex-shrink-0">
        <h2 className="text-xl font-interTight text-primary">
          Frequently asked questions
        </h2>
        <h3 className="text-3xl font-editorsNoteNormal text-secondary">
          Questions? Answers.
        </h3>
      </div>

      {/* Faq */}
      <div className="w-full font-interTight">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
              What makes Le Rêve House Adventure unique?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#3E3E3E]">
              We are the only Italian tour operator based in Vancouver,
              specializing in organizing and managing exploration and adventure
              trips in the American Northwest without intermediaries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
              Where are your main destinations?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#3E3E3E]">
              We are the only Italian tour operator based in Vancouver,
              specializing in organizing and managing exploration and adventure
              trips in the American Northwest without intermediaries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
              Can I customize my trip?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#3E3E3E]">
              We are the only Italian tour operator based in Vancouver,
              specializing in organizing and managing exploration and adventure
              trips in the American Northwest without intermediaries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
              What support do you provide during the trip?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#3E3E3E]">
              We are the only Italian tour operator based in Vancouver,
              specializing in organizing and managing exploration and adventure
              trips in the American Northwest without intermediaries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
              What type of trips do you organize?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#3E3E3E]">
              We are the only Italian tour operator based in Vancouver,
              specializing in organizing and managing exploration and adventure
              trips in the American Northwest without intermediaries.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default HomeFaqSection;
