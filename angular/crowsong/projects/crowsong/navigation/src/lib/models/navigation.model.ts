export interface INavigation{
    containerStyles: object;
    containerStylesStr: '';
    itemStyles: object;
    items: [{ text: string, route: string}];
};

// Initialize
// items: [{text: '', route: ''}], styles: {}};