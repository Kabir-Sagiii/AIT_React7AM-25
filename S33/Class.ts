class Product{

    id:number;
    name:string;
    price:number;
    rating:number;

    constructor(id:number,name:string,price:number,rating:number){
        this.id=id
        this.name=name
        this.price=price
        this.rating = rating
    }

    // constructor(){
    //     this.id=101
    //     this.name="Iphone 12"
    //     this.price=59000
    //     this.rating = 4.7
    // }

    changeName(newName:string){
        this.name = newName;
        this.display()
    }

    display(){
        console.log(this.id,this.name,this.price,this.rating)
    }


}

  var obj1 =  new Product(101,"iphone 12",59000,4.3)
  obj1.display()

//obj1.changeName("Iphone 15")
console.log("----------------------")

  var obj2 = new Product(102,"iphone 16",79000,4.7)
  obj2.display()