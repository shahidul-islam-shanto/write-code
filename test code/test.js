/**let myWindow;
//select bom Element
let width = document.getElementById("width");
let height = document.getElementById("height");

//show window open
width.innerHTML = "window inner width is" + window.innerWidth;
height.innerHTML = "window inner height is" + window.innerHeight;

//function
function openWindow(){
  myWindow = window.open("https://google.com");
}

function closeWindow (){
    myWindow.close();
}
*/


/**let timeout = document.getElementById("time").addEventListener('click', function(){
    setInterval(() => {
      time.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
});

let close = document.getElementById("close");
*/


/**function setCookie(cname, cvalue, exdays){ 
 const d = new Date();
 d.setTime(d.getTime() + exdays * 24 * 60 *  60 * 1000);
 let expires = "expires=" + d.toUTCString();

document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname){
  //name = sumit saha; username = sumit
  
  let ca = document.cookie.split(";");
  for(let i = 0; i< ca.length; i++){
    let c = ca[i];
 while(c.charAt(0) === " "){
  c = c.substring(1);
}
    if(c.indexOf(name) === 0){
      return c.substring(name.length)
    }
  }
  return "";
}
*/


//api validation
/**function validation(){
  const inputObj = document.getElementById("id1");
if(inputObj.validity.rangeOverflow){
    inputObj.setCustomValidity("You have made a range overflow error!");
 }else if(inputObj.validity.rangeUnderflow){
    inputObj.setCustomValidity("You have made a range Underflow error!");
 }else if(inputObj.validity.valueMissing){
    inputObj.setCustomValidity("You have made a range value Missing error!");
}
  if(!inputObj.checkValidity()){
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  }
}
*/


//API Set local storage
/**function setLocalStorage(key, value){
  localStorage.setItem(key, value);
}
function getLocalStorage(key){
  alert(localStorage.getItem(key));
}
function removeLocalStorage(key){
  localStorage.removeItem(key);
}
*/


//API worker
let w;
function startWorker(){
  if(typeof Worker !== undefined){
   //worker available
   
   //create
   w = new Worker("worker.js");

  }else{
    alert('you are browser dose not support web worker!');
  }
}





