import { ReactNode } from "react";

export interface OutlinedLinkProps {
  children: ReactNode,
  href: string,
  className?: string,
}

export default function OutlinedLink(
  { children, href, className }: OutlinedLinkProps
) {
  return (
    <a 
      className={`block border-solid border-[1px] border-gray-400 p-2 rounded-lg hover:border-gray-300 ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
