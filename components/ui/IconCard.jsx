import Link from "next/link";

export default function IconCard({ icon, name, href }) {
    return (
        <Link href={href} className="bg-base-100 shadow-sm flex flex-col justify-center items-center gap-2 p-3 rounded-lg hover:text-accent">
            <img className="max-sm:w-8" src={icon} alt={name} />
            <p className="max-sm:text-xs text-sm text-center">{name}</p>
        </Link>
    )
}
