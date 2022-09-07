//class
/**class student{
  constructor(change, id, phone){
    this.name = change;
    this.id = id;
    this.phone = phone;
  }
}
const student1 = new student('mukul', 55, 114477);
const student2 = new student('sojib', 44, 224455);
console.log(student1, student2);
*/


//class to inheritance
class parent{
    constructor(){
        this.fatherName = "Barek uddin";
    }
}

class Child extends parent{
  constructor(names){
    super();
    this.name = names;
  }
}
const baby = new Child('parul');
const baby2 = new Child('jakaruya')
console.log(baby, baby2);