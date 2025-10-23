export default function Search() {
    return (
        <form className="input w-full">
            <input type="search" placeholder="Search" required />
            <button type="submit" className="cursor-pointer">
                <svg className=" opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
            </button>
        </form>
    )
}
