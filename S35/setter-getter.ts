
class MyBox{
    private city :string = "hyderabad"

    get mycity():string{
        return this.city
    }

    set mynewcity(newCity:string){
        if(newCity===""){
            console.log("city value cannot be empty")
        }else{
   this.city = newCity }
    }

}

   var a1= new MyBox()
   console.log(a1.mycity)

   a1.mynewcity = "pune"
   console.log(a1.mycity)