/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const TransparentButton = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="inline-block font-interTight font-semibold text-secondary py-3 px-6 border border-secondary text-center rounded-md hover:text-white hover:bg-secondary transition-all duration-300"
    >
      {title}
    </Link>
  );
};

export default TransparentButton;
