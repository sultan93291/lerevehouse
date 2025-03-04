import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import mountain from "../../assets/images/tour-auto/mountain.png";
import TourListDetailsReview from "@/components/TourListDetails/TourListDetailsReview";
import Map from "../../assets/images/tour-auto/map.png";
import TourAutoFAqSections from "./Sections/TourAutoFAqSections";
import TourAutoTabSection from "./Sections/TourAutoTabSection/TourAutoTabSection";

const TourAutoCanada = () => {
  return (
    <section className=" mt-10">
      <CommonHeroBanner bg={mountain} title={"Tour in auto in Canada"} />
      <div className="flex flex-col gap-y-[112px] py-20 container  ">
        <div className="flex flex-col gap-y-[180px]">
          <div className="flex flex-row items-center gap-x-[62px] ">
            <div className="flex flex-col gap-y-5 ">
              <p className="text-[#565656] font-interTight text-base font-normal leading-[160%]  ">
                <span className="text-[#252525] font-bold ">
                  Viaggiare in Canada{" "}
                </span>{" "}
                on the road è qualcosa che ti ricorderai per sempre: scoprirai,
                in assoluta libertà, le meraviglie naturali di un paese perfetto
                per questo tipo di viaggio. Xplore ti propone alcuni itinerari
                sia nell'est che nell'ovest del Canada, senza vincoli legati a
                date di partenza, numero di partecipanti o orari da rispettare.
                Dalla Nuova Scozia a Prince Edward Island, dal Quebec alla
                British Columbia, un tour in auto in Canada ti lascerà senza
                parole. Se vuoi puoi prendere spunto da uno di questi itinerari
                in auto in Canada e contattarci per crearne un ad hoc per te!
                Contattaci, dicci in quanti siete e cosa vorresti vedere...ti
                aiuteremo ad organizzare il tuo viaggio perfetto!
              </p>
              {/* faq section */}
              <TourAutoFAqSections />
            </div>
            <img
              className="w-[790px] h-[576px] object-cover "
              src={Map}
              alt="not found"
            />
          </div>
          <TourListDetailsReview isHeading={false} />
        </div>
        <TourAutoTabSection />
      </div>
    </section>
  );
};

export default TourAutoCanada;
