import menus from "@/json/menu.json";
import Link from "next/link";

export default function Menu() {
  const midPoint = Math.ceil(menus.length / 2);

  return (
    <nav className="w-full shadow-sm hidden lg:block sticky top-0 z-10 bg-base-100">
      <ul className="menu menu-horizontal flex w-full max-w-xxl mx-auto justify-between py-0">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={`dropdown ${
              menu.id > midPoint ? "dropdown-end " : ""
            }dropdown-hover`}
          >
            <Link
              tabIndex={0}
              role="button"
              href={menu.href}
              className={`px-0 py-3 font-semibold hover:text-accent hover:bg-transparent`}
            >
              {menu.name}
            </Link>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 z-1 w-52 px-0 py-1 shadow-sm m-0 *:hover:bg-accent *:hover:text-white border-t-4 border-t-accent"
            >
              {menu.submenu.map((subItem) => (
                <li key={subItem.id}>
                  <Link href={subItem.href}>{subItem.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
