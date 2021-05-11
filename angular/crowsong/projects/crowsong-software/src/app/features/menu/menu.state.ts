export type Item = {
    isDropdown: boolean;
    image: string;
    text: string,
    route: string,
    styles: object,
    stylesStr: string
};

export type MenuState = {
    containerStyles: object;
    containerStylesStr: string;
    items: Array<Item>;
};