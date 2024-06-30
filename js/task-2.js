const country = "Australia";
const price = 120;
const deliveryFee = 50;

const priceWithShipping = price + deliveryFee;

    function getShippingMessage(country, price, deliveryFee) {
        const priceWithShipping = price + deliveryFee;
        return `Shipping to ${country} will cost ${priceWithShipping} credits`
}