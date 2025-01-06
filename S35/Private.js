"use strict";
class Payment {
    constructor() {
        this.amount = 6789;
    }
    display() {
        console.log(this.amount);
    }
}
class CreditCard extends Payment {
    getAmount() {
        // console.log(this.amount) not accessible
    }
}
var p1 = new Payment();
// p1.amount; not accessible
