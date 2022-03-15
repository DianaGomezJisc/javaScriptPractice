
 class CommonShapes{

    constructor(name, colour, area, x, y){
      this.name = name;
      this.colour = colour;
      this.area = area;
      this.location = {x:x,
                       y:y};
    }

    getColourDraw(colour){
        return  colour;
    }
}

export default CommonShapes;
