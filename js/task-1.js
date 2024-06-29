const quantity = 5;
const pricePerDroid = 3000;

const totalPrice = quantity * pricePerDroid;


function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits`;
}
