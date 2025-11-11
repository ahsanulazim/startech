"use client";

import UserForm from "@/components/auth/UserForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthProvider";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser === undefined) return; // still loading context
    if (currentUser) {
      router.replace("/dashboard");
    } else {
      setLoading(false);
    }
  }, [currentUser, router]);

  if (loading) {
    return null;
  }

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
