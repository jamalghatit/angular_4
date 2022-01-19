import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{

  @Input() isActive:boolean = false;
  isMouseOver: boolean = false;
  @Input() likesCount:number = 2;

  constructor(){}

  onClick(){
    this.isActive = !this.isActive;
    this.isActive? this.likesCount++ : this.likesCount--

  }

  onMouseOver(){
    this.isMouseOver = !this.isMouseOver
  }

}
