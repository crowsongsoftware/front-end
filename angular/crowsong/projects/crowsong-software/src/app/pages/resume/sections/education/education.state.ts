import { Institution } from "./types/institution";

export type EducationState = {
    title: string;
    titleStyles: string;
    institutions: Array<Institution>;
};

export const educationState: EducationState = {
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
};

