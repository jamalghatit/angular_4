/*

*/
class Pointss {
    constructor(private x?: number, private y?: number){
    }

    draw() {
        console.log('x: ' + this.x + ', Y: ' + this.y)
    }
    
    getX(){
        return this.x;
    }

    setX(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.')
        this.x = value;
    }
}

let point = new Pointss(1, 2);
let x = point.getX();
point.setX(10);

class Point {
    constructor(private _x?: number, private _y?: number){
    }

    draw() {
        console.log('x: ' + this._x + ', Y: ' + this._y)
    }

    get x(){
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error ('Value cannot be less than 0.');
        this._x = value;
    }
}
/*
Now what is the difference? The difference is we can use the properties
like fields, 
*/

let points = new Point(1, 2);
let x1 = points.x;
points.x = 10;

/*
If you have private fields, and you want to give maybe a read
only access to the outside, or you want to give the consumer of your classes
the ability to set the values, but you want to have some basic validation,
that's when you use a Property

In JavaScript and in TypeScript we use Camel Notation to name our fields.

So that's why earlier we defined this field here using Camel Casing Notation. 
Camel Casing means the first letter of the first word is lowercase, 
and the first letter of every word after is uppercase. Now, what should we do to
use Camel Casing Notation for our properties? If I name this the lower case x, 
it clashes with the existing field, so let me revert this back, a convention 
we use to solve this problem is to prefix the name of the underlying 
field with an underline. So, let's rename this using F2, 
and prefix it with an underline.

So here's the lesson, the property looks like a field from the outside, 
but internally it's really a method in the class. But more accurately, 
it's either one method which is a getter or a setter, or a combination 
of a getter and a setter.
*/

