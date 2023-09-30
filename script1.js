
//Destructuring:

// var { name,age,gender} = {
   
//     name:"pavun",
//     age:28,
//     gender:"male"
//   }
   
//   console.log(name)
//   console.log(age)
   
//   let [a,b,c]=["apple","orange","mango"]
   
//     console.log(a)
   
   
//-----------------------------   
//this keyword:
  // In JavaScript, the this keyword allows us to:  Reuse functions in different execution contexts.

  var student = {
    firstName : "Pavun",
    lastName: "Kumar",
    fullName: function(){
      return `${this.firstName}, ${this.lastName}`
    }
  }
  console.log(student.fullName());   // Pavun,Kumar
  
  
  var version = {
    firstName : "Guvi",
    lastName: "Class",
    portal: student.fullName     //----> point out a function in student array for copy a that syntax
  }
  
  console.log(version.portal());     //Guvi, Class
  
  
  var zen = function(){
    return `${this.firstName}, ${this.lastName}`
  }
  
  var teacher = {
    firstName : "zen",
    lastName: "portal",
    portal: zen
  }
  
  console.log(teacher.portal());     //zen, portal
  
  