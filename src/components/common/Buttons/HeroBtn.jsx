import { Link } from 'react-router-dom';

const HeroBtn = () => {
    return (
        <Link to={'/'} className='bg-secondary px-7 py-3 font-interTight text-white font-semibold transition-all duration-300 hover:bg-white border border-secondary hover:text-secondary'>
            Plan you trip
        </Link>
    );
};

export default HeroBtn;