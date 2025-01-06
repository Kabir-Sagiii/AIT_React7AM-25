class A {
    public name:string="xyz"

    display(){
        console.log("display is called")
        console.log(this.name)
    }
}

class B extends A{

    print(){
        console.log(this.name)
    }
}

var a1 = new A()
a1.name="abc"