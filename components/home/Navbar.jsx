import Link from "next/link";
import Drawer from "./Drawer";
import Search from "../ui/Search";
import { FaSearch } from "react-icons/fa";
import Menu from "./Menu";
import Footer from "./Footer";
import BottomNav from "../ui/BottomNav";
import Basket from "../shop/Basket";
import ImportantLinks from "../ui/ImportantLinks";

export default function Navbar({ children }) {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <header className=" bg-main max-lg:sticky max-lg:top-0 z-10">
          <div className="navbar max-w-xxl mx-auto gap-x-5">
            <div className="w-1/2 lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </label>
            </div>
            <Link href="/" className="">
              <img
                className="w-full min-w-20 max-w-28"
                src="/startech.svg"
                alt="startech"
              />
            </Link>
            <div className="navbar-center hidden lg:flex grow">
              <Search />
            </div>
            <div className="navbar-end lg:w-auto">
              <ImportantLinks />
              <Link href="#" className="hidden lg:block ml-5">
                <button className="btn animatedBtn">PC Builder</button>
              </Link>
              <div className="join lg:hidden text-white gap-x-5">
                <button>
                  <FaSearch />
                </button>
                <Basket className="text-xl" indicator={false} />
              </div>
            </div>
          </div>
        </header>
        <Menu />
        {children}
        <Footer />
        <BottomNav />
      </div>
      <Drawer />
    </div>
  );
}
