import SkillSection from "./skill-section";
import SkillIcon from "./skill-icon";
import SkillRowSection, { SkillRowSectionInterface } from "./skills-row-section";

const programmingLanguagesSkills: SkillRowSectionInterface[] = [
  {
    name: "JavaScript",
    url: "/images/techs/javascript.png",
  },
  {
    name: "TypeScript",
    url: "/images/techs/typescript.png",
  },
  {
    name: "C++",
    url: "/images/techs/cpp.png",
  },
  {
    name: "HTML",
    url: "/images/techs/html.png",
  },
  {
    name: "CSS",
    url: "/images/techs/css.png",
  },
  {
    name: "Python",
    url: "/images/techs/python.png",
  },
  {
    name: "Dart",
    url: "/images/techs/dart.png",
  },
];

export default function ProgrammingLanguagesSkillSection() {
  return (
    <SkillRowSection 
      title="Languages de Programmation"
      skills={programmingLanguagesSkills}
    />
  );
}
