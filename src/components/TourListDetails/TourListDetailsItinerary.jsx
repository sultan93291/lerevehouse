import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const TourListDetailsItinerary = () => {
  return (
    <div id="itinerary-plan" className="flex gap-8">
      {/* left section */}
      <div className="p-6 border border-[#00426566] w-2/3">
        {/* title */}
        <div>
          <div>
            <h4 className="text-4xl font-editorsNoteNormal text-primary">
              Itinerary idea in details
            </h4>
          </div>
          <p className="font-interTight font-medium text-text-gray text-lg mt-5">
            Includes international flights from a choice of Itali airports,
            including Room, and others places{' '}
          </p>
        </div>

        {/* Accordion Section */}
        <div className="w-full font-interTight">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
                What makes Le Rêve House Adventure unique?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#3E3E3E]">
                We are the only Italian tour operator based in Vancouver,
                specializing in organizing and managing exploration and
                adventure trips in the American Northwest without
                intermediaries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
                Where are your main destinations?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#3E3E3E]">
                We are the only Italian tour operator based in Vancouver,
                specializing in organizing and managing exploration and
                adventure trips in the American Northwest without
                intermediaries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
                Can I customize my trip?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#3E3E3E]">
                We are the only Italian tour operator based in Vancouver,
                specializing in organizing and managing exploration and
                adventure trips in the American Northwest without
                intermediaries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
                What support do you provide during the trip?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#3E3E3E]">
                We are the only Italian tour operator based in Vancouver,
                specializing in organizing and managing exploration and
                adventure trips in the American Northwest without
                intermediaries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl text-[#3E3E3E] hover:no-underline">
                What type of trips do you organize?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#3E3E3E]">
                We are the only Italian tour operator based in Vancouver,
                specializing in organizing and managing exploration and
                adventure trips in the American Northwest without
                intermediaries.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* map */}
      <div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/0bc4/f207/ebf5c85c1b773f096d1e9185b261486f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFD8PkQK8st~4u41rjpDMte9PRsjzW2yORdT2b~RzNyistnz5IqPNf8LFRuS71BUX91mLudDvRuoEWMevwmp9kB3t0~5YG8Ebyj~cpHqE3pmGoWLfvh9vwyK0aYh8EYYTxTvq6rljkvJHEw5ffM1~IojQt1hJAJGVravL29cqt20LkJuozGInukMCgCzZ4RO1gSZom4M4ammmgGPBgQueNfBr0DbWWZUqtr5g9ZUbz4gYPG0agiHk5AFA~xP1uldfZTuCrJ-EjGIJXOtBNoZdM4SUU-hmyqUikbxlqTrNrBNI34eZi8m8UvMqkj3TrRuL~NdU~bkYx3kl2AHAFsnfw__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TourListDetailsItinerary;
