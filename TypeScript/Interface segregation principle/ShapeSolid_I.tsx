//The Interface segregation principle tells us that many client-specific interfaces are 
//better than one general-purpose interface, which means that we should split our interfaces:

//client-specific interfaces 
interface RectangleInterface {
    width: number;
    height: number;
}

interface CircleInterface {
    radius: number;
}

interface Shape {
    area(): number;
}

interface Serializable {
    serialize(): string;
}


//Using the new interfaces, we are implementing our domain layer in a way that is completely 
//isolated from infrastructure concerns like serialization:

//domain layer implementation 
class Rectangle_I implements RectangleInterface, Shape {
    public width: number;
    public height: number;

    public area(){
        return this.width * this.height;
    }
}


class Circle_I implements CircleInterface, Shape {
    public radius: number;

    public area(){
        return this.radius * this.radius * Math.PI;
    }
}

function getArea(shapes: Shape[]){
    return shapes.reduce(
        (previous, current) => previous + current.area(),
        0
    );
}


//In the infrastructure layer we can use a new set of entities that deal with serialization:

//infrastructure layer implementation
class RectangleDTO implements RectangleInterface, Serializable {

    public width: number;
    public height: number;

    public serialize() {
        return JSON.stringify(this);
    }
}

class CircleDTO implements CircleInterface, Serializable {

    public radius: number;

    public serialize() {
        return JSON.stringify(this);
    }
}

//Using multiple interfaces instead of one general-purpose interface has helped us to prevent a violation 
//of the SoC principle (the business layer doesn’t know anything about serialization) and the Single 
//responsibility principle (we don’t have a class God class that knows about both the serialization and the 
//calculation of the area).

//We can argue that RectangleDTO and rectangle Rectangle are almost identical and they are a violation of the 
//"Don't repeat yourself" (DRY) principle. I don't think it is the case because while they look the same, they 
//are related to two different concerns.