"use client";
import Dashboard from "@/components/dashboard/Dashboard";
import DashSkeleton from "@/components/dashboard/skeleton/DashSkeleton";
import { AuthContext } from "@/context/AuthProvider";
import ThemeProvider from "@/context/ThemeProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function DashboardLayout({ children }) {
  const { currentUser, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !currentUser) {
      router.push("/login");
    }
  }, [loading, currentUser, router]);

  if (loading) return <DashSkeleton />;
  return (
    <ThemeProvider>
      <Dashboard>{children}</Dashboard>
    </ThemeProvider>
  );
}
