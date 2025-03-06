import watch from "../../assets/images/watch.png";
import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import a4 from "../../assets/images/a4.png";

const WaterActivity = () => {
    return (
        <div className='py-10'>
            <h3 className="text-2xl mb-7 sm:mb-10 xl:text-4xl font-editorsNoteNormal text-primary text-center">
                See Water Activities by Yourself
            </h3>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                <div className="bg-[#F1F1F1] rounded">
                    <img src={a1} alt="" className="h-[250px] w-full object-cover" />
                    <h3 className="p-5 pb-0 text-lg font-medium">The Best Diving Spots in Vancouver </h3>
                    <div className="flex p-5 pt-3 sm:pt-5 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={watch} alt="" />
                            <p className="sm:text-lg">2h 30m+</p>
                        </div>
                        <button className="bg-[#004265] text-white px-3 sm:px-5 uppercase py-1 sm:py-2 rounded-[2px]">view all</button>
                    </div>
                </div>
                <div className="bg-[#F1F1F1] rounded">
                    <img src={a2} alt="" className="h-[250px] w-full object-cover" />
                    <h3 className="p-5 pb-0 text-lg font-medium">Indian Arm and Granite Falls Zodiac Boat Tour</h3>
                    <div className="flex p-5 pt-3 sm:pt-5 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={watch} alt="" />
                            <p className="sm:text-lg">2h 30m+</p>
                        </div>
                        <button className="bg-[#004265] text-white px-3 sm:px-5 uppercase py-1 sm:py-2 rounded-[2px]">view all</button>
                    </div>
                </div>
                <div className="bg-[#F1F1F1] rounded">
                    <img src={a3} alt="" className="h-[250px] w-full object-cover" />
                    <h3 className="p-5 pb-0 text-lg font-medium">Scuba Boat Dive in Horseshoe Bay</h3>
                    <div className="flex p-5 pt-3 sm:pt-5 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={watch} alt="" />
                            <p className="sm:text-lg">2h 30m+</p>
                        </div>
                        <button className="bg-[#004265] text-white px-3 sm:px-5 uppercase py-1 sm:py-2 rounded-[2px]">view all</button>
                    </div>
                </div>
                <div className="bg-[#F1F1F1] rounded">
                    <img src={a4} alt="" className="h-[250px] w-full object-cover" />
                    <h3 className="p-5 pb-0 text-lg font-medium">The Best Diving Spots in Vancouver </h3>
                    <div className="flex p-5 pt-3 sm:pt-5 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src={watch} alt="" />
                            <p className="sm:text-lg">2h 30m+</p>
                        </div>
                        <button className="bg-[#004265] text-white px-3 sm:px-5 uppercase py-1 sm:py-2 rounded-[2px]">view all</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterActivity;