function Factory(input:any){
    return function(target:any){
         console.log("Class Decorator")
         var t1= new target()
         t1.name = input 
         console.log(t1.name)
    }
}

function propertyDecorator(target:any,propertyName:any){
    console.log("Property Decorator")
console.log(propertyName)
}

function methodDecorator(target:any,methodName:any){
    console.log("Method Decorator")
console.log(methodName)
}

@Factory("AIT")
class A11{
    @methodDecorator
    display(){
        console.log("display executed")
    }

    @propertyDecorator
    name:string="hello"

   
}