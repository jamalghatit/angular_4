# View Encapsulation

Shadow DOM - Allows us to apply scoped styles to elements without bleeding out to the outer world.

I explained that the styles we applied for components here are scoped to this component, so they will not leak outside the template for this component. But how does that work? Well before we
get there. We need to look at the concept of Shadow DOM. If you have never heard of Shadow DOM before, it's basically a specification that enables DOM tree and style encapsulation. Simply
put, it allows us to apply scoped styles to elements without bleeding out to the outer world.
Now this is kind of a new feature in browsers, not old browsers out there support this, in fact as far as I know it's only supported in Safari 10 and higher, or Chrome 53 or higher. Now let me show you Shadow DOM in action.

In plain javascript:

```js
var el = document.querySelector('favorite');
var root = el.createShadowRoot();
root.innerHTML=`
    <style>h1 { color : red }</style>
    <h1>Hello</h1>
`

```

In favorite.component.ts:

```ts
import { Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulate Shadow DOM. This is default pattern of Angular and it workds by attaching addional attributes to our CSS rules.
  //encapsulation: ViewEncapsulation.Native uses Shadow DOM natively from the browser. It will work if the browser is new.
  //encapsulation: ViewEncapsulation.None, the template css will leak out and other elements will catch this properties.

})

export class FavoriteComponent{
  @Input('is-favorite') isSelected: boolean = false;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}
``` 

