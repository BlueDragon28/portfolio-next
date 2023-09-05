import SkillRowSection, { SkillRowSectionInterface } from "./skills-row-section";

const frameworksSkills: SkillRowSectionInterface[] = [
  {
    name: "React",
    url: "/images/techs/reactjs.png",
  },
  {
    name: "Angular",
    url: "/images/techs/angular.png",
  },
  {
    name: "Django",
    url: "/images/techs/django.png",
  },
  {
    name: "Next.js",
    url: "/images/techs/nextjs.png",
  },
  {
    name: "Flutter",
    url: "/images/techs/flutter.png",
  },
  {
    name: "Qt",
    url: "/images/techs/qt.png",
  },
  {
    name: "Express",
    url: "/images/techs/expressjs.png",
  },
]

export default function FrameworksSkillSection() {
  return (
    <SkillRowSection
      title="Frameworks"
      skills={frameworksSkills}
    />
  );
}
