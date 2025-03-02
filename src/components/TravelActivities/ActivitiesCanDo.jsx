import imageOne from "../../assets/images/thingstodo4.png";
import imageTwo from "../../assets/images/doactivities4.png";
import imageThree from "../../assets/images/doactivities3.png";
import imageFour from "../../assets/images/doactivities4.png";
import ActivitesCard from "./ActivitesCard";

const activities = [
  {
    id: 1,
    image: imageOne,
    place: "Kenya",
    description:
      "The best food, wine, art, landscapes – Italy rewards the traveller like nowhere else on earth.",
  },
  {
    id: 2,
    image: imageTwo,
    place: "Kenya",
    description:
      "The best food, wine, art, landscapes – Italy rewards the traveller like nowhere else on earth.",
  },
  {
    id: 3,
    image: imageThree,
    place: "Kenya",
    description:
      "The best food, wine, art, landscapes – Italy rewards the traveller like nowhere else on earth.",
  },
  {
    id: 4,
    image: imageFour,
    place: "Kenya",
    description:
      "The best food, wine, art, landscapes – Italy rewards the traveller like nowhere else on earth.",
  },
];

const ActivitiesCanDo = () => {
  return (
    <section className="2xl:py-20">
      <div className="container">
        <div className="text-left mb-10">
          <h3 className="title--xxl">See what are the activates you can do</h3>
        </div>
        <div className="grid md:grid-cols-4 md:gap-5 gap-8">
          {activities?.map((item) => (
            <ActivitesCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCanDo;
