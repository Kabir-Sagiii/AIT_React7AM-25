var User = /** @class */ (function () {
    // constructor(){} //default constructor
    function User(id, uname) {
        this.id = id;
        this.uname = uname;
        User.city = "hyd";
    }
    User.prototype.display = function () {
        console.log(this.id, this.uname, User.city);
    };
    User.changecity = function () {
        this.city = "pune";
    };
    return User;
}());
var user1 = new User(101, "raj");
user1.display();
var user2 = new User(102, "sneha");
user2.display();
User.changecity();
user1.display();
user2.display();
