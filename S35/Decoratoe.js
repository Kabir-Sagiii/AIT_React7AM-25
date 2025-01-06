"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myFirstDecorator(target) {
    console.log("decorator ex");
    // console.log(target)
    var p1 = new target();
    //   console.log(p1.price,p1.title)
    console.log("hello display will execute");
    p1.display();
    console.log("hello display executed");
}
let Product = class Product {
    constructor() {
        this.title = "Trimmer";
        this.price = 1234;
    }
    display() {
        console.log(this.price, this.title);
    }
};
Product = __decorate([
    myFirstDecorator
], Product);
