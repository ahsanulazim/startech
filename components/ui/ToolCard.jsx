import Link from "next/link";

export default function ToolCard({ tool, icon }) {
    return (
        <Link href={tool.href} className="flex gap-x-3 xs:gap-x-5 bg-base-100 p-2 xs:p-4 w-full justify-center xs:justify-normal items-center rounded-lg shadow-sm">
            <div className="avatar avatar-placeholder">
                <div className="bg-accent text-neutral-content w-8 xs:w-12 rounded-full">
                    {icon}
                </div>
            </div>
            <div>
                <h2 className="text-sm xs:text-lg font-semibold">{tool.name}</h2>
                <p className="text-black/60 hidden lg:block">{tool.sub}</p>
            </div>
        </Link>
    )
}
