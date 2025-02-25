
import TravelCtaBg from "../../assets/images/travelcta-bg.png"
import { Link } from 'react-router-dom';

const TravelCta = ({title, description, btnText}) => {
  return (
    <section className='pb-[100px]'>
        <div className='container'>
            <div className='w-[1330px] travel-cta relative z-[1] py-[82px] px-[300px] mx-auto bg-cover bg-no-repeat text-center rounded-[18px] overflow-hidden' style={{
                backgroundImage:`url(${TravelCtaBg})`
            }}>
                <h3 className='title--xxl font-editorsNoteNormal text-white'>{title}</h3>
                <p className='text-[18px] text-white mt-6 font-interTight'>{description}</p>
                <Link to={'/'} className='font-inter border-[2px] border-secondary py-[19px] px-[62px] bg-secondary inline-block rounded-[5px] text-sm text-white mt-[68px] duration-200 ease-in-out hover:bg-white hover:border-white hover:text-secondary'>{btnText}</Link>
            </div>
        </div> 
    </section>
  );
};

export default TravelCta;