function myFirstDecorator(target:any){
    console.log("decorator ex")
// console.log(target)
  var p1 = new target()
//   console.log(p1.price,p1.title)
console.log("hello display will execute")
p1.display()
console.log("hello display executed")
}

   @myFirstDecorator
   class Product {

       title:string="Trimmer"
       price:1234 = 1234

       display(){
        console.log(this.price,this.title)
       }
   }