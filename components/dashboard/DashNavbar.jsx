import Link from "next/link";
import Themeing from "./Themeing";
import ProfileDropdown from "./ProfileDropdown";
import { FaRegBell, FaUser } from "react-icons/fa6";

export default function DashNavbar() {
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
      <Link href="/dashboard" className="mx-2 flex-1 px-2">
        Dashboard
      </Link>

      <div className="flex-none">
        <Themeing />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaRegBell className="size-5" />
              <span className="badge badge-warning badge-sm indicator-item">
                8
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle avatar avatar-placeholder"
          >
            <div className=" w-12 rounded-full">
              <FaUser />
            </div>
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}
