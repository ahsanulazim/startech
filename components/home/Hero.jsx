import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

export default function Hero() {
    return (
        <section className="max-w-xxl mx-auto lg:px-2 p-5">
            <div className="grid grid-cols-12 grid-rows-2 gap-5 lg:gap-3">
                <ImageCarousel />
                <Link href="#" className="col-span-6 lg:col-span-3 h-full"><img className="rounded-lg w-full" src="/Carousel/carousel (4).webp" alt="carousel 4" /></Link>
                <Link href="#" className="col-span-6 lg:col-span-3 h-full"><img className="rounded-lg w-full" src="/Carousel/carousel (5).webp" alt="carousel 5" /></Link>
            </div>
        </section>
    )
}
