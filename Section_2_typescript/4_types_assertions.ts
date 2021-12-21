let message = 'abc'
let endsWithC = message.endsWith('c');

/*
we need to explicitly,
tell TypeScript Compiler that this message2 variable is actually a
string. And this is what we call Type Assertions.
*/
let message2;
message2 = 'abc';
let endsWithC2 = (<string> message2).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

/*

these Type Asserions does not change this type of variable at run time.
In fact, it's not going to restructure that object in memory. It's purely
a way to tell TypeScript Compiler about the type of a variable.
So, we can access the IntelliSense.
*/