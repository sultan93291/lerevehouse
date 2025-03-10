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
    <section className="mt-10">
      <CommonHeroBanner
        subSubTittle={"Idee di viaggio in Canada"}
        title={"Outdoor life!"}
        subTittle={
          "La differenza con un viaggio negli Stati Uniti sta anche in queste cose: il Canada è il posto perfetto per dar sfogo alla tua voglia di adrenalina ed avventura!"
        }
        bg={outdoor}
      />
      <div className="flex flex-col md:py-[72px] py-8 xl:gap-y-[120px] gap-y-[30px] container">
        <div className="flex flex-col md:gap-y-6 gap-y-3 items-center">
          <h4 className="text-[#000000] font-interTight text-[22px] sm:text-[32px] lg:text-[40px] 2xl:text-[56px] leading-[150%] font-light italic">
            Spazi e attività sconfinate
          </h4>
          <div className="flex flex-col xl:flex-row xl:gap-6 gap-3">
            <p className="text-text-gray font-interTight text-base xl:text-lg 2xl:text-xl 2xl:max-w-[517px] 2xl:leading-9 font-normal leading-7">
              Se vuoi un consiglio da chi il Canada lo conosce e ne è innamorato
              è proprio quello di arricchire il tuo viaggio in Canada con
              qualche escursione outdoor o attività all'aria aperta! Sei in un
              paese in cui moltissima gente vive di attività outdoor e di tempo
              passato all'aria aperta: sarebbe davvero un delitto non
              approfittarne. Quindi via...lasciati andare! Dicci dove andrai e
              lasciati
            </p>
            <p className="text-text-gray font-interTight text-base xl:text-lg 2xl:text-xl 2xl:max-w-[517px] 2xl:leading-9 font-normal leading-7">
              suggerire da Xplore come goderti appieno quest'anima wild del
              Canada, sia che il tuo viaggio sia nella parte orientale che
              occidentale. Possiamo proporti una mezza giornata di rafting, il
              noleggio di canoe nei laghi del Quebec, tour in kayak nella baia
              di Toronto o tra le piccole isole vicino a Tofino, tour in
              idrovolante per osservare dall'alto i magnifici paesaggi che solo
              il Canada ti
            </p>
            <p className="text-text-gray font-interTight text-base xl:text-lg 2xl:text-xl 2xl:max-w-[517px] 2xl:leading-9 font-normal leading-7">
              sa offrire...senza contare il divertimento di decollare e
              atterrare a pelo d'acqua! Tanto divertimento, totale sicurezza
              delle escursioni, scenari fantastici ed emozioni che rimarranno
              indelebili tra i tuoi ricordi di viaggio. Organizza con Xplore il
              tuo prossimo viaggio in Canada e goditi ogni istante!  
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:gap-y-[96px] md:gap-y-10 gap-y-5">
          {canadaHolidayData.map((item, index) => {
            return (
              <div
                className={`flex ${
                  item.isReverse
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
                        {" "}
                        {item.subHeading}{" "}
                      </span>
                    </div>
                  )}
                  {item.para.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-[#000] font-interTight text-sm md:text-[16px] font-normal leading-[24px] md:leading-[150%] tracking-[1px] mt-5 mb-2 xl:my-0"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
                <img
                  src={item.imgSrc}
                  className={`3xl:w-[784px] w-[400px] md:w-[784px] xl:w-[450px] 2xl:w-[580px] ${
                    index === 1
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
                OUTDOOR LIFE
              </h4>
              <span className="text-[#000] max-w-[784px] text-sm md:text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                Contattaci per sapere quali attività possiamo proporti durante
                il tuo soggiorno. Tuffati nella natura e rendi ancora più unico
                il tuo viaggio in Canada!
              </span>
            </div>
            <form className="flex flex-col gap-6 mt-5" action="">
              <div className="flex flex-col xl:flex-row gap-x-7 gap-y-5">
                <div className="flex flex-col gap-y-[2px]">
                  <h4 className="text-[#000] flex items-center 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight">
                    Nome{" "}
                    <span className="text-[#E80032] 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight ">
                      *
                    </span>
                  </h4>
                  <input
                    type="name"
                    className="h-[41px] rounded-[8px] 3xl:w-[378px] w-full lg:w-full xl:w-[230px] 2xl:w-[312px] border-[1px] border-solid border-[#A5A5A5] pl-2"
                  />
                </div>
                <div className="flex flex-col gap-y-[2px] ">
                  <h4 className="text-[#000] flex items-center 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight ">
                    Cognome{" "}
                    <span className="text-[#E80032] 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px]  font-interTight ">
                      *
                    </span>
                  </h4>
                  <input
                    type="name"
                    className="h-[41px] rounded-[8px] 3xl:w-[378px] w-full lg:w-full xl:w-[230px] 2xl:w-[312px] border-[1px] border-solid border-[#A5A5A5] pl-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-[2px] ">
                <h4 className="text-[#000] flex items-center 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px]  font-interTight ">
                  Email{" "}
                  <span className="text-[#E80032] 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px]  font-interTight ">
                    *
                  </span>
                </h4>
                <input
                  type="name"
                  className="h-[41px] rounded-[8px] w-full border-[1px] border-solid border-[#A5A5A5] pl-2"
                />
              </div>
              <div className="flex flex-col gap-y-[2px] ">
                <h4 className="text-[#000] flex items-center 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight ">
                  Messaggio{" "}
                  <span className="text-[#E80032] 2xl:max-w-[784px] w-full text-[16px] font-semibold leading-[150%] tracking-[1px] font-interTight ">
                    *
                  </span>
                </h4>
                <textarea
                  name=""
                  className="h-[163px] rounded-[8px] w-full border-[1px] border-solid border-[#A5A5A5] pl-2"
                  id=""
                ></textarea>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-[#787878] text-sm font-normal leading-[180%] tracking-[1px] font-interTight  ">
                  Cliccando ci autorizzi al trattamento dei dati inseriti
                  secondo le finalità indicate nella nuova 
                  <span className="underline"> Informativa sulla Privacy</span>
                </p>
                <button className="px-6 py-3 rounded-[5px] w-[255px] bg-[#1687C7] text-sm md:text-xs font-medium leading-[120%] font-interTight text-white border-[1px] border-transparent ease-in-out duration-500 hover:bg-transparent hover:border-solid hover:border-[#1687C7] hover:text-[#1687C7]">
                  Richiedi maggiori informazioni
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
