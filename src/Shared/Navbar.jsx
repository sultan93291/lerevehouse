import BottomNavbar from '@/components/common/Navbar/BottomNavbar';
import TopNavbar from '@/components/common/Navbar/TopNavbar';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-40'>
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
};

export default Navbar;
