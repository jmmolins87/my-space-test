import { NavbarInterface } from "../interfaces/navbar.interface";

export const navbarItems: NavbarInterface[] = [
    {
        label: 'Sobre mí',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/about']
    },
    {
        label: 'Herramientas',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/tools']
    },
    {
        label: 'Contacto',
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['/contact']
    }
]