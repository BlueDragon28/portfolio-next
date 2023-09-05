import { ReactNode } from "react";
import Card from "./card";

export interface HeaderCardProps {
  children: ReactNode,
  title: string,
}

export default function HeaderCard(
  { children, title }: HeaderCardProps,
) {
  return (
    <Card className="p-0 overflow-hidden flex flex-col">
      <h2 className="p-2 bg-blue-600 font-bold text-2xl">
        {title}
      </h2>
      <div className="flex-grow p-2">
        {children}
      </div>
    </Card>
  );
}
