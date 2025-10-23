import Link from "next/link";
import Drawer from "./Drawer";
import Search from "../ui/Search";
import { FaFireAlt, FaSmile, FaUser } from "react-icons/fa";
import Profile from "../ui/Profile";

export default function Navbar() {

    const impLinks = [
        { id: 1, title: "Offers", subtitle: "Latest Deals", href: "#", icon: <FaFireAlt /> },
        { id: 2, title: "Happy Hours", subtitle: "Special Deals", href: "#", icon: <FaSmile /> },
        { id: 3, title: "Account", subtitle: "Login or Register", href: "#", icon: <FaUser /> },
    ];

    return (
        <div className="drawer">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <header className=" bg-main">
                    <div className="navbar max-w-xxl mx-auto gap-x-5">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>

                            </label>
                        </div>
                        <Link href="/" className="hidden lg:block"><img className="w-full max-w-28" src="/startech.svg" alt="startech" /></Link>
                        <div className="navbar-center lg:hidden flex">
                            <Link href="/"><img className="w-full max-w-28" src="/startech.svg" alt="startech" /></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex grow">
                            <Search />
                        </div>
                        <div className="navbar-end w-auto">
                            <div className="flex gap-x-5">
                                {impLinks.map((links) => (
                                    <Profile key={links.id} icon={links.icon} title={links.title} subtitle={links.subtitle} href={links.href} />
                                ))}
                            </div>
                            <Link href="#" className=" ml-5"><button className="btn animatedBtn">PC Builder</button></Link>
                        </div>
                    </div>
                </header>
            </div>
            <Drawer />
        </div>
    )
}
