import CommonHeroBanner from "@/components/common/HeroBanner/CommonHeroBanner";
import TourTab from "../TourGuide/Sections/TourTab";
import ParkDetails from "@/components/ParkDetails/ParkDetails";
import crab from "../../assets/images/eat-and-drink/crab.jpg";
import {
  EatAndDrink,
  EatAndDrinkTabData,
} from "@/components/DummyData/EatAndDrinkDummyData";
import Delights from "./Sections/Delights";

const TourGuide = () => {
  return (
    <div>
      <CommonHeroBanner
        title={"Eat & Drink"}
        subTittle={
          "Ok, let's admit that Poutine may not be the most inviting dish... but can you compare it to the shellfish and salmon that you can find in Canada? Not to mention the excellent wines, craft beers, Northern specialties and the elegance of gourmet restaurants in the big cities. Get ready to delight your palate on your next trip to Canada!"
        }
        bg={crab}
        italic={true}
        uppercaseItalic={false}
      />
      <Delights />
      <TourTab data={EatAndDrinkTabData} />
      <div className=" py-5 bg-chocolate">
        <div className="container flex items-center text-white justify-center font-editorsNoteItalic text-[40px] font-light leading-[160%] ">
          We've added a seat at the table, yours!
        </div>
      </div>
      <div className=" flex flex-col">
        {EatAndDrink.map((details, index) => (
          <div
            key={details?.id}
            style={{
              backgroundColor: index % 2 === 0 ? "#1686c743" : "#fff",
            }}
          >
            <ParkDetails
              Heading={details?.Heading}
              SubHeading={details?.SubHeading}
              ParaOne={details?.ParaOne}
              ParaTwo={details?.ParaTwo}
              ParaThree={details?.ParaThree}
              BtnTxt={details?.BtnTxt}
              Images={details?.images}
              isHover={details?.isHover}
              isDouble={details?.isDouble}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuide;
