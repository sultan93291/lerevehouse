/* eslint-disable react/prop-types */
import PlacesToVisitCard from '../common/Cards/PlacesToVisitCard';

const DestinationPlacesToVisit = ({ placesToVisitInfo }) => {
  return (
    <div id='places-to-visit' className="flex gap-12">
      {/* left side */}
      <div className="w-1/2">
        <img
          src="https://s3-alpha-sig.figma.com/img/0bc4/f207/ebf5c85c1b773f096d1e9185b261486f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g1pkWmpt0QbyYDGCrYVn2Bc3lfvMpvMC4WCOmPThMv6WBrHwocGnW2-kaGVKrixyDHkZcpUeMvUKR79e4UJ2K0HzilwvrjPJTQdz0s6xviyojqdOCYeO3YxMFeTfk6gRU3bLPzaPTdO3kkw~3zBK-dfWBO6nu0BRZPze3Mc9jrrr63uvd1N-OCPPbcQkkJ3G2u866VT3xyxx3SNlH6lytrEq441jWwlRC36u2Av1yxGYIum1z6sqZ5ndXCshYEdfN~eABQUS5ZYg62O4ETRNqZYXzWMjNoNBkvY89zB1kCzP-xaYXs6-u55pzleZJljurSpjar-sb7e29-Mdl-vYXw__"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right side */}
      <div className="w-1/2">
        {/* title */}
        <h4 className="text-3xl font-editorsNoteNormal text-primary">
          Top Place to
          <span className="font-editorsNoteItalic">Visit in Alaska</span>
        </h4>

        {/* top places cards */}
        <div className="space-y-5 mt-8">
          {placesToVisitInfo?.map((item) => (
            <PlacesToVisitCard key={item?.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationPlacesToVisit;
