import TravelCtaBg from "../../assets/images/travelcta-bg.png";
import { Link } from "react-router-dom";

const TravelCta = ({ title, description, btnText }) => {
  return (
    <section className="2xl:pb-[100px] pb-10 sm:pb-16 md:pb-20 xl:px-5 2xl:px-14">
      <div className="container">
        <div
          className="max-w-[1330px] travel-cta relative z-[1] 2xl:py-[82px] py-14 lg:py-[70px] 2xl:px-[300px] mx-auto bg-cover bg-no-repeat text-center rounded-[18px] overflow-hidden px-5 "
          style={{
            backgroundImage: `url(${TravelCtaBg})`,
          }}
        >
          <h3 className="title--xxl font-editorsNoteNormal text-white">
            {title}
          </h3>
          <p className="text-base lg:text-[18px] text-white mt-6 font-interTight">
            {description}
          </p>
          <Link
            to={"/"}
            className="font-inter border-[2px] border-secondary 2xl:py-[19px] py-3 lg:py-[14px] 2xl:px-[62px] px-5 lg:px-10 bg-secondary inline-block rounded-[5px] text-sm text-white xl:mt-[68px] mt-5 lg:mt-8 duration-200 ease-in-out hover:bg-white hover:border-white hover:text-secondary"
          >
            {btnText}
          </Link>

        </div>
      </div>
    </section>
  );
};

export default TravelCta;
