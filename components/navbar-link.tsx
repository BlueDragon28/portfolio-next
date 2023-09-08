import Link from "next/link";
import { ReactNode } from "react";

export interface NavbarLinkProps {
  href: string,
  active?: boolean,
  children?: ReactNode,
}

export default function NavbarLink(
  { href, active, children }: NavbarLinkProps,
) {
  return (
    <Link
      href={href}
      className={`mx-2 font-bold text-md border-b-4 hover:border-b-blue-200 ${active ? 'border-b-blue-100' : 'border-b-transparent'}`}
    >
      {children}
    </Link>
  );
}
