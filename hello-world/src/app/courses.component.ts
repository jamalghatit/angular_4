import { Component } from "@angular/core";
import { listenerCount } from "process";
import { CoursesServices } from "./courses.service";

//Remember: In typescript, In name of class is used the Pascal case convention and also, if the class is a component, we need
// put the word component in its name as a suffix

@Component({
  selector: 'courses',
  /*
  reference to :
    element like this <courses> -> "courses"
    <div class="courses"> -> ".courses"
    <div id="courses"> -> "#courses"
  */
  //template: '<h2>{{ getTitle() }}</h2>',
  // we use double curly braces, and we use this to render something in our template dynamically
  // we can use here javascript
  //So this special syntax here, we call it String Interpolation.
  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>


  `,
  /*
  Now the benefit of using the back tick, is that we can break up
  this template into multiple lines and make it more readable.

  We use Directives to manipulate the dom, we can use them to add a dom element,
  our move an existing dom element, or change the class of a dom element, or
  it's style and so on. So here, you're going to use a special Directive called ngFor.

  Use it like an attribute in HTML. So you set it to a string, and here we're going to write some expression.
  Now before going any further, we should prefix this attribute with an *.
  It's a special syntax in Angular, so whenever you're using a Directive that modifies the structure of a dom, you should
  prefix that directive with an *. In case you're curious about the reason,
  I have covered that later in the section about Directives, so for now just
  remember, whenever you're using a Directive that modifies the structure
  of the dom, by adding or removing an element, you need to prefix that with an *.
  */
})

export class CoursesComponent{
  title = "List of courses";
  courses;

  /*
  So first we need to add a constructor here, because a constructor is where we initialize an object.
  So here we need to create an instance of our course of service, something like this.
  */
  constructor(service: CoursesServices){
      /*
      courses = new CoursesServices;
      Well, instead of recreating an instance of the course of service, we can ask Angular to do that for us so we can delete this line here.
      And add a parameter in this constructor, call it 'service:CoursesServices'.
      With this, when Angular is going to create an instance or component, it looks at this constructor,
      it sees that this constructor has a dependency, this dependency is of type 'CoursesServices'.
      So first it creates an instance of the course of service and then passes that to this constructor.
      Now, with this implementation, if we change the constructor, of course, a service and add a new parameter,
      we don't have to modify 100 hundred places in our code to reflect the change.
      Angular will automatically instantiate a new 'CoursesServices' object.
      The second benefit of this implementation is that when we are going to unit unities, this 'CoursesServices' component,
      instead of supplying an actual 'CoursesServices' to this constructor, we can create a fake implementation of the service
      that doesn't use that HTTP service on the backend.
      In other words, we have decoupled our course's component from CoursesServices.

      So here's the lesson.
      When you use the new operator like this inside a class ( new CoursesServices() ), You have tightly coupled your class to that implementation.
      You cannot change this at runtime, but when you add that dependency as a parameter of a constructor,
      you have decoupled that class from that dependency.

      We need to construct ANGULAR to create an instance, of course, a service and pass it to our course's component.
      This concept is called dependency injection.

      We need to register all the dependencies that components in this module are dependent upon. For example, our courses component is dependent upon the service.
      So we need to register course a service as a provider in this module.

      Go to app.module.ts.
      */

      this.courses = service.getCourses();
  }

  getTitle(){
    return this.title;
  }
}

/*
Now we need to register the component in a Module.
So, we need go to app.modules.ts and add it.
*/

/*
so this is the Selector for this Component, which means any
where we have an element like Courses, Angular is going to
render the template for this Component inside that element.
*/

ul>li