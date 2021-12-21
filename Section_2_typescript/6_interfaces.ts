/*
when we're working with more complex concept, we may end up with a function
that has so many parameters, like this.

let drawPoint = (x , y, a, b, c, d, ) => {
    // ...
}

This is really, really bad and is something you should avoid at all times.
In those situations, it's very likely that a group of these parameters
maybe all of them, belong to a singular concept,
as an example think of a car. A car has so many different properties,
we don't want to pass all those properties to a function, like drive car.

Instead, you want to encapsulate them inside an object,
and only pass that one object here. So in this example,
instead of passing x and y here t's better to
pass a point object, and then we can call this function
*/

let drawPoint = (x , y) => {
    // ...
}

let drawPoint2 = (point) ={
    // ...
}

//Inline annotation
let drawPoint3 = (point: {x: number, y: number}) => {
    // ...
}

// So with this interface, I'm defining the shape of an object.
// Pascal name convention -> So the first
// letter of every word in the name of the interface should be capitalized.

interface Point {
    x: number,
    y: number,
}

let drawPoint4 = (point : Point) => {
    // ...
}

drawPoint4({
    x: 1,
    y: 2,
})