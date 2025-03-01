import imageOne from "../../assets/images/explore-travel1.png";
import imageTwo from "../../assets/images/explore-travel2.png";
import imageThree from "../../assets/images/explore-travel3.png";
import imageFour from "../../assets/images/explore-travel4.png";
import imageFive from "../../assets/images/explore-travel5.png";
import imageSix from "../../assets/images/explore-travel6.png";
import TravelExploreCard from "./TravelExploreCard";

const travelData = [
  {
    id: 1,
    title: "Honeymoon",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageOne,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 2,
    title: "Adventures Observations",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageTwo,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 3,
    title: "Family Trip",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageThree,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 4,
    title: "Adventure",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageFour,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 5,
    title: "Night Time",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageFive,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 6,
    title: "Skiing",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageSix,
    btnText: "view All",
    btnLInk: "/",
  },
];

const ExploreTravel = () => {
  return (
    <section className="pb-[120px]">
      <div className="container">
        {/* section title  */}
        <div className="section-title">
          <h1 className="text-[54px] max-w-[1050px] mx-auto text-center font-medium font-editorsNoteNormal leading-normal mb-[100px]">
            Explore our{" "}
            <span className="font-editorsNoteItalic text-secondary">
              travel styles below
            </span>{" "}
            to begin your journey
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5">
            {travelData?.map((item) => (
              <TravelExploreCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTravel;
