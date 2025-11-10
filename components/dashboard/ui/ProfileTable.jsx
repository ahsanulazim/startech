import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function ProfileTable({ currentUser }) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <td className="flex justify-between gap-5 items-center cursor-pointer">
              <div>
                <label className="font-semibold text-base">Name</label>
                <p className="opacity-50">{currentUser?.name}</p>
              </div>
              <FaChevronRight />
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="flex justify-between gap-5 items-center cursor-pointer">
              <div>
                <label className="font-semibold text-base">Email</label>
                <p className="opacity-50">{currentUser?.email}</p>
              </div>
              <FaChevronRight />
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <td className="flex justify-between gap-5 items-center cursor-pointer">
              <div>
                <label className="font-semibold text-base">Phone</label>
                <p className="opacity-50">+880165435464</p>
              </div>
              <FaChevronRight />
            </td>
          </tr>
          <tr>
            <td className="flex justify-between gap-5 items-center cursor-pointer">
              <div>
                <label className="font-semibold text-base">Address</label>
                <p className="opacity-50">60 Feet</p>
              </div>
              <FaChevronRight />
            </td>
          </tr>
          <tr>
            <td className="flex justify-between gap-5 items-center cursor-pointer">
              <div>
                <label className="font-semibold text-base">District</label>
                <p className="opacity-50">Dhaka</p>
              </div>
              <FaChevronRight />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
