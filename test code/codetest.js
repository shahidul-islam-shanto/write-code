/**let age = 20;
var type = (age >= 25) ? "adult" : "child";
var type;
 if(age >= 20){
     type = "adult"
 }else{
   type = "child"
 }
console.log(type);
*/ 


/**function myFun(...params){
    console.log(params);
}
myFun(2, 5, 3, 6, 9);
*/


// Obj destruction
/**const user = {
    id: 222,
    name: "sakib",
    age: 35
}
const {name: title} = user;
console.log(title);
*/


// array destruction
/*//const num = [1, 2, 3, 4, 5, 6];
const num = [1, 2, 3,[100, 500], 4, 5, 6];

//var [a, b] = num; // prothom 2 ta neyar jonno
//var [,,a,,b] = num; // je kono num neyar jonnno

var [,,,[a,b]] = num; // array moddhe array dhorte
console.log(a, b);
*/


//a to b &  b to a capture
/**var a = 3;
var b = 6;

//the old way
// var temp = a;
  a = b;
  b = temp;

//the new way
 [b, a] = [a, b];

console.log(a, b);
*/


//set
function log(anything){
 return console.log(anything);
}

/**let myArray = [1, 2, 3, 4, 5]
let mySet = new Set(myArray);

//mySet.add(8).add(5).add("bangladesh").clear("bangladesh");
log(mySet);
*/

//array theke set abar set theke array 
let myArray = [1, 2, 3, 5, 5, 5, 6, 7];
log([...new Set(myArray)]);

