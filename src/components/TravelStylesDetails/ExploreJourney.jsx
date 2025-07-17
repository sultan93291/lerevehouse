import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExploreJourney = ({ btnTxt, isBtn, data }) => {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <section className="py-8 xl:py-20 2xl:py-[135px] bg-[#F5F3F4] xl:px-5 2xl:px-14">
      <div className="container">
        <div className="text-center mb-5 sm:mb-10 2xl:mb-20">
          <h2 className="title--xxl font-editorsNoteNormal max-w-[1050px] mx-auto">
            {data?.sub_title}
          </h2>
        </div>
        <div className="row">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.description,
            }}
            className="text-[15px] xs:text-base md:text-lg xl:text-xl 2xl:text-[24px] font-interTight text-center text-[#565656 ]"
          ></div>
          <div className="text-center">
            {isBtn === false ? null : (
              <Link to={`/tour-lists/${id}`} className="btn-common mt-7 sm:mt-10">
                {btnTxt || t("exploreJourney.fallbackBtn")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreJourney;
