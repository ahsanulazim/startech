import Pill from "../ui/Pill";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import AppDownload from "./AppDownload";
import Copyright from "./Copyright";

export default function Footer() {

    const linkStyle = "text-xs text-white/60";

    return (
        <footer className="bg-main text-white">
            <div className="max-w-xxl mx-auto grid xs:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-5 gap-10 py-10 px-3 text-center justify-center xs:justify-between xs:text-left">
                <nav className=" md:order-1">
                    <h6 className="mb-5">Support</h6>
                    <div className="flex flex-col gap-y-5 items-center xs:items-start">
                        <Pill title={16793} sub={"9 AM - 8 PM"} icon={<FaPhone />} />
                        <Pill title={"Find Our Stores"} sub={"Store Locator"} icon={<FaLocationDot />} />
                    </div>
                </nav>
                <div className="xs:col-span-2 xxl:col-span-3 xs:order-3 lg:order-2">
                    <h6 className="mb-5">About Us</h6>
                    <ul className="flex flex-wrap justify-center xs:grid xs:grid-cols-2 xxl:grid-cols-3 gap-x-6 gap-y-5">
                        <li className={`${linkStyle} hover:text-accent cursor-pointer xs:w-[60%] xs:inline-block`}>Affiliate Program</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Emi Terms</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>About Us</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Online Delivery</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Privacy policy</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Terms and Conditions</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Return and Refund Policy</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Star Point policy</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Career</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Blog</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Contact Us</li>
                        <li className={`${linkStyle} hover:text-accent cursor-pointer list-disc xs:w-[60%] xs:inline-block`}>Brands</li>
                    </ul>
                </div>
                <nav className="xs:order-2 lg:order-3">
                    <h6 className="mb-5">Stay Connected</h6>
                    <h3 className="text-xs mb-3.5">Star Tech Ltd</h3>
                    <p className={`${linkStyle} mb-5 leading-5`}>Head Office: 28 Kazi Nazrul Islam Ave, Navana Zohura Square, Dhaka 1000</p>
                    <p><span className="text-xs opacity-60">Email:</span><br /><a href="mailto:webteam@startechbd.com" className="text-xs text-accent">webteam@startechbd.com</a> </p>
                </nav>

            </div>
            <div className="max-w-xxl mx-auto px-3">
                <AppDownload />
                <Copyright />
            </div>
        </footer>
    )
}
