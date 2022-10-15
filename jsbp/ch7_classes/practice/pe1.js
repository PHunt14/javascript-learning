class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let friend1 = new Person("Josh", "Scharp");
let friend2 = new Person("Krista", "Liller");

console.log("Hello " + friend1.firstname + " " + friend1.lastname);
console.log("Hello " + friend2.firstname + " " + friend2.lastname);