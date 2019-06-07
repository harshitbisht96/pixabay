import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ImageService{
    private query: string;
    private API_KEY: string=environment.PIXABAY_API_KEY;
    private API_URL: string=environment.PIXABAY_API_URL;
    private URL: string= this.API_URL+ this.API_KEY+'&q=';

    constructor(private _http: HttpClient){}

    getImage(query:string):Observable<any>{
        return this._http.get<any>(this.URL+query);
    }

}