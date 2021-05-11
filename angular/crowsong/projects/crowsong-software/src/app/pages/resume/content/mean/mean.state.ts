import { ExperienceState, MeanState } from "../../resume.types";

export const experienceState: ExperienceState = {
    title: "Experience",
    titleStyles: "font-size: 1.60vw;text-decoration: underline;padding-bottom:1vh",
    summaries: [
        {
        heading: 'Experience Summary',
        company: 'Crowsong Software',
        position: 'Independent Consultant',
        summary:[
            '* See Details'
        ]  
    }
],
    details:[]
};

export const meanState: MeanState = {
    title: "MEAN Stack",
    titleStyles: "font-size:1.75vw;padding-bottom:1vh",
    experienceState: experienceState
};