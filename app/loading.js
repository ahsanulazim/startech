import { BarLoader } from "react-spinners";

export default function loading() {
    return (
        <main className="min-h-dvh bg-base-100 flex items-center justify-center">
            <BarLoader />
        </main>
    )
}
