import { ReactNode } from "react";

export default function Card(
    { children, className }: { children: ReactNode, className?: string }
) {
  return (
    <div className={`bg-blue-700 p-2 mx-auto w-[95%] max-w-[800px] rounded ${className}`}>
      { children }
    </div>
  );
}
