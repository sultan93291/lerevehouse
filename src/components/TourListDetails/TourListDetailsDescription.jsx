import { useState } from "react";
import parse from "html-react-parser";

const TourListDetailsDescription = descreptionData => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div id="description"  className="my-7 tour-desc sm:my-10">
      {parse(descreptionData?.descreptionData)}
    </div>
  );
};

export default TourListDetailsDescription;
