import ComparisonCard from "../shop/ComparisonCard";
import Section from "../ui/Section";
import Title from "../ui/Title";

export default function Comparison() {

  const t = {
    heading: "Featured Comparisons",
    subHeading: "Compare & Choose Your Desired Product!",
  };

  return (
    <Section>
      <Title heading={t.heading} subHeading={t.subHeading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        <ComparisonCard selectedIds={[1, 2]} />
        <ComparisonCard selectedIds={[3, 4]} />
        <ComparisonCard selectedIds={[5, 6]} />
        <ComparisonCard selectedIds={[7, 8]} />
        <ComparisonCard selectedIds={[9, 10]} />
        <ComparisonCard selectedIds={[11, 12]} />
      </div>
    </Section>
  );
}
