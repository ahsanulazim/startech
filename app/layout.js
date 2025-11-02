import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Fab from "@/components/ui/Fab";
import { FaShoppingBasket } from "react-icons/fa";
import CartDrawer from "@/components/shop/CartDrawer";
import Compare from "@/components/shop/Compare";
import MyContext from "./context/MyContext";
import Basket from "@/components/shop/Basket";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Star Tech",
  description: "Leading Computer, Laptop and Gadget shop in Bangladesh",
  icons: { icon: "/startech.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${interTight.variable} font-inter antialiased`}>
        <MyContext>
          <Navbar>{children}</Navbar>
          <CartDrawer />
          <Fab bottom={"bottom-20"}>
            <Compare />
          </Fab>
          <Fab>
            <Basket
              className="btn btn-lg btn-square btn-primary shadow-main/60 border-white/20 bg-main shadow-md"
              indicator={true}
            />
          </Fab>
        </MyContext>
      </body>
    </html>
  );
}
