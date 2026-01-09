export interface Content {
    _id: number,
    type: 'X' | "Youtube" | "Text" | "Audio" | "Image" | "Video" | "Article",
    title: string,
    content: string,
    tags: string[],
    date: string,
    link: string,
    userId: {
        _id: number,
        username: string
    }
}