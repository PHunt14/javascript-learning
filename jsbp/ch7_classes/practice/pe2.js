class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullname() {
        console.log(this.firstname + " " + this.lastname);
    }
}

let friend1 = new Person("Josh", "Scharp");
let friend2 = new Person("Krista", "Liller");

friend1.fullname();
friend2.fullname();