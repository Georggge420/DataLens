import { SIDEVARITEMS } from "@/styles/constants";
import { SideNavItem } from "@/styles/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";


export const Sidebar = () => {
    return (
        <div className="md:w-60 h-screen bg-blancoClaro flex-1 fixed border-r border-zinc-200 hidden md:flex">
            
        </div>
    );
};

export default Sidebar;