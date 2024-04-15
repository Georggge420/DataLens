'use client';

import { SIDEVARITEMS } from "@/styles/constants";
import { SideNavItem } from "@/styles/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";



export const Sidebar = () => {
  const configItem = SIDEVARITEMS[SIDEVARITEMS.length - 1];

  return (
      <div className="md:w-min-content bg-blancoOpaco h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex flex-col justify-between">
        <div className="flex flex-col space-y-6 w-full">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 bg-grisMedio h-12 w-full"
          >
            <Image src="/logo.svg" width={28} height={28} alt="logo" />
            <span className="font-bold text-xl hidden md:flex font-bungee">Datalens</span>
          </Link>
  
          <div className="flex flex-col space-y-2  md:px-6">
            {SIDEVARITEMS.slice(0, -1).map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}
          </div>
        </div>

        {configItem && (
          <div className="flex flex-col space-y-2 md:px-6">
            <MenuItem item={configItem} />
          </div>
        )}
      </div>
    );
};

const MenuItem = ({item}:{item: SideNavItem}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [openedSubItem, setOpenedSubItem] = useState<{ [key: number]: boolean }>({}); 

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen); 
  };

  const toggleSubSubMenu = (idx: number) => {
    setOpenedSubItem(prevState => ({ ...prevState, [idx]: !prevState[idx] })); 
  };

  return (
    <div className="relative">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg 0 w-full justify-between hover:bg-zinc-100 ${
              item.path && pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-xl flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-3 flex flex-col-reverse space-y-reverse space-y-4 absolute bottom-full w-full">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <div key={idx} className="relative">
                    {subItem.submenu ? (
                      <button
                        onClick={() => toggleSubSubMenu(idx)}
                        className={`${
                          openedSubItem[idx] ? 'mt-14' : 'mt-0'
                        }`}
                      >
                        <MenuItem item={subItem}/>
                      </button>
                    ) : (
                      <Link href={subItem.path || ""}>
                        <span>{subItem.title}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
      )}
        </>
      ) : (
       <Link
          href={item.path || ""}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover: ${
            item.path && pathname === item.path ? 'bg-grisOscuro text-blancoClaro' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
