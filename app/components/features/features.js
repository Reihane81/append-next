import Image from "next/image";
import Link from "next/link";

//Images
import featLight1 from "../../assets/bg/features-light-1.jpg";
import featLight2 from "../../assets/bg/features-light-2.jpg";

const Features = () => {
    return (
        <section className="mt-32">
            <div className="container text-center mx-auto">
                <h2 className="relative text-4xl mx-auto font-bold
                    before:inline-block before:bg-red-500 before:w-12 before:h-0.5 before:m-2 before:mr-3.5
                    after:m-2 after:ml-3.5 after:inline-block after:bg-red-500 after:w-12 after:h-0.5">
                    Features
                </h2>
                <p className="text-base pt-2 text-slate-700">His needs result from something he wants to escape from</p>
            </div>

            <div className="container flex w-full w-max-full">
                <div className="flex flex-wrap items-center justify-center pt-14 flex-row max-[900px]:flex-col">
                    <div className="w-[88%] relative pr-7 lg:w-2/5">
                        <h3 className="text-2xl font-bold">They provide for older bodies at times</h3>
                        <p className="mt-2 text-justify leading-[1.4rem] text-slate-700">
                            I do not work at all except to get some advantage out of it.
                            Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair
                            from the pain in the hope that there is no breeding. Unless they are blinded by lust,
                            they will not come out.
                        </p>
                        <Link href="#" className="block mt-5 w-fit bg-red-500 rounded py-3 px-8 text-white">Get Started</Link>
                    </div>

                    <div className="w-[88%] relative grid mt-5 lg:w-2/4 lg:mt-0" style={{gridTemplateColumns: "repeat(12, 1fr)"}}>
                        <Image src={featLight1} className="w-full border-8 border-white z-20" style={{gridRow: "1", gridColumn: "1/span 8", marginTop: "20%", boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)"}} alt="image" />
                        <Image src={featLight2} className="w-full border-8 border-white z-10" style={{gridRow: "1", gridColumn: "4/-1", boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)"}} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
