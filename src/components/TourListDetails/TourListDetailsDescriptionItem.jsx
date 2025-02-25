/* eslint-disable react/prop-types */
import { TickMarkSvg } from '../common/SvgContainer/SvgContainer';

const TourListDetailsDescriptionItem = ({ item }) => {
  return (
    <div className="flex gap-2">
      <TickMarkSvg />
      <p className="text-text-gray font-interTight text-lg font-medium">
        {item?.title && (
          <span className="font-semibold text-primary">{item?.title}</span>
        )}
        {item?.description}
      </p>
    </div>
  );
};

export default TourListDetailsDescriptionItem;
