export const formatReviewScore = (score?: number | null): string => {
    return typeof score === "number" ? score.toFixed(1) : "0.0";
};