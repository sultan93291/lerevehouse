import imageOne from "../../assets/images/thingstodo1.png";
import imageTwo from "../../assets/images/thingstodo2.png";
import imageThree from "../../assets/images/thingstodo3.png";
import imageFour from "../../assets/images/thingstodo4.png";
import imageFive from "../../assets/images/thingstodo5.png";
import imageSix from "../../assets/images/thingstodo6.png";
import imageSeven from "../../assets/images/thingstodo7.png";
import imageEight from "../../assets/images/thingstodo8.png";
import imageNine from "../../assets/images/thingstodo9.png";
import TravelExploreCard from "../TravelStyles/TravelExploreCard";

const travelData = [
  {
    id: 1,
    title: "Hiking & Trekking",
    description:
      "Rafting and kayaking offer unforgettable ways to connect with nature and enjoy the great outdoors.",
    image: imageOne,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 2,
    title: "Water Activities",
    description:
      "Rafting and kayaking offer unforgettable ways to connect with nature and enjoy the great outdoors.",
    image: imageTwo,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 3,
    title: "Wildlife & Safari",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageThree,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 4,
    title: "Cultural Discovery",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageFour,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 5,
    title: "Adventure Cruising",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageFive,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 6,
    title: "Cultural Discovery",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageSix,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 7,
    title: " Adventure & Outdoor",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageSeven,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 8,
    title: "Food, Drink & Nightlife",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageEight,
    btnText: "view All",
    btnLInk: "/",
  },
  {
    id: 9,
    title: "Custom & Private",
    description:
      "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageNine,
    btnText: "view All",
    btnLInk: "/",
  },
];

const BrowseThings = () => {
  return (
    <section className="2xl:py-20 md:py-0 py-1">
      <div className="container">
        <div className="2x:mb-[60px] mb-7 md:mb-10">
          <h3 className="title--xxl text-center">
            Browse{" "}
            <span className="text-secondary font-editorsNoteItalic">
              Things to Do
            </span>{" "}
            by Your Interest
          </h3>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 gap-5">
            {travelData?.map((item) => (
              <TravelExploreCard
                link={"/activities/subcategory/"}
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseThings;
