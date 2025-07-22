import { useTranslation } from "react-i18next";
import { ReviewStarLightSvg } from "../common/SvgContainer/SvgContainer";

const HeroReviewButton = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        background: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.06) 100%),
          rgba(255, 255, 255, 0.27)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center gap-3 text-white bg rounded-md px-2.5 py-2"
    >
      <div className="p-2 bg-black/15 backdrop-blur-sm rounded">
        <ReviewStarLightSvg />
      </div>
      <p className="font-interTight font-normal text-sm">
        {t("homepageReviewSection.rating")}
      </p>
    </div>
  );
};

export default HeroReviewButton;
