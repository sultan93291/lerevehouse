import HeroDestinationGallery from '@/components/Homepage/HeroDestinationGallery';
import HeroDestinationTab from '@/components/Homepage/HeroDestinationTab';
import image1 from '@/assets/images/destination/1.jpg';
import image2 from '@/assets/images/destination/2.png';
import image3 from '@/assets/images/destination/3.jpg';
import image4 from '@/assets/images/destination/4.jpg';
import image5 from '@/assets/images/destination/5.png';
import image6 from '@/assets/images/destination/6.jpg';
import { useState } from 'react';

const HomepageDestinationTabContainer = () => {
  const tabs = [
    {
      id: 1,
      title: 'Alaska',
      contents: [
        {
          id: 'alaska-1',
          destinationTitle: 'Classic Tour Of West Canada',
          price: '4,680.00',
          duration: 11,
          image: image1,
        },
        {
          id: 'alaska-2',
          destinationTitle: 'Safari Trip To Grizzly And Orcas',
          price: '1,670.00',
          duration: 9,
          image: image2,
        },
        {
          id: 'alaska-3',
          destinationTitle: 'Deluxe Guided Tour In Alaska',
          price: '2.750.00',
          duration: 16,
          image: image3,
        },
        {
          id: 'alaska-4',
          destinationTitle: 'West Canada & Charlotte Islands',
          price: '2,775.00',
          duration: 17,
          image: image4,
        },
        {
          id: 'alaska-5',
          destinationTitle: 'Kingdom Of Giants Canada & USA',
          price: '2.750,00',
          duration: 17,
          image: image5,
        },
        {
          id: 'alaska-6',
          destinationTitle: 'All-Inclusive Cruise To Denali',
          price: '2.750.00 ',
          duration: 9,
          image: image6,
        },
      ],
    },
    {
      id: 2,
      title: 'Canada West',
      contents: [
        {
          id: 'canada-west-1',
          destinationTitle: 'Classic Tour Of West Canada',
          price: '4,680.00',
          duration: 11,
          image: image1,
        },
        {
          id: 'canada-west-2',
          destinationTitle: 'Safari Trip To Grizzly And Orcas',
          price: '1,670.00',
          duration: 9,
          image: image2,
        },
        {
          id: 'canada-west-3',
          destinationTitle: 'Deluxe Guided Tour In Alaska',
          price: '2.750.00',
          duration: 16,
          image: image3,
        },
      ],
    },
    {
      id: 3,
      title: 'West USA',
      contents: [
        {
          id: 'west-usa-1',
          destinationTitle: 'Deluxe Guided Tour In Alaska',
          price: '2.750.00',
          duration: 16,
          image: image3,
        },
        {
          id: 'west-usa-2',
          destinationTitle: 'West Canada & Charlotte Islands',
          price: '2,775.00',
          duration: 17,
          image: image4,
        },
        {
          id: 'west-usa-3',
          destinationTitle: 'Kingdom Of Giants Canada & USA',
          price: '2.750,00',
          duration: 17,
          image: image5,
        },
        {
          id: 'west-usa-4',
          destinationTitle: 'All-Inclusive Cruise To Denali',
          price: '2.750.00 ',
          duration: 9,
          image: image6,
        },
      ],
    },
    {
      id: 4,
      title: 'Canada East',
      contents: [
        {
          id: 'canada-east-1',
          destinationTitle: 'Classic Tour Of West Canada',
          price: '4,680.00',
          duration: 11,
          image: image1,
        },
        {
          id: 'canada-east-2',
          destinationTitle: 'Safari Trip To Grizzly And Orcas',
          price: '1,670.00',
          duration: 9,
          image: image2,
        },
        {
          id: 'canada-east-3',
          destinationTitle: 'Deluxe Guided Tour In Alaska',
          price: '2.750.00',
          duration: 16,
          image: image3,
        },
        {
          id: 'canada-east-4',
          destinationTitle: 'West Canada & Charlotte Islands',
          price: '2,775.00',
          duration: 17,
          image: image4,
        },
        {
          id: 'canada-east-5',
          destinationTitle: 'Kingdom Of Giants Canada & USA',
          price: '2.750,00',
          duration: 17,
          image: image5,
        },
        {
          id: 'canada-east-6',
          destinationTitle: 'All-Inclusive Cruise To Denali',
          price: '2.750.00 ',
          duration: 9,
          image: image6,
        },
      ],
    },
    {
      id: 5,
      title: 'Cabirian',
      contents: [
        {
          id: 'cabirian-1',
          destinationTitle: 'West Canada & Charlotte Islands',
          price: '2,775.00',
          duration: 17,
          image: image4,
        },
        {
          id: 'cabirian-2',
          destinationTitle: 'Kingdom Of Giants Canada & USA',
          price: '2.750,00',
          duration: 17,
          image: image5,
        },
      ],
    },
    {
      id: 6,
      title: 'Yukatan and Baja California',
      contents: [
        {
          id: 'yukatan-1',
          destinationTitle: 'Classic Tour Of West Canada',
          price: '4,680.00',
          duration: 11,
          image: image1,
        },
        {
          id: 'yukatan-2',
          destinationTitle: 'Safari Trip To Grizzly And Orcas',
          price: '1,670.00',
          duration: 9,
          image: image2,
        },
        {
          id: 'yukatan-3',
          destinationTitle: 'Deluxe Guided Tour In Alaska',
          price: '2.750.00',
          duration: 16,
          image: image3,
        },
        {
          id: 'yukatan-4',
          destinationTitle: 'All-Inclusive Cruise To Denali',
          price: '2.750.00 ',
          duration: 9,
          image: image6,
        },
      ],
    },
    {
      id: 7,
      title: 'Baja California',
      contents: [
        {
          id: 'baja-1',
          destinationTitle: 'Deluxe Guided Tour In Alaska',
          price: '2.750.00',
          duration: 16,
          image: image3,
        },
        {
          id: 'baja-2',
          destinationTitle: 'West Canada & Charlotte Islands',
          price: '2,775.00',
          duration: 17,
          image: image4,
        },
        {
          id: 'baja-3',
          destinationTitle: 'Kingdom Of Giants Canada & USA',
          price: '2.750,00',
          duration: 17,
          image: image5,
        },
        {
          id: 'baja-4',
          destinationTitle: 'All-Inclusive Cruise To Denali',
          price: '2.750.00 ',
          duration: 9,
          image: image6,
        },
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="mt-5 container mx-auto px-4 lg:px-8 2xl:px-16 3xl:px-32">
      <HeroDestinationTab
        tabs={tabs}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <HeroDestinationGallery tabContents={activeTab?.contents} />
    </div>
  );
};

export default HomepageDestinationTabContainer;
