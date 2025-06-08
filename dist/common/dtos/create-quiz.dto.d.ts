declare class QuizQuestionDto {
    question: string;
    options: string[];
    correctAnswer: number;
    videoUrl?: string;
}
export declare class CreateQuizDto {
    level_id: string;
    title: string;
    day: number;
    questions: QuizQuestionDto[];
}
export {};
