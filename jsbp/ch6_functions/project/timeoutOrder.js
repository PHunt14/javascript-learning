let firstFunction = x => console.log("One");
let secondFunction = y => console.log("Two");
let thirdFunction = z => {
    console.log("Three");
    firstFunction();
    secondFunction();
}
let fourthFunction = w => {
    console.log("Four");
    setTimeout(firstFunction, 1000);
    thirdFunction();
}
fourthFunction();