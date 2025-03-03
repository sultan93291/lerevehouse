/* eslint-disable react/prop-types */


const AdvanturePlaningCard = ({ item }) => {
  return (
    <div className='font-interTight'>
      <img className='max-w-[134px] h-[100px] mx-auto' src={item?.image} alt={item?.title} />
      <div className='mt-6 text-center'>
        <h3 className='text-[25px] 2xl:text-[32px] font-medium leading-normal text-[#161921]'>{item.title}</h3>
        <p className='2xl:text-[18px] leading-normal mt-[14px]'>{item?.description}</p>
      </div>
    </div>
  );
};

export default AdvanturePlaningCard;