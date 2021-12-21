var drawPoint = function (point) {
    // ...
};
var getDistance = function (pointA, pointB) {
    //...
};
/*
Now in interfaces as I said we can not have implementation, we can only have
signature of a function, so with this interface, we are telling TypeScript
Compiler, that our point objects should have two properties, x and y,
and a function called draw;
we are telling TypeScript Compiler, that our point objects should have two
properties, x and y, and a function called draw.
*/
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //...
    };
    //methods - function in the class
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
