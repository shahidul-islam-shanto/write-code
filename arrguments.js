function fullName(first, second){
    let fullName = "";
 //let smallName = first + second;
 for(let i = 0; i < arguments.length; i++){
    const total = arguments[i];
    fullName = fullName + " " + total;
 }
 return fullName;
}

const result = fullName('fokor', 'jaman', 'onek', 'boro lok');
console.log(result);