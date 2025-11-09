"use client";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const SiteContext = createContext();

export default function MyContext({ children }) {
  const serverUrl = process.env.NEXT_PUBLIC_API_BASE;
  const [products, setProducts] = useState(null);
  const [cartedProducts, setCartedProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("cartedProducts");
    if (stored) {
      setCartedProducts(JSON.parse(stored));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add product to cart
  const addToCart = (id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    setCartedProducts((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        // quantity বাড়াও
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // নতুন প্রোডাক্ট quantity = 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  //Cart Data to Local Storage
  useEffect(() => {
    localStorage.setItem("cartedProducts", JSON.stringify(cartedProducts));
  }, [cartedProducts]);

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  //Total Products
  const total = cartedProducts
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  //Total Quantity
  const totalQuantity = cartedProducts.reduce(
    (acc, product) => acc + Number(product.quantity),
    0
  );

  //Update Quantity
  const updateQuantity = (id, quantity) => {
    setCartedProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Monitor auth state
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  //User Observer

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const email = user.email;

        fetch(`${serverUrl}/users/email/${email}`)
          .then((res) => res.json())
          .then((data) => {
            setCurrentUser(data);
            localStorage.setItem("user", JSON.stringify(data));
          })
          .catch((err) => {
            setCurrentUser(null);
          });
        // ...
      } else {
        // User is signed out
        // ...
        setCurrentUser(null);
      }
      // setLoading(false);
    });
    return () => observer();
  }, []);

  const data = {
    products,
    addToCart,
    cartedProducts,
    removeFromCart,
    total,
    updateQuantity,
    totalQuantity,
    currentUser,
    loading,
    serverUrl,
    setCurrentUser,
  };

  return <SiteContext value={data}>{children}</SiteContext>;
}
