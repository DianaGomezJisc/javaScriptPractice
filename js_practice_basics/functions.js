//function declarations

function myFunction(){
  return 3;
}
myFunction(); //3

//function expression
var myFunctionExpression = function(a,b){
  return a + b;
}
myFunctionExpression();


function greeting(student){
    console.log(`Hola ${student}`);
}//undefined

greeting("Diana"); //Hola Diana


//another example
function sumar(a,b){
    var resultado = a+b;
    return resultado;
}
console.log(sumar(2,8)); //10



//JavaScript Arrow Function - introduced in ES6.
let sumarNew = (a,b) => a+b;

functionName = () =>{
    return "test";
}

//if function has only one sentence and returns value
sumarNew = () => "hello";

sumarParam =(val) => "hello" + val;

//if only one parameter
sumarParam = val => "hello" + val;

//the async one is anonymous function
async () => {}