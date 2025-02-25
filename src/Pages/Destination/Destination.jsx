import CommonHeroBanner from '@/components/common/HeroBanner/CommonHeroBanner';
import bg from '../../assets/images/destination-bg.jpg';
import destinationBg1 from '@/assets/images/all-destination/1.jpg';
import destinationBg2 from '@/assets/images/all-destination/2.jpg';
import destinationBg3 from '@/assets/images/all-destination/3.jpg';
import destinationBg4 from '@/assets/images/all-destination/4.jpg';
import destinationBg5 from '@/assets/images/all-destination/5.jpg';
import destinationBg6 from '@/assets/images/all-destination/6.jpg';
import destinationBg7 from '@/assets/images/all-destination/7.jpg';
import SingleDestinationCard from '@/components/common/Cards/SingleDestinationCard';

const Destination = () => {
  return (
    <div>
      {/* Hero section */}
      <CommonHeroBanner bg={bg} title="Explore" italic="Luxury Vacations" />

      {/* destination wrapper */}
      <section className="my-20 container mx-auto">
        <div>
          {/* title */}
          <h2 className="text-5xl font-editorsNoteNormal text-primary">
            Our Destination
          </h2>

          {/*all destination  */}
          <div className="mt-16 flex flex-col gap-7">
            <div className="flex items-center gap-7">
              <SingleDestinationCard
                bg={destinationBg1}
                title="Alaska"
                height="full"
              />
              <SingleDestinationCard
                bg={destinationBg2}
                title="Canada Ovest"
                height="full"
              />
            </div>
            <div className="flex items-center gap-7">
              <SingleDestinationCard bg={destinationBg3} title="Canada East" />
              <SingleDestinationCard bg={destinationBg4} title="Caraibi" />
            </div>
            <div className="flex items-center gap-7">
              <SingleDestinationCard
                bg={destinationBg5}
                title="Messico - Baja California"
                height="full"
              />
              <SingleDestinationCard
                bg={destinationBg6}
                title="Ovest USA"
                height="full"
              />
              <SingleDestinationCard
                bg={destinationBg7}
                title="Isolepecifico"
                height="full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
