let invArray = {
    items: []
};
const item0 = {
    name: "LCD Monitor",
    model: 123,
    cost: 199.99,
    quantity: 42,
};

const item1 = {
    name: "4K Ultra HD Monitor",
    model: 321,
    cost: 299.99,
    quantity: 24,
};

const item2 = {
    name: "500 G SSD",
    model: 312,
    cost: 29.99,
    quantity: 11,
};

invArray.items = [item0, item1, item2];
console.log(invArray);
console.log(invArray.items[2]["quantity"]);