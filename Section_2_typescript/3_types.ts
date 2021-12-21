let count = 5;

count = 'a';

let a;

a = 1;
a = true;
a = 'a';

//type annotations

let b: number;
b = 2;
b = 'bla';

let c: string;
let d: boolean;
let e: any;
let f: number[] = [ 1, 2, 3];
let g: any[] = [1, true, 'a', false]; 

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red, Green, Blue };
/*
Now in terms of the value, the first element get the value 0, second 1, etc.
enum Color { Red = 0; Green = 1; Blue = 2}
So we don't have to explicitly set these. But as a best practice,
it's better to do so, because chances are some time in the future
someone may come here and add a new color here like purple, and then purple
would automatically become 2, and the value of blue would change to
3. So this may break parts of our application.
*/

let backgroundColor = Color.Blue;
console.log('the value of Color.Blue is ' + backgroundColor)
