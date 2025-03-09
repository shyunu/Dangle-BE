export const formatHourMinute = (time: string) => {
    const [hours, minutes] = time.split(":");
    return `${hours}:${minutes}`;
}