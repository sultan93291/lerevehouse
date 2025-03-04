import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import React from "react";
import outdoor from "../../assets/images/canada-tour/outdoor.jpg";
import smillingLady from "../../assets/images/canada-tour/smillingLady.jpg";
import cowBoy from "../../assets/images/canada-tour/cowBoy.jpg";
import waterPlane from "../../assets/images/canada-tour/waterPlane.jpg";

const canadaHolidayData = [
  {
    id: 1,
    imgSrc: smillingLady,
    heading: "QUINTESSENZA CANADESE",
    subHeading: "Anche solo mezza giornata, scommettiamo che ti divertirai?",
    para: [
      "Hai mai provato il kayak? Immaginati con poche altre persone e un istruttore a tua disposizione che ti spiega prima i fondamentali e poi ti segue mentre pagaierai tra i fiordi di Tofino spiegandoti anche flora e fauna dell'ecosistema che stai visitando. Altrimenti cosa ne dici di qualche ora di rafting? Nell'Ovest del Canada ci sono fiumi che consentono tour di tutte le difficoltà, da i più semplici a quelli per esperti! O ancora un tour in bicicletta tra sentieri e strade meno battute nei pressi dell'Algonquin Provincial Park in Ontario o in altri splendide location? Vorresti fare un piccolo trekking ma non sai da dove partire?",
      "Nessun problema, in Canada possiamo organizzarti anche quello. Se invece sei più esperto possiamo anche gestire le prenotazioni dei rifugi alpini canadesi per un'esperienza davvero unica! Un'altra opzione è quella di passare qualche ora in canoa, magari tra i laghi del Quebec, sia da solo o con un gruppo guidato: hai presente il piacere di percepire relax e natura dal livello dell'acqua?Siamo pronti a scommettere che saranno proprio questi i ricordi più belli che porterai indietro dal tuo viaggio in Canada.",
    ],
    isReverse: false,
  },
  {
    id: 2,
    imgSrc: cowBoy,
    para: [
      "Se vuoi veramente provare un po di adrenalina ma non hai voglia di fare rafting tra le rapide, ti consigliamo un tour in idrovolante. La partenza e l'atterraggio a pelo d'acqua sono già memorabili ma quello che vedrai dall'alto ti lascerà senza fiato. Ad esempio tutta la zona di Tofino e Ucluelet, su Vancouver Island, dove se sei fortunato potrai anche avvistare orche e balene dall'alto. Un'esperienza unica!Così come ad esempio un tour in elicottero sopra le Cascate di Niagara, tra Canada e Stati Uniti per godere al meglio e dall'alto, di queste meraviglie della natura. Tornando sulla terra ferma possiamo anche proporti dei mini tour di qualche ora a cavallo tra colline e foreste, sia nel Canada orientale che nel Canada occidentale.",
      "Goditi il meglio del Canada, lasciati consigliare da Xplore sia nel pianificare il tuo viaggio che nell'abbinare alcune attività ed escursioni che ti lasceranno senza fiato, senza però mai trascurare la massima sicurezza per te e i tuoi compagni di viaggio.",
      "Pronto per un po di adrenalina? Gli sconfinati spazi canadesi ti aspettano!",
    ],
    isReverse: true,
  },
];

const CanadaHoliday = () => {
  return (
    <section className="mt-10 ">
      <CommonHeroBanner
        subSubTittle={"Idee di viaggio in Canada"}
        title={"Outdoor life!"}
        subTittle={
          "La differenza con un viaggio negli Stati Uniti sta anche in queste cose: il Canada è il posto perfetto per dar sfogo alla tua voglia di adrenalina ed avventura!"
        }
        bg={outdoor}
      />
      <div className="flex flex-col py-[72px] gap-y-[120px] container ">
        <div className="flex flex-col gap-y-6 items-center ">
          <h4 className="text-[#000000] font-interTight text-[56px] leading-[150%] font-light ">
            Spazi e attività sconfinate
          </h4>
          <div className="flex flex-row gap-x-6 ">
            <p className="text-text-gray font-interTight text-xl max-w-[517px] leading-[180%] font-normal">
              Se vuoi un consiglio da chi il Canada lo conosce e ne è innamorato
              è proprio quello di arricchire il tuo viaggio in Canada con
              qualche escursione outdoor o attività all'aria aperta! Sei in un
              paese in cui moltissima gente vive di attività outdoor e di tempo
              passato all'aria aperta: sarebbe davvero un delitto non
              approfittarne. Quindi via...lasciati andare! Dicci dove andrai e
              lasciati
            </p>
            <p className="text-text-gray font-interTight text-[20px] max-w-[517px] leading-[180%] font-normal">
              suggerire da Xplore come goderti appieno quest'anima wild del
              Canada, sia che il tuo viaggio sia nella parte orientale che
              occidentale. Possiamo proporti una mezza giornata di rafting, il
              noleggio di canoe nei laghi del Quebec, tour in kayak nella baia
              di Toronto o tra le piccole isole vicino a Tofino, tour in
              idrovolante per osservare dall'alto i magnifici paesaggi che solo
              il Canada ti
            </p>
            <p className="text-text-gray font-interTight text-[20px] max-w-[517px] leading-[180%] font-normal">
              sa offrire...senza contare il divertimento di decollare e
              atterrare a pelo d'acqua! Tanto divertimento, totale sicurezza
              delle escursioni, scenari fantastici ed emozioni che rimarranno
              indelebili tra i tuoi ricordi di viaggio. Organizza con Xplore il
              tuo prossimo viaggio in Canada e goditi ogni istante!  
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[96px] ">
          {canadaHolidayData.map((item, index) => {
            return (
              <div
                className={`flex ${
                  item.isReverse ? "flex-row-reverse" : "flex-row"
                } gap-x-8  items-center`}
              >
                <div className="flex flex-col gap-y-6 ">
                  {item.heading && item.subHeading && (
                    <div className=" flex flex-col gap-y-2">
                      <h3 className="text-[#000] font-interTight text-[32px] font-semibold leading-[150%] tracking-[1px] ">
                        {item.heading}
                      </h3>
                      <span className="text-[#000] font-interTight text-[20px] font-semibold leading-[150%] tracking-[1px] ">
                        {" "}
                        {item.subHeading}{" "}
                      </span>
                    </div>
                  )}
                  {item.para.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-[#000] font-interTight text-[16px] font-normal leading-[150%] tracking-[1px] "
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
                <img
                  src={item.imgSrc}
                  className={`w-[784px] ${
                    index === 1 ? "!h-[428px]" : "h-[512px]"
                  } object-cover`}
                  alt="not found"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-8  " >

        </div>
      </div>
    </section>
  );
};

export default CanadaHoliday;
