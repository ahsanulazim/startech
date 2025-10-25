import { FaTrash, FaXmark } from "react-icons/fa6";

export default function Cart() {
    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="menu bg-base-200 h-full w-80 p-0 flex-nowrap">
                <div className="flex justify-between items-center bg-main text-white p-4">
                    <h2 className="uppercase">Your Cart</h2>
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="cursor-pointer"><FaXmark /></label>
                </div>
                <ul className="flex-1 overflow-y-auto">
                    {/* Sidebar content here */}
                    {Array.from({ length: 20 }).map((_, i) => (
                        <li className="flex-row flex-nowrap items-start" key={i}>
                            <div className="flex items-start">
                                <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                                <div className="text-pretty">
                                    <div>Corsair VENGEANCE 16GB DDR5 6000MHz CL36 Desktop RAM</div>
                                    <div className="text-sm uppercase font-semibold">৳8,800 ✖︎ 1 = ৳8,800</div>
                                </div>
                                <button className="btn btn-square btn-error btn-sm">
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <footer>
                    <form className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-2">
                        <div className="join">
                            <input type="text" className="input join-item focus:outline-none" placeholder="Promo Code" />
                            <button className="btn btn-primary join-item">Apply</button>
                        </div>
                    </form>
                    <div className="my-2">
                        <div className="flex *:flex-1 *:text-right">
                            <div className="text-black/60">Sub Total</div>
                            <div className="font-bold">৳50000</div>
                        </div>
                        <div className="divider my-0"></div>
                        <div className="flex *:flex-1 *:text-right">
                            <div className="text-black/60">Total</div>
                            <div className="font-bold">৳50000</div>
                        </div>
                    </div>
                    <button className="btn w-full bg-accent border-accent rounded-none text-white">Checkout</button>
                </footer>
            </div>
        </div>
    )
}
