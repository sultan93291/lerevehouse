
import TravelCtaBg from "../../assets/images/travelcta-bg.png"
import { Link } from 'react-router-dom';

const TravelCta = ({ title, description, btnText }) => {
  return (
    <section className='pb-10 sm:pb-20 2xl:pb-[100px]'>
      <div className='container'>
        <div className='max-w-[1330px] travel-cta relative z-[1] py-10 xs:py-16 sm:py-[82px] px-7 xs:px-10 sm:px-16 md:px-28 lg:px-40 xl:px-[300px] mx-auto bg-cover bg-no-repeat text-center rounded-[18px] overflow-hidden' style={{
          backgroundImage: `url(${TravelCtaBg})`
        }}>
          <h3 className='title--xxl font-editorsNoteNormal text-white'>{title}</h3>
          <p className='sm:text-[18px] text-white mt-5 sm:mt-6 font-interTight'>{description}</p>
          <Link to={'/'} className='font-inter border-[2px] border-secondary py-3 lg:py-[19px] px-10 lg:px-[62px] bg-secondary inline-block rounded-[5px] text-sm text-white mt-10 lg:mt-[68px] duration-200 ease-in-out hover:bg-white hover:border-white hover:text-secondary'>{btnText}</Link>
        </div>
      </div>
    </section>
  );
};

export default TravelCta;