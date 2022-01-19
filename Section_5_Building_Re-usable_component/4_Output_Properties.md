# Output Properties

In Section_5_Building_Re-usable_component\section5\src\app\app.component.html:

```html
<favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChanged()"></favorite>
```

In Section_5_Building_Re-usable_component\section5\src\app\app.component.ts:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true,
  }

  onFavoriteChanged(){
    console.log("Favorite Changed")
  }
}

```

In Section_5_Building_Re-usable_component\section5\src\app\favorite\favorite.component.ts:

```ts
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite' ]
})

export class FavoriteComponent implements OnInit{
  @Input('is-favorite') isFavorite: boolean = false;
  @Output() change = new EventEmitter();

  constructor(){};

  ngOnInit() {};

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
    /*
    we have a method called emit, and we use that to raise or
    publish an event, which basically means notifying others
    that something has happened.
    */
  }
}

```