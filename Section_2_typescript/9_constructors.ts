class Points {
    x: number;
    y: number;

    draw() {
        console.log('x: ' + this.x + ', Y: ' + this.y)
    }
}

let point = new Points();
point.x = 1;
point.y = 2;
point.draw();

/*
In oriented program languages, we have this concept called
Constructor. So every class can have a Constructor, which is basically
a method that is called when we create an instance of that class. 
*/

class Pointss {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    // If we want to make an argument opcional, we put a question mark after 
    // the variable.
    /*
        constructor(x?: number, y?: number){
            this.x = x;
            this.y = y;
        }
    */

    draw() {
        console.log('x: ' + this.x + ', Y: ' + this.y)
    }
}

let points = new Pointss(6, 5);
point.draw();