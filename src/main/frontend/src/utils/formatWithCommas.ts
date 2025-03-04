export const formatWithCommas = (price: number | null) => {
    if (price == null) {
        return price;
    }
    return price.toLocaleString("ko-KR");
};
