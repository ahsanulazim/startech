import { FaLocationDot } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Section from "../ui/Section";

export default function Location() {
  return (
    <Section>
      <div className="flex items-center justify-between max-sm:flex-col bg-linear-120 to-[#00237e] from-[#0bc1e9] via-[#3749bb] p-8 rounded-md gap-5">
        <div className="flex items-center justify-between max-sm:flex-col text-white gap-5">
          <FaLocationDot className="size-8 sm:size-10" />
          <div className="max-sm:text-center">
            <h2 className="text-2xl xs:text-3xl font-bold">
              20+ Physical Stores
            </h2>
            <p className="max-xs:text-sm max-xs:text-balance">
              Visit Our Store & Get Your Desired IT Product!
            </p>
          </div>
        </div>
        <button className="btn rounded-full btn-warning">
          Find Our Store <HiMiniMagnifyingGlass />
        </button>
      </div>
    </Section>
  );
}
