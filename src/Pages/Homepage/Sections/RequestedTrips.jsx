import bg1 from '@/assets/images/bg1.png';
import bg2 from '@/assets/images/bg2.png';
import bg3 from '@/assets/images/bg3.png';
import bg4 from '@/assets/images/bg4.png';
import bg from '@/assets/images/bg.png';
import { Link } from 'react-router-dom';
import RequestedTripCard from '@/components/common/Cards/RequestedTripCard';
const RequestedTrips = () => {
  const requestedTripsInfo = [
    {
      id: 1,
      image: bg1,
      type: 'horizontal',
      title: 'Western Canada Tour ',
      bgColor: '#002B4D',
      description:
        'Experience the breathtaking landscapes of Western Canada, from majestic mountains to serene lakes, with unforgettable adventures and cultural highlights.',
    },
    {
      id: 2,
      image: bg2,
      type: 'vertical',
      bgColor: '#455C01',
      title: 'Grizzlies & Orcas of the West Coast  ',
      description:
        'Witness majestic grizzlies and orcas in their natural habitats on the West Coast, blending wildlife encounters with stunning scenery.',
    },
    {
      id: 3,
      image: bg3,
      type: 'vertical',
      bgColor: '#271000',
      title: 'Mini-Group Western Canada Tour  ',
      description:
        'Join a mini-group adventure through Western Canada, exploring scenic landscapes, iconic landmarks, and local culture for an intimate experience.',
    },
    {
      id: 4,
      image: bg4,
      type: 'horizontal',
      bgColor: '#C54F05',
      title: 'Kayak Adventure Trip  ',
      description:
        'Create unforgettable memories with your family on a trip tailored for all ages, featuring fun, relaxation, and adventure. ',
    },
  ];
  return (
    <section className="bg-[#E8F3FA] flex flex-col   py-10 2xl:py-20">
      {/* title */}
      <div>
        <h2 className="text-center  text-3xl 2xl:text-5xl font-editorsNoteNormal text-primary">
          Here is a <span className="text-secondary">List of</span> Our Most{" "}
          <br /> Requested Trips
        </h2>
      </div>

      {/* cards */}
      <div className="mt-8 2xl:mt-16 grid grid-cols-6 gap-6 container mx-auto px-4 lg:px-8 2xl:px-16 3xl:px-32">
        {requestedTripsInfo?.map((item, idx) => (
          <RequestedTripCard idx={idx} key={item?.id} item={item} />
        ))}

        <div
          className="h-[750px] hidden   items-end col-span-2 "
          style={{
            background: ` url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-[250px] bg-[#455C01] font-interTight flex justify-center text-white relative">
            <div className="px-8 py-6 relative z-10 space-y-3">
              <h3 className="text-xl">Grizzlies & Orcas of the West Coast </h3>
              <p className="h-16">
                Witness majestic grizzlies and orcas in their natural habitats
                on the West Coast, blending wildlife encounters with stunning
                scenery.
              </p>

              <Link to="/" className="underline block pt-4">
                Discover More
              </Link>
            </div>
            <div className="h-full w-full absolute inset-0">
              <img className="h-full w-full object-cover" src={bg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestedTrips;
