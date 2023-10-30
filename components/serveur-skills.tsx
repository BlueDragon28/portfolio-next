import SkillRowSection from "./skills-row-section";
import FrameworksSkillSection, { SkillRowSectionInterface } from "./skills-row-section";

const serveursSkills: SkillRowSectionInterface[] = [
  {
    name: "Apache",
    url: "/images/techs/apache.png",
  },
]

export default function ServeurSkillsSection() {
  return (
    <SkillRowSection
      title="Outils Serveurs"
      skills={serveursSkills}
    />
  );
}
