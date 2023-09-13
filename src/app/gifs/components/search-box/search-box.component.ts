import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar ...</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `,
})
export class SearchBoxComponent {
  //VIewChild para poder obtener una referencia local
  //ViewChildren regresa un arreglo de todos los elementos de un arreglo
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsSvc: GifsService,
  ){}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    // console.log({ newTag });
    this.gifsSvc.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    
  }


}
