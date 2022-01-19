# Event Binding

Alright, so far you have learned about property binding, and it's variations like class binding, style binding, and attribute binding, to add something in the DOM to display data in Angular we also have event binding which we use to handle events raised from the DOM, like keystrokes, mouse movements, clicks and so on.

So here we have a simple button, and want to handle the click event of this button. So, Instead of square brackets we use parenthesis, and here we add the name of the event like click,
then we bind this to a method in our component. So, let's call this onSave. Now here I create this method onSave, and simply log a message in the console. 

So console.log, button was clicked.

```ts
import { Component } from "@angular/core";

@Component({
  selector: 'courses1',
  template: `
    <!-- Event Bubbling -->
    <div (click)="OnDivClick()">
      <button (click)="onSave($event)">Save - event binding</button>
    </div>
  `
})

export class Courses1Component{
  isAtive = true;

  onSave($event:any) {
    console.log("Button was clicked", $event);
  }
}
```

Now some times we need to get access to the event object that was raised in the event handler. 
For example with mouse movements, they even object will tell us the x and y position, if you want to get access to that event object, we need to add that as a parameter here. 
So '$event' and then when calling this method we also pass '$event'.
this '$event' object is something known to Angular.

So when we click this button we get two messages in the console, the first one is the handler for the click
event of the button, and the second is from the handler of the click event of the div. 
So this is what we call event bubbling, an event bubbles up the DOM tree.
So to extend this example if we had another div or another element that contained this div, and we handled the click event on that element,
our event object will bubble up and hit that target handler. Now how can we stop event bubbling?

Well, here in onSave we can call dollar event.stopPropagation.

Again this is a standard method you have seen before in vanilla JavaScript. So when we call this, this event will not bubble up, in other words
it's not going to hit the second handler.
