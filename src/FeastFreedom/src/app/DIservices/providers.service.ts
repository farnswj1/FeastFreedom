import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { KitchenUser } from './providers';
import { Kitchen } from './kitchen';
// import { Plate } from './plate';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  private _url: string = 'http://localhost:8000/kitchens/new/';
  private _url1: string = 'http://localhost:8000/kitchens/';
  private _url2: string = 'http://localhost:8000/new/';

  // json-server url
  private url = 'http://localhost:3000/kitchens/';

  constructor(private http: HttpClient) {}

  getKitchen(id?: number): Observable<{}> {
    return id
      ? this.http
          .get<Kitchen>(this.url + id)
          .pipe(catchError(this.errorHandler))
      : this.http.get<Kitchen[]>(this.url).pipe(catchError(this.errorHandler));
  }

  postKitchen(KitchenData: any): Observable<Kitchen[]> {
    return this.http
      .post<Kitchen[]>(this._url, KitchenData)
      .pipe(catchError(this.errorHandler));
  }

  getKitchenUser(): Observable<KitchenUser[]> {
    return this.http
      .get<KitchenUser[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  postKitchenUser(CredentialData: any): Observable<KitchenUser[]> {
    return this.http
      .post<KitchenUser[]>(this._url2, CredentialData)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
