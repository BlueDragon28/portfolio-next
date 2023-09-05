import { ReactNode } from "react";

export default function Card(
    { children, className }: { children: ReactNode, className?: string }
) {
  return (
    <div className={`bg-blue-700 p-2 sm:mx-auto sm:w-[95%] sm:max-w-[800px] sm:rounded rounded-none w-[100%] mt-0 ${className}`}>
      { children }
    </div>
  );
}
