import { Icon } from "@iconify/react";
import { SideNavItem } from './types';

export const SIDEVARITEMS: SideNavItem[] = [
    {
        title: "DataHome",
        path: "/",
        icon: <Icon icon="mi" />,
    },
    {
        title: "X",
        path: "/Xboard",
        icon: <Icon icon="fa6-brands:x-twitter" />
    },
    {
        title: "Facebook",
        path: "/facebookboard",
        icon: <Icon icon="brandico:facebook" />
    },
    {
        title: "Instagram",
        path: "/instragramboard",
        icon: <Icon icon="entypo-social:instagram" />
    },
    {
        title: "Spotify",
        path: "/spotifyboard",
        icon: <Icon icon="entypo-social:spotify" />,
    },
    {
        title: "Configuracion",
        icon: <Icon icon="ant-design:setting-outlined" />,
        submenu: true,
        subMenuItems: [
            {
                title: "Idioma",
                path: "/Configuracion/Idioma",
                icon: <Icon icon="flowbite:arrow-sort-letters-outline" />
            },
            {
                title: "Tema",
                path: "/Configuracion/Tema",
                icon: <Icon icon="flowbite:moon-solid" />
            },
        ]
    },

]