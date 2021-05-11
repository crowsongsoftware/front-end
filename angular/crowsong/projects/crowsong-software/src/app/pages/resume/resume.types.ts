/* Resume */
export type ResumeState = {
    title: string;
    titleStyles: object;
    menuItems: Array<MenuItem>;
    menuContainerStylesObj: object;
    menuContainerStyles: string;
    name: string;
    email: string;
};

export type MenuItem = {
    isDropdown: boolean;
    image: string;
    text: string;
    route: string;
    styles: object;
    stylesStr: string;
};

/* MEAN Stack */
export type MeanState = {
    title: string;
    titleStyles: string;
    experienceState: ExperienceState;
};

/* NET Stack */
export type NetState = {
    title: string;
    titleStyles: string;
    experienceState: ExperienceState;
};

/* Experience */
export type ExperienceState = {
    title: string;
    titleStyles: string;
    summaries: Array<ExperienceSummary>;
    details: Array<ExperienceDetails>;
};

export type ExperienceSummary = {
    heading: string;
    company: string;
    position: string;
    summary: Array<string>;
};

export type ExperienceDetails = {
    heading:string;
    detailList: Array<string>;
};

export type SkillsSummary = {
    title: string;
    titleStyles: string;
    skills: Array<string>;
};

/* Education */
export type EducationState = {
    title: string;
    titleStyles: string;
    institutions: Array<Institution>;
};

export type Institution = {
    name: string;
    degree: string;
    program: string;
    school: string;
    accomplishmentHeading: string;
    accomplishments: Array<string>;
};

