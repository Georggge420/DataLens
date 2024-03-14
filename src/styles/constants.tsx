export type SideVarItem = {
    title: string;
    path?: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideVarItem[];
}