import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-gray-800 w-screen px-5">
        <ul className="flex items-center h-14">
          <li className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition-all"
            >
              Home
            </Link>
            <Link
              href="/blog-page"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition-all"
            >
              Blog
            </Link>
            <Link
              href="/contact-page"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
