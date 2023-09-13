import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  
  public hasLoadded: boolean = false;

  @Input()
  public url!: string;

  @Input()
  public alt: string ='';

  ngOnInit(): void {
    if(!this.url) throw new Error('URL imagen, propiedad es requerida');
  }

  onLoad() {
    console.log("Imagen Cargada");
    this.hasLoadded = true;
  }  

}
