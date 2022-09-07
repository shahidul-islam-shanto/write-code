//inch to feet convert
/**function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var nanaFeet = inchToFeet(400);
var naniFeet = inchToFeet(156);
console.log(naniFeet);
console.log(nanaFeet);
*/


/**var name = "Rafsan Rohoman";
if(name.length > 5){
    name = "Rafsu";
}
console.log(name);
*/


//leapYear 
/**function toLeapYear(year){
const equal = year % 4;
  if(equal == 0){
    return true;
   }else{
    return false;
   }
}
let equalYear = toLeapYear(2002);
console.log(equalYear);
*/


/**function leapYear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));
*/


//function sara factorial 
/**var factorial = 1;
for(var i = 1; i <= 10; i++){
   factorial = factorial * i;
  console.log(i, factorial);
}
*/


//function & for loop diya factorial
/**function sumFactorial(n){
   var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial * i;
     }
     return factorial;
}
var result = sumFactorial(10);
console.log(result);
*/


//function & while loop diya factorial
/**function fac(n){
   var i = 1;
   factorial = 1;
   while(i <= n){
     factorial = factorial * i;
    i++
  }
  return factorial;
}
var result = fac(10);
console.log(result);
//console.log(factorial);
*/


//prime number 
function isPrime(n){
  for(i = 2; i < n; i++){
     if(n % i == 0){
      return "your number is a not number!";
    }
  }
  return "your number is a prime number!";
}
var result = isPrime(59);
console.log(result);

