import Image from 'next/image';
import Link from "next/link";

const Header = () => {
    return (
        <nav className="fixed flex items-center justify-between px-8 w-full h-20 m-auto z-20">
            <div className="d-flex">
                <Image
                    width={150}
                    height={150}
                    src="/append-logo.png"
                    alt="logo"
                />
            </div>
            <ul className="hidden lg:flex">
                <li className="pr-10 text-white">
                    <Link href="#">Home</Link>
                </li>
                <li className="pr-10 text-white">
                    <Link href="#">About</Link>
                </li>
                <li className="pr-10 text-white">
                    <Link href="#">Services</Link>
                </li>
                <li className="pr-10 text-white">
                    <Link href="#">Portfolio</Link>
                </li>
                <li className="pr-10 text-white">
                    <Link href="#">Team</Link>
                </li>
                <li className="text-white">
                    <Link href="#">Contact</Link>
                </li>
            </ul>

            <div>
                <Link href="#" className="bg-red-500 rounded py-2 px-3 text-white">Get started</Link>
            </div>
        </nav>
    );
};

export default Header;
