export interface FeedbackProps {
    countLike: number; 
    countDislike: number;
    onLike: () => void;
    onDislike: () => void;
    onReset: () => void;
}