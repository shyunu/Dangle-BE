export const generateTimeTable = (open: string, close: string) => {
  const timeTables: string[] = []; // 시간테이블
  const [openHour, openMin] = open.split(":").map(Number);
  const [closeHour, closeMin] = close.split(":").map(Number);

  for (let hour = openHour; hour < closeHour; hour++) {
    const display =
      hour < 12
        ? `오전 ${hour.toString().padStart(2, "0")}:00`
        : `오후 ${(hour === 12 ? 12 : hour - 12).toString().padStart(2, "0")}:00`;
    timeTables.push(display);
  }

  return timeTables;
};
