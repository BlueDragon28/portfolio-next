import { ReactNode } from "react";

export interface OutlinedLinkProps {
  children: ReactNode,
  href: string,
}

export default function OutlinedLink(
  { children, href }: OutlinedLinkProps
) {
  return (
    <a 
      className="block border-solid border-[1px] border-gray-400 p-2 rounded-lg hover:border-gray-300"
      href={href}
    >
      {children}
    </a>
  );
}
