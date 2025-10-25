import Cart from "./Cart";

export default function CartDrawer({ children }) {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {children}
            </div>
            <Cart />
        </div>
    )
}
