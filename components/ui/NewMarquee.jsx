import Marquee from "react-fast-marquee";
import Section from "./Section";

export default function NewMarquee() {
    return (
        <Section>
            <div className="p-2 bg-base-100 rounded-lg">
                <Marquee>
                    Sunday, 26 October, all our branches are open except IDB Branch. Additionally, our online activities are open and & operational.
                </Marquee>
            </div>
        </Section>
    )
}
