//Array Methods:

//
//Javascript have 3 ways to add elements in array

//1. PUSH

    //This method push a elements at last end in existing array

    // const arr=["apple","orange","mango"]

    // console.log(arr.push("banana")) //----> o/p: 4
    // console.log(arr)                 //-----> o/p:["apple","orange","mango","banana"]

//2. UNSHIFT

    // This methoed push a element to array at begining

    // const arr=["apple","orange","mango"]

    // console.log(arr.unshift("lemon"))   //-----> o/p: 4
    // console.log(arr)                     //----> o/p: ["lemon","apple","orange","mango"]

//3. SPLICE

    // This methoed used to push a element to any positions
    // syntax:
    //  arrayName.splice(number1,number2,element)

    //  const arr=["apple","orange","mango","banana","lemon","greps"]

    //  arr.splice(4,0,"mongoose")
     
    //  console.log(arr)         //----> o/p: ["apple","mongoose","orange","mango"]
    
    //  here, 1----> is which index position we add element
    //        0----> how many element removed from 1 st index
    //      "mongoose"--> element add to array

//--------------------------------------------------------------------------------
//INDEXOF:
    
    // var arr =["apple","orange","mango","apple"]

    // var res =arr.indexOf("orange")

    // console.log(res)                //--------------> 1

//For find last apple index:

// console.log(arr.lastIndexOf("apple"))       //---> 3


//The below one returns -1.bcz,there is no banana in array

//console.log(arr.indexOf("banana"))          //---> -1

//-------------------------------------------------------------------------------------------------

//INCLUDES:

// var arr =["apple","orange","mango","apple"]

// console.log(arr.includes("apple")) // ---> true

// console.log(arr.includes("lemon"))  //---> false

//-------------------------------------------------------------------------------------------------

//Remove element from the array:

//Basicaly 3 methods available:
 
 // POP:----> it remove last elemnt from an array

 // This method modify the original array

//   const arr =["apple","orange","mango"]

//   var res = arr.pop()
 
//   console.log(res)       //--->o/p: "mango"
//   console.log(arr)       //---> o/p: ["apple","orange"]

//------------------------------------------------------------------------------------------------------
 
 //SHIFT:----> it remove first elemnt from an array

 // This method modify the original array

//    const arr =["apple","orange","mango"]
 
//    var res = arr.shift()
 
//    console.log(res) -------->o/p: "apple"
//    console.log(arr)  -------> o/p: ["orange","mango"]

//-----------------------------------------------------------------------------------------------------

 //SPLICE:--->is also remove an element from an array at any specified index

  // This method modify the original array

//   const arr =["apple","orange","mango"]
 
//   const res1 = arr.splice(1,0)
  
//   console.log(res1) //-------->  [ 'orange', 'mango' ]

//   console.log(arr)//---------> [ 'apple' ]

//-------------------------------------------------------------------------------------------------------

//For combaining two arrays:

   // Concat method:

  // This method not modify original array

//    var arr1 =["apple","orange","mango"]

//    var arr2 =["banana","lemon"]

//    var res = arr1.concat(arr2)

//    console.log(res)   //----------->[ 'apple', 'orange', 'mango', 'banana', 'lemon' ]

// For extract values from array:

// Slice method:

    // This method not modify original array

//    var arr1 =["apple","orange","mango","banana"]

//    var res = arr1.slice(1,3)

//    console.log(res)  //-------------> ["orange","mango"]

//-----------------------------------------------------------------------  

//toString:

var arr1 =["apple","orange","mango"]

var res = arr1.toString()

console.log(res)   // apple,orange,mango

//-------------------------------------------------------------------------

//Sorting the array:

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// If the result is 0, no changes are done with the sort order of the two values.



//In Accending order:

// var arr =[10,3,50,100,23]

// var res = arr.sort(function(a,b){

//  return a-b
// })

//  console.log(res)  //[ 3, 10, 23, 50, 100 ]


//In Decending order:

// var arr =[10,3,50,100,23]

// var res = arr.sort(function(a,b){
 
//  return b-a
// })
// console.log(res) //[ 100, 50, 23, 10, 3 ]

//--------------------------------------------------------------------------------------------------

//Reverse method:

// var arr =[10,3,50,100,23]

// console.log(arr.reverse())   // [ 23, 100, 50, 3, 10 ]

//It you want order of high value to low value,then we must sort().after perform reverse()

//-------------------------------------------------------------------------------------------------

//Testing a Array:

   //Every method:

//    This method check all elements in array.
//    If all elements pass the condition,then its return true.otherwise return false
   
    // var arr=[11,20,25,34]

    // var isAllowed = arr.every((value)=> value >=18)
    // console.log(isAllowed)          //---------> false


    // var arr=["apple","orange","mango","banana"]

    // var isAllowed = arr.every((value)=> value == "banana")
    // console.log(isAllowed)         //----------> false


//Some method:

   // This method check all elements in array.
   // If any single element pass the condition,then its return true.
   
    // var arr=[11,20,25,34]

    // var isAllowed = arr.some((value)=> value >=18)
    // console.log(isAllowed)          //--------->  true

   
    // var arr=["apple","orange","mango","banana"]

    // var isAllowed = arr.some((value)=> value == "banana")
    // console.log(isAllowed)      //----------> true


//-------------------------------------------------------------------------------------------------------------------------------

// Find method:

//  This method find which element pass the condition first

   // If this condition was not satisfied,then return "undefined"

    // var arr = [10,20,33,15,8,60]
 
    // var res = arr.find((value)=> value > 20)

    //  console.log(res)   //33

 
//FindIndex:

//  This method find which element pass the condition first

   // If this condition was not satisfied,then return -1

 
// var arr = [10,20,33,15,8,60]
 
// var res = arr.findIndex((value)=> value > 20)

// console.log(res)   // 2 its a index value

//-------------------------------------------------------------------------------------------------------

//Map method:

//This method returned new array.so,its not affect original array
//There is no change in array length
  
// usage: print all elements.
//       e.g: If you want multiply on all elements by any value,then used it

//e.g:
    // var arr = [1,2,3,4,5]

    // var res = arr.map((ele)=> ele *2)

    // console.log(res)   //--------------->[2,4,6,8,10]

//--------------------------------------------------------------------------------------------------------

//Filter :

// This method returned new array.so,its not affect original array
// But the new array length was changed

    // var arr = [10,60,20,40,50]

    // var res = arr.filter((value)=> value > 20 )

    // console.log(res)  //[ 60, 40, 50 ]

    
    // var res = arr.filter((value)=> value < 10 )

    // console.log(res)  //[]

//---------------------------------------------------------------------------------------------------------

//Reduce:

//Its return a number
//Its not modify the original array

// var arr = [10,60,20,40,50]
   
// var totalValue= arr.reduce((acc,cv) => acc + cv) 

// console.log(totalValue)   //180

// If initial value given   
 
// var totalValue1= arr.reduce((acc,cv) => acc + cv,100) 

// console.log(totalValue1)  //280

//----------------------------------------------------------------------------------------------------------

// ForEach Method:

//  Its applicable only for array
//  Its use for printing purpose.
//  It will not return an array
 
// var arr = [10,60,20,40,50]
   
// var res = arr.forEach((value)=> console.log(value))

// console.log(res)  
//Answer:
// 10
// 60
// 20
// 40
// 50
// undefined

//    arr.forEach((value)=> console.log(value))
   
//Answer:
// 10
// 60
// 20
// 40
// 50

//---------------------------------------------------------------------------------------------------------

//Join Method:

//This below method also not affect original array

//     var arr = ["apple","orange","mango"]
 
//     var res = arr.join()
 
//     console.log(res)   //apple,orange,mango
 
//    var res2 = arr.join("#")
//    console.log(res2)  //apple#orange#mango
  
//    var res3 = arr.join(", ")
//    console.log(res3)   //apple, orange, mango
 
  
    
    
    
   
  

















