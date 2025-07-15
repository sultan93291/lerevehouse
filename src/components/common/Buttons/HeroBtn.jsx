import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroBtn = () => {
    const { t } = useTranslation();

    return (
        <Link
            to="/"
            className="bg-secondary px-7 py-3 font-interTight text-white font-semibold transition-all duration-300 hover:bg-white border border-secondary hover:text-secondary"
        >
            {t("plan_your_trip")}
        </Link>
    );
};

export default HeroBtn;
