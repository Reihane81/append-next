import Image from "next/image";

//images
import stats from "../../assets/bg/stats-bg.jpg";

const Stats = () => {
    return (
        <section className="relative w-full h-auto pt-14 bg-black before:bg-opacity-10">
            <Image src={stats} className="absolute w-full h-full inset-0 opacity-40 object-cover" alt="stats" />

            <div className="w-3/4 container mx-auto lg:w-4/5">
                <div className="relative flex flex-wrap justify-around flex-col md:flex-row">
                    <div className="w-fit pb-12 text-center font-semibold mx-auto md:w-6/12 lg:w-3/12 lg:pt-24 lg:pb-28">
                        <p className="text-5xl text-white">232</p>
                        <span className="pt-5 text-lg text-gray-300">client</span>
                    </div>

                    <div className="w-fit pb-12 text-center font-semibold mx-auto md:w-6/12 lg:w-3/12 lg:pt-24 lg:pb-28">
                        <p className="text-5xl text-white">521</p>
                        <span className="pt-5 text-lg text-gray-300">projects</span>
                    </div>

                    <div className="w-fit pb-12 text-center font-semibold mx-auto md:w-6/12 lg:w-3/12 lg:pt-24 lg:pb-28">
                        <p className="text-5xl text-white">1540</p>
                        <span className="pt-5 text-lg text-gray-300">hours of support</span>
                    </div>

                    <div className="w-fit pb-12 text-center font-semibold mx-auto md:w-6/12 lg:w-3/12 lg:pt-24 lg:pb-28">
                        <p className="text-5xl text-white">20</p>
                        <span className="pt-5 text-lg text-gray-300">workers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
