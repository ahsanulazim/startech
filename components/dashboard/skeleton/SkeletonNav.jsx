import Link from "next/link";
import Skeleton from "@/components/ui/skeleton/Skeleton";

export default function SkeletonNav() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-none lg:hidden">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
            </div>
            <div className="mx-2 flex-1 px-2">
                <Skeleton size="h-8 w-full" />
            </div>

            <div className="flex-none flex items-center gap-2">
                <Skeleton size="size-8" />
                <Skeleton size="size-8" />
                <Skeleton size="size-8" />
            </div>
        </div>
    );
}
