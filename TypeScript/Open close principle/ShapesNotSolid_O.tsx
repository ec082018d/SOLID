//open/close principle
//Software entities should be open for extension, but closed for modification.

//The following code snippet is an example of a piece of code that doesn't adhere to the open/close principle:

//This code snippet allows us to calculate the area of two shapes (Rectangle and Circle). If we try to 
//add support for a new kind of shape we will be extending our program. 
class RectangleNot_O {
    public width: number;
    public height: number;
}

class CircleNot_O {
    public radius: number;

}
//We can certainly add support for a new shape (our application is open for extension), the problem is that to do 
//so we will need to modify the getArea function, which means that our application is also open for modification.

function getAreaNot_O(shape: (RectangleNot_O|CircleNot_O)[]) {
    return shape.reduce(
        (previous, current) => {
            if (current instanceof RectangleNot_O) {
                return current.width * current.height;
            } else if (current instanceof CircleNot_O) {
                return current.radius * current.radius * Math.PI;
            } else {
                throw new Error("Unknown shape!")
            }
        },
        0
    );
}

