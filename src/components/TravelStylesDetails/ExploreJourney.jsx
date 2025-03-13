import { Link } from "react-router-dom";

const ExploreJourney = ({ btnTxt }) => {
  return (
    <section className="py-8 xl:py-20 2xl:py-[135px] bg-[#F5F3F4] xl:px-5 2xl:px-14">
      <div className="container">
        <div className="text-center mb-5 sm:mb-10 2xl:mb-20">
          <h2 className="title--xxl font-editorsNoteNormal max-w-[1050px] mx-auto">
            Explore our{" "}
            <span className="text-secondary font-editorsNoteItalic">
              travel styles below
            </span>{" "}
            to begin your journey{" "}
          </h2>
        </div>
        <div className="row">
          <p className="text-[15px] xs:text-base md:text-lg xl:text-xl 2xl:text-[24px] font-interTight text-center text-[#565656 ]">
            The least common denominator of our travels is the Adventure. In
            territories that seem to be special to live it. More, we put all our
            efforts to ensure that your adventure takes place in the utmost
            security. For those planning to enjoy an important trip as an
            adventure trip, choosing the right company is the most important
            thing. Not surprisingly, the word "adventure" appears in our logo:
            t, 7 days a week, on the spot. Le Reve House is also committed to
            ensuring maximum safety even in the most exciting and breathtaking
            adventures.
          </p>
          <div className="text-center">
            <Link
              to={`/tour-lists/Ovest`}
              className="btn-common mt-7 sm:mt-10"
            >
              {btnTxt ? btnTxt : "All WILD LIFE SAFARI"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreJourney;
