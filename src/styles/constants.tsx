import { Icon } from "@iconify/react";
import { SideNavItem } from './types';

export const SIDEVARITEMS: SideNavItem[] = [
    {
        title: "DataHome",
        path: "/",
        icon: <Icon icon="line-md:home-md-twotone" />,
    },
    {
        title: "X",
        path: "/Xboard",
        icon: <Icon icon="fa6-brands:x-twitter" />
    },
    {
        title: "Instagram",
        path: "/instagramBoard",
        icon: <Icon icon="entypo-social:instagram" />
    },
    {
        title: "YouTube",
        path: "/YoutubeBoard",
        icon: <Icon icon="mdi:youtube" />,
    },
    {
        title: "Tema",
        icon: <Icon icon="flowbite:moon-solid" />,
        submenu: true,
        level: 1,
        subMenuItems: [
            {title: "Claro",
            level: 2,
            value: "light",
            },
            {title: "Oscuro",
            level: 2,
            value: "dark",
            }
        ],
    },

]