"use client";

import { useContext } from "react";
import Profile from "./Profile";
import { FaFireAlt, FaSmile, FaUser } from "react-icons/fa";
import { SiteContext } from "@/context/MyContext";

export default function ImportantLinks() {
  const { currentUser } = useContext(SiteContext);

  const impLinks = [
    {
      id: 1,
      title: "Offers",
      subtitle: "Latest Deals",
      href: "#",
      icon: <FaFireAlt />,
    },
    {
      id: 2,
      title: "Happy Hours",
      subtitle: "Special Deals",
      href: "#",
      icon: <FaSmile />,
    },
    {
      id: 3,
      title: currentUser ? "Dashboard" : "Account",
      subtitle: currentUser ? "Welcome Back" : "Login or Register",
      href: currentUser ? "/dashboard" : "/login",
      icon: <FaUser />,
    },
  ];

  return (
    <div className="hidden lg:flex gap-x-5">
      {impLinks.map((links) => (
        <Profile
          key={links.id}
          icon={links.icon}
          title={links.title}
          subtitle={links.subtitle}
          href={links.href}
        />
      ))}
    </div>
  );
}
