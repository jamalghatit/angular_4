# Style Binding

So this is what we can style binding. We also have style binding
which is again a variation of property binding, very similar to class binding,

https://www.w3schools.com/jsref/dom_obj_style.asp

```ts
import { Component } from "@angular/core";

@Component({
   selector: 'courses1',
   template: `
     <button [style.backgroundColor]="isAtive ? 'blue' : 'red' ">asdfadf</button>
   `
 })

 export class Courses1Component{
   isAtive = true;
 }
```