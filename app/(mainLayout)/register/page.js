"use client";

import UserForm from "@/components/auth/UserForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";

export default function Register() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
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

  if (!currentUser) {
    return (
      <main className="bg-base-300">
        <Section>
          <Breadcrumbs title="Register" />
        </Section>
        <Section>
          <UserForm login={false} />
        </Section>
      </main>
    );
  }
  return null;
}
