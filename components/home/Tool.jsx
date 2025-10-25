import { FaCircleExclamation, FaLaptop, FaHouse, FaGear } from "react-icons/fa6";
import Section from "../ui/Section";
import ToolCard from "../ui/ToolCard";
import tools from "@/json/tool.json";

export default function Tool() {

    const icons = {
        laptop: <FaLaptop className="size-4 xs:size-6" />,
        complaint: <FaCircleExclamation className="size-4 xs:size-6" />,
        home: <FaHouse className="size-4 xs:size-6" />,
        gear: <FaGear className="size-4 xs:size-6" />
    }

    return (
        <Section>
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-5">
                {tools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} icon={icons[tool.icon]} />
                ))}
            </div>
        </Section>
    )
}
