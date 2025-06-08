export declare class CreateUserProgressDto {
    user_id: string;
    current_screen?: string;
    current_level?: string;
    current_day?: number;
    completed_days?: number[];
    passed_days_details?: Record<number, boolean>;
    quiz_results?: Record<number, any>;
}
