import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

export default function Breadcrumbs({ title, subtitle }) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/">
            <FaHouse />
          </Link>
        </li>
        {subtitle ? (
          <>
            <li>
              <Link
                href={`/${
                  title.slice(0, 1).toLowerCase() + title.slice(1, title.length)
                }`}
              >
                {title}
              </Link>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">{subtitle}</span>
            </li>
          </>
        ) : (
          <li>
            <span className="inline-flex items-center gap-2">{title}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
