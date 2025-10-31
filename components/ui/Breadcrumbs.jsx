import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-xs">
      <ul>
        <li>
          <Link href="/">
            <FaHouse />
          </Link>
        </li>
        <li>
          <a>Documents</a>
        </li>
        <li>
          <span className="inline-flex items-center gap-2">Add Document</span>
        </li>
      </ul>
    </div>
  );
}
