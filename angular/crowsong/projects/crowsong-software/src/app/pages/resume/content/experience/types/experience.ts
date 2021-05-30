import { ExperienceDetail } from "./experienceDetail";
import { ExperienceSummary } from "./experienceSummary";

export type Experience = {
    title: string;
    titleStyles: string;
    summaries: Array<ExperienceSummary>;
    details: Array<ExperienceDetail>;
};