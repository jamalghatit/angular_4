/*
Also going back to the definition of component in Angular, remember, a component encapsulates the
data, the logic, and the HTML markup behind the view.

<input #email (keyup.enter)="onKeyUpCatch1(email.value)"/>

onKeyUpCatch1(email:any){
    console.log(email);
  }

Here, the email field is used to encapsulate the data, and the onKeyUp method represents the behavior or the logic behind this view.
And of course here's our HTML template. 

Because with operated binding, the direction of binding is from the component for the view. So if the value of this email field changes
at some point in the future, the view will be notified, and this input field will be automatically updated. Now what we need here
is a slightly different kind of binding. We want a binding that works in two ways, from component to the view, and from view to the component.

In Angular we have a special syntax for implementing two way binding

 In Angular we have a special syntax for implementing

Instead of using property binding, on the value property, we use the two way binding syntax, which includes square brackets, and parenthesis: [(...)] 
Now if this syntax is complicated, or you may forget it, I'll give you a tip. This is called Banana in a Box.

<input [(ngModel)]="email" (keyup.enter)="onKeyUp3()" />

  email:any = "blabla@blabla";

  onKeyUp3(){
    console.log(this.email);

    Now instead of value,

we bind to ngmodel. What is this? Well, our dom objects or input dom objects doesn't have a property called ng model. So this is something that Angular
adds to this dom object. Now earlier you saw ng for. Remember? ng for. is a directive and we use directives to manipulate the dom. So in Angular we have another built in directive called ngmodel.

That is used for implementing two way binding. So, this implementation we have here is encapsulated in a generic way inside a directive called ngmodel.

*/