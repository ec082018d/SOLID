/*
The solution to this problem is to take advantage of polymorphism in object-oriented 
programming as demonstrated by the following code snippet

The dictionary definition of polymorphism refers to a principle in biology in which an organism or species can have many different forms or stages. 
This principle can also be applied to object-oriented programming. 
Subclasses of a class can define their own unique behaviors and yet share some of the same functionality of the parent class.
*/

//The new solution allows us to add support for a new shape (open for extension) 
interface Shape_O {
    area(): number;
}

class Rectangle_O implements Shape_O {

    public width: number;
    public height: number;


    public area(){
        return this.width * this.height;
    }
}

class Circle_O implements Shape_O {

    public radius: number;

    public area(){
        return this.radius * this.radius * Math.PI;
     }

}

//without modifying the existing source code (closed for modification)
function getArea_O(shapes: Shape_O[]){
    return shapes.reduce(
        (previous, current) => previous + current.area(),
        0
    );
}