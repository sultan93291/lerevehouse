import { useState } from "react";
import parse from "html-react-parser";

const TourListDetailsDescription = descreptionData => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      dangerouslySetInnerHTML={{ __html: descreptionData?.descreptionData }}
      id="description"
      className="my-7 sm:my-10 py-6 sm:py-8   text-base sm:text-lg 2xl:text-xl  text-gray-800 leading-[160%] "
    >

    </div>
  );
};

export default TourListDetailsDescription;
