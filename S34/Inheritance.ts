class A {
 id:number;
 name:string;

 constructor(){
    this.id = 101;
    this.name="xyz"
 }

 displayDetails(){
    console.log(this.name,this.id)
 }
}

class B extends A {
    age:number;
    gender:string 

    constructor(){
        super(); //call of parent class constructor
        this.age = 34;
        this.gender="male"
    }
}

let b = new B() 
b.name = "abc"
b.displayDetails()

let a1 = new A() 
a1.displayDetails()

b.id = 107 
a1.displayDetails()
b.displayDetails()
