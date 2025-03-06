import w1 from "../../assets/images/tour-guide/w1.png";
import w2 from "../../assets/images/tour-guide/w2.png";
import w3 from "../../assets/images/tour-guide/w3.png";
import w4 from "../../assets/images/tour-guide/w4.png";

const WhatToDo = () => {
  return (
    <div className="space-y-5 md:space-y-10">
      {/* Card 1 */}
      <div className="flex xl:flex-row flex-col 2xl:gap-24 gap-6 items-center">
        <div className="2xl:w-[655px] xl:w-[500px] flex-shrink-0">
          <img src={w1} alt="w-full h-full object-cover" />
        </div>
        <div className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">
            Nestled between the Pacific Ocean and the majestic Coast Mountain
            Range, Vancouver is a vibrant metropolis of unrivalled beauty. It is
            a cosmopolitan city perched on the edge of nature, with unlimited
            opportunities for outdoor recreation and a great cultural diversity
            with its European, Asian and First Nations heritages. Vancouver has
            it all, for seasoned travellers and the less adventurous seeking a
            peaceful, reassuring destination.
          </p>
          <br />
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">
            There is no need for a car in Vancouver. This is a city that is best
            explored on foot or by bike, at your own pace. For this reason,
            Vancouver is a perfect location to start or finish a Western Canada
            road trip.
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col-reverse xl:flex-row 2xl:gap-24 gap-6 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl mb-2 md:mb-4 text-[#004265]">
            Stanley Park{" "}
          </h3>
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">
            Stanley Park is such a vast natural environment that it is easy to
            forget that one is in the middle of the city. This lush jewel has so
            much to offer: the scenic Seawall walking path, biking, beaches,
            swimming, and much more. The park also offers a number of activities
            for kids, including pony rides, water games and a miniature train.
            Older visitors will want to tour the spectacular flower gardens.
          </p>

          <p className="text-[#565656] 2xl:text-xl xl:text-lg text-base">
            Stanley Park teems with an amazing variety of wildlife. At least 500
            species are known to live in the park. Some of the must-see
            landmarks: Lost Lagoon,Hollow Tree and siwash Rock..
          </p>
        </div>
        <div className="2xl:w-[655px] xl:w-[500px] flex-shrink-0">
          <img src={w2} alt="w-full h-full object-cover" />
        </div>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col xl:flex-row 2xl:gap-24 gap-6 items-center">
        <div className="2xl:w-[655px] xl:w-[500px] flex-shrink-0">
          <img src={w3} alt="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl mb-2 md:mb-4 text-[#004265]">
            Gastown
          </h3>
          <p className="text-[#565656] 2xl:text-xl xl:text-lg text-base">
            This is the birthplace of Vancouver, with historic cobblestone
            streets and Victorian buildings. The epicenter of independent
            design, culture, food and fashion, Gastown delivers one-of-a-kind
            experiences to visitors and locals alike.
          </p>
          <br />
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">

            In other words, Gastown is the trendiest neighbourhood in Vancouver!
            A must-see for art and culture lovers.
          </p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="flex flex-col xl:flex-row 2xl:gap-24 gap-6 items-center">
        <div>

          <h3 className="text-2xl md:text-3xl mb-2 md:mb-4 text-[#004265]">
            Vancouver Aquarium{" "}
          </h3>
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">
            The Vancouver Aquarium is not just an aquarium: it is a unique
            non-profit marine science centre dedicated to the conservation of
            aquatic life. It is Canadas largest aquarium, with many exhibits and
            galleries presenting different aquatic ecosystems. Adults and kids
            alike will love the entertaining and educational encounters program,
            which allows visitors to go behind the scenes and get up close and
            personal with the animals and the people who train them.
          </p>
        </div>
        <div className="2xl:w-[655px] xl:w-[500px] flex-shrink-0">
          <img src={w4} alt="w-full h-full object-cover" />
        </div>
      </div>
      {/* Card 5 */}
      <div className="flex flex-col-reverse xl:flex-row 2xl:gap-24 gap-6 items-center">
        <div className="2xl:w-[655px] xl:w-[500px] flex-shrink-0">
          <img src={w3} alt="w-full h-full object-cover" />
        </div>
        <div className="">

          <h3 className="text-2xl md:text-3xl mb-2 md:mb-4 text-[#004265]">
            Museum of Anthropology{" "}
          </h3>
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">
            Widely considered to be one of Vancouvers finest museums, the UBC
            Museum of Anthropology houses a number of permanent and temporary
            exhibitions. The permanent collection features a magnificent
            collection of First Nations art and objects, including totem poles
            and traditional houses.
          </p>
          <br />
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">

            The cutting-edge temporary exhibitions focus on arts and culture
            from around the world. Allow at least two hours for a good look at
            everything on offer!
          </p>
        </div>
      </div>
      {/* Card 6 */}
      <div className="flex flex-col xl:flex-row 2xl:gap-24 gap-6 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl mb-2 md:mb-4 text-[#004265]">

            Granville Island{" "}
          </h3>
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">
            Granville Island is not actually an island, but a large peninsula
            connected to the mainland by the magnificent metal spans of the
            Granville Island Bridge. Removed from the hustle and bustle of
            downtown, it is a great place to spend a quiet afternoon. Granville
            Island is very lively on weekends, with its street performers and
            fish & chips vendors!
          </p>
          <br />
          <p className="text-[#565656] 2xl:text-xl lg:text-lg md:text-base text-sm">

            The island boasts many restaurants, bars, theatres, artists studios
            and craft boutiques. With its wide range of local produce and
            products, the Granville Island Public Market is the perfect place to
            prepare your picnic lunch!
          </p>
        </div>
        <div className="2xl:w-[655px] xl:w-[500px] flex-shrink-0">
          <img src={w4} alt="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default WhatToDo;
