import Link from "next/link";

export default function Profile({ icon, title, subtitle, href }) {
    return (
        <Link href={href} className="flex items-center gap-x-3">
            <div className=" text-accent text-lg">{icon}</div>
            <div>
                <div className="text-white text-sm">{title}</div>
                <div className="text-white text-[11px] opacity-60">{subtitle}</div>
            </div>
        </Link>
    )
}
