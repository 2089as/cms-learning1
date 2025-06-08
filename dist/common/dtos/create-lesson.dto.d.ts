declare class VocabularyItem {
    term: string;
    video?: string;
    description: string;
}
export declare class CreateLessonDto {
    level_id: string;
    title: string;
    video_url?: string;
    description?: string;
    day: number;
    vocabulary?: VocabularyItem[];
}
export {};
