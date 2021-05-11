import { Action } from "redux";

interface AddMessageAction extends Action{
    message: string;
}

interface DeleteMessageAction extends Action{
    index: number;
}