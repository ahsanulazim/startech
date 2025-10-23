import Pill from "../ui/Pill";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-main text-white">
            <div className="footer place-items-stretch grid-cols-5 justify-between px-5 py-10 max-w-xxl mx-auto">
                <nav className="place-items-stretch">
                    <h6 className="footer-title">Support</h6>
                    <Pill title={16793} sub={"9 AM - 8 PM"} icon={<FaPhone />} />
                    <Pill title={"Find Our Stores"} sub={"Store Locator"} icon={<FaLocationDot />} />
                </nav>
                <div className="col-span-3 place-items-stretch">
                    <h6 className="footer-title">About Us</h6>
                    <div className="grid grid-cols-3">
                        <nav className="grid place-items-start gap-y-2">
                            <a className="link link-hover">Affiliate Program</a>
                            <a className="link link-hover">Online Delivery</a>
                            <a className="link link-hover">Return and Refund Policy</a>
                            <a className="link link-hover">Blog</a>
                        </nav>
                        <nav className="grid place-items-start gap-y-2">

                            <a className="link link-hover">Emi Terms</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Star Point policy</a>
                            <a className="link link-hover">Contact Us</a>
                        </nav>
                        <nav className="grid place-items-start gap-y-2">

                            <a className="link link-hover">About Us</a>
                            <a className="link link-hover">Terms and Conditions</a>
                            <a className="link link-hover">Career</a>
                            <a className="link link-hover">Brands</a>
                        </nav>
                    </div>
                </div>
                <nav>
                    <h6 className="footer-title">Stay Connected</h6>
                    <p><span className="opacity-60">Star Tech Ltd</span><br />Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka 1000</p>
                    <p><span className="opacity-60">Email:</span><br /><a href="mailto:webteam@startechbd.com" className="text-accent">webteam@startechbd.com</a> </p>
                </nav>

            </div>
        </footer>
    )
}
