# Style

You can declare style inline, in the html file and also point to another css file.

```ts
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'], //or
  styles : [
    `
    `
  ]
})

```

In the html file, put the code surrounded by tag <style>

```html
<style></style>

<div>
  <span class="glyphicon"
  (click)="onClick()"
  [class.glyphicon-star]="isSelected"
  [class.glyphicon-star-empty] = "!isSelected"
  ></span>
</div>


```

In ./favorite.component.css:

```css
.glyphicon{
  color:red
}
```

Now, back to component:

```ts
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles : [
    `
    .glyphicon{
      color:green
    }
    `
  ]
})

```

It will apply the last style, that is, the color of the glyphicon will be green. But if we change 
the order of the string, as styleUrls in the last, the glyphicon will be red.

in favorite.component.html

```html
<style>
  .glyphicon{
    color:blue
  }
</style>

<div>
  <span class="glyphicon"
  (click)="onClick()"
  [class.glyphicon-star]="isSelected"
  [class.glyphicon-star-empty] = "!isSelected"
  ></span>
</div>

```

So you really need to pick one of these approaches. Now finally if you add any styles in the template it will always be applied and it will overwrite any previous rules, unless previous rules are more specific.

Now in respect to which approach to choose, what is interesting about Angular, is that it creates a scope for these styles. So these styles will not leak outside of this components template. So if you
have a glyphicon somewhere else in our HTML document, these styles will not be applied to that glyphicon.