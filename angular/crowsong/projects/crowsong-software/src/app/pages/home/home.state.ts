export type Card = {
    title: string;
    image: string;
    body: Array<string>;
    footer: string;
};

export type HomeState = {
    cardCollection: Array<Card>;
    cardStyles: string;
    titleStyles: string;
    bodyStyles: string,
    footerStyles: string;
};

export const defaultState: HomeState = {
    cardCollection: [
        { 
            title: ``,
            image: ``,
            body: [],
            footer: ``
        }
    ],
    cardStyles:``,
    titleStyles: ``,
    bodyStyles: ``,
    footerStyles: ``
};

export const state: HomeState = {
    cardCollection: [
        { 
            title: `Introduction`,
            image: ``,
            body: [
                `
                    This is my cover letter, an introduction to
                    who I am, my history, what I did prior to my
                    career as a software developer, how I became 
                    a software developer and a brief history of my
                    experience.
                `
            ],
            footer: ``
        },
        { 
            title: `Resume`,
            image: ``,
            body: [
                `
                    My resume split between my two generations 
                    of exprerience.
                `,
                `
                    My first generation in the .NET environment and my second generation
                    in the Node/Angular environment.
                `
            ],
            footer: ``
        },
        { 
            title: `Portfolio`,
            image: ``,
            body: [
                `
                    My portfolio of applications I have 
                    written to demonstrate my knowledge in
                    the node/angular development environment.
                `,
                `
                    Crowsong Recipes - Online repository for 
                    favorite or homegrown recipes.
                `,
                `
                    Crowsong Messaging - Online chat messaging 
                    and video conferencing application
                `,
                `
                    Crowsong Content Management System
                `,
                `
                    Crowsong Email Client - Homegrown email client
                    application for several popular online email servers.
                `,
                `
                    Crowsong Lounge - an example of a bar,
                    restaurant, lounge website.
                `,
                `
                    Crowsong Widgets - and example of a website
                    for merchants.
                `
            ],
            footer: ``
        },
        { 
            title: `Contact`,
            image: ``,
            body: [
                ` crowsongsoftware@gmail.com
                `
            ],
            footer: ``
        }
    ],
    cardStyles: `
        background:radial-gradient(rgb(99, 87, 87) 20%, #9d9d98 85%, rgb(187,187,181));
        border: 3px solid brown;
        border-radius: 5px;
        color: rgb(12, 0, 0);
        font-family: Arial, Helvetica, sans-serif;
        padding: 1em
    `,
    titleStyles: `font-size: 1.5vw;`,
    bodyStyles: ``,
    footerStyles: ``
};