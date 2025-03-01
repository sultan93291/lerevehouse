import imageOne from "../../assets/images/explore-travel1.png"
import imageTwo from "../../assets/images/explore-travel2.png"
import imageThree from "../../assets/images/explore-travel3.png"
import imageFour from "../../assets/images/explore-travel4.png"
import imageFive from "../../assets/images/explore-travel5.png"
import imageSix from "../../assets/images/explore-travel6.png"
import TravelExploreCard from "../TravelStyles/TravelExploreCard"

const travelData = [
  {
    id: 1,
    title: "Honeymoon",
    description: "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageOne,
    btnText: "view All",
    btnLInk: "/"
  },
  {
    id: 2,
    title: "Adventures Observations",
    description: "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageTwo,
    btnText: "view All",
    btnLInk: "/"
  },
  {
    id: 3,
    title: "Family Trip",
    description: "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageThree,
    btnText: "view All",
    btnLInk: "/"
  },
  {
    id: 4,
    title: "Adventure",
    description: "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageFour,
    btnText: "view All",
    btnLInk: "/"
  },
  {
    id: 5,
    title: "Night Time",
    description: "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageFive,
    btnText: "view All",
    btnLInk: "/"
  },
  {
    id: 6,
    title: "Skiing",
    description: "Every A&K private journey is unique. Whether you want to personalize one of our expert-designed Tailormade Journeys",
    image: imageSix,
    btnText: "view All",
    btnLInk: "/"
  },
]

const FeaturedTravels = () => {
  return (
    <section className="py-10 lg:py-20 2xl:py-[120px]">
      <div className="container">
        <div className="text-center mb-10 lg:mb-20 2xl:mb-[113px]">
          <h3 className="title--xxl">Featured Adventures Observations</h3>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {
            travelData?.map((item) => (
              <TravelExploreCard item={item} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedTravels;