import CommonHeroBanner from '@/components/common/HeroBanner/CommonHeroBanner';
import bg from '@/assets/images/tour-guide-bg.png';
import bg1 from '@/assets/images/tourist-guide/1.jpg';
import bg2 from '@/assets/images/tourist-guide/2.jpg';
import bg3 from '@/assets/images/tourist-guide/3.jpg';
import bg4 from '@/assets/images/tourist-guide/4.jpg';
import bg5 from '@/assets/images/tourist-guide/5.jpg';
import TouristGuideFeatureCard from '@/components/common/Cards/TouristGuideFeatureCard';
const TouristGuide = () => {
  return (
    <div>
      <CommonHeroBanner bg={bg} title="Tourist" italic="Guide" />

      {/* all tourist guide */}
      <section className="container mx-auto my-10 lg:my-12 xl:my-20">
        {/* title */}

        <div className="text-center space-y-4 xl:px-5 2xl:px-14" >
          <h2 className="font-editorsNoteNormal text-3xl sm:text-4xl xl:text-5xl text-primary ">
            Our <span className="font-editorsNoteItalic">Featured Guide</span>
          </h2>
          <p className="text-text-gray xl:w-3/4 mx-auto font-interTight xl:text-lg tracking-wide">
            Our Featured Guide offers expertly curated travel insights,
            showcasing the best destinations, attractions, and experiences.
            Whether you&lsquo;re planning a quick getaway or an adventurous
            journey, this guide is designed to inspire and assist every step of
            the way.
          </p>
        </div>

        {/* featured tours */}
        <div className="mt-10 lg:mt-16 flex flex-col gap-5 xl:gap-6 xl:px-5 2xl:px-14">
          <div className="flex flex-col lg:flex-row gap-5 xl:gap-6">
            <div className="lg:w-3/5">
              <TouristGuideFeatureCard bg={bg1} title="ALASKA" />
            </div>
            <div className="lg:w-2/5 h-full flex flex-col gap-5 xl:gap-6">
              <div className="lg:h-1/2">
                <TouristGuideFeatureCard bg={bg2} title="CARAIBI" />
              </div>
              <div className="lg:h-1/2">
                <TouristGuideFeatureCard bg={bg3} title="PACIFICO" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 xl:gap-6 min-h-[320px] xl:min-h-[600px]">
            <div className="lg:w-2/6">
              <TouristGuideFeatureCard bg={bg4} title="MESSICO" />
            </div>
            <div className="lg:w-4/6 flex flex-col gap-5 xl:gap-6 ">
              <TouristGuideFeatureCard bg={bg5} title="CANADA" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristGuide;
