import Navbar from "@/components/home/Navbar";
import Basket from "@/components/shop/Basket";
import CartDrawer from "@/components/shop/CartDrawer";
import Compare from "@/components/shop/Compare";
import Fab from "@/components/ui/Fab";
import React from "react";

export default function layout({ children }) {
  return (
    <>
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
    </>
  );
}
