import { Inter_Tight, Hind_Siliguri } from "next/font/google";
import "../(mainLayout)/globals.css";
import Dashboard from "@/components/dashboard/Dashboard";
import ThemeContext from "../context/ThemeContext";

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
    <html lang="en" className="dark">
      <body
        className={` ${interTight.variable} ${hindSiliguri.variable} font-inter antialiased`}
      >
        <ThemeContext>
          <Dashboard>{children}</Dashboard>
        </ThemeContext>
      </body>
    </html>
  );
}
