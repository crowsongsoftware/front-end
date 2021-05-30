export interface INavigation{
    containerStyles: string;
    itemStyles: string;
    items: [{ text: string, route: string}];
};

// Initialize
// items: [{text: '', route: ''}], styles: {}};