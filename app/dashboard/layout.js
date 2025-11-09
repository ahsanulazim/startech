"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { SiteContext } from "../context/MyContext";
import { usePathname, useRouter } from "next/navigation";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProfileCard from "@/components/dashboard/ProfileCard";

export default function Dashboard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { currentUser } = useContext(SiteContext);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    } else {
      setCheckingAuth(false);
    }
  }, [currentUser, router]);

  if (checkingAuth) {
    return <div className="p-5 text-center">Loading...</div>;
  }

  return (
    <main className="bg-base-300">
      <Section>
        <Breadcrumbs title="Dashboard" />
      </Section>
      <Section className={"pt-0"}>
        <ProfileCard user={currentUser} />
      </Section>
      <Section>
        <div role="tablist" className="tabs tabs-box rounded-b-none">
          <Link
            href="/dashboard"
            role="tab"
            className={`tab ${pathname === "/dashboard" ? "tab-active" : ""}`}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/orders"
            role="tab"
            className={`tab ${
              pathname === "/dashboard/orders" ? "tab-active" : ""
            }`}
          >
            Order
          </Link>
          <Link
            href="/dashboard/settings"
            role="tab"
            className={`tab ${
              pathname === "/dashboard/settings" ? "tab-active" : ""
            }`}
          >
            Settings
          </Link>
        </div>
        <div className="w-full border-base-300 rounded-b-md bg-base-100 p-5">
          {children}
        </div>
      </Section>
    </main>
  );
}
