// two different way to declare variable
var number = 1; // it is available outside de block code, available of nearest function
let count = 2; // available only for the nearest block

function doSomething(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finaly: ' + i);
}

doSomething();

// In the terminal, compile this file: tsc 2_main.ts

/* 
from now on, anywhere we want to declare a variable, we use
the let keyboard. Once again, this does not stop the compilation step,
but at least we can catch the issues earlier during the compilation time.
*/