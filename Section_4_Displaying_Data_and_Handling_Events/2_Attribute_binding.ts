/* 

First you need to understand the difference between DOM or Document Object Model and HTML. DOM is a model of
objects that represent the structure of a document. It's essentially a tree of objects in memory. HTML on the other
hand, is a markup language that we use to represent DOM in text. 

So when your browser parses an HTML document, it creates a tree of objects in memory that they refer to as the DOM. 
Now, we can also create this tree of objects objects programmatically, using vanillas JavaScript, so we don't necessarily
need HTML. But using HTML is far simpler.

Now here's the key thing you need to know. Most of the attributes of HTML elements, have a one to one mapping
for properties of DOM objects, there are however a few exceptions.

For example we have HTML attributes that don't have a representation in the DOM. Here, colspan is an example of that. So when we parse
this HTML markup, and create an actual DOM object for this td, that DOM object does not have a property called colspan,
and that's why we get this error. So colspan, isn't a known property of td. Also, we have properties in DOM that do not have a representation in HTML.

For example, earlier I showed you that we can bind to the text content property of H1. This is a property of a DOM object, 
and in HTML we don't have such a attribute. Now when using property binding. You should remember that you're actually binding 
to a property of a DOM object, and not an attribute of an HTML element. Once again, in 99% of the cases,these HTML attributes and DOM 
properties have a one to one mapping. But we have a few exceptions here and there. So, here we're dealing with the colspan attribute.
If you want to bind this attribute of the td element, you need a slightly different syntax. So, in the square brackets, you need to
prefix this attribute with ATTR which is short for attribute and then . this way you are telling Angular that we're targeting 
the colspan attribute of an HTML element, in this case, td. 
*/