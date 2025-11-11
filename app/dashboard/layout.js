"use client";
import Dashboard from "@/components/dashboard/Dashboard";
import ThemeProvider from "@/context/ThemeProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }) {

  const router = useRouter();
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const status = await apiGet('/auth/status');
        if (mounted) setUser(status.user);
        const dd = await apiGet('/dashboard-data');
        if (mounted) setData(dd);
      } catch (err) {
        // If somehow unauthenticated, send to login
        router.push('/login');
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <ThemeProvider>
      <Dashboard>{children}</Dashboard>
    </ThemeProvider>
  );
}
