var count = 5;
count = 'a';
var a;
a = 1;
a = true;
a = 'a';
//type annotations
var b;
b = 2;
b = 'bla';
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
/*
Now in terms of the value, the first element get the value 0, second 1, etc.
enum Color { Red = 0; Green = 1; Blue = 2}
So we don't have to explicitly set these. But as a best practice,
it's better to do so, because chances are some time in the future
someone may come here and add a new color here like purple, and then purple
would automatically become 2, and the value of blue would change to
3. So this may break parts of our application.
*/
var backgroundColor = Color.Blue;
console.log('the value of Color.Blue is ' + backgroundColor);