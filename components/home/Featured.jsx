import IconCard from "../ui/IconCard";
import Section from "../ui/Section";
import Title from "../ui/Title";
import featured from "@/json/featuredcat.json";

export default function Featured() {

    const t = {
        heading: "Featured Category",
        subHeading: "Get Your Desired Product from Featured Category!"
    }

    return (
        <Section>
            <Title heading={t.heading} subHeading={t.subHeading} />
            <div className="grid grid-cols-2 2xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 xs:gap-3 md:gap-5">
                {featured.map((cat) => (
                    <IconCard key={cat.id} icon={cat.icon} href={cat.href} name={cat.name} />
                ))}
            </div>
        </Section>
    )
}
