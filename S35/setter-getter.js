"use strict";
class MyBox {
    constructor() {
        this.city = "hyderabad";
    }
    get mycity() {
        return this.city;
    }
    set mynewcity(newCity) {
        if (newCity === "") {
            console.log("city value cannot be empty");
        }
        else {
            this.city = newCity;
        }
    }
}
var a1 = new MyBox();
console.log(a1.mycity);
a1.mynewcity = "pune";
console.log(a1.mycity);
