import Link from 'next/link';

import { NavMenu } from './';
import { navItems } from '@/utils/navData';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 rounded-lg z-50">
      <Link href="/">
        <h1 className="font-bold text-2xl max-sm:text-xl ">
          Vanta Energy Tech
        </h1>
      </Link>

      <ul className="hidden sm:flex gap-6">
        {navItems.map((item) => (
          <Link href={item.href} key={item.id}>
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
