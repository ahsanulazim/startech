import SkeletonNav from "./SkeletonNav";
import Skeleton from "@/components/ui/skeleton/Skeleton";

export default function DashSkeleton() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <SkeletonNav />
                {/* Page content here */}
                Skeleton
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                {/* Sidebar content here */}
                <ul className="menu min-h-full w-80 p-4">
                    {/* list item */}
                    {Array.from({ length: 10 }).map((_, i) =>
                        <li key={i}>
                            <Skeleton size="h-8 w-full my-2" />
                        </li>
                    )}
                </ul>
            </div>
        </div >
    );
}
