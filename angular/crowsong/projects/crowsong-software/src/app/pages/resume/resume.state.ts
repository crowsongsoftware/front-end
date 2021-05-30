import { Resume } from "./resume";

export const resumeState: Resume = {
    menu:{
        menuItems: [
            {
                image: '',
                isDropdown: false,
                text: "Education",
                route: "/resume/education",
                styles: `
                    color: black;
                    display:inline-block;
                    font-size: 1.75vw;
                    margin: .5vw;
                    padding: .1vw;
                `
            },            {
                image: '',
                isDropdown: false,
                text: "Leadership",
                route: "/resume/leadership",
                styles: `
                    color: black;
                    display:inline-block;
                    font-size: 1.75vw;
                    margin: .5vw;
                    padding: .1vw;
                `
            },
            {
                image: '',
                isDropdown: false,
                text: "Experience",
                route: "/resume/experience",
                styles: `
                    color: black;
                    display:inline-block;
                    font-size: 1.75vw;
                    margin: .5vw;
                    padding: .1vw;
                `
            },
            {
                image: "",
                isDropdown: false,
                text: "Skills",
                route: "/resume/skills",
                styles: `
                    color: black;
                    display:inline-block;
                    font-size: 1.75vw;
                    margin: .5vw;
                    padding: .1vw;
                `
            },
            {
                image: '',
                isDropdown: false,
                text: "Print",
                route: "",
                styles: `
                    color: maroon;
                    display:inline-block;
                    font-size: 1.75vw;
                    margin: .5vw .5vw .5vw 2.0vw;
                `
            }
        ],
        menuContainerStyles: `
            border: 1px solid black;
            border-radius: 1vw;
            background: radial-gradient(rgb(91,79,79), #9d9d98, rgb(187,187,181));
            color: black;
            font-family: Arial;
            font-size: 2.0vw;
            font-weight: 400;
            margin: 0 0 2vw 0;
            padding: .5vw;
            width: auto;
        `
    },
    header: {
        name: "Michael McMahon",
        title: "Software Engineer",
        subTitle: "Independent Consultant",
        email: "mcmahonmichael56@gmail.com",
        website: "http://crowsongsoftware.com"
    }
};