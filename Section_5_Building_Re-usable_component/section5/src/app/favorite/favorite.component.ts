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
