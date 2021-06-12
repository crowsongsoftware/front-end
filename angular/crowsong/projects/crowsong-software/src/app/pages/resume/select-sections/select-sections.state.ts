import { HeadingComponent } from "../sections/heading/heading.component";

export type Section = {
    title: string;
    name: string;
    checked: boolean;
}
export type SelectSection = {
    title: string;
    titleStyles: string;
    sectionList: Array<Section>
}
export const selectSectionState: SelectSection = {
    title: `Select Resume Sections To Print`,
    titleStyles: `font-family: Arial;
                  font-size: 2vw;
                  padding: .5vw;`,
    sectionList: [
        {title: `Heading`, name: `heading`, checked: true},
        {title: `Education`, name: `education`, checked: false} ,
        {title: `Experience`, name: `experience`, checked: false} ,
        {title: `Skills`, name: `skills`, checked: false},
        {title: `Leadership`, name: `leadership`, checked: false}   
    ]
};