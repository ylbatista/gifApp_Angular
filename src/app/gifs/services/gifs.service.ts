import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] =[];

  private _tagsHistory: string[] =[];

  private apiKey: string = 'ToEqiOjv4vCcnRdwV1OFDjUmGZ7AyIMR';
  private apiUrl: string ='https://api.giphy.com/v1/gifs';

  constructor(
    private http: HttpClient,
  ) { 
    this.loadLocalStorage();
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  //para guardar el history en el localStorage
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
  }

  //para leer lo que se guardo en el localStorage
  private loadLocalStorage() : void {
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse( localStorage.getItem('history')! );
    //para recargar lo primero que se quedo en el localStorage
    if ( this._tagsHistory.length === 0 ) return;
    this.searchTag( this._tagsHistory[0] );
  }

  searchTag(tag: string): void {
    if(tag.length ===0) return;
    this.organizeHistory( tag );

    const params = new HttpParams()
    .set( 'api_key', this.apiKey )
    .set( 'limit', '10' )
    .set( 'q', tag )

    // console.log(this.tagsHistory);
    this.http.get<SearchResponse>(`${this.apiUrl}/search`, { params })
    .subscribe(resp => {
      // console.log(resp.data);
      this.gifList = resp.data;
      console.log('SOLO LA LISTA DE GIFS',this.gifList);
      
    })
  }



}

