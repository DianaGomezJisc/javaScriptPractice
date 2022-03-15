//https://www.youtube.com/watch?v=PFmuCDHHpwk&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=3

function CircleGeo(radius) {

    this.radius = radius;
    let defaultLocation = {x: 1, y: 0}; //private variable


    this.draw = function () { //this makes it public
        let z, j;
        console.log("draw")
    };

    this.getDefaultLocation = function () { //a way to return the property
        return defaultLocation;
    };


    Object.defineProperty(this, 'defaultLocation', { //nicer way to create getters and setters to access a property
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('invalid');
            defaultLocation = value;
        }
    });
}
    const circleGeo = new CircleGeo(10);
    circleGeo.draw();
    circleGeo.getDefaultLocation(); //access the private variable with getter
    circleGeo.defaultLocation; //not sure how to set the value
    console.log(circleGeo.defaultLocation);



