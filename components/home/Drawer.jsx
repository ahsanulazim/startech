import menus from "@/json/menu.json"
import Link from "next/link"

export default function Drawer() {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {menus.map((menu) => (
                    <li key={menu.id}>
                        <details>
                            <summary>{menu.name}</summary>
                            <ul className="ml-0 before:w-0">
                                {menu.submenu.map((subItem) => (
                                    <li key={subItem.id}><Link href={subItem.href}>{subItem.name}</Link></li>
                                ))}
                            </ul>
                        </details>
                    </li>
                ))}
            </ul>
        </div>
    )
}
