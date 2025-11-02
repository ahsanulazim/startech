"use client";

export default function Fab({ bottom, children }) {
  return (
    <div className={`fab ${bottom ? bottom : ""} hidden lg:flex z-30`}>
      {children}
    </div>
  );
}
