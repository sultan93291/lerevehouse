const FestivalsCalendar = ({data}) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: data }}
      className="space-y-5 md:space-y-10 what-to-eat "
    ></div>
  );
};

export default FestivalsCalendar;
