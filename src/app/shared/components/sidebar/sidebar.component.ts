import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interface';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public gifs: Gif [] = [];

  constructor(
    private gifsSvc: GifsService,
  ){}

  get tags (): string[] {
    return this.gifsSvc.tagsHistory;
  }
  
  //funcion para volver a seleccionar el tag
  searchTag( tag: string ) {
    this.gifsSvc.searchTag( tag );
  }
}
