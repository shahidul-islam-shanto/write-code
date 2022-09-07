// foot to mile
/**function footToMile(foot){
    let mile = foot / 5280;
    return mile;
}
let toMile = footToMile(10000);
console.log(toMile);
*/


/**function brick(){
    let first = 10 * 12000;
    let second = 10 * 11000;
    let third = 10 * 10000;

    let total= first + second + third;
    console.log(total);
 }
 brick();
 */


 //small to big soto 
 /**let names = ["jamal", "mofijul", "samsu", "rok", "monitul jaman"];
  let mix = [0];
  for(let i = 0; i < names.length; i++){
    let element = names[i];
    if(element < mix){
        element = mix;
     }
 }
 console.log("loest name is:", element);
 */


 //(***vvi) gonona kora
 /**function animal(garden){
    let blank = 0;
 if(garden <=10){
    blank = garden * 50;
 }else if (garden <=20){
    let first = garden * 50;
    let remaining = garden - 10;
    let second = remaining * 100;
         blank = first + second;
 }else{
    let first = 10 * 50;
    let second = 10 * 100;
    let remaining = garden - 20;
    let third = remaining * 300;
        blank = first + second + third;
     }
     return blank;
 }
 let bon = animal(22);
 console.log(bon);
 */


 //(note)
 /**function newBrick(brick){ 
 let blank = 0;
 if(brick <= 10){
    blank = brick * 10000;
 } else if(brick <=20){
    let firstTala = brick * 10000;
    let remaining = brick - 10;
    let secondTala = remaining * 12000;
    blank = firstTala + secondTala;
 }else{
    let firstTala  = 10 * 10000;
    let secondTala = 10 * 12000;
    let remaining = brick - 20;
    let thirdTala = remaining * 15000;
    blank = firstTala + secondTala + thirdTala;
  }
  return blank;
}

let result = newBrick(28);
 console.log(result);
 */


 const index = document.getElementById("row");
 const change = document.createElement("p");
 change.innerHTML = "She is my best friends";
 index.appendChild(change);
 