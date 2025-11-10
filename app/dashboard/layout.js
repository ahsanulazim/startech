import { Inter_Tight, Hind_Siliguri } from "next/font/google";
import "../(mainLayout)/globals.css";
import Dashboard from "@/components/dashboard/Dashboard";
import ThemeProvider from "../context/ThemeProvider";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});
const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Star Tech | Dashboard",
  description: "Manage Orders and Sales",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${interTight.variable} ${hindSiliguri.variable} font-inter antialiased`}
      >
        <ThemeProvider>
          <Dashboard>{children}</Dashboard>
        </ThemeProvider>
      </body>
    </html>
  );
}
