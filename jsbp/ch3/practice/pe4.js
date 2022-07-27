const myCar = {
    make: "Ford",
    model: "Fiesta",
    year: 2014,
    mileage: 211329,
};

const colorVar = "color";
myCar[colorVar] = "Black";
const forSaleVar = "forSale";
myCar[forSaleVar] = false;
console.log(myCar["make"]);
console.log(myCar["model"]);
console.log(myCar["forSale"]);
