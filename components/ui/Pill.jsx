import Link from "next/link";

export default function Pill({ title, sub, icon }) {
    return (
        <Link href="#" className="border border-white/40 hover:border-accent px-5 py-3 rounded-full flex gap-5 max-w-[300px] w-full">
            <div className="flex items-center border-r border-white/40 pr-5">
                {icon}
            </div>
            <div>
                <h4 className="text-xs opacity-60">{sub}</h4>
                <h1 className="text-accent text-lg whitespace-nowrap">{title}</h1>
            </div>
        </Link>
    )
}
