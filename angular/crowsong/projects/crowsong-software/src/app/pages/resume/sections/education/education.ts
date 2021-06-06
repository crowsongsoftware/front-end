import { Institution } from "./presentation/institution/institution";

export type Education = {
    title: string;
    titleStyles: string;
    institutions: Array<Institution>;
};