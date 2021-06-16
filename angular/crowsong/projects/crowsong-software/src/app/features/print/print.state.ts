type Institution = {
    name: string;
    degree: string;
    program: string;
    school: string;
    accomplishmentHeading: string;
    accomplishments: Array<string>;
};

type Experience = {
    company: string;
    position: string;
    fromDate: string;
    toDate: string;
    details: Array<string>;
};

export type PrintState = {
    header: {
        name: string;
        title: string;
        subTitle: string;
        email: string;
        website: string;
        print: boolean;
    };

    education:{
        title: string;
        titleStyles: string;
        institutions: Array<Institution>;
    };

    experience:{
        title: string;
        header: Array<string>;
        experienceList: Array<Experience>;
    };

    skills:{

    };

    leadership:{

    };
};

type Select = {
    title: string;
    name: string;
    checked: boolean
};

export type SelectSectionState = {
    title: string;
    titleStyles: string;
    selectSectionList: Array<Select>
};

export const selectSectionState: SelectSectionState = {
    title: `Select Resume Sections To Print`,
    titleStyles: `font-family: Arial;
                  font-size: 2vw;
                  padding: .5vw;`,
    selectSectionList: [
        {title: `Heading`, name: `heading`, checked: true},
        {title: `Education`, name: `education`, checked: false} ,
        {title: `Experience`, name: `experience`, checked: false} ,
        {title: `Skills`, name: `skills`, checked: false},
        {title: `Leadership`, name: `leadership`, checked: false}   
    ]
};

export const printState: PrintState = {
    header: {
        name: ``,
        title: ``,
        subTitle: ``,
        email: ``,
        website: ``,
        print: false
    },
    education: {
        title: `Education`,
        titleStyles: `font-size: 1.75vw;
                  padding: .5vw;`,
        institutions: [
            {
                name: "Pikes Peak Community College",
                degree: "Associates Degree",
                program: "Computer Information Systems",
                school: "School of Business",
                accomplishmentHeading: "Accomplishments",
                accomplishments: [
                    "Outstanding Student Award"
                ]
            },
            {
                name: "University of Colorado",
                degree: "Bachelors Degree",
                program: "Computer Science",
                school: "School of Engineering",
                accomplishmentHeading: "Accomplishments",
                accomplishments: [
                    "Dean's List"
                ]
            }
        ]
    },
    experience: {
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
    },
    skills: {},
    leadership: {}
};