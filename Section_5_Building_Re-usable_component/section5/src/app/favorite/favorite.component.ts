import { Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulate Shadow DOM
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
