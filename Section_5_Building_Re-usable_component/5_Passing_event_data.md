# Passing event Data

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

  onFavoriteChanged(isFavorite:boolean){
    console.log("Favorite Changed ", isFavorite)
  }
}


```

In Section_5_Building_Re-usable_component\section5\src\app\favorite\favorite.component.ts

```ts
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['isFavorite' ]
})

export class FavoriteComponent implements OnInit{
  @Input('is-favorite') isSelected: boolean = false;
  @Output() change = new EventEmitter();

  constructor(){};

  ngOnInit() {};

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}


```

In Section_5_Building_Re-usable_component\section5\src\app\app.component.html:

```html
<favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChanged($event)"></favorite>

```

--------


In Section_5_Building_Re-usable_component\section5\src\app\app.component.ts:

```ts
import { Component } from '@angular/core';

interface FavoriteChangeEventArgs {
  newValue: boolean
}

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

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs){
    console.log("Favorite Changed ", eventArgs)
  }
}


```