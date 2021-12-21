/*
An Access Modifier, is basically a keyword we can apply to a member of a
class to control it's access from the outside.

So in TypeScript, we have three Access Modifiers, public, private,

and protected. Public and private are the most common, and

by default, all members are public.
*/

class Pointss {
    private x: number;
    private y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x: ' + this.x + ', Y: ' + this.y)
    }
}

let point = new Pointss(1, 2);

/*
so this is why we use access modifiers, we control access to 
certain members of a class, from the outside.
We can apply these Access Modifiers on fields, properties and methods
*/


