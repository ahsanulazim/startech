import Link from "next/link";

export default function Pill({ title, sub, icon }) {
    return (
        <Link href="#" className="border border-white/60 hover:border-accent p-5 rounded-full flex gap-5">
            <div className="flex items-center border-r border-white/60 pr-5">
                {icon}
            </div>
            <div>
                <h4 className="text-xs opacity-60">{sub}</h4>
                <h1 className="text-accent text-xl">{title}</h1>
            </div>
        </Link>
    )
}
