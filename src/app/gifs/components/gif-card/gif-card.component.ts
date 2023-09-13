import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',

})
export class GifCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  constructor() { }
  
  ngOnInit(): void {
    if ( !this.gif ) throw new Error ('Gif es una propiedad requerida');
  }



}
