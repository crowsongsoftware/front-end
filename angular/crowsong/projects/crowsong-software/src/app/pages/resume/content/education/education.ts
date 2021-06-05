import { Institution } from "./institution/institution";

export type Education = {
    title: string;
    institutions: Array<Institution>;
};