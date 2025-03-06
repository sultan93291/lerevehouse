import bg from "../../assets/images/destination-bg.jpg"

const TourListDetailsBanner = () => {
    return (
        <section className="h-auto py-14 md:py-0 md:h-[500px] lg:h-[600px] mt-20 xl:mt-24 px-4 sm:px-8 xl:px-0 bg-cover bg-center flex flex-col gap-3 sm:gap-5 lg:gap-10 items-center justify-center"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${bg})`,
                backgroundColor: "lightgray",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            <span className="text-white uppercase bg-[#004265] px-3 sm:px-4 py-1 sm:py-[6px] rounded">Tailormade Journeys</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center xl:text-left font-editorsNoteNormal font-light text-white ">
                Tuscany and Umbria Italy Rural Heartland
            </h1>
            <p className="text-white text-xl">Private journey designed by you</p>
            <p className="text-white text-lg lg:text-xl max-w-[1124px] text-center mx-auto">This illuminating adventure through Umbria and Tuscany takes in some of Italy’s most spectacular landscapes, visiting exquisite wineries, Renaissance hilltop towns and the traditional workshops of master artisans.</p>
            <div className="flex items-center flex-wrap justify-center gap-5 md:gap-10 lg:gap-14">
                <div className="text-center">
                    <p className="text-white mb-1 font-editorsNoteNormal text-xl lg:text-2xl">10 Days</p>
                    <p className="text-white uppercase text-sm sm:text-base">suggested length</p>
                </div>
                <div className="text-center">
                    <p className="text-white mb-1 font-editorsNoteNormal text-xl lg:text-2xl">May-Oct</p>
                    <p className="text-white uppercase text-sm sm:text-base">best time to go</p>
                </div>
                <div className="text-center">
                    <p className="text-white mb-1 font-editorsNoteNormal text-xl lg:text-2xl">$17,995</p>
                    <p className="text-white uppercase text-sm sm:text-base">price from</p>
                </div>
            </div>
        </section>
    );
};

export default TourListDetailsBanner;
