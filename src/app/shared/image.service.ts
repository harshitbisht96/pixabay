import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ImageService{
    private query: string;
    private API_KEY: string='12695162-34ae3d2d4d59b34c745554744';
    private API_URL: string='https://pixabay.com/api/?key=';
    private URL: string= this.API_URL+ this.API_KEY+'&q=';

    constructor(private _http: HttpClient){}

    getImage(query:string):Observable<any>{
        return this._http.get<any>(this.URL+query);
    }

}