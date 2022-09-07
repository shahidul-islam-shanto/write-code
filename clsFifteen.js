//swop before after
/**var a = 5;
var b = 7;
console.log("before swop: a=", a, "b=", b);
var temp = a;
a = b;
b = temp;
console.log("after swop: a=", a, "b=", b);
*/


//random number
//let num = 2.413;
/**let rand = Math.random() * 10;
let randomNum = Math.round(rand);
console.log(randomNum);
*/


//max to big number
/**let business = 650;
let minister = 750;
let sochib = 550;

if(business > minister){
    if(business > sochib){
        console.log("business is the bigger")
    }else{
        console.log("sochib is the bigger");
    }
}else{
    if(minister > sochib){
        console.log("minister is the bigger");
    }else{
        console.log("sochib is the bigger");
    }
}
*/


// mix ar sot-cart
/**let business = 650;
let minister = 750;
let sochib = 550;

let max = Math.max(business, minister, sochib);
console.log(max);
*/


//array max array to big number 
/**let num = [43, 55, 88, 90, 60, 77, 22, 100];
let max = num[0];
for(let i = 0; i <num.length; i++){
    let element = num[i];
    if(element > max){
        max = element;
    }
}
console.log("Hights marks is", max);
*/


//sum array to total jog fol 
/**function sumNum(num){
let sum = num[0];
for(let i = 0; i <num.length; i++){
    let element = num[i];
    sum = sum + element;
}
  return sum;
}
let num = [43, 55, 88, 90, 60, 77, 22, 100];
let total = sumNum(num);
console.log("result sum:",total);

let result = sumNum([55, 66, 77, 50, 80]);
console.log("total sum:",result);
*/


//(***vvi) duplicate name || Number 
/**let names = [4, 5, 6, 2, 4, 5, 7, 8, 9, 2];
let duplicate = [];
 for(let i = 0; i < names.length; i++){
    let element = names[i];
    let index = duplicate.indexOf(element);
     if(index == -1){
       duplicate.push(element);
    }
 }
 console.log(duplicate);
 */

 
 /**function newName(names){
        let sameName = [];
    for(let i = 0; i < names.length; i++){
        let element = names[i];
        let index = sameName.indexOf(element);
        if(index == -1){
            sameName.push(element);
        }  
    }
    return sameName;
 }
 let names = ["jamal", "kamal", "joshim", "barek", "kalam", "jamal", "barek"]
 let result = newName(names);
console.log(result);
*/


//word count 
/**let word = "my name   is ralra , she is my girl    friend!"

let wordName = 0;
for(let i = 0; i < word.length; i++){
    let count = word[i];
    if(count == " " && word[i-1] != " "){
        wordName++
    }
}
console.log(wordName);
*/


//revers word ke ulta kore
function reversWord(rev){
    let blank = "";
    for(let i = 0; i <rev.length; i++){
        let revers = rev[i];
        blank = revers + blank;
    }
    return blank;
}

let statement = "kalle dekha korar kotha";
let state = reversWord(statement);
console.log(state);