//function ar parameter call back function 
/**function callBack(name, age, task){
  console.log("Hollow", name);
  console.log("your age", age);
  task();
}
function borishal(){
    console.log('barishal');
}
function chatpur(){
    console.log('chadpur');
}
function facebookPagol(){
    console.log("facebook chali somoi nosto kore ")
}
callBack("sogir uddin", 55, borishal);
callBack("joshim", 44, chatpur);
callBack("hasan", 20, facebookPagol);
*/


//function arguments 
/**function add(){

    let result = 0;
    for(let i = 0; i <arguments.length; i++){
         result = result + arguments[i];
    }
    return result;
}
let total = add(50, 40, 20, 10);
console.log(total);
*/


/**document.getElementById("new").addEventListener("click", function(){
    let newFirst = document.getElementById("first");
    newFirst.style.color = 'tomato';
})
*/


//bubble 
/**document.getElementById("first").addEventListener('click', function(event){
    console.log("first item click");
    //event.stopPropagation();
    event.stopImmediatePropagation();
})
document.getElementById("mylist").addEventListener('click', function(){
    console.log("mylist item click");
    
})
document.getElementById("container").addEventListener('click', function(){
    console.log("container item click");
})
*/


//even bubble details
/**var items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.addEventListener("click", function(event){
       event.target.parentNode.removeChild(event.target);
    })
}
  document.getElementById("newBtn").addEventListener('click', function(){
    let addList = document.getElementById('mylist');
    let newItem = document.createElement('li');
    newItem.innerText = 'my new text';
    addList.appendChild(newItem);
})
document.getElementById("mylist").addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})
*/


function changeAll(value){
    for (let i = 0; i < value.length; i++) {
        const newValue = value[i];
        changeAll(newValue);
        if(newValue % 2 == 0){
            console.log(newValue, ': this is a new value');
         }else{
            console.log(newValue*2, ': not a new value');
        }
     }
}

 let value = [4, 3, 10, 44, 11, 15];
  changeAll(value)

 let age = [14, 17, 19, 18, 12, 13];
  changeAll(age);