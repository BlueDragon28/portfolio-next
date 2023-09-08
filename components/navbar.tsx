import { useRouter } from "next/navigation";
import Link from "next/link";
import NavbarLink from "./navbar-link";

export interface NavBarProps {
  currentPath?: string,
}

export default function NavBar(
  { currentPath }: NavBarProps,
) {
  return (
    <nav className="bg-blue-600 flex flex-row items-center p-4">
      <Link 
        href="/" 
        className="font-bold text-2xl text-gray-200 hover:underline"
      >
        Erwan Saclier
      </Link>
      <div className="ms-4 flex flex-row">
        <NavbarLink
          href="/"
          active={currentPath === "/"}
        >
          Home
        </NavbarLink>
      </div>
    </nav>
  );
}
