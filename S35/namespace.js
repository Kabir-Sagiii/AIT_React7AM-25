var myNameSpace1;
(function (myNameSpace1) {
    function f1() {
        console.log("i am from namespace-1");
    }
    myNameSpace1.f1 = f1;
})(myNameSpace1 || (myNameSpace1 = {}));
var myNameSpace2;
(function (myNameSpace2) {
    function f1() {
        console.log("i am from namespace-2");
        f2();
    }
    myNameSpace2.f1 = f1;
    function f2() {
        console.log("F2 is called");
    }
    myNameSpace2.f2 = f2;
})(myNameSpace2 || (myNameSpace2 = {}));
myNameSpace1.f1();
myNameSpace2.f1();
myNameSpace2.f2();
