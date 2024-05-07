'use client'

import Link from "next/link";
import { navLinks, reseaux } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className='fixed bg-white-1 z-[5] w-full h-20 py-4 flex items-center justify-between shadow-md shadow-white-2'>
      <div className="2xl:max-w-[1440px] mx-auto px-2 sm:px-5 md:px-10 lg:px-28 flex items-center justify-between w-full">
        <h2 className='text-4xl flex-[2]'><span className='font-bold'>Bort</span> Jean</h2>
        <div className="flex lg:hidden flex-col gap-2 cursor-pointer z-10" onClick={() => setOpen(!open)}>
          <span className={`w-8 h-1 rounded-full bg-black duration-300 ${open && 'rotate-45 origin-left translate-y-[1px]'}`}></span>
          <span className={`w-8 h-1 rounded-full bg-black duration-300 ${open && 'opacity-0'}`}></span>
          <span className={`w-8 h-1 rounded-full bg-black duration-300 ${open && '-rotate-45 origin-left'}`}></span>
        </div>
        <div className="hidden lg:flex flex-[3] items-center justify-between">
          <div className="space-x-12 xl:space-x-24">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.url} className={`text-2xl uppercase ${pathname === link.url && 'font-bold'}`}>
                {link.label}
              </Link>
            )
            )}
          </div>
          <div className="flex gap-8 ml-12">
            {reseaux.map((item, index) => (
              <Link key={index} href={item.url} target="_blank" className="hover:rotate-45 duration-300">
                <item.icon size={24} />
              </Link>
            ))}
          </div>
        </div>
        <div className={`absolute duration-300 ${open ? 'left-0' : 'left-full'} top-0 h-screen w-full bg-white-1 flex lg:hidden flex-col items-center justify-center gap-20`}>
          <div className="flex flex-col items-center gap-10">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.url} className={`text-3xl uppercase ${pathname === link.url && 'font-bold'}`} onClick={() => setOpen(!open)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-8">
            {reseaux.map((item, index) => (
              <Link key={index} href={item.url} target="_blank">
                <item.icon size={28} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar