import { Inter_Tight, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import MyContext from "@/context/MyContext";
import AuthProvider from "@/context/AuthProvider";

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
  icons: { icon: "/startech.svg" }
};

export const viewport = {
  themeColor: "hsl(232, 54%, 36%)",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={` ${interTight.variable} ${hindSiliguri.variable} font-inter antialiased`}
      >
        <MyContext>
          <AuthProvider>
            {children}
          </AuthProvider>
        </MyContext>
      </body>
    </html>
  );
}
