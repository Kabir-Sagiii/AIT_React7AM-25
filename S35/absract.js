"use strict";
class A {
    constructor() {
        this.name = "";
    }
    changeName() {
        this.name = "xyz";
    }
}
class MyClass extends A {
    display() {
        console.log("implmented in child class");
    }
}
class myBox extends A {
    display() {
        console.log("mybox is called");
    }
}
