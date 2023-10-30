import SkillRowSection, { SkillRowSectionInterface } from "./skills-row-section";

const serveursSkills: SkillRowSectionInterface[] = [
  {
    name: "Apache",
    url: "/images/techs/apache.png",
  },
  {
    name: "NGINX",
    url: "/images/techs/nginx.png",
  },
  {
    name: "Docker",
    url: "/images/techs/docker.png",
  },
];

export default function ServeurSkillsSection() {
  return (
    <SkillRowSection
      title="Outils Serveurs"
      skills={serveursSkills}
    />
  );
}
