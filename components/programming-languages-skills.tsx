import SkillSection from "./skill-section";
import SkillIcon from "./skill-icon";

interface ProgrammingLanguagesList {
  name: string,
  url: string,
}

const programmingLanguagesSkills: ProgrammingLanguagesList[] = [
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
    <SkillSection title="Languages de Programmation">
      {programmingLanguagesSkills.map(({ name, url }) => <SkillIcon
        name={name}
        url={url}
      />)}
    </SkillSection>
  );
}
