"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  return (
    <nav style={{ backgroundColor: 'var(--primary)' }} className="shadow-md py-4 px-6 w-full text-white">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-xl font-bold korean-heading">
          한국어 활용 <span className="text-sm font-normal">Korean Conjugation</span>
        </Link>
        
        <div className="flex space-x-2">
          <NavLink href="/" label="홈" enLabel="Home" />
          <NavLink href="/verbs" label="동사" enLabel="Verbs" />
          <NavLink href="/adjectives" label="형용사" enLabel="Adjectives" />
          <NavLink href="/nouns" label="명사" enLabel="Nouns" />
          <NavLink href="/other" label="기타" enLabel="Other" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label, enLabel }: { href: string; label: string; enLabel: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href}
      style={{
        backgroundColor: isActive ? 'var(--accent)' : 'transparent',
        borderColor: isActive ? 'var(--accent)' : 'var(--color-white)',
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium border transition duration-150 ease-in-out hover:bg-opacity-90 flex flex-col items-center`}
    >
      <span className="font-korean font-bold">{label}</span>
      <span className="text-xs mt-0.5 opacity-80">{enLabel}</span>
    </Link>
  );
};

export default Navigation;
