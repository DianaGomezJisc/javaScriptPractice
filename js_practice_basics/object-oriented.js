//create objects
//object literal syntax

const circle ={  //object
    radius:1,  //properties
    location:{
        x:1,
        y:1
    },
    draw: function(){  //function
        console.log('draw');
    }
};

circle.draw();



// to create multiple circles, because the object has behaviour is better to use a factory or constructor
// 1. Factory Function
function createCircle(radius){
    return{
        radius,
        draw:  function(){
            console.log('draw here');
        }
    };
}
const circle2 = createCircle(1);
circle2.draw();

//2. Constructor function

function Circle(radius){
    this.radius =radius;
    this.draw = function(){
        console.log('draw here');
    }
}

const objectExample = new Circle(2);
Circle.call({},1)
Circle.apply({}, [1,2,3])

