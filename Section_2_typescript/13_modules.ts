import { Point } from './13_point'

let point = new Point(1, 2);
point.draw();

/*
In TypeScript we divide our program into multiple files
in each file, we export one or more types,
these types can be classes, functions, simple
variables or objects, and whenever we need to use these types,
we need to import them first. When we have an import or export statement
on top of a file, that file is a Module from TypeScript's
point of view.
In Angular, we also have the concept of Modules,
but Angular Modules are a little bit different, they're not about organization of
code in different files, they are about organization of your application
into smaller, functional areas.
*/