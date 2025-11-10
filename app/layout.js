import { Inter_Tight, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import MyContext from "@/context/MyContext";

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
  title: "Star Tech",
  description: "Leading Computer, Laptop and Gadget shop in Bangladesh",
  icons: { icon: "/startech.svg" },
  themeColor: "hsl(206, 61%, 8%)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={` ${interTight.variable} ${hindSiliguri.variable} font-inter antialiased`}
      >
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}
