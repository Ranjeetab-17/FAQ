import { IComment } from './IComment';

export interface IFAQ {
    faqTitle: string;
    faqSubTitle: string;
    addby: string;
    likes: number;
    dislikes: number;
    attachments: Array<string>;
    comments: Array<IComment>;
}