/*
So in the last lecture, we used an interface to define the shape of a point object.

But there is a problem with this implementation. In object oriented
program languages, we have this concept called Cohesion.

Which basically means, things that are related, should be part of one
unit. They should go together. This is what we call Cohesion.

*/
interface Point {
    x: number,
    y: number,
}

let drawPoint = (point : Point) => {
    // ...
}

let getDistance = (pointA : Point, pointB: Point) => {
    //...
}

/*
Now, if you're going to build a utility library for working with
points, chances are, you're going to create another function,
like getDistance, that calculates the distance
between two points. So point A, in type point,
and pointB of type Point. And this goes to
code block. 

Again, we have violated the Cohesion
principle, we have two functions hanging in the air,
separate from the point object. Since these concepts are highly
related, they should be part of one unit.

In object oriented languages, we call that unit a class. A class
groups properties and functions that are highly
related. 
*/
interface Point {
    x: number,
    y: number,
    drawpoints: () => void,
}

/*
Now in interfaces as I said we can not have implementation, we can only have
signature of a function, so with this interface, we are telling TypeScript
Compiler, that our point objects should have two properties, x and y,
and a function called draw;
we are telling TypeScript Compiler, that our point objects should have two 
properties, x and y, and a function called draw. 
*/

class Point {
    //fields -> variable in the class
    x: number;
    y: number;
    
    draw(){
        //...
    }

    //methods - function in the class
    getDistance(another: Point){
        //...
    }
}

