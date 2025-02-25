import CommonHeroBanner from '@/components/common/HeroBanner/CommonHeroBanner';
import bg from '@/assets/images/all-tourist-guide-details-bg.jpg';
import TouristGuideDetailsTabs from '@/components/TouristGuideDetails/TouristGuideDetailsTabs';
import bg1 from '../../assets/images/tour-guide-details/1.png';
import bg2 from '../../assets/images/tour-guide-details/2.jpg';
import bg3 from '../../assets/images/tour-guide-details/3.jpg';
import bg4 from '../../assets/images/tour-guide-details/4.jpg';
import TouristGuideTabContents from '@/components/TouristGuideDetails/TouristGuideTabContents';
import ThingsToDoSection from '@/components/TouristGuideDetails/ThingsToDoSection';
import tour1 from '@/assets/images/all-tourist-guide/1.jpg';
import tour2 from '@/assets/images/all-tourist-guide/2.jpg';
import tour3 from '@/assets/images/all-tourist-guide/3.jpg';
import Marquee from 'react-fast-marquee';
import AllTouristGuideCard from '@/components/common/Cards/AllTouristGuideCard';
import { useParams } from 'react-router-dom';

const AllTouristGuideDetails = () => {
  const { title } = useParams();
  const sectionTabs = [
    {
      label: 'Highlights',
      link: 'highlights',
    },
    {
      label: 'Best time to visit',
      link: 'best-time-to-visit',
    },
    {
      label: 'How to get ',
      link: 'how-to-get',
    },
    {
      label: 'Things to do',
      link: 'things-to-do',
    },
    {
      label: 'Tips for visit',
      link: 'tips-for-visit',
    },
    {
      label: 'Where to stay',
      link: 'where-to-stay',
    },
  ];

  const touristTabContents = [
    {
      id: 'highlights',
      align: 'left',
      title: 'About Denail National Park',
      image: bg1,
      descriptions: [
        'Denali National Park, located in the heart of Alaska, is a breathtaking wilderness that spans over six million acres of rugged terrain, dense forests, and expansive tundra. The park is home to North America’s tallest peak, Denali, which towers at an awe-inspiring 20,310 feet and serves as the centerpiece of this natural wonderland. Known for its diverse wildlife, the park is a haven for iconic species such as grizzly bears, moose, caribou, wolves, and Dall sheep, offering unparalleled opportunities for wildlife viewing.',
        'Visitors to Denali can explore its stunning landscapes through a variety of activities, including hiking, camping, and scenic drives along the 92-mile Denali Park Road. The road offers access to some of the most remote and pristine areas of the park, with private vehicle access limited to preserve its untouched beauty. In addition to its natural attractions, the park features cultural and educational experiences, such as ranger-led programs and visits to the sled dog kennels, which highlight the history and traditions of the area.',
        'Whether you’re an adventure enthusiast seeking backcountry solitude or a traveler looking for awe-inspiring views and wildlife encounters, Denali National Park promises an unforgettable Alaskan experience. Its ever-changing seasons and landscapes make it a destination worth visiting year-round.',
      ],
    },
    {
      id: 'best-time-to-visit',
      align: 'right',
      title: 'Best Time To Visit Denail National Park',
      image: bg2,
      descriptions: [
        "The best time to visit Denali National Park is from late May to early September, when the park is fully accessible, and weather conditions are most favorable. During this period, the park's shuttle buses operate, providing access to interior areas of the park that are otherwise closed to private vehicles. Summer also offers the best opportunities for hiking, wildlife viewing, and clear views of Denali, the tallest peak in North America.",
        "In June and July, the days are long with nearly 20 hours of daylight, making it perfect for exploring the park's vast wilderness. August and early September bring cooler weather, fewer crowds, and a chance to see the tundra turn vibrant shades of red and gold. For those interested in winter activities like cross-country skiing or snowshoeing, the park is open year-round, though services and accessibility are limited. The optimal time largely depends on whether you prioritize comfortable weather, abundant wildlife, or solitude.",
      ],
    },
    {
      id: 'how-to-get',
      align: 'left',
      title: 'How To Get  Denail National Park',
      image: bg3,
      descriptions: [
        'Getting to Denali National Park is straightforward and offers several options, depending on your starting point and preferred mode of travel. Most visitors begin their journey in Anchorage or Fairbanks, Alaska. From Anchorage, you can drive approximately 240 miles (6 hours) on the scenic Parks Highway to the park entrance, or take the Alaska Railroad for a picturesque train ride. From Fairbanks, the park is about 120 miles (2.5 hours by car), and the Alaska Railroad also offers connections from there.',
        "For those without a car, shuttle buses and guided tours operate from both cities during the summer season. Once at the park, private vehicles are only allowed on the first 15 miles of the park road; beyond that, you'll need to use the park's shuttle bus system or guided tours to explore further. Accessing Denali National Park is part of the adventure, offering stunning views of Alaska’s rugged beauty along the way.",
      ],
    },
    {
      id: 'things-to-do',
    },
    {
      id: 'tips-for-visit',
      align: 'right',
      title: 'Tips for visit  Denail National Park',
      image: bg3,
      descriptions: [
        'Visiting Denali National Park is a rewarding experience, and a bit of preparation can make your trip even better. Plan your visit well in advance, especially during the busy summer months, to secure shuttle bus tickets, campgrounds, or accommodations. Since the weather in Alaska can be unpredictable, dressing in layers and bringing waterproof gear is essential for staying comfortable.',
        'Be sure to pack essentials like snacks, water, sunscreen, bug spray, and a first-aid kit, as supplies are limited within the park. Wildlife is abundant, so maintain a safe distance and use binoculars or zoom lenses for a closer look. Cell service and Wi-Fi are scarce, so download maps and information before arriving. For those venturing into the backcountry, permits and an orientation session are required to ensure safety. ',
        'Starting your day early helps avoid crowds, increases your chances of spotting wildlife, and allows you to make the most of Denali’s long daylight hours in summer. Finally, follow Leave No Trace principles to help preserve the park’s pristine environment for future visitors. ',
      ],
    },
    {
      id: 'where-to-stay',
      align: 'left',
      title: 'Where To Stay Denail National Park',
      image: bg4,
      descriptions: [
        'Denali National Park offers a variety of accommodation options, both within and near the park, catering to different budgets and preferences. Inside the park, visitors can stay at one of the park’s six campgrounds, such as Riley Creek or Teklanika River Campgrounds, which provide a closer connection to nature but have limited facilities. For those seeking a more rustic experience, backcountry camping is also available with a permit.',
        "Just outside the park entrance, you'll find a range of lodges, cabins, and hotels offering more comfortable amenities. Popular options include Denali Bluffs Hotel, Grande Denali Lodge, and McKinley Chalet Resort, which provide stunning views and easy access to park activities. Budget travelers can opt for hostels or motels in nearby towns like Healy. For a unique experience, several remote wilderness lodges deep in the park, such as Camp Denali or ",
        'Kantishna Roadhouse, offer all-inclusive stays with guided activities and unparalleled seclusion. Whether you prefer camping under the stars or relaxing in a cozy lodge, there’s an option to suit every type of traveler visiting Denali. ',
      ],
    },
  ];

  const allTours = [
    {
      image: tour1,
      title: 'Denali National Park',
    },
    {
      image: tour2,
      title: 'Glacier Bay National Park',
    },
    {
      image: tour3,
      title: 'Anchorage',
    },
    {
      image: tour1,
      title: 'Denali National Park',
    },
    {
      image: tour2,
      title: 'Glacier Bay National Park',
    },
    {
      image: tour3,
      title: 'Anchorage',
    },
  ];
  return (
    <div>
      {/* Hero  */}
      <CommonHeroBanner bg={bg} title={title}   />

      {/* Tour Guide Tabs */}
      <TouristGuideDetailsTabs sectionTabs={sectionTabs} />

      <section className="container mx-auto my-16 flex flex-col gap-28">
        {/* Highlights */}
        {touristTabContents?.map((item) =>
          item?.id == 'things-to-do' ? (
            <ThingsToDoSection key={item?.id} id={item?.id} />
          ) : (
            <TouristGuideTabContents key={item?.id} content={item} />
          )
        )}
      </section>
      {/* featured guide */}
      <section className="my-16">
        {/* title */}
        <div className="text-center space-y-4">
          <h2 className="font-editorsNoteNormal text-3xl font-semibold text-center">
            Featured Guide
          </h2>
          <p className="font-interTight text-lg w-4/5 text-text-gray mx-auto">
            Curated by our team of luxury travel specialists, these guides are
            packed with insider knowledge and inspiration to help you discover
            the world&lsquo;s most exquisite destinations. From hidden gems to
            iconic landmarks, we provide tailored recommendations, ensuring your
            journey is nothing short of extraordinary.
          </p>
        </div>

        {/* marquee */}
        <Marquee pauseOnHover={true} autoFill={true} className="my-10">
          {allTours?.map((tour, idx) => (
            <AllTouristGuideCard
              key={idx}
              tour={tour}
              className="w-96 aspect-[52/67] mr-6"
            />
          ))}
        </Marquee>
      </section>
    </div>
  );
};

export default AllTouristGuideDetails;
