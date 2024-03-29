export type SideNavItem = {
    title: string;
    path?: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
    level?: number;
}

export type MenuItemWithSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
};