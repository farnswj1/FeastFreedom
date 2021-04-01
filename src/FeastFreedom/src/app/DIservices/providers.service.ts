import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Providers, Credentials } from './providers'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  private _url: string =  "http://localhost:8000/kitchens/new/";
  private _url1: string = "http://localhost:8000/new/";
  constructor(private http: HttpClient) { }

  postProvider(ProviderData:any): Observable<Providers[]>{
    return this.http.post<Providers[]>(this._url, ProviderData)
    .pipe(catchError(this.errorHandler));
  }

  postCredentials(CredentialData:any):Observable<Credentials[]>{
    return this.http.post<Credentials[]>(this._url1, CredentialData)
    .pipe(catchError(this.errorHandler));

  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
