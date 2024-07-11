"use client";

import React from 'react'

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from '@/hooks/useScroll';
import {cn} from '@/lib/utils';
import Image from 'next/image';


const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayaut = useSelectedLayoutSegment();
  
  return (
    <div
      className={cn( `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 dark:border-0 bg-grisMedio dark:bg-negroMedio`, {
         "border-b border-gray-200 backdrop-blur-lg bg-grisMedio dark:bg-negroMedio": scrolled,
         "border-b border-gray-200 bg-grisMedio ": selectedLayaut,
        }
      )}
    >
        <div className="flex h-[48px] items-center justify-between bg-grisMedio px-4 dark:bg-negroMedio dark:border-0">
          <div className="flex items-center space-x-4">
            <Link href="/"
              className='flex flex-row space-x-3 items-center justify-center md:hidden'
            >
              <Image src="/logo.svg" width={28} height={28} alt="logo" />
              <span className="font-bold text-xl md:flex font-bungee dark:text-blanco">Da<span className="dark:text-purpura text-grisOscuro">t</span>alens</span>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default Header