const Description = ({ Description }) => {
  return (
    <section className="text-base lg:text-lg xl:text-xl 2xl:text-[24px] text-[#565656] text-center py-8 sm:py-14 lg:pt-[100px] lg:pb-[80px] font-interTight xl:px-5 2xl:px-14">
      <div
        dangerouslySetInnerHTML={{ __html: Description }}
        className="container"
      ></div>
    </section>
  );
};

export default Description;
