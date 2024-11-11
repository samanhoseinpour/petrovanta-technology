'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { NavButton } from './';
import { navItems } from '@/utils/constants';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative block sm:hidden">
      <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="absolute -top-2 -right-2 w-64 min-h-64 rounded-md bg-neutral-50/90 backdrop-blur-xl p-8 z-10 origin-top-right flex flex-col"
          >
            <ul className="flex flex-col gap-2 flex-1">
              {navItems.map((item) => (
                <Link href={item.href} key={item.id}>
                  <li className="text-2xl font-medium dark:text-[--background]">
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex gap-4 mt-8">
              <Link href="/">
                {/* <Github className="h-5 w-5 fill-github" /> */}
              </Link>
              <Link href="/">
                {/* <Dribbble className="h-5 w-5 fill-dribbble" /> */}
              </Link>
              <Link href="/">
                {/* <Twitter className="h-5 w-5 fill-twitter" /> */}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
