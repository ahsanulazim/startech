"use client";
import Dashboard from "@/components/dashboard/Dashboard";
import { AuthContext } from "@/context/AuthProvider";
import ThemeProvider from "@/context/ThemeProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function DashboardLayout({ children }) {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) return router.push("/login");
  }, [currentUser, router]);

  return (
    <ThemeProvider>
      <Dashboard>{children}</Dashboard>
    </ThemeProvider>
  );
}
