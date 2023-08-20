import Image from 'next/image';
import banner from '../../assets/bg/hero-bg.jpg';

const Banner = () => {
    return (
        <section className="relative w-full h-screen pt-[20rem] bg-black before:bg-opacity-10 before:z-20">
            <Image
                src={banner}
                className="absolute object-cover w-full h-full inset-0 z-10 bg-black opacity-60"
                alt="hero"
            />

            <div className="container m-auto leading-10">
                <div className="relative flex flex-wrap text-white z-20 md:ml-[5%]">
                    <div className="w-full max-w-full mb-6 px-4">
                        <h1 className="pb-2 text-5xl">welcome to append website</h1>
                        <p className="text-xl">We are team of talented designers making websites</p>
                    </div>

                    <form className="relative flex w-full px-4 md:w-fit">
                        <input type="email" name="email" className="relative w-full py-2 pl-4 rounded-md md:w-[23rem]" placeholder="enter email address" />
                        <input type="submit" name="button" className="absolute right-6 top-[16%] py-1.3 px-5 bg-red-500 rounded-md" value="Sign up" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Banner;
