/* 
TypeScript has a fantastic feature that helps you achieve the same thing
with less code. So here, we can delete these two fields here, 
and in our Constructor we can prefix our parameters with an Access
Modifier. 

So here I want to have, two private fields x and y, I can simply prefix this
with the private keyword like this.

So TypeScript Compiler will generate these fields for us.
And also, we don't need these ugly repetitive assignments either. So if you prefix
a Constructor parameter with an access modifier whether private or public
TypeScript Compiler will generate a field with the exact same name 
and it will also initialize that field with the value of this argument.
*/

class Pointss {
    constructor(private x?: number, private y?: number){
    }

    draw() {
        console.log('x: ' + this.x + ', Y: ' + this.y)
    }
}

let point = new Pointss(1, 2);
