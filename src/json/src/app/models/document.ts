export class Document {
    id!: number;
    title!: string;
    type!: 'PDF' | 'LINK' | 'PAGE';
    url!: string;
    updatedAt!: Date;
}