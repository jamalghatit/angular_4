/*
So earlier you learned about interpolation, it's the double curly braces syntax
used to display data, so here we have two examples
------------------
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2> {{ title }}</h2>
        <img src="{{ imageUrl }}" />
    `
})

export class CoursesComponent{
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200"
}
-------------


one is for rendering the title field, and the other is for the image URL. And with this template, we get some
thing like this. Now this interpolation is just a syntactical sugar. Behind the scene when Angular compiles
our templates, it translates these interpretations into what we call property binding.
With property binding we bind a property of a DOM element, like source here, to a field where property in our component. 
Now let me show you this syntax for using property binding.

Go to hello-world\src\app\courses.component.ts

-------------

<!-- interpolation -->
<img src="{{ imageUrl }}" />
<!-- property binding -->
<img [src]="imageUrl"/>

So when we use double curly braces or string interpolation, Angular behind the scene translates that into the second syntax.
And with this whenever the value of the title field changes, the source attribute of this image element is automatically updated.
---

Now here you might have a question, you might be wondering whether to use string interpolation, or the square bracket syntax.

Well, interpolation works well for adding dynamic values between headings, like here, between the h2 element.
Or if you're using divs, spans, paragraphs, or wherever you want to render text, that's where you use string interpolation.

<!-- interpolation -->
<h2>{{ title }}</h2>
<img src="{{ imageUrl }}" />

<!-- property binding -->
<h2 [textContent]="title"></h2>
<img [src]="imageUrl"/>

In this example, if I want to use property binding with this h2 heading, look what I have to write. So h2, now I have
to bind the text content property of h2, DOM element. Have to bind this to the title field of the CoursesComponent.
Obviously you can see the second syntax is longer and more noisy. So that's why I prefer to use string interpolation
wherever I want to add text between headings, paragraphs, divs, and spans.


*/