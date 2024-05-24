import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'Gcgnusu9xYAjuPtrgdtypkLp3nv59PNZ';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    // Es como un UseEffect

    this.getLocalStorage();
    console.log('Gifs Servers ready');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    // filtramos el array para que no se repitan valores.

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag != tag);
    }

    //metemos ese nuevo elemento de tag
    //nota: este va a ser el método unshift base de la función SearchTag

    this._tagsHistory.unshift(tag);

    //limitamos con splice el array a 10 elementos:

    this._tagsHistory = this._tagsHistory.splice(0, 10);
    //guardamos en localStorage
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    //Creamos un objeto de la clase HttpParams para los parámetros
    //del URL para llamar a la API

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

    //con this.http.get llamamos a la api.

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((res) => {
        this.gifList = res.data;

        console.log(res.data);
      });

    console.log(this._tagsHistory);
  }
}
