import { Link } from 'react-router-dom';
import TourListDetailsDescriptionItem from './TourListDetailsDescriptionItem';

const TourListDetailsDatesPrices = () => {
  const priceDetailsItems = [
    {
      description:
        'Overnight stay in a double room in 2/3 star hotels and/or lodges',
    },
    {
      description:
        'basic car rental, compact type without comprehensive insurance',
    },
    {
      description:
        'Transport: Transfers, ferries, including the Inside Passage cruise',
    },
    {
      title: 'Single supplement:',
      description: 'quote on request',
    },
    {
      title: 'Children up to 3 years:',
      description: 'free - from 3 to 12 years: price on request:',
    },
  ];
  return (
    <div id='brochure-download'>
      {/* title */}
      <div>
        <h3 className="text-4xl text-center text-primary font-editorsNoteNormal">
          Prices for basic and
          <span className="font-editorsNoteItalic">
            Full Inclusive packages
          </span>
        </h3>
      </div>

      {/* brochure */}
      <div className="w-full flex gap-20 my-10">
        {/* left side */}
        <div className="w-2/3 p-10 bg-[#f4f4f4]">
          {/* title */}
          <div>
            <h5 className="text-4xl font-editorsNoteNormal text-primary">
              Basic package
              <span className="font-editorsNoteItalic"> price €2,850.00</span>
            </h5>
            <p className="text-xl text-text-black font-interTight font-medium mt-4">
              The basic package includes exclusively:
            </p>
          </div>
          {/* items */}
          <div className="mt-5 space-y-4">
            {priceDetailsItems?.map((item, idx) => (
              <TourListDetailsDescriptionItem key={idx} item={item} />
            ))}

            <p className='font-editorsNoteNormal text-primary font-bold text-xl tracking-wide'>Package option with flight included on request</p>
          </div>
        </div>
        {/* right side */}
        <div className="w-1/3 bg-[#f4f4f4] p-16 flex flex-col gap-10 items-center justify-center font-interTight">
          <div className="text-center space-y-2">
            <h3 className="font-medium text-text-black font-editorsNoteNormal text-2xl">
              Speak to a Alaska specialist to start planning your tailor-made
              tour.
            </h3>
            <p className="font-editorsNoteNormal font-semibold text-primary text-3xl">
              +39 351 776 7276{' '}
            </p>
          </div>

          {/* cta buttons */}
          <div className="w-full font-interTight space-y-6">
            <Link className="block text-white text-center py-4 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 w-full bg-primary">
              Make An Enquiry
            </Link>
            <Link className="block text-center bg-transparent text-primary py-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full bg-primary">
              Request A Brouchre
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourListDetailsDatesPrices;
