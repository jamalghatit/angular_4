/*
    In order for us to use this class somewhere else
in our program, we need to export this from the outside.
    So, we add the export keyword here, and now this is
visible outside this file. Now that we're exporting
something on top of this file, from TypeScript's point of view this file
is a module, now we need to go back to our main.ts
and import this class, so we can use it
*/
export class Point{
    constructor (private x?: number, private y?: number){
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
