import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">Hunting Coder</Link>
        <ul className="flex space-x-4">
          <li>
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
              <Link href="/Components/about" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li>
              <Link href="/Components/blog" className="text-white hover:text-gray-300">Blog</Link>
          </li>
          <li>
              <Link href="/Components/contact" className="text-white hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;