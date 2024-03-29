import { ReactNode } from "react";

export interface SkillSectionProps {
  title: string,
  children: ReactNode,
}

export default function SkillSection(
  { title, children }: SkillSectionProps,
) {
  return (
    <div>
      <h3 
        className="text-xl font-bold pb-2"
      >
        { title }
      </h3>
      <div className="overflow-x-auto whitespace-nowrap py-3">
        {children}
      </div>
    </div>
  );
}
