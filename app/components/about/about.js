import Link from "next/link";

//icon class
import { BsArrowRight } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { BsClipboardPulse } from "react-icons/bs";
import { BsCommand } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

const About = () => {
    return (
            <section className="w-full bg-gray-100 py-16">
            <div className="container flex flex-wrap items-baseline mx-auto px-10 sm:px-16 xl:pl-16">
                <div className="container w-full text-justify xl:w-2/5 xl:mr-5">
                    <p className="w-fit py-2 px-4 font-medium rounded-md text-red-600 bg-red-100">About Us</p>
                    <h2 className="text-3xl font-bold py-3 ">When the leader of the free criticizes</h2>
                    <p className='leading-5'>They are. Who are we taking the pain of the pain of the time of the other, and when it prevents the most important. For the rejection of the less and of things here is not. The words which, when he had, because the greater the right to. Of course, no one who is to be welcomed, they fall to the pleasure of the times of the gods, they are independent.</p>
                    <Link href="#">
                        <button className="group flex mt-4 py-2 px-4 items-end rounded text-white bg-red-500">
                            <span className="text-[1.2rem] pr-1">Read More</span>
                            <BsArrowRight className="w-6 h-6 transition duration-500 ease-in-out group-hover:translate-x-1.5" />
                        </button>
                    </Link>
                </div>

                <div className="w-full xl:w-[58%]">
                    <div className="flex flex-wrap flex-row justify-between xl:justify-center">
                        <div className="group w-full py-12 mt-3 mr-2 px-10 bg-white rounded-xl shadow-lg md:w-[48%] xl:w-5/12 xl:m-3">
                            <span className="block w-fit p-6 rounded-full bg-red-100 transition duration-700 ease-in-out group-hover:bg-red-600">
                                <BsBuildings className="text-red-500 text-3xl group-hover:text-white" />
                            </span>
                            <h2 className="text-2xl pt-6 pb-2 font-bold">His late</h2>
                            <p className="text-base leading-6">This is a great re-establishment or any consumer services that all consumer pleasure</p>
                        </div>

                        <div className="group w-full p-12 mt-3 mr-0 bg-white rounded-xl shadow-lg md:-translate-y-10 md:w-[48%] xl:w-5/12 xl:m-3">
                            <span className="block w-fit p-6 rounded-full bg-red-100 transition duration-700 ease-in-out group-hover:bg-red-600">
                                <BsClipboardPulse className="text-red-500 text-3xl group-hover:text-white" />
                            </span>
                            <h2 className="text-2xl pt-6 pb-2 font-bold">Things open</h2>
                            <p className="text-base leading-6">However, often of the mind, and, or to reject the fault to do. Things often have pleasure</p>
                        </div>

                        <div className="group w-full py-12 mt-3 mr-2 px-10 bg-white rounded-xl shadow-lg md:w-[48%] xl:w-5/12 xl:m-3">
                            <span className="block w-fit p-6 rounded-full bg-red-100 transition duration-700 ease-in-out group-hover:bg-red-600">
                                <BsCommand className="text-red-500 text-3xl group-hover:text-white" />
                            </span>
                            <h2 className="text-2xl pt-6 pb-2 font-bold">excuse all</h2>
                            <p className="text-base leading-6">All the blame but. Recusing the things that we may be able. The consequences of corruption</p>
                        </div>

                        <div className="group w-full p-12 mt-3 mr-0 bg-white rounded-xl shadow-lg md:-translate-y-10 md:w-[48%] xl:w-5/12 xl:m-3">
                            <span className="block w-fit p-6 rounded-full bg-red-100 transition duration-700 ease-in-out group-hover:bg-red-600">
                                <BsGraphUpArrow className="text-red-500 text-3xl group-hover:text-white" />
                            </span>
                            <h2 className="text-2xl pt-6 pb-2 font-bold">Delares wise</h2>
                            <p className="text-base leading-6">They are less, and the pain of the pleasure of our God. Rejecting the advantage of choosing all the lading</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
