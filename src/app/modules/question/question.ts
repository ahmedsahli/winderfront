import { Option } from "../option/option";

export interface Question {
    question_id: number;
    text: string;
    correct_option: string;
    options: Option[];
}