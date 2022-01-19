# Aliasing Output Properties

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
  @Output('change') click = new EventEmitter(); //<-- Aliasing output, so we can change the name of event and even it 
  //will works as 'change'

  constructor(){};

  ngOnInit() {};

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}
```

In favorite.component.html

```html
<div>
  <span class="glyphicon"
  (click)="onClick()"
  [class.glyphicon-star]="isSelected"
  [class.glyphicon-star-empty] = "!isSelected"
  ></span>
</div>
```

