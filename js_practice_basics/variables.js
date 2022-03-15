var name = "Bill"

//declare 
var age;

//initialize
age = 30;

age

var elements = ["pc", "laptop","mobile"]

//object
var person = {
    name: "Karl",
    age: 31
}

console.log(person);

//array
let selectedColour =['red', 'blue'];
console.log(selectedColour[0]); //red

//primitive variables
let primitive = 10;

function increase(primitive){
  primitive ++; //another variable-
}
increase(primitive);
console.log(primitive); // 10 primitive in the parameter is different to the one defined at the beginning

//reference variables
let object = {value:10};

function increaseObjectValue(object){
    object.value++;
}
increaseObjectValue(object);
console.log(object.value); // 11
