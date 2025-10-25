import { FaAppStore, FaFacebook, FaGooglePlay, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6";

export default function AppDownload() {
    return (
        <footer className="footer sm:footer-horizontal text-neutral-content items-center justify-center sm:justify-between py-4 gap-y-5 border-y border-white/30">
            <aside className="grid-flow-col items-center">
                <p className="text-xs text-white/60">Experience Star Tech App on your mobile:</p>
                <a href="#" className="border border-white/30 hover:border-white rounded-md p-2"><FaGooglePlay className="size-5" /></a>
                <a href="#" className="border border-white/30 hover:border-white rounded-md p-2"><FaAppStore className="size-5" /></a>
            </aside>
            <nav className="grid-flow-col gap-4 justify-self-center">
                <a href="#"><FaFacebook className="size-5" /></a>
                <a href="#"><FaInstagram className="size-5" /></a>
                <a href="#"><FaYoutube className="size-5" /></a>
                <a href="#"><FaWhatsapp className="size-5" /></a>
            </nav>
        </footer>
    )
}
