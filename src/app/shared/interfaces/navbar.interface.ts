export interface NavbarInterface {
    label: string;
    icon: string;
    routerLink: string[];
    items?: NavbarItems[];
}
export interface NavbarItems {
    label: string;
    routerLink: string[];
    icon?: string;
    items?: NavbarItems[];
}