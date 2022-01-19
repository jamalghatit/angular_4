# Aliasing input property (nickname)

We can put the alias or nickname as a parameter of the @Input()

```ts
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite' ]
})

export class FavoriteComponent implements OnInit{
  @Input('is-favorite') isFavorite: boolean = false; // <--

  constructor(){};

  ngOnInit() {};

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}

```

In Section_5_Building_Re-usable_component\section5\src\app\app.component.html:

```html
<favorite [is-favorite]="post.isFavorite"></favorite>
```

So here's the lesson, if you're building reusable components, give your input properties an alias, keep the contract of your components stable. Next we're going to look at output properties.