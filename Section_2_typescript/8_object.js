var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function () {
        //...
    };
    return Point;
}());
/*

let point: Point;
point.draw();

point.draw();
      ^

TypeError: Cannot read properties of undefined (reading 'draw')
*/
/*
when we call this draw method, this point object was undefined.
Because here, unlike the basic types we have in TypeScript,
like numbers, strings, booleans, we're dealing with a custom type.

When defining an object of a custom type, we need to
explicitly allocate memory to it, how do we do that?

Well, here where we declare the point object
point variable, we initialize it using the new
operator. So this object, is a new point.
*/
// let point:Point = new Point();
// point.draw();
/*
Now you can see that we have repeated this point here,
twice so we can make this code a little bit cleaner,
by removing this type adaptation, because
TypeScript Compiler can infer from this assignment here,
that the type of this object is a point object, and
let's verify that, look, you're working with a point object.
*/
var point = new Point();
point.x = 3;
point.y = 4;
point.draw();
