export type MenuItem = {
    isDropdown: boolean;
    image: string;
    text: string,
    route: string,
    styles: string
};

export type MenuState = {
    containerStyles: string;
    menuItems: Array<MenuItem>;
};

export type HeaderState = {
    imgStyles: string;
    imgSrc: string;   
};

export type AppState = {
    developmentServer: string;
    featherImagePath: string;
    headerState: HeaderState;
    menuState: MenuState;
    title: string;
};

export const appState: AppState = {
    developmentServer:  "api/app",
    featherImagePath: "/assets/images/crow-feather-transparent.png",
    menuState: {
        containerStyles:`
            border:2px solid black;
            background:radial-gradient(rgb(91,79,79), #9d9d98, rgb(187,187,181));
            font-family:Arial;
            height:5vh  
        `,
        menuItems: [
            {
                image: '',
                isDropdown: false,
                text: "Home",
                route: "/home",
                styles:`
                    color:black;
                    font-size:2vw;
                    margin:2vw
                `          
            },
            {
                image: '',
                isDropdown: false,
                text: "Introduction",
                route: "/introduction",
                styles:`
                    color:black;
                    font-size:2vw;
                    margin:2vw
                `
            },
            {
                image: '',
                isDropdown: false,
                text: "Resume",
                route: "/resume",
                styles:`
                color:black;
                font-size:2vw;
                margin:2vw
                `
            },
            {
                image: '',
                isDropdown: false,
                text: "Portfolio",
                route: "/portfolio",
                styles:`
                color:black;
                font-size:2vw;
                margin:2vw
                `
            },
            {
                image: '',
                isDropdown: false,
                text: "Contact",
                route: "/contact",
                styles:`
                color:black;
                font-size:2vw;
                margin:2vw
                `
            }
        ]
    },
    headerState:{
        imgStyles: 'border-radius: 2vw 2vw 0 0',
        imgSrc: '/assets/images/logo_text_cropped.png'
    },
    title: 'Crowsong'
};