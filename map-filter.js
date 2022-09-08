//loop diya double gun 
/**const number = [2, 3, 4, 5, 8, 9];
const output = [];
for(let i = 0; i< number.length; i++){
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
*/


//map diya double gun  
/**const number = [2, 3, 4, 5, 8, 9];
const result = number.map(function(element){
    return element * element;
})
console.log(result);
*/


//map short
/**const number = [2, 3, 4, 5, 8, 9];
const result = number.map(x => x * x);
console.log(result);
*/


//filter
/**const number = [2, 3, 4, 5, 8, 9];
const bigger = number.filter(x => x > 5);
console.log(bigger);
*/

//find
/**const number = [2, 3, 4, 5, 8, 9];
const isThe = number.find(x => x > 5);
console.log(isThe);
*/



//object property

//simple array to name id output
/**const student = [
    {id: 44, name: "mukul"},
    {id: 55, name: "joshim"},
    {id: 66, name: "monju"},
    {id: 77, name: "barek"}
];
const output = [];
for(let i = 0; i< student.length; i++){
    const element = student[i];
    output.push(element.name);
}
console.log(output);
*/


//map to name id output
const student = [
    {id: 44, name: "mukul"},
    {id: 55, name: "joshim"},
    {id: 66, name: "monju"},
    {id: 77, name: "barek"}
];
//const names = student.map(x => x.name);
//const ids = student.map(x => x.id);
//const bigger = student.filter(x => x.id>56);
const biggerOen = student.find(x => x.id>56);
console.log(biggerOen);