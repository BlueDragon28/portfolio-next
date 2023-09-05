import SkillSection from "./skill-section";
import SkillIcon from "./skill-icon";

export interface SkillRowSectionInterface {
  name: string,
  url: string,
}

export interface SkillRowSectionProps {
  title: string,
  skills: SkillRowSectionInterface[],
}

export default function SkillRowSection(
  { title, skills }: SkillRowSectionProps,
) {
  return (
    <SkillSection title={title}>
      {skills.map(({ name, url }) => <SkillIcon 
        name={name}
        url={url}
      />)}
    </SkillSection>
  );
}
