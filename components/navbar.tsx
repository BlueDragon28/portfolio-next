import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 flex flex-row items-center p-4">
      <Link 
        href="/" 
        className="font-bold text-2xl text-gray-200 hover:underline"
      >
        Erwan Saclier
      </Link>
    </nav>
  );
}
