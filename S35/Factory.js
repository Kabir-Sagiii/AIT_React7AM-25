"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Factory(input) {
    return function (target) {
        console.log("Class Decorator");
        var t1 = new target();
        t1.name = input;
        console.log(t1.name);
    };
}
function propertyDecorator(target, propertyName) {
    console.log("Property Decorator");
    console.log(propertyName);
}
function methodDecorator(target, methodName) {
    console.log("Method Decorator");
    console.log(methodName);
}
let A11 = class A11 {
    constructor() {
        this.name = "hello";
    }
    display() {
        console.log("display executed");
    }
};
__decorate([
    methodDecorator
], A11.prototype, "display", null);
__decorate([
    propertyDecorator
], A11.prototype, "name", void 0);
A11 = __decorate([
    Factory("AIT")
], A11);
