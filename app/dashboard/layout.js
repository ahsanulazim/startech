"use client";
import Dashboard from "@/components/dashboard/Dashboard";
import { AuthContext } from "@/context/AuthProvider";
import ThemeProvider from "@/context/ThemeProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

export default function DashboardLayout({ children }) {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // WAIT ONLY IF currentUser === undefined
    if (currentUser === undefined) {
      setLoading(true);
      return;
    }

    // Now we know currentUser is either real user or null
    setLoading(false);

    if (currentUser === null) {
      router.push("/login");
    }
  }, [currentUser, router]);

  if (loading) {
    return (
      <main className="min-h-dvh flex justify-center items-center">
        <BounceLoader color="#3749bb" />
      </main>
    );
  }

  if (!currentUser) {
    return null;
  }


  return (
    <ThemeProvider>
      <Dashboard>{children}</Dashboard>
    </ThemeProvider>
  );
}
