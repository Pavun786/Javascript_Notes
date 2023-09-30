

  // function foo(){
  //   console.log(this)

  // }
  

  // let obj = {
  //   name:"pavun"
  // }
  // //foo.bind(obj) ----> Its not bind the object with function.but it create new function.so,this new function is assign to already given function
  // //after {this} keyword refer-->{name:"pavun"}
  // foo =foo.bind(obj);
  // foo();
 
  //-----------------------------------------------------------
  // In Call -we not asigned to function
  //Here we can pass n num.of parameters
  //  function foo(a,b){
  //   console.log(this ,a,b)
  //  }

  //  let obj ={
  //    name:"guna"
  //  }
  //   foo.call(obj,2,6)

  //------------------------------------------------------------
  //In apply- we pass two parameters
  //  one is which object to be Bind,
  //  2nd is Array[]
  //  But we can pass n num of values in to array

  //  function foo(a,b,c){
  //   console.log(this,a,b,c)
  //  }

  //  let obj = {
  //   name:"pavun"
  //  }

  //  foo.apply(obj,["Guna","karthi","Guna"])   // {name:"pavun"} "Guna" "karthi" "Guna"
 
  
 async function foo(){
  return 1;
 }
 console.log(foo())