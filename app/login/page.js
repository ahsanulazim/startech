"use client";

import UserForm from "@/components/auth/UserForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "../context/MyContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { currentUser } = useContext(SiteContext);

  useEffect(() => {
    // Once context is hydrated, stop loading
    setLoading(false);

    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser, router]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!currentUser) {
    return (
      <main className="bg-base-300">
        <Section>
          <Breadcrumbs title="Login" />
        </Section>
        <Section>
          <UserForm login={true} />
        </Section>
      </main>
    );
  }
  return null;
}
