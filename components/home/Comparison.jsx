import ComparisionCard from "../shop/ComparisionCard";
import Section from "../ui/Section";
import Title from "../ui/Title";

export default function Comparison() {

    const t = {
        heading: "Featured Comparisons",
        subHeading: "Compare & Choose Your Desired Product!"
    }

    return (
        <Section>
            <Title heading={t.heading} subHeading={t.subHeading} />
            <ComparisionCard />
        </Section>
    )
}
