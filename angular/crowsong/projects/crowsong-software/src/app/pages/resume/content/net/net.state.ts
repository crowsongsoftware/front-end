import { ExperienceState, NetState } from "../../resume.types";

export const experienceState: ExperienceState = {
    title: "Experience",
    titleStyles: "font-size: 1.3vw;text-decoration: underline;padding-bottom:1vh",
    summaries: [
        {
            heading: '',
            company: '',
            position: '',
            summary: [
                ''
            ]
        }
    ],
    details: [
        {
            heading: '',
            detailList: [
                ''
            ]
        }
    ]
};

export const netState: NetState = {
    experienceState: experienceState,
    title: ".NET",
    titleStyles: "font-size:1.75vw"
};

