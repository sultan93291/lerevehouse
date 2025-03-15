import { useState } from "react";

const TourListDetailsDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div id="description" className="my-7 sm:my-10">
      {/* title */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorsNoteNormal text-primary">
          Travel to{" "}
          <span className="font-editorsNoteItalic">Canada and Alaska</span>
        </h2>
        <p className="font-interTight font-medium sm:text-lg lg:text-xl text-primary">
          A wide range of excursions available.
        </p>
      </div>

      {/* description */}
      <div className="mt-4 flex gap-1">
        <p className="text-text-gray font-interTight text-base lg:text-lg">
          The
          <span className="font-bold text-primary">
            Canada and Alaska Journey
          </span>
          presents you with an extraordinary combination of natural beauty,
          offering nature lovers an unforgettable, extraordinary and varied
          experience, full of breathtaking landscapes, irresistible wildlife and
          unique cultures. Traversing these immense territories will give you
          the opportunity to explore the beautiful coastline, forests and
          mountains of a territory that, during the summer, is an enchanting
          wonder. The Pacific coast between{" "}
          <span className="font-bold text-primary">
            British Columbia and Alaska
          </span>
          is surprising and magnificent, composed of a very diverse mix of
          environments, with landscapes and scenery of unparalleled beauty and
          biodiversity. This region is known for its vast expanse of the
          world&lsquo;s largest temperate rainforests, characterized by ancient
          trees including fir, red cedar and pine, and by spectacular inlets,
          fjords and a variety of marine life. Equally so are the beautiful
          rivers of British Columbia, which provide ideal habitats for wildlife
          such as, for example, the five species of Pacific salmon that they
          support. In the ocean, marine life is abundant and numerous . Among
          the most common species are whales (including the largest living being
          on our planet, the blue whale ), killer whales , seals , sea lions and
          sea otters. In addition, the region is known to be an important
          transit point for many species of migratory birds. During your trip to
          Canada and Alaska you can also , in the various{" "}
          <span className="font-bold text-primary underline">
            whale watching
          </span>
          excursions , gray whales, humpback whales, killer whales and three
          types of dolphins The
          <span className="font-bold text-primary underline">
            Great Bear Rainforest
          </span>
          , (the Great Bear Park Reserve), is a vast area of temperate
          rainforest located along the central coast of British Columbia one of
          the jewels of Canadian conservation, inaugurated by the WWF in 2004.
          It is known for being one of the largest and most intact in the world
          and its extension covers approximately 6.4 million hectares, including
          islands, fjords, mountains and a rich biological diversity.{" "}
          {isExpanded && (
            <>
              <span>
                The Great Bear Rainforest is home to a number of species, some
                of which are rare and endangered. This pristine wilderness
                provides a critical habitat for the endangered spirit bear, a
                rare subspecies of the black bear with a white or cream-colored
                coat, and it also supports other iconic wildlife such as the
                wolves, cougars, and the mighty grizzly bear. This remarkable
                ecosystem is a vital part of the natural heritage of the region,
                and a symbol of the power of preservation efforts in the modern
                era.
              </span>
              <span className="text-primary">
                ... Truly a once-in-a-lifetime experience.
              </span>
            </>
          )}
          <span
            onClick={handleToggle}
            className="text-primary font-semibold cursor-pointer"
          >
            {isExpanded ? " Read Less" : " Read More"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TourListDetailsDescription;
