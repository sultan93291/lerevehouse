const Description = ({ Description }) => {
  return (
    <section className="py-8 sm:py-14 lg:pt-[100px] lg:pb-[80px] xl:px-5 2xl:px-14">
      <div
        className="container space-y-10 text-base lg:text-lg xl:text-xl 2xl:text-[24px] 
                 text-[#565656] text-center font-interTight 
                 leading-loose tracking-wider"
        dangerouslySetInnerHTML={{ __html: Description }}
      />
    </section>
  );
};

export default Description;
