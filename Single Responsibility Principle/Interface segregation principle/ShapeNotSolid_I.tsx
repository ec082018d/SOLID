//Interface segregation principle
//Many client-specific interfaces are better than one general-purpose interface.

//The interface segregation principle helps us prevent violations of the single 
//responsibility principle and the separation of concerns principle.


//You have been using these entities in your domain services to calculate their area, 
//and it was working very well, but now you need to be able to serialize them in one 
//of your infrastructure layers. 

//We could solve the problem by adding an extra method to the Shape interface:

interface ShapeNot_I {
    area() : number;
    serialize() : string;
}

class RectangleNot_I implements ShapeNot_I {

    public width: number;
    public height: number;

    public area(){
        return this.width * this.height;
    }

    public serialize(){
        return JSON.stringify(this);
    }
}

class CircleNot_I implements ShapeNot_I {
    
    public radius: number;

    public area(){
        return this.radius * this.radius * Math.PI;

    }

    public serialize(){
        return JSON.stringify(this);
    }
}

//Our domain layer needs the area method (from the Shape interface)
//but it doesn't need to know anything about serialization:
function getAreaNot_I(shapes: ShapeNot_I[]) {
    return shapes.reduce(
        (previous, current) => previous + current.area(),
        0
    );
   
}

//Our infrastructure layer needs the serialize method (from the Shape interface), 
//but it doesn't need to know anything about the area:
//..some code here
//----->>>>>return rectangle.serialize();

//The problem is that adding a method named serialize to the Shape interface is a 
//violation of the SoC principle and the single responsibility principles. The Shape 
//is a business concern and being serializable is an infrastructure concern. We shouldn’t 
//mix these two concerns in the same interface.