import { FaFaceSmile, FaFire, FaUser } from "react-icons/fa6";
import { MdImportantDevices, MdLibraryAdd } from "react-icons/md";

export default function BottomNav() {
  return (
    <div className="dock sticky bg-main text-neutral-content lg:hidden border-t-white/20">
      <button>
        <FaFire className="size-5" />
        <span className="dock-label">Offer</span>
      </button>

      <button className="">
        <FaFaceSmile className="size-5" />
        <span className="dock-label">Happy Hour</span>
      </button>

      <button>
        <MdImportantDevices className="size-5" />
        <span className="dock-label">PC Builder</span>
      </button>
      <button>
        <MdLibraryAdd className="size-5" />
        <span className="dock-label">Compare</span>
      </button>
      <button>
        <FaUser className="size-5" />
        <span className="dock-label">Account</span>
      </button>
    </div>
  );
}
