import Image from "next/image";

//src images
import myob from "../../assets/logo-client/myob.png";
import belimo from "../../assets/logo-client/belimo.png";
import lifeGroups from "../../assets/logo-client/life-groups.png";
import grabyo from "../../assets/logo-client/grabyo.png";
import citrus from "../../assets/logo-client/citrus.png";
import trustly from "../../assets/logo-client/trustly.png";

const Clients = () => {
    return (
        <section className="w-full py-2">
            <div className="flex flex-wrap justify-evenly items-start">
                <div className="w-48 opacity-50 cursor-pointer transition duration-500 ease-in-out hover:opacity-100">
                    <Image
                        src={myob}
                        className="w-full p-10"
                        alt="myob"
                    />
                </div>

                <div className="w-48 opacity-50 cursor-pointer transition duration-500 ease-in-out hover:opacity-100">
                    <Image
                        src={belimo}
                        className="w-full p-10"
                        alt="belimo"
                    />
                </div>

                <div className="w-48 opacity-50 cursor-pointer transition duration-500 ease-in-out hover:opacity-100">
                    <Image
                        src={lifeGroups}
                        className="w-full p-10"
                        alt="lifeGroups"
                    />
                </div>

                <div className="w-48 opacity-50 cursor-pointer transition duration-500 ease-in-out hover:opacity-100">
                    <Image
                        src={grabyo}
                        className="w-full p-10"
                        alt="grabyo"
                    />
                </div>

                <div className="w-48 opacity-50 cursor-pointer transition duration-500 ease-in-out hover:opacity-100">
                    <Image
                        src={citrus}
                        className="w-full p-10"
                        alt="citrus"
                    />
                </div>

                <div className="w-48 opacity-50 cursor-pointer transition duration-500 ease-in-out hover:opacity-100">
                    <Image
                        src={trustly}
                        className="w-full p-10"
                        alt="trustly"
                    />
                </div>
            </div>
        </section>
    );
};

export default Clients;
