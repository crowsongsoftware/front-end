import { MenuItem } from './types/menu/menu-item';

export type Resume = {
    menu:{
        menuItems: Array<MenuItem>;
        menuContainerStyles: string;
    },
    header: {
        name: string;
        title: string;
        subTitle: string;
        email: string;
        website: string
    }
};