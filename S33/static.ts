class User{
    id:number;
    uname:string;
    static city:string

    // constructor(){} //default constructor

    constructor(id:number,uname:string){
        this.id = id;
        this.uname = uname
        User.city = "hyd"
    }

    display(){
        console.log(this.id,this.uname,User.city)
    }

    static changecity(){
        this.city = "pune"
        
    }
}

 var user1 =   new User(101,"raj")
 user1.display()

 var user2 =   new User(102,"sneha")
 user2.display()

 User.changecity()

 user1.display()
 user2.display()