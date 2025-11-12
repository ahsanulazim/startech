"use client";

import DashTitle from "@/components/dashboard/ui/DashTitle";
import ProfileTable from "@/components/dashboard/ui/ProfileTable";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

export default function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <main className="bg-base-300 flex-1 p-5">
      <DashTitle title="Profile" />
      <section className="bg-base-100 p-5 rounded-md">
        <h2 className="font-semibold text-xl mb-5">Basic Information</h2>
        <ProfileTable currentUser={currentUser} />
      </section>
    </main>
  );
}
