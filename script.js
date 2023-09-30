/*
Js is programing language

Live wire or Live script was created by Brendan Eich in 1995 with Netscape.after this name changes as Javascript

HTML---> is skeleton CSS--->skin  JS---> Brain of humans

so,Java script create a intraction between browser and user


[Humans] create High level languages ---- compailer/ Interpreter ---> Machine language( 0 1) [Computer]

Basically computers known 0 and 1
Its very difficult to understand by humans.
So,Humans create High level language --->after it was converted or compalied in to Machine code
That compailed work was done by compailer or Interpreter softwares

   Compailer                        VS                Interpreter
 It scan entire program first,                  It scan line by line and translate in to machine code
 Then translate into machine code

 Errors occure after scanning whole             Error occure after scanning each line
 programe  

 Debugging is slower                             Debugging is faster

 Execution time is less                          Execution time is more

 e.g: C, C++                                     e.g:JAVA , PYTHON 
------------------------------------------------------------------------------------------------------------------------
video-2
With Javascript ,we can build bellow items:
    - websites
    - web app
    - mobile apps
    - Desktop apps
    - games
    - AI & Machine Learning

Javascript Frameworks
    - ReactJs
    - Vue Js
    - Angular Js
    - ElectronJs and much more    

------------------------------------------------------------------
video-4:

ECMA Script -----> is a set of instruction or rules or standard for scripting languages ,start version 1997 ,latest version  2015 or ES6
Java script ------> is follw the instructions of ECMA Scripts

ES5 --> ECMA Script 5 or ECMAScript 2009

ES6 --> ECMA Script 6 or ECMAScript 2015

latest ES13 ---> ECMA Script 2022

----------------------------------------------------------
Video-5:

Text Editors for Javascript

    - Sublime Text 3
    - Atom
    - VSCode

------------------------------------------------------------
 
Video-10:

javascript variable----> its a temporary memory location for store the Data
3 ways we declere---> var,let,const

let name ="Pavunkumar";
let fullName = "I am " + name + " from tiruvannamalai"
console.log(fullName)

let num1 = 100;
let num2 = 200;

console.log(num1 + num2)

rules:
1. No use javascript keywords as variable names
2.variable name should not start with Number
3.No space & No -
4.Its Case-Sensitive
5.Use meaning full name
-----------------------------------------------------------------------------
video-12;

Data types - 2 major catagories:

 1. Primitive types --> string,Number,Boolean,undefined,Null
 2.Reference types  --> Object,Array,Function

--------------------------------------------------------------------------
video-13:

Generaly the programing langugaes are catogarized by 2 types:

1. Statically typed :
----> means when we assign the value to the variable ,then we must additionaly declere what is the datatype of that values
e.g: C,Java etc..

2.Dynamic typed:
-----> it means when we assign the value to the variable,then we not mention the datatype
e.g: javascript,python etc..

-------------------------------------------------------------------------------

video-14:
object--->symbol:{} & look like key:"value" pairs

var person = {
  
   name: "pavun",
   age: 27,
   gender: "male",
   likes:{
     sport:"cricket",
    sportperson:"Ms-Dhoni"
   }
}
here the values are print by 2 ways:

 1.Dot Notation:
 console.log(person.name)---->o/p:pavun

 2.Bracket Notation: 
 console.log(person["name"])-->o/p:pavun

 -----------------------------------------------------------
 video-15:
 
 Arrays
 ---> means collection of elements
 ---> its represents by []

 const arr=["apple","orange","mango"]

 console.log(arr[0])    ---->o/p "apple"
 console.log(arr.length) ---> o/p 3
 console.log(typeof arr) ---> object

 ---------------------------------------------------------------

 video-16:

 Function---->A JavaScript function is a block of code designed to perform a particular task.

 e.g:

    function foo(firstName,lastName){
    
    console.log( "I am "+ firstName +" "+ lastName + " from thiruvannamalai")
    
  }
  foo("pavun","kumar");
  foo("Naresh","Babu");

  o/p-1:"I am pavun kumar from thiruvannamalai"
  o/p-2:"I am Naresh Babu from thiruvannamalai"
--------------------------------------------------------------------

video-17:

Javascript Operators:
Operators are used to assign values, compare values, perform arithmetic operations, and more.

types: 1. Arithmetic operators ----> + , - , * , / , % , ++ , -- , **
       2. Comparison operators  ---> < , > , == , === ,etc..
       3. Assignment operators ----> = , += , -= , *= , /=
       4.Logical operators  -------> && , || ,!
       5.Bitwise operators   ------>

---------------------------------------------------------------------------------

video-18;

Arithmatic operators:

e.g:  var number1 = 100;
      var number2 = 20;

   console.log( ++number1) ---->o/p 101
   console.log( number1 ++) ---> o/p 101
   console.log(number1)    ----> o/p 102

---------------------------------------------------------------------------------

video-19:

Assignment operators:  ie: value is assign to the variable

e.g:  var num1 = 10

      num1 += 12

      console.log(num1) -----> o/p : 22

     [OR]

    var num1 = 10

    num1 = num1 + 12

    console.log(num1)  -----> o/p : 22

----------------------------------------------------------------------------------------------

video-20:

Comparison operator: Its return boolean  true or false

1.Relational operator:
 
  let x = 5;

  console.log( x < 5) --->false
  console.log(x <= 5) ---> true
  console.log(x > 5) ----> false
  console.log( x >=5) ---> true

2.Equality operator:

 let x = 5;

 console.log( x === 5); ---> true
 console.log( x !== 5); ---> false

3.String comparison

 console.log("Pavun" < "Naresh") --->o/p false

 its compare first charactor of boths.
 If both first charactors same,then its take 2nd charactor
 
 console.log("Ajith > Anbu")--> o/p: false

4.comparison of different type:

console.log( "1" < 5) --->o/p: true..because program assume as 1 < 5
console.log(true == 1) ---> o/p true..because true is 1

--------------------------------------------------------------------------------------
video-21;

Equality operators:

---strict Equality operator---:

This operator both check datatype and values

console.log( 1 === 1) -----> o/p: true
console.log("1" === 1) ----> o/p: false

---Lose Equality operator---:

This operator check only the values of both sides..not consider datatype

console.log(1 == 1) ---> o/p true
console.log( "1" == 1)--> true
console.log( true == 1)--> true

Generally Strict equality is faster than lose equality.beacose,In Lose type,type casting occur.
so,Its execute slower than Strict type

---------------------------------------------------------------------------------------------
video-22:

Ternary operators:

Its alternative for-- if else conditions

Syntax : condition ? "value-1" : "value-2"

e.g:
   
let age = 20;
let result = age > 18 ? "You are eligible": "You are not eligible"

console.log(result)---->o/p: "You are eligible"   

------------------------------------------------------------------------------------

video-23:

Logical operators:

3 -types:

- Logical AND (&&)-->returns True if both side condtions satisfied
- Logical OR ( || )--> returns True if any one side condition satisfies
- Logical NOT (!) --> Its change the status to opposite

e.g:

var income = true;
var cibleScore = true;

var loanStatus = income && cibleScore;

console.log("The Loan Status is:"+loanStatus)

o/p:The Loan Status is:true

----------------------------------------------------------------------------------------------------

video-24:
  Logical operator with Non-Boolean value:

  Generaly Logical operator works in Boolean value.
   and logical operator also works with non boolean values with some mechanicm or rule 

  i.e:

   Falsy rule-------> Not exactly false..but false

    // Undefined
    // null
    // 0
    // false
    // "" or ''
    // NaN
   
   If the above any datatype came then its consider as-- false
   
  Truthy rule:
  
     Anything values apart from that(falsy),is called --true
    
 
     true || false   -----> o/p true

     
    false || "Orange" ----> o/p: Orange

    Because, Orange is string.and it not came under Falsy..so,its consider as Truthy.
    
    If both side false came,then we get a rigth side value

    false || undefined ----> o/p: undefined
    undefined || false -----> false

    If both side true came,then we get a left side value

    true || "red" -----> true
    "red" || true -----> red

 
------------------------------------------------------------------------------------
video-25:
Bitwise Operator

Human code --> Machine code (0 ,1)

     1    ---> 00000001
     2    ---> 00000010
     3    ---> 00000011

   console.log( 1 | 2); Bitwise OR -----> o/p:3
   
   i.e:  00000001
         00000010
       ------------
         00000011     -------->o/p:3
       ------------

   
       console.log( 1 & 2); Bittwise AND ----> o/p:0


e.g:-1


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | writePermission 

let message = ( myPermission & readPermission) ? "Yes" : "No"

console.log(message)------->o/p: No

e.g:-2


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | writePermission | readPermission;

let message = ( myPermission & readPermission) ? "Yes" : "No"

console.log(message) ------->o/p: True

---------------------------------------------------------------------------------------------------------------------------------

video -26:

Operator precedence:

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

let x = 100 + 50 * 3;

console.log(x)----->250

If have same pririority operators,then go from left to rigth

let x = 100 / 50 * 3;

console.log(x) ----->o/p: 6

and view more in websites

-----------------------------------------------------------------------------------------------------
video-27:

Conditional statements:

 - if else condition
 - switch-case condition

 -if else condition:

 e.g:

 let hour = new Date().getHours()----->this code used to get current hour 
 
 if(hour >= 0 && hour<=12){
   
  console.log("Good Morning Guys") 
}
else if(hour >= 12 && hour <=17){
  console.log("Good Afternoon Guys") 
}
else{
   
  console.log("Good Evening" ) 
}

------------------------------------------------------------------------------------------------------------------------------------
video-28

Switch statements:
 
break keyword used for execute only satisfied ones..others not execute.
which case condition was pass by this grade,that particular result was printed 

rule:
    // If use some condition in case (eg: case ( X > 20)),the we must give true in switch ---> switch (true).
        otherwise only mention variable name.

    // Arrange a case condition from Higher value to lower value for get correct o/p

    // Use break keyword --> for get exact o/p 

    // default keyword like as else word --->use for manage others

var grade = "A";
 
switch(grade){
   
    case "S":
       
      console.log ("Super grade");
      break;
       
    case "A":
       
      console.log("Good grade");
      break;
       
    case "E":
       
      console.log("Pass grade");
      break;
       
      case "U":
       
      console.log("Failed grade");
      break;
       
      default:
      
      console.log("Unknown grade");
      
 
}

e.g:2

while use the Number data type,then we must write (mark as true) 

 var mark = 90;
 
 switch(true){
   
   
   case(mark >=90):
      
      console.log("Awesome");
      break;
   
    case (mark >= 50):
      
      console.log("Pass");
      break;
      
   case(mark<50):
      
      console.log("Failed");
      break;
      
    default:
    
      console.log("Wrong marks")
   
}
------------------------------------------------------------------------------------------------------------------------------

video-29:

Loops:

types: - For Loop,
         while loop,
         Do while loop,
         For of loop,
         For in loop

 For-Loop:
 
 syntax: for(Initialstate ; condition ; step){
           console.log()
          }

 e.g:      
      for(let i = 0; i<=10 ; i++){
   
      console.log(i) 
   
     }

     for(let i = 10 ; i>=1 ; i--){
   
         console.log(i) 
   
     }
 
     for(let i=0;i<=15;i++){
   
        if(i%2 == 0){
    
         console.log(i) 
        }
   }   
  
----------------------------------------------------------------------------------------------------------------------------------------
   video-30:

   While Loop:

   Its a another type of loop,and its deformation from for loop

   i.e:    
   
    stage-1: for(let i = 0; i<=10 ; i++){
   
                console.log(i) 
   
               }

    stage-2:  let i =1

            for (; i<=10 ; ){
   
            console.log(i) 
   
              i ++ 
            }


    stage -3: To deforms as while loop by programmers

            let i =1

            while (i<=10){
   
            console.log(i) 
   
              i ++ 
            }
 ------------------------------------------------------------------------------------------------------------------------------
 
 video-31:

 Do-while loop:

 In this loop first execute the codes,then after only while condition check

  syntax :  do{

             //code

             step

            } while(condition)  

  e.g:
  
          let i = 0;
 
          do {
   
           if(i % 2 ==! 0){
    
             console.log(i) 
           }
              i++
           }
            while(i<=10)
----------------------------------------------------------------------------------------------------------------------------------------------------------

video-32:

For In Loop:
This loop was introduced in modern javascript

syntax: for (let key in objectname){}

        }
     here key word is not constant..its may anything word  x or y ..
     
e.g:
 
for in loop---- use in object:

  let person = {
      name:"pavun",
      age: 27,
      gender:"male"
   }
    
    for (let key in person ){
    
     console.log(key)       -----------------> o/p: name,age,gender
     
     console.log(key + ":" ,person[key]) ----> o/p: name:pavun,age:27,gender:male
  }


  for in loop---- use in arrays:


   let arr = ["apple","orange","mango"]
 
  for(let key in arr){
   
  console.log(key)  ---------------------------> o/p: index values 0,1,2

  console.log(arr[key]) -----------------------> o/p: apple,orange,mango     

}

-------------------------------------------------------------------------------------------------------------------------------
video-33;

For of loop: ----> Its also introduced in mordan javascript

syntax: for( let key of arrayname){

        } 

var arr =["apple","orange","mango"]

for(let key of arr){
  console.log(key) -------------------------> its produce the o/ps  apple,orange,mango
}

--------------------------------------------------------------------------------------------------------------------------------

video-34;

Prevent from Infinty loop; 

for(;;){
  console.log("Hi guys") -----> its create a infinite loops
}

so,when infinty loop occure,that time close the browser tap or stop the live server

----------------------------------------------------------------------------------------------------------------------------------

video-35:

Object oriented programming(OOP)

varibles
   
   let name = "Pavun";
   let age = 27;
   let interest=["teamwork","research"];
   let address = {
      city:"Tv malai",
      state:"Tamilnadu"
    }
     
function
   function greeting(){

      let msg = ` My name is ${name},i love ${interest}`
      console.log(msg)
    }
    greeting()

The above function is related with above variables.so,we must organized with in same object    

oop;

let person ={

    name : "Pavun",
    age : 27,
    interest:["teamwork","research"],
    address:{
      city:"Tv malai",
      state:"Tamilnadu"
    },
    greeting : function(){

      let msg = ` My name is ${this.name},i love ${this.interest}`  
      
      // The This. keyword is used to extract or access the value of name,interest variables in same object
      
      console.log(msg)
    }

}
person.greeting();

------------------------------------------------------------------------------------------------------------------------
 video-36;

 The above OOP methoed is not give a values in dynamically.so,we use 2 function methoeds for make dynamic
  
     1. Factory function
     2. construtor function
     
     
 Factory Function Methoed:
 
     Here function contain the object inside it
     Here greeting is called as methoed.because,when use function in side of object
 e.g:
       function createPerson(name){
  
           const person = {
                    
               name:name,
    
               greeting : function(){
      
                       let msg  = `My name is ${name}`  
      
                       console.log(msg)  
              }
    
         }
            return person
      }

       let res1 = createPerson("pavun")
       let res2 = createPerson("Guna")

       res1.greeting()    -----------------------> o/p: My name is pavun
       res2.greeting()     ---------------------->o/p: My name is Guna

                 -------OR-----

     function createPerson(name){
  
       return {
                   
          name,
      
          greeting (){
      
              let msg  = `My name is ${name}`  
      
              console.log(msg)  
         }
    
      }
    }
        let res1 = createPerson("pavun")
        let res2 = createPerson("Guna")

        res1.greeting()     ---------------------> o/p: My name is pavun
        res2.greeting()      ---------------------> o/p: My name is Guna   
--------------------------------------------------------------------------------------------------------------------------------------------

 video-37:

 Constructor Function Methoed;

   This is another one type for dynamicaly values produced in OOPS

   Generaly the constructor is ----> a special function that creates and initializes an object instance (like as xerox )

   Here the function name must Start with capital letter(By Pascal rule) for showcase its a constructor..
   new is a keyword,its create a empty object ..like as{}
   
 e.g:
     function Person (name){
  
          this.name = name;
         
          this.greeting = function (){
           
            console.log(`My name is ${this.name}`) 
         }
     }
      let person  = new Person("Pavun")
      person.greeting()  

---------------------------------------------------------------------------------------------------------------------------------------------

video-38:

In Object we can change the values,update the values,& delete the values

e.g:

     const person={
   
         name: "pavun",
         age: 27,
         place:"Tv.malai"
    }
     person.name = "guna"
     person.gender = "male"
 
     delete person.place   -------------> its delete the value of place
 
     console.log(person) -------> o/p: { name: 'guna', age: 27, gender: 'male' }

-----------------------------------------------------------------------------------------------------------------------------------------------
video-39:

The object have some special propery ie: constructor property

 
let x ={};
   
  ----OR-----
let x = new Object(){
 

}

let name = "Pavun"; // or  new String("Pavun")
let age = 3 ; // or new Number(3)
let isAlive = true ;   or // new Boolean(true)

console.log(name,age,isAlive) 

-----------------------------------------------------------------------------------------------------------------------------------------
video -40:

Javascript functions are basically objects

function Person (name){
  
  this.name = name;
  this.greeting = function (){
    console.log(`My name is ${this.name}`) 
  }
}
 
let person  = new Person("Pavun")
          --or--
 let person  =  Person.call({},"Guna")
      
 person.greeting()
 
// console.log(Person.name)         --------> give a function Name ie: Person
// console.log(Person.length)       --------> How many aruguments passed in this function .ie: 1
--------------------------------------------------------------------------------------------------------------------------------------------
video-41:

 Primitive datatype  Vs  Refrence datatype

 In primitive,the value is copied 

    let x = 10;

    let y = x;

     x = 20;
 
   console.log(x)      ------------> 20
   console.log(y)      ------------> 10


In Reference type,the refrence only copied. 
If x value is change,then where are the x-values assigned to another variable (eg: let y =x),there the value was changed
     
     let x ={
    value: 50
   }
   
     let y = x
   
    x.value = 100 
  
   console.log(x); -----> 100
   console.log(y)   ----> 100


  let cartObj = {
     value : 5
  } 
  
   function updateCart(cart){
    cart.value ++;
   }
   updateCart(cartObj)

   console.log(cartObj) ---->{ value: 6}
---------------------------------------------------------------------------------------------------------------------------------------------
video -42;

 Enumarte properties of object:


    let person ={
   
         name : "pavun",
         getFullName(){
    
         console.log(`My name is ${this.name}`) 
  }
 
}

    for ( let key in person){
   
      console.log(key,person[key]) 
}

 Generally the for of loop is not itterate the keys of object.so,we additionaly add Objet.key()
 this methoed is collect the all keys of object and store in array.then after we itterate values from that array

 console.log(Object.keys(person)) -----> [name , getFullName]

   for (let key of Object.keys(person)){
   
      console.log(key)       --------->  name ,getFullName
}

for(let key of Object.entries(person)){
    
  console.log(key)           ----------> ["name","pavun"] ["getFullName",f] 
 }


 //the below condition check that variable is availble in the object or not..!

 if("name" in person){     

  console.log("Yes")         ---------->  yes
 } 
 ---------------------------------------------------------------------------------------------------------------------------------------
 video -43:

Cloning Js Objects:---> it meants copy a values to another object

 we can make clone basically 3 ways:

 Here values of obj1 is copied to obj2

 e.g:
       const obj1 = {
  
           name:"pavun",
           age: 27,
           gender:"male"
       }

       const obj2 = {}

       for (let key in obj1){
  
       obj2[key] = obj1[key] 
      }

      console.log(obj2)  --------->   {name:"pavun",age:27,gender:"male"}

                     ---------or-----------

      const obj2 = Object.assign({},obj1)

      here 2 values as parameter  // first is {} ,second is name of object which is copied from

      console.log(obj2)----------->  {name:"pavun",age:27,gender:"male"}
      

      const obj2 = Object.assign({place:"chennai"},obj1)

      console.log(obj2)------------> {place:"chennai",name:"pavun",age:27,gender:"male"}

                  -----------or--------------
      Use spread operator----> In ES6 Feature
      
      let obj2 = {...obj1}

      console.log(obj2) ----------->  {name:"pavun",age:27,gender:"male"}

--------------------------------------------------------------------------------------------------------------------------------------------------
video -44:

Garbage Collection:

In C , Java -----> we must clear data from memory when our wwork finished
but, In Js  ----->  this work managed by javascript engine

------------------------------------------------------------------------------------------------------------------------------------------------------
video - 45:
Javascript have In-built Objects:

  ie: Math object
      String object
      Array object
      Date object
      Number object 
      Boolean object etc..
   
Math Object:      

console.log(Math.PI)   -----------------------------> 3.14

console.log(Math.abs(-3))   ------------------------> 3 (Convert Positive value)

console.log(Math.ceil(1.2)) ------------------------> 2   (round the next value)

console.log(Math.random())

 syntax for create random vaules in between two values:
 Math.random() * (max-min) + min;

console.log(Math.random() * (15 - 10) + 10) ---------> create random value in between of 10-20
 
console.log(Math.max(10,22,5,60))   -----------------> find max value

console.log(Math.min(10,22,5,60))  ------------------> find min value

const arr=[10,22,5,60]
console.log(Math.min(arr))       ------------------> NaN
console.log(Math.min(...arr))     -----------------> here speard operator used for copy the values from array.
                                                     because,its not work in array
--------------------------------------------------------------------------------------------------------------------------------------------------
 video -46;

 String Object:

 Normally, JavaScript strings are primitive values
      
    //  let firstName = "Pavun"
        console.log(firstName)   ---------> o/p: Pavun
        console.log(typeof firstName) ----> string

    //  let middleName = 'kumar'

    //  let lastName = `Elumalai`

    But strings can also be defined as objects with the keyword new:

     let firstName = new String("Pavun")
     let lastName = new String("kumar")  

       console.log(firstName)---->o/p: Pavun
       console.log(typeof firstName) --> object

       console.log(firstName.length) ------> 5

       console.log(firstName.charAt(1)) ----> a  //Return the value of that index

       console.log(firstName.concat(lastName))---> Pavunkumar

       console.log(firstName.includes("vun")) ---> true   // program check, if the char is available then true, otherwise return false 

       console.log(firstName.includes("rs"))  ---> false

       console.log(firstName.startsWith("pa"))  ---> true // program to check The word is start with "pa" or not

       console.log(firstName.endsWith("un"))  ---->  true

       console.log(firstName.indexOf("v"))  -------> 2 ie: print index of v

       console.log(firstName.repeat(2))     -------> pavunpavun // repeat the values

       console.log(firstName.replace("Pavun","guna"))  ----> guna   // here "pavun" replaced by "guna".but its not modify original value

       let name = "pavun guna"
       console.log(name.substr(6))       ----------> o/p: guna

       console.log(firstName.toUpperCase()) -------> PAVUN

       let name = "Pavunkumar  "
       console.log(name.trim())          ----------> "Pavunkumar"

       escape charcater:

       let text = "We are the so-called "Vikings" from the north."; 
        //its not work due to string used with another string double code.so,to avoid , use backward slash both side \

       let text = "We are the so-called \"Vikings\" from the north.";  
       console.log(text)--->  We are the so-called "Vikings" from the north.
       
----------------------------------------------------------------------------------------------------------------------------------------------------

video-47:

Templete literels

Generaly we done as before ES6,

         let person = "guna"
         let message1 = "Hi ,This is Pavun.please welcome"

         console.log(message) ---> Hi ,This is Pavun.please welcome


        //Its create enter in new line
        
        let message1 = "Hi ,This is Pavun.\n please welcome"
       
        console.log(message1)--------------------------------> Hi ,This is Pavun.
                                                               please welcome
          
         //String concat:

        console.log("Hi "+person+" please welcome") ---------> Hi guna please welcome


  But This Templete litrels simplifies to work easy

 ie: If we want to write in next line,then use only ` `
 
          let message1 = `Dear sir,

                This is Pavun.
                
                please welcome`
         
          console.log(message1)  ---------->    Dear sir,

                                                     This is Pavun.
                
                                                      please welcome

    For string concat:

         let person = "Guna"
         
         let message = `Hi ${person}.please welcome`

         console.log(message) ------------->  o/p:  Hi Guna.please welcome
-----------------------------------------------------------------------------------------------------------------------------------------------
video-48:

Date object:

    
 let date = Date();
 
 console.log(date)  ---> Tue Jun 06 2023 08:44:15 GMT+0000 (UTC)

  👆🏻👆🏻here above the particular data extract is not good when we saw.
  
  so,we If use bellow methoed,this came look pretty

 let date = new Date()
 console.log(date)   //----> 2023-06-06T08:48:18.531Z
 console.log(date.getDay())  // 2 --is mention tuesday
 console.log(date.getFullYear())  // 2023
 console.log(date.getDate())    // 6 is date
 console.log(date.getMonth())   // 5 is a june month ie: jan month is represent 0

  
 
 //If want cutomaize
 
 let date = new Date("July 7 1996")

 console.log(date)  --------------------------->  //1996-07-07T00:00:00.000Z
 console.log(date.getFullYear()) -------------->//1996

 let date = new Date(1996,7,6)
 console.log(date.getDate()) ------------------> // 1996

   let date = new Date()
   date.setFullYear("1999")
   console.log(date) --------------------------> //1999-06-06T09:13:03.317Z ie year was modified

   let date = new Date(628021800000)  //passing epoch timestamp and it was developed in 01 Jan 1970.and its are use in Linux OS 
   console.log(date)
   console.log(date.getFullYear())
 
  let date = new Date().toLocaleDateString("en-US").split("/")
 
  console.log(date)  --------------------------->//[ '6', '6', '2023' ]

  with destrucing :
 
  let [date,month,year] = new Date().toLocaleDateString("en-US").split("/")
 
  console.log(date,month,year) --------------> //6 6 2023  by US standard month-date-year


  let [date,month,year] = new Date().toLocaleDateString("en-IN").split("/")
 
  console.log(date,month,year) ---------------> // 6 6 2023 by Indian standard date-month-year

 -------------------------------------------------------------------------------------------------------------------------------------------------
video-50:

Array ---> It mean collection elemants.denoted as []

Array methoeds:

 const arr=["apple","orange","mango"]

 Javascript have 3 ways to add elements in array

 //1. PUSH

     This method push a elements at last end in existing array

     console.log(arr.push("banana")) ----> o/p: 4
     console.log(arr)               -----> o/p:["apple","orange","mango","banana"]

 //2. UNSHIFT
 
     This methoed push a element to array at begining

     console.log(arr.unshift("lemon")) -----> o/p: 4
     console.log(arr)                   ----> o/p: ["lemon","apple","orange","mango","banana"]

//3. SPLICE

     This methoed used to push a element to any positions
     syntax:
      arrayName.splice(number1,number2,element)

      console.log(arr.splice(1,0,"mongoose"))----> o/p: ["lemon","mongoose","apple","orange","mango","banana"]
     
      here, 1----> is which index position we add element
            0----> how many element removed from 1 st index
          "mongoose"--> element add to array

------------------------------------------------------------------------------------------------------------------------------------------------
//video -51:

var arr =["apple","orange","mango","apple"]

var res =arr.indexOf("orange")

console.log(res)                            //--------------> 1

//For find last apple index:

console.log(arr.lastIndexOf("apple"))       //---> 3


//The below one returns -1.bcz,there is no banana in array

console.log(arr.indexOf("banana"))          //---> -1


//Find element is exsits in array or not:

//method-1:

console.log(arr.indexOf("apple") !== -1)    //---> true

//method-2:

 console.log(arr.includes("apple")) // ---> true

----------------------------------------------------------------------------------------------------------------------------------------------
Video-52:

Find an element is refrenece array;

Generally values find array is easy.ie:

 var arr =["apple","orange","mango"]
 console.log(arr.indexOf("orange")) 

 If array of object came,then its not easy one.so,use below methoed

   let products =[
  
        {
          Pname:"HeadPhone",
          catagory:"electronics",
          seller:"amazon"
        }
        ,
        {
          Pname:"T-shirt",
          catagory:"carmends",
          seller:"flipcart"
        },
        {
          Pname:"Thumbles",
          catagory:"Excersise",
          seller:"shopsy"
        }
  ]
 let result = products.findIndex(function(ele){
         return ele. Pname === "Thumbles"
   })
   console.log(result)
                  ----or---
   console.log(products.findIndex((ele)=> ele.seller == "shopsy"))----->  2 //is a index value


   //Find method:---> return that whole particular data which one meets condition first

   console.log(products.find((ele)=> ele.seller == "shopsy"))  ----------> { Pname: 'Thumbles', catagory: 'Excersise', seller: 'shopsy' }

---------------------------------------------------------------------------------------------------------------------------------------------
Video-54;

//Remove element from the array:

const arr =["apple","orange","mango"]

//Basicaly 3 methods available:
 
 // POP:----> it remove last elemnt from an array
 
  console.log(arr.pop()) --->o/p: "mango"
  console.log(arr)       ---> o/p: ["apple","orange"]
 
 //SHIFT:----> it remove first elemnt from an array
 
   var res = arr.shift()
 
   console.log(res) -------->o/p: "apple"
   console.log(arr)  -------> o/p: ["orange","mango"]

 //SPLICE:--->is also remove an element from an array at any specified index
 
  console.log(arr.splice(1,2))
  console.log(arr)

-------------------------------------------------------------------------------------------------------------------------------------------
video-55;

//Emptying Javascript array:

      let number =[1,2,3,4,5]

//solution-1:

       number = [];
    
//solution-2:

      number.length = 0;
   
//solution-3:

      number.splice(0,number.length)
   
//solution-4:

       while(number.length){
    
          console.log(numbers.pop()) 
       }
-----------------------------------------------------------------------------------------------------------------------------------------------
video-56:


   //For combaining two arrays:

   // Concat method:

         This method not modify original array

      var arr1 =["apple","orange","mango"]
 
      var arr2 =["banana","lemon"]
 
      var res = arr1.concat(arr2)
 
      console.log(res)   //[ 'apple', 'orange', 'mango', 'banana', 'lemon' ]
 
  // For extract values from array:

  // Slice method:

        This method not modify original array

      var arr1 =["apple","orange","mango","banana"]
  
      var res = arr1.slice(1,3)
  
      console.log(res)  // ["orange","mango"]
  

   // For combaine two diffrent array:

    var arr1 =[{item:"banana"}]
   
    var arr2 =["apple","orange","mango"]
   
    var res = arr1.concat(arr2)
  
   
    arr1[0].item = "stawberry";
  
    console.log(res)    ------------------------> [ { item: 'stawberry' }, 'apple', 'orange', 'mango' ]
  
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 video-57:

 //Spread operator:----> Introduced in ES6

   var arr1 = ["apple","orange","mango"]

   var arr2 =["banana","lemon"]

   var res = [...arr1,...arr2]

   console.log(res)             //[ 'apple', 'orange', 'mango', 'banana', 'lemon' ]

   
    res =  [...arr1,45,...arr2]

   console.log(res)             // [ 'apple', 'orange', 'mango', 45, 'banana', 'lemon' ]

----------------------------------------------------------------------------------------------------------------------------------------------

video-58:

    //Array Itteration methods:

       var arr1 = ["apple","orange","mango","lemon"];

    //For-loop:

       for(let i =0;i<arr1.length;i++){
   
          console.log(arr1[i]) 
       }

    //for of:

        for(let key of arr1){
   
           console.log(key) 
        }
 
     //for In:

       for(let key in arr1){
    
          console.log(arr1[key])    
      }
  
    //ForEach method:

       arr1.forEach(function(ele){
   
          console.log(ele)
   
       })
          ------OR------

    arr1.forEach((ele)=> console.log(ele))  

------------------------------------------------------------------------------------------------------------------------------------------------
Video-59:

//Split and Join Methods:

    This below methods also not affect original array

//Join:

    var arr = ["apple","orange","mango"]
 
    var res = arr.join()
 
    console.log(res)   //apple,orange,mango
 
   var res2 = arr.join("#")
   console.log(res2)  //apple#orange#mango
  
   var res3 = arr.join(", ")
   console.log(res3)   //apple, orange, mango
 
 //Split:
 
   This methoed returned with array elements.
   Its was splited by space
  
  var fullName = "Pavun kunmar"
  
  console.log(fullName.split(" ")) // [ 'Pavun', 'kunmar' ]
  
  
Combained usage;  
  
  //Tamil Nadu ----> Tamil_Nadu
  
    var Name ="Tamil Nadu";
 
    var res = Name.split(" ").join("_")
 
    console.log(res)   //-------------> Tamil_Nadu
 
-----------------------------------------------------------------------------------------------------------------------------------------------------------

Video-60:


//Sorting the array:

     If the result is negative, a is sorted before b.

     If the result is positive, b is sorted before a.

     If the result is 0, no changes are done with the sort order of the two values.

     
     var arr =[10,3,50,100,23]

//In Accending order:

     var res = arr.sort(function(a,b){
  
      return a-b
     })

      console.log(res)  //[ 3, 10, 23, 50, 100 ]


//In Decending order:

var res = arr.sort(function(a,b){
      
      return b-a
  })
  console.log(res) //[ 100, 50, 23, 10, 3 ]

         ----OR---
  console.log(res.reverse()) //[ 100, 50, 23, 10, 3 ]
  
  
 //Sort the array of objects:
   
   Here we can sort by id or name.but we done in name 
  
   const students=[
   
    {id:1,name:"pavun"},
    {id:2,name:"guna"},
    {id:3,name:"karthi"},
  ]  
   
  var res = students.sort(function(a,b){
     
      if(a.name<b.name){
        return -1; 
      }
      if(a.name > b.name){
      return 1; 
      }
      return 0
      
  })
  
  console.log(res)  //  [ { id: 2, name: 'guna' },
                         { id: 3, name: 'karthi' },
                        { id: 1, name: 'pavun' } ] 
   
-----------------------------------------------------------------------------------------------------------------------------------------------
 video-61:

//Testing a Array:

   //Every method:

    This method check all elements in array.
    If all elements pass the condition,then its return true.otherwise return false
    
     var arr=[11,20,25,34]

     var isAllowed = arr.every(function(value){
  
         return value >=18
  
     })
  
   console.log(`isAllowed : ${isAllowed}`)  //false

               --OR---

     var isAllowed = arr.every((value)=> value >=18)
     console.log(isAllowed)          //---------> false


//Some method:

    // This method check all elements in array.
    // If any single element pass the condition,then its return true.
    
var arr=[11,20,25,34]

var isAllowed = arr.some(function(value){
  
  return value >=18
  
  })
  
console.log(`isAllowed : ${isAllowed}`) // true

var isAllowed = arr.some((value)=> value >=18)
console.log(isAllowed)          //--------->  true
        
------------------------------------------------------------------------------------------------------------ 
 Video-62:

 //Testing array of objects:


var products =[
  
    {
      id:1,
      name:"Mobiles",
      status:"delivered"
    },
    {
      id:2,
      name:"Headphones",
      status:"delivered"
    },
    {
      id:3,
      name:"Speakers",
      status:"notDelivered"
    },
    
  ]
  
//Every method:

  var res = products.every(function(value){
    
      return value.status == "delivered"
    })
    
  console.log(res)     // false


  //Some method:
  
  var res2 = products.some(function(value){
      return value.status == "delivered"
    })
  console.log(res2)    // true
    
-------------------------------------------------------------------------------------------------------------------
video-63:

//Filter method:

   This method filter some elements based on given conditions

var products =[
  
    {
      id:1,
      name:"Samsung M31",
      price: 10000
    },
    {
      id:2,
      name:"Oneplus Nord",
      price: 12000
    },
    {
      id:3,
      name:"iphone",
      price: 15000
    },
    
  ]
  
  
  let budgetPrice = products.filter((ele)=> ele.price < 15000)
  
  console.log(budgetPrice)     //  [ { id: 1, name: 'Samsung M31', price: 10000 },
                                   { id: 2, name: 'Oneplus Nord', price: 12000 } ]

-----------------------------------------------------------------------------------------------------------------------------------------------

video-64:

//Find method:

 This method find which element pass the condition first
 
  var products =[
  
    {
      id:1,
      name:"Samsung M31",
      price: 10000
    },
    {
      id:2,
      name:"Oneplus Nord",
      price: 12000
    },
    {
      id:3,
      name:"iphone",
      price: 15000
    },
    
  ]
  
  let res = products.find((ele)=> ele.price >10000)
  
  console.log(res)     //{ id: 2, name: 'Oneplus Nord', price: 12000 }  //This element pass the condition fisrt

-----------------------------------------------------------------------------------------------------------------------------------------------

video-65:

//Map method:

  This method returned new array.so,its not affect original array
  
  usage: print all elements.
        e.g: If you want multiply on all elements by any value,then used it
  
 e.g:
      var arr = [1,2,3,4,5]
 
      var res = arr.map((ele)=> ele *2)
 
      console.log(res)   ---------------//[2,4,6,8,10]
 
 e.g2:
      
   const people =[
   
    {id:1,firstName:"pavun",lastName:"kumar"},
    {id:2,firstName:"guna",lastName:"sekar"},
    {id:3,firstName:"karthi",lastName:"keyan"}
]

      let result = people.map((value)=>{
   
      let fullName =[value.firstName,value.lastName].join(" ")
      
      let obj = { id: value.id , fullName:fullName}
      
      return obj
   })
   
   console.log(result)  //[ { id: 1, fullName: 'pavun kumar' },
                            { id: 2, fullName: 'guna sekar' },
                             { id: 3, fullName: 'karthi keyan' } ] 
  
--------------------------------------------------------------------------------------------------------------------------------------------------

Video -66:

Chaining concept:

Ceneraly we done by,

var products =[
  
    {
      id:1,
      name:"Samsung M31",
      price: 13000
    },
    {
      id:2,
      name:"Oneplus Nord",
      price: 12000
    },
    {
      id:3,
      name:"iphone",
      price: 15000
    },
    
  ]
  
      var sortProducts = products.sort(function(a,b){
        if(a.price < b.price){
          return -1 
        }
        if(a.price > b.price){
          return 1
          }
          else{
            return 0
            }
      })
    
     var filterProducts = sortProducts.filter(function(value){
      return value.price < 14000
      })
      
      
       var mapProducts = filterProducts.map(function(value){
        return `${value.name} price is ${value.price}`
      })  
      
      console.log(mapProducts)  //[ 'Oneplus Nord price is 12000', 'Samsung M31 price is 13000' ]

      
//Chaining concept:      
    
      var finalProducts = products.sort(function(a,b){
         if(a.price < b.price){
           return -1
           }
          if(a.price > b.price){
            return 1
            } 
          else{
            return 0
            }  
      }).filter(function(value){
         return value.price < 14000
        }).map(function(value){
           return `${value.name} price is ${value.price}`
          })
          
    console.log(finalProducts)  //[ 'Oneplus Nord price is 12000', 'Samsung M31 price is 13000' ]   

 -------------------------------------------------------------------------------------------------------------------------------------------------------
 Video-67:

 //Reduce Method:

    Its a another one ES6 method,and its return a total sum value of array

    var arr = [10,30,25,60]

    let sum = 0;

    for(let i = 0 ;i< arr.length ;i++){
     
        sum = sum + arr[i]
    }
   
     console.log(sum)      // 125
  
   ----OR----

   var totalValue= arr.reduce(function(acc,cv){
      return acc + cv
  }) 
   
   console.log(totalValue)   // 125
----------------------
   In Objects:

   var products =[
  
    {
      id:1,
      name:"Samsung M31",
      price: 13000
    },
    {
      id:2,
      name:"Oneplus Nord",
      price: 12000
    },
    {
      id:3,
      name:"iphone",
      price: 15000
    },
    
  ]
  
     // acc--->accumulator or previous value
     // cv ---> current value
     // 0 ---> is initial value.
     //Because,In Object datatype,we must initilaize starting value
     
    
     var totalValue = products.reduce(function(acc,cv){
    
      return acc + cv.price
    
    },0)
    
    console.log(totalValue)   //40,000
    
  
    
    //If Initial value is 1000
  
    var totalValue2 = products.reduce(function(acc,cv){
    
      return acc + cv.price
    
    },1000)
    
    console.log(totalValue2)  //41,000
 
 -------------------------------------------------------------------------------------------------------------------------------------------------

  video -68:

  Difference between map,reduce,filter,find:

  map  ----------> Its itterate all element from array,&return new array

  find ----------> its return the value which one pass the condition first

  filter --------> its return the values which are pass the conditions

  reduce   ------>  its return a single value 
 
 -----------------------------------------------------------------------------------------------------------------------------------------------

video -69:

 ArrayCreation Methods:

Method-1:

var arr1 =[10,20,30,40]

console.log(arr1)   // [10,20,30,40]


Method-2:

 var arr2 =[]

 arr2[0] = "apple"
 
 console.log(arr2)  //["apple"]
 
Method-3: 
 
 const arr3 = new Array(10,20,30,"apple")
 
 console.log(arr3)  // [10,20,30,"apple"]
 
Method-4: 
 const arr4 = Array.of(10,20,"apple",true)
 
 console.log(arr4) // [10,20,"apple",true]

-----------------------------------------
 //copy array Methods:

//Method-1:

var arr1 =[10,20,30,40]

//slice:

  var res = arr1.slice(0)
  
  console.log(res)
  
//Meythod-2:

// For-loop

  var arr2 = [10,20,30,40]
  
  var temp = []
  
  for(let i =0;i< arr2.length ; i++){
    
    temp[i] = arr2[i]
      
    }
    
  console.log(temp)  
  
// Method-3:

//Spread operator --ES6 feature

 var arr3 = [10,20,30,40]
 
 var res = [...arr3]
 
 console.log(res)

----------------------------------------------

// To empty the array:

//Method-1:

 let arr = [10,20,30,50]
 
  arr =[]
  
console.log(arr)  

//Method-2:

  let arr2 = [10,20,30,50]

  arr2.length = 0;

  console.log(arr2)
  
//Method-3:  

  let arr3 = [10,20,30,50]

   while(arr3.length){
  
     arr3.pop()
  }
 console.log(arr3)  
 
 
//Method-4:

 let arr4 = [10,20,30,50]
 
  arr4.splice(0,arr4.length)
  
  console.log(arr4)
 ---------------------------------------------------------
 //To check array or not:

//Method-1:

 var data1 =[10,20,30,40]
 var data2 = [{
       name :"pavun"
   }]
 var data3 = undefined
 
 var data4 = "India"
 
 var res = Array.isArray(data3)
 
 console.log(res)
 
//method-2:

 function toCheck(value){
   
   if(typeof value == "string")
   
      console.log("Its String")
      
   if(typeof value == "undefined")
   
      console.log("Its undefined")
      
   if(typeof value == "Number")
   
      console.log("Its is Number")
      
    else{
      
       console.log("Its Array")
      }  
   
   }
   
   toCheck(data2)
 -----------------------------------------------

 //To check the item in array

//Method-1;

 var arr =["apple","orange","mango","banana"]
 
 var res = arr.includes("orange")   //true
 
 console.log(res)
 
//Method-2:
   function toCheck(value){
     
     if(arr.indexOf(value) == -1){
        console.log("Item not in the array")
       }
       else{
        console.log("Item is in the array") 
     }
     } 
     toCheck("orange")
----------------------------------------------------
//To check the item in array
//If the item is available,then it remove


 var arr =["apple","orange","mango","banana"]
 
function toCheck(value){
       let index = arr.indexOf(value)
       
     if(index == -1){
        console.log("Item not in the array")
       }
       else{
         arr.splice(index,1)
        console.log("Item is in the array")
        console.log(arr)
     }
     } 
     toCheck("orange")                ------------>  Item is in the array , ["apple","mango","banana"]

----------------------------------------------------------
video-71:

//Function decleration and function expression

     let num1 = 10;
     let num2 = 30;
 
     function addNo(){
        console.log(num1*num2)
      }
     addNo()
   
   
//Function expression:  

     let addNumbers = function addNo(){
   
          console.log(num1*num2)   
      }
      addNumbers();
   
    //----OR----
     
     let addNumbers2 = function(){
       
      console.log(num1*num2)
      }
      addNumbers2();
 
 
 let createFunction = new Function("console.log(num1*num2)")  

 The both are similar same,but have small differnces,
 ie:In expression,
    we ommite function name
    at end of function we must give semi colon
    Here hoisting not occure

 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 video-72:

 Hoisting:

  In Javascript hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.

  This applicable in function declaration only..not work in function expression

  // function decleration:

     addNo()                       // function call

     function addNo(){              // function declere
        console.log(10 + 30)
      }
    
 The above code is work.because the function decleration go to top in programs.
 ie:
     function addNo(){              // function declere
        console.log(10 + 30)
      }
      addNo()

// function Expression:
  
      The below code is not run

     const addNumbers =  function addNo(){              
        console.log(10 + 30)
      }
      addNumbers()
  
-------------------------------------------------------------------------------------------------------------------------------------------------
video-73:

//IIFE--> Imidiate Invoke Function Expression:

   //It means there is no need of function call.because its invoked next second,when its declared.
   
   let num1 =10;
   let num2 =20;
  
  (function addNo(){
    
    console.log(num1 * num2)
    
    })();
    
       ---OR---
       
  (()=> console.log(num1 * num2))();  

  
   // values passed as parameters
   
  (function addNumber(no1,no2){
    
     console.log(no1 * no2)
     
    })(num1,num2)  
    
-----------------------------------------------------------------------------------------------------------------------------------------------
video-74:

//Funtion aruguments:


   function totalExpence(breakfast,lunch,dinner){
   
    console.log(breakfast + lunch + dinner)
  }
    totalExpence(60,100,60)
    
   
    Here, 60,100,60           ---> we sent a values as arguments 
          breakfast,lunch,dinner--> we recieved as parameters
            
            ---OR--
   
   function totalExpence(breakfast,lunch,dinner){
   
    return breakfast + lunch + dinner
  }
  console.log(totalExpence(60,100,60))
  
 
 //if soo many inputs add,then we must add parameters.its dificult one
 
 
  function totalExpence(breakfast,lunch,dinner,...){
   
    console.log(breakfast + lunch + dinner)
  }
  totalExpence(60,100,60,50,50,....)
  
 
  //Its rectify by arguments.
  //Generaly arguments returns object.like { 0:60,1:100,2:60..}
  
  function totalExpence(){
   
    let total =0;
    
    //The For-OF loop extarct the values in key:values
    
     for(let value of arguments){
        total += value
       }
    return total
  }
  let result = totalExpence(60,100,60,50,50)
  console.log(`your total expence is Rs.${result}`)   // your total expence is Rs.320

------------------------------------------------------------------------------------------------------------------------------------------------

video-75:

//Rest parameter:

 Its a another one feature of ES6
 Its used to put the rest of some specfic values in to array.

 Generally If use the arguments ----> { 0:60,1:100,2:60..}
           If use rest parameter ---> [60,100,60]

           the rest operator name ...values is not constat word.its may be any name
      
        function totalExpance(...values){

           let total = values.reduce((acc,cv)=> acc + cv)

           return total
        }
         var result = totalExpance(200,100,250,250)
         console.log(result)       -----------------// 800


   e.g-2:
         a,b --> 200,100 are not included in reat parameter array
         The spered parameter must use at last end.
         ie: ...values,a,b ----> is not work

           function totalExpance(a,b,...values){

           let total = values.reduce((acc,cv)=> acc + cv)

           return total
        }
         var result = totalExpance(200,100,250,250)
         console.log(result)       -----------------// 500

-----------------------------------------------------------------------------------------------------------------------------------------------
video-76:

  //Function default parameter:

 
   function calculateTax(cost,tax){
   
  let taxAmount = cost *(tax/100)
   
  console.log(`Total cost is: Rs.${cost}
  GST of tax(${tax}%) is : Rs.${taxAmount}
  
  Total Amount is: Rs.${cost + taxAmount}`)
 
   
}
  calculateTax(100,10)
  
  //Here below method,If parameter value change,then result value is change dynamicly

  

     
function calculateTax(cost,tax){
   
    tax = tax ?? 10            ----> it like as if statement.ie: If tax not given,then it take default value 10.otherwise it take given value
   
   let taxAmount = cost *(tax/100)
   
   console.log(`Total cost is: Rs.${cost}
  GST of tax(${tax}%) is : Rs.${taxAmount}
  
   Total Amount is: Rs.${cost + taxAmount}`)
 
   
}
   calculateTax(100)           //  script.js:2399 Total cost is: Rs.100
                                   GST of tax(60%) is : Rs.10
                                   Total Amount is: Rs.120

          ----OR----

   //The best practise is tax parameter mention at last end.because,any additional parameter came,its not affact answer.       

   function calculateTax(cost,tax =10){
   
   
     let taxAmount = cost *(tax/100)
     
     console.log(`Total cost is: Rs.${cost}
    GST of tax(${tax}%) is : Rs.${taxAmount}
    
     Total Amount is: Rs.${cost + taxAmount}`)
   
     
  }
     calculateTax(100,60)                  //     script.js:2399 Total cost is: Rs.100
                                                  GST of tax(60%) is : Rs.60
    
                                                  Total Amount is: Rs.160

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
video-77:

Getter and Setter:

 Getter ---> This method used to access the properties of an object

 Setter ---> This is used to change the values of an object
 
 
 let student ={
  
  firstName : "pavun",
  lastName : "kumar",
  fullName : function fullName(){    --------------------------------------> This is a called method.
     
      return `My Full Name is ${student.firstName + student.lastName}`
    }
}
 
console.log(student.fullName())     // My Full Name is pavunkumar

         ---OR---
   let student ={
   
     firstName : "pavun",
     lastName : "kumar",
     fullName(){
       return `My Full Name is ${student.firstName + student.lastName}` 
    }
  }
  console.log(student.fullName())   // My Full Name is pavunkumar

 
  let student ={
     
  firstName : "pavun",
  lastName : "kumar",
  get fullName(){
      return `My Full Name is ${student.firstName + student.lastName}`
    },
   set fullName(value){
     
     let values = value.split(" ");
     this.firstName = values[0];
     this.lastName = values[1] ?? ""   -----> Nullish operator ie: return rigth-hand side value when its left-hand side value is null or undefined
    }
 }

student.fullName ="Gunasekaran"

console.log(student.fullName)      //My Full Name is Gunasekaran

------------------------------------------------------------------------------------------------------------------------------------------------

video-78:

Error Handling (Try,catch,Throw)
 
    It is defencive programming

    Here , student.fullName ----> is Number ,then it throw err as "This is not a string" ,after it was catched by try catch and alert show
            student.fullName -----> is Small characters ---> alert "Name Invalid "

  let student ={
     
  firstName : "pavun",
  lastName : "kumar",
  get fullName(){
      return `My Full Name is ${student.firstName + student.lastName}`
    },
   set fullName(value){
     if(typeof value != "string"){
       let err = new Error("This is not a string")   -------> error object
       throw err;  
     }

     if(value.length <=3){
       throw "Name Invalid"
     } 

     let values = value.split(" ");
     this.firstName = values[0];
     this.lastName = values[1] ?? ""  
    }
 }
 try{
   student.fullName = "ab" ;
}
 catch(ex){

    alert(ex)
 }
console.log(student.fullName) 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

Video-79:

//Scope:

// var        ---> Globle scope
// let,const ----> Block scope.we can not access it out side of {}

 let message = "Hi guys"
 
 console.log(message);  // "Hi guys"
 
 
{
  let message2 = "Please welcome" 
}
console.log(message2)   // message is not defined
 
 
 let message3 = "Hello world"
 
    {
       console.log(message3)  // "Hello world" 
    }
    
  let message4 = "Hi Pavun"
  
    {
      let message4 = "Hi Guna";  
      
      console.log(message4)   // "Hi Guna"
    }
     console.log(message4) // "Hi Pavun"
   =========================  
    {
     let message ="HI"
     console.log(message)   //HI
    } 
    
    {
     let message ="HI"
     console.log(message)   //HI
    } 
    
    Here same variable name is used.but it works.
    because,it are locatted diffrent {} local scope
  ===============================
  
    {
    var message5 = "Hello"  
    }
    console.log(message5)   // "Hello"
    
    Here var is globle scope.so we can access out side of {}

----------------------------------------------------------------------------------------------------------------------------------------------------

video -80:

  Difference between var & let :

  var       ----> is function scope
  let,const----> block scope

     var name = "pavun"
     let color ="green"

     Generaly var is bind with window object.we can call window.name -->o/p: "pavun"
     but, let is not bind..ie: window.color --->o/p: undefined

   function addNumber(){

     console.log( 4 * 5)
   }
   addNumber()

   Here function also bind with window.ie:  window.addNumber() --> o/p: 20

   Basicaly let keyword is best to use.
   because,if any third party pakage use in our project,that time if the project has same varaiable name with var keyword,then may be some errors came

   but when use let keyword,there is no possible to error came.

-----------------------------------------------------------------------------------------------------------------------------------------------

video-81:

  (this) ----> is a keyword,used to extract the property from parant object.
               If use this keyword in the function,then its not work.so,we pass the second argument (this)

const channel ={

    title: "EnowationPlus",
    videoTitle:"LadakhRide",
    language:["tamil","english"],
    subscribe(){

       console.log(this)   //{title: 'EnowationPlus', videoTitle: 'LadakhRide', language: Array(2), subscribe: ƒ}
    },
    showVideos(){
     
      this.language.forEach(function(ele){

        console.log(this.title +" "+ ele)  -----> undefined tamil,undefined english
      })
    }

 }

channel.showVideos() 

So,

    const channel ={

    title: "EnowationPlus",
    videoTitle:"LadakhRide",
    language:["tamil","english"],
    subscribe(){

       console.log(this)   //{title: 'EnowationPlus', videoTitle: 'LadakhRide', language: Array(2), subscribe: ƒ}
    },
    showVideos(){
     
      this.language.forEach(function(ele){

        console.log(this.title +" "+ ele)  -----> EnowationPlus tamil,EnowationPlus english
      },this)
    }

 }
 channel.showVideos()

-----------------------------------------------------------------------------------------------------------------------------------------------
video-82:

Other ways to work with (this) keyword:

     const channel ={

    title: "EnowationPlus",
    videoTitle:"LadakhRide",
    language:["tamil","english"],
    subscribe(){

       console.log(this)   //{title: 'EnowationPlus', videoTitle: 'LadakhRide', language: Array(2), subscribe: ƒ}
    },
    showVideos(){
        let that = this;
      this.language.forEach(function(ele){

        console.log(that.title +" "+ ele)
      })
    }

 }
  channel.subscribe();
  channel.showVideos();

 // ----------------
     function playVideo(){

       console.log(this)    // this is point out the window object
   }
    playVideo()

 
    function playVideo(){

      console.log(this)   // this particulary give{ videoTitle:"Bike riding"}
   
    }
     playVideo.call({ videoTitle:"Bike riding"})
     playVideo.apply({ videoTitle:"Bike riding"})

 //Here call & apply aproxmatly same.but have small difference only.
 //ie: In call ---> we pass the second argument as string
 // In apply  ----> we pass the second arugument as Array values

    function playVideo(title1){

    console.log(title1)     // "Ladakh"
  
    console.log(this)       // { videoTitle:"Bike riding"}

    }
    playVideo.call({ videoTitle:"Bike riding"},"Ladakh")
 

    function playVideo(title1,title2){

        console.log(title1)      // "lake"

        console.log(title2)      // "Agra"

        console.log(this)       // { videoTitle:"Bike riding"}

     }
      playVideo.apply({ videoTitle:"Bike riding"},["lake","Agra"])

 //In Bind Method:

        function playVideo(){

           console.log(this)      // There is no o/p
      }
        playVideo.bind({ videoTitle:"Bike riding"})


  Here the bind method attach the value to it,and create a new function.
  when we call the new function,that time only we get the o/p.
  
      function playVideo(){

           console.log(this)   // { videoTitle: 'Bike Riding' }
     }
       let video = playVideo.bind({ videoTitle:"Bike Riding"})

       video()   //----> calling the new function


  
//So,Third way: use bind method

  const channel ={

    title: "EnowationPlus",
    videoTitle:"LadakhRide",
    language:["tamil","english"],
    subscribe(){

        console.log(this)   //{title: 'EnowationPlus', videoTitle: 'LadakhRide', language: Array(2), subscribe: ƒ}
    },
    showVideos(){
       
      this.language.forEach(function(ele){

        console.log(this.title +" "+ ele)   //    EnowationPlus tamil
                                             //   EnowationPlus english
      }.bind(this))
    }

  }
channel.showVideos()



//So,4th way: use Arrow function--Modern javascript method

  when we use arow function,that time (this) key word access the propery from the object inside of functions
   
  const channel1 ={

  title: "EnowationPlus",
  videoTitle:"LadakhRide",
  language:["tamil","english"],
  subscribe(){

      console.log(this)  
  },
  showVideos(){
      
    this.language.forEach((ele)=>{

      console.log(this.title +" "+ ele)
    })
  }

}
channel1.showVideos()



     

  
    
 
  
   




 
        

*/


// let age=20;

// const p = new Promise((resolve,reject)=>{
  
//     if( age < 18){
      
//        reject ("Not Eligible")
//       }
//       else{
        
//          resolve("Eligible")
//         }
//   })
  
//   console.log(p)
  
//   p.then((res)=>{
//        console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//       })



// var a = 1;
//   var clear = setInterval(timer,1000)
        
      
//        function timer(){
        
//         for(let i=0;i<10;i++){
//            a = a+1
//            console.log(a)
//            if(a>10){
//             console.log("Status success")
            
//           }
         
//         }
       
//        }


var obj1 = {
  name:"pavun",
  gender:"male"
}

var obj3={...obj1}
     
    console.log(obj3)
    console.log(obj1)

   
   function mainFun(getCallBack){

    console.log("Main Function Executed")
    getCallBack();
   }
   mainFun(callBack);

   function callBack(){
    console.log("Callback Function Executed")
   }

  


 

 


