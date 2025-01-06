"use strict";
class Payment1 {
    processPayment(amount) {
        //Logic to process payment in generic way 
        var getPreviousAmount = 1234;
        var newamount = getPreviousAmount + amount;
    }
}
class CreditCard1 extends Payment1 {
    processPayment(amount) {
        //Logic to process payment in generic way 
        //Logic to get the Previous amount
        console.log("Credit Amount");
        var getPreviousAmount = 3456;
        var newamount = ((getPreviousAmount + amount) - 2000);
    }
}
class DebitCard1 extends Payment1 {
    processPayment(amount) {
        //Logic to process payment in generic way 
        //Logic to get the Previous amount
        console.log("Debit Amount");
        var getPreviousAmount = 3456;
        var newamount = ((getPreviousAmount + amount) - 1000);
    }
}
var p1 = new Payment();
// p1.amount; not accessible
