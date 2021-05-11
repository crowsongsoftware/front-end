import { ResumeState } from "./resume.types";

export const resumeState: ResumeState = {
    name: "Michael McMahon",
    email: "mcmahonmichael56@gmail.com",
    title: `Resume`,
    titleStyles: { 
        "font-size":"2.5vw"
    },
    menuItems: [
        {
            image: '',
            isDropdown: false,
            text: "Common",
            route: "/resume",
            styles: {
                "color": "black",
                "font-size": "2vw",
                "margin": "2vw"
            },
            stylesStr: `
                border: 1px solid black,
                border-radius: .2vw,
                color: black,
                display:inline-block,
                font-size: 1.2vw,
                margin: .5vw,
                padding: .1vw
			`
        },
        {
            image: '',
            isDropdown: false,
            text: ".NET",
            route: "net",
            styles: {
                "color": "black",
                "font-size": "2vw",
                "margin": "2vw"
            },
            stylesStr: `
                border: 1px solid black,
                border-radius: .2vw,
                color: black,
                display:inline-block,
                font-size: 1.2vw,
                margin: .5vw,
                padding: .1vw
            `
        },
        {
            image: "",
            isDropdown: false,
            text: "MEAN",
            route: "mean",
            styles: {
                "color": "black",
                "font-size": "2vw",
                "margin": "2vw"
            },
            stylesStr: `
                border: 1px solid black,
                border-radius: .2vw,
                color: black,
                display:inline-block,
                font-size: 1.2vw,
                margin: .5vw,
                padding: .1vw
            `
        }
    ],
    menuContainerStylesObj: {
        "border": "1px solid black",
        "border-radius": "1vw",
        "color": "black",
        "font-family": "Arial",
        "font-size": "2.0vw",
        "font-weight": "400",
        "margin": "0 0 2vw 0",
        "padding": ".5vw",
        "width": "auto"
    },
    menuContainerStyles: `
        border: 1px solid black,
        border-radius: 1vw,
        background: radial-gradient(rgb(91,79,79), #9d9d98, rgb(187,187,181)),
        color: black,
        font-family: Arial,
        font-size: 2.0vw,
        font-weight: 400,
        margin: 0 0 2vw 0,
        padding: .5vw,
        width: auto
    `
};