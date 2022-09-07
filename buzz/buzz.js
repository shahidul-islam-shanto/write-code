/**const price = [1, 2 , 3, 5,];
console.log(price);
*/


/**function a(x, y){
  x = x * 5;
  return x * y;
}
 let m = 5;
 let n = 6;
console.log(a(m, n));
*/


/**const a ={
  firstName: "sumit",
  sleep: function(){
    console.log(`${this.firstName} is the best`);
  }
}
a.sleep();
*/


/**function display(some){
  console.log(some);
}
function calculator(num1, num2){
   let sum = num1 + num2;
  //  return sum
   display(sum);
}
 calculator(5, 5);
//  display(sum)
*/


//callback function
/**let paymentSuccess = true;
let marks = 70;
function enroll(callback){
   console.log("course enrollment is in progress");
   setTimeout(function(){
       if(paymentSuccess){
          callback();
       }else{
         console.log("payment is failed!");
       }
   }, 2000);
}

function progress(callback){
   console.log("course on progress!");
   setTimeout(function(){
     if(marks >= 80){
       callback();
     }else{
      console.log("you could not enough marks to get the certificate");
     }
   }, 3000);
}

function getcertificate(){
  console.log("preparing your certificate");
  setTimeout(function(){
     console.log("congress!");
  }, 1000);
}
enroll(function(){
   progress(getcertificate);
})
*/


/**function validateForm(){
  const form = document.forms['myForm'];
  const value = form['fname'].value;
  if (value === ''){
    alert("not submit");
    return false;
  }
}
*/


/**class student{
  constructor( sId, sName){
    this.id = sId;
    this.name = sName;
  }
}
const student1 = new student(12, "jefa");
const student2 = new student(14, "sajed");
console.log(student1, student2);
*/


const parson = {name: "sadat", age: 52, phone: 014556642, jod: "office menegar", gfName: "selina Gomes",  }
const {name, age, jod} = parson;
console.log(name, age, jod);

