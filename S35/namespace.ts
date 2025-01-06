namespace myNameSpace1 {
   export function f1(){
    console.log("i am from namespace-1")
   }
}

namespace myNameSpace2 {
    export function f1(){
        console.log("i am from namespace-2")
        f2()
       }
       export function f2(){
        console.log("F2 is called")
       }
}

  myNameSpace1.f1() 

  myNameSpace2.f1()
  myNameSpace2.f2()