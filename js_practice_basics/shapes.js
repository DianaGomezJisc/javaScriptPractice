
import CommonShapes from "./CommonShapes"

const square = new CommonShapes(
   "square",
   "blue",
   25,
   5,
   5);

const todaysDate = new Date();


console.log("Date: ", todaysDate.toDateString());
console.log("object: " + square.name);
console.log("colour: " + square.getColourDraw(square.colour));


