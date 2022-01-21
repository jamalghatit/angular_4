# Hidden Property

Instead of using the ngIf directive, we can use the hidden attribute. So, in html, you know we can apply this hidden attribute to our
divs, to hide them

```html
<div [hidden]="courses.length == 0">
  List of courses
</div>
<div [hidden]="courses.length > 0">
  No courses yet
</div>
```
When we use ngIf on an element, if the condition evaluates to falsey, that element is removed from the DOM. For as when we use the hidden attribute,
the element is in the DOM it's just hidden. So you might ask which approach is better? Well if you're working with a large
tree with a lot of children, it's better to use ngIf because these elements can take substantial memory and computing resources.
You don't want to put them in the DOM if you're not going to show them to the user.

If you're dealing with a small tree of objects, it doesn't matter which approach you choose it's purely your personal preference.
If you're working with a large tree, first check to see if building that tree is going to be costly or not. If it's costly,
use the hidden property to keep it in the DOM, or hide it, otherwise it's better to use ngIF to remove it from the DOM and free out the resources.