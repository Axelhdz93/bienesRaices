export function formatPrice(price: number) {
    return Number(price).toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
    });
}