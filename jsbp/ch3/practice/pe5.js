// create an object `people` that contains an empty array `friends`
const people = {
    friends: []
};
// create 3 variables, each containing an object, that has first, last, and an ID
const friend1 = {
    first: "Josh",
    last: "Scharp",
    id: 1,
};
const friend2 = {
    first: "Paul", 
    last: "Jones",
    id: 2,
};
const friend3 = {
    first: "Robert", 
    last: "Kloetzli",
    id: 3,
};
// add the three friends to the 'friend' array
people.friends = [friend1, friend2, friend3];
// output the array to the console
console.log(people);