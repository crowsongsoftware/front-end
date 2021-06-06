import { Experience } from "./types/experience";

export type ExperienceState = {
    title: string;
    header: Array<string>;
    experienceList: Array<Experience>;
};

export const defaultState: ExperienceState = {
    title: "Experience",
    header: [
        "Company",
        "Position",
        "From",
        "To"
    ],
    experienceList: [
        {
            company: "Crowsong Software",
            position: "Owner/Consultant",
            fromDate: "January 2016",
            toDate: "Present",
            details:[] 
        },
        {
           company: "Imagination Software",
           position: "Owner/Consultant",
           fromDate: "",
           toDate: "December 2015",
           details:[] 
        },
        {
            company: "XXX",
            position: "Senior Software Engineer",
            fromDate: "February 2014",
            toDate: "November 2016",
            details:[]
        },
        {
            company: "Sogeti",
            position: "Senior Software Engineer",
            fromDate: "May 2011",
            toDate: "January 2014",
            details:[]        
        },
        {
            company: "Robert Half Technologies",
            position: "Senior Software Engineer",
            fromDate: "",
            toDate: "",
            details:[]
        },
        {
            company: "Robert Half Technologies",
            position: "Senior Software Architect",
            fromDate: "",
            toDate: "",
            details: []
        },
        {
            company: "Quantix",
            position: "Senior Software Engineer",
            fromDate: "",
            toDate: "",
            details:[]
        },
        {
            company: "Weyerhaeuser",
            position: "Senior Software Engineer",
            fromDate: "",
            toDate: "",
            details:[]
        },
        {
            company: "Critical Technologies",
            position: "Software Engineer",
            fromDate: "",
            toDate: "",
            details:[]
        },
        {
            company: "Source Labs",
            position: "Software Engineer",
            fromDate: "",
            toDate: "",
            details:[]
        },
        {
            company: "Pikes Peak Community College",
            position: "Adjunct Instructor",
            fromDate: "",
            toDate: "",
            details:[]
        },
        {
            company: "WorldCom",
            position: "Software Engineer",
            fromDate: "",
            toDate: "",
            details:[]
        }
    ]
};