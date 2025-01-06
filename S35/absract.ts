abstract class A{
  name:string=""
    abstract display():void

    changeName(){
        this.name="xyz"
    }
}

class MyClass extends A{

    display(): void {
        console.log("implmented in child class")
    }

}

class myBox  extends A{
    display(): void {
        console.log("mybox is called")
    }
}