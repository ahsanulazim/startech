import { FaShoppingBasket } from "react-icons/fa";
import Cart from "./Cart";

export default function CartDrawer() {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-1" className="drawer-button btn btn-lg btn-square btn-primary shadow-main/60 border-white/20 bg-main shadow-md"><FaShoppingBasket /></label>
            </div>
            <Cart />
        </div>
    )
}
