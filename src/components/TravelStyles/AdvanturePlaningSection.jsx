import ActiveImage from "../../assets/images/active.svg";
import SustainableImage from "../../assets/images/sustainable.svg";
import TrustedImage from "../../assets/images/trusted.svg";
import WorldWideImage from "../../assets/images/worldwide.svg";
import AdvanturePlaningCard from "../../components/TravelStyles/AdvanturePlaningCard";

const holidaysData = [
  {
    id: 1,
    title: "Trusted",
    description:
      "10 years of operating fully bonded and your money 100% protected.",
    image: TrustedImage,
  },
  {
    id: 2,
    title: "Active",
    description:
      "From leisurely walking and cycling to push-your-limits expeditions.",
    image: ActiveImage,
  },
  {
    id: 3,
    title: "Worldwide",
    description: "15 Guided Group and Self-Guided adventures in 100 countries.",
    image: WorldWideImage,
  },
  {
    id: 4,
    title: "Sustainable",
    description:
      "100% carbon absorption. Caring for the environment and local communities.",
    image: SustainableImage,
  },
];

const AdvanturePlaningSection = () => {
  return (
    <section className="xl:px-5 2xl:px-14">
      <div className="container">
        <div className="section-title text-center mb-3 md:mb-10">
          <h3 className="title--xxl">Worldwide Adventure planing Holidays</h3>
        </div>
        <div className="row row-custom flex pt-0 pb-2 lg:py-0 flex-wrap ml-[-17px] mr-[-17px]">
          {holidaysData?.map((item) => (
            <div
              key={item?.id}
              className="custom-column pl-[17px] pr-[17px] lg:pb-0 w-full sm:w-[50%] lg:w-[25%]"
            >
              <AdvanturePlaningCard item={item} />
            </div>
          ))}
        </div>
        <div className="text-center sm:pt-5 pb-10 xs:py-10 lg:py-20 2xl:py-[120px] font-interTight text-[15px] xs:text-base lg:text-lg xl:text-xl 2xl:text-[24px]">
          <p>
            Le Reve House Adventure (LRHA) is the only Italian tour operator
            that organizes and manages exploration and adventure trips and tours
            in Alaska , Canada and Quebec .We boast significant experience in
            the management and organization of trips and holidays in Canada and
            Alaska. Connected to all the best locations and attractions that
            these countries offer, Le Reve House Adventure is able to organize
            and offer sports-oriented holidays with renowned ski resorts such
            as Vancouver , host of the last Winter Olympics, adventure trips
            with nature excursions, tours and safaris along the uncontaminated
            landscapes that Canada is rich in, above all Niagara Falls, then
            guided tours in the 42 national parks. Not only that, Le Reve House
            Adventure also organizes couples trips and honeymoons, but also
            group trips to the big cities of Canada and the cultural
            destinations that it offers.
          </p>
          <p className="sm:mt-10 mt-5">
            Customer care and assistance:with Le Reve House Adventure the
            customer is never left alone, but is followed from the moment he
            gets off the plane until his departure with a CONSTANT ASSISTANCE
            SERVICE 24 hours a day, 7 days a week by our guides and our offices
            in the Territory and now also from Italy both via local and Italian
            telephone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvanturePlaningSection;
