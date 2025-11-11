import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <Section>
        <Breadcrumbs title="Page Not Found" />
      </Section>
      <Section>
        <Image
          width={700}
          height={600}
          src="/not-found.svg"
          alt="not found"
          loading="eager"
          className="max-w-md w-full mx-auto"
        />
      </Section>
      <Section className="text-center">
        <h1 className="text-2xl font-semibold text-second">Opps!</h1>
        <h2 className="my-3">
          The page you&apos;re looking for could not be found.
        </h2>
        <Link href="/">
          <button className="btn btn-primary btn-filled-style">Continue</button>
        </Link>
      </Section>
    </main>
  );
}
