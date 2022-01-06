import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `
  <div>
  <span class="glyphicon glyphicon-star" (click)="onClick()" [class.glyphicon-star-empty]="isFavorite"></span>
  </div>
  `
})

export class FavoriteComponent{
  isFavorite:boolean = true;
  isStarEmpty:boolean=true;

  StarEm(){
      this.isStarEmpty=!this.isStarEmpty;
    }
  onClick(){
    this.isFavorite = !this.isFavorite;
  }


}
