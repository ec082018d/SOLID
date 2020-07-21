//Liskov substitution principle
//Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.

interface ShapeNot_L {
    area(): number;
}

class RectangleNot_L implements ShapeNot_L{

    public width: number;
    public height: number;


    public area(){
        return this.width * this.height;
    }
}

class CircleNot_L implements ShapeNot_L {

    public radius: number;

    public area(){
        return this.radius * this.radius * Math.PI;
     }

}

//The Liskov substitution principle also encourages us to take advantage of polymorphism in 
//object-oriented programming. In the preceding example:
function getArea_L(shapes: ShapeNot_L[]){
    return shapes.reduce(
        (previous, current) => previous + current.area(),
        0
    );
}

//The Liskov substitution principle tells us that we should be able to pass any subtype of Shape to the getArea function without 
//altering the correctness of that program. In static programming languages like TypeScript, the compiler will check for us the 
//correct implementation of a subtype (e.g., if an implementation of Shape is missing the area method we will get a compilation error). 
//This means that we will not need to do any manual work to ensure that our application adheres to the Liskov substitution principle.