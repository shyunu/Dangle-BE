// 예약 대기 잔여일수
export const getRemainingDays = (reservationDate: Date) => {
    const today = new Date();
    const timeDiff = reservationDate.getTime() - today.getTime(); // 밀리초 차이 계산
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 밀리초 → 일(day) 변환
    return dayDiff;
};
