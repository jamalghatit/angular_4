# Input Property

In Section_5_Building_Re-usable_component\section5\src\app\favorite\favorite.component.html:

```html
<div>
  <span class="glyphicon"
  (click)="onClick()"
  [class.glyphicon-star]="isFavorite"
  [class.glyphicon-star-empty] = "!isFavorite"
  ></span>
</div>

```

In Section_5_Building_Re-usable_component\section5\src\app\app.component.html:

```html
<favorite [isFavorite]="post.isFavorite"></favorite>
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
}

```

We can declare both way the input property:

In Section_5_Building_Re-usable_component\section5\src\app\favorite\favorite.component.ts:

```ts
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit{

  @Input() isFavorite: boolean = false;

  constructor(){};

  ngOnInit() {};

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}

```

or 

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite' ] // If we change the name of isFavorite, it isn't change automatically and also,
  // when we declare a input property like this, the angular creates a variable called isFavorite behind the scene.
  // So, it isnt a good way to do this. Prefer always to do the first approach
})

export class FavoriteComponent implements OnInit{

  isFavorite: boolean = false;

  constructor(){};

  ngOnInit() {};

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}

```