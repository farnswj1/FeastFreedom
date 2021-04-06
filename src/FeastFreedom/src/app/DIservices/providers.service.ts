import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IKitchenUser } from './providers';
import { kitchen, Kitchen } from './kitchen';
// import { Plate } from './plate';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  private _url: string = 'http://localhost:8000/kitchens/';
  private _url1: string = 'http://localhost:8000/users';
  name_:any;

  // json-server url
  private url = 'http://localhost:3000/kitchens/';

  constructor(private http: HttpClient) { }

  getKitchen(id?: number): Observable<{}> {
    return id
      ? this.http
        .get<Kitchen>(this.url + id)
        .pipe(catchError(this.errorHandler))
      : this.http.get<Kitchen[]>(this.url).pipe(catchError(this.errorHandler));
  }

  getKitchen1(): Observable<Kitchen[]> {
    return this.http
      .get<Kitchen[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  postKitchen(KitchenData: any): Observable<kitchen> {
    return this.http
      .post<kitchen>(this._url + "create/", KitchenData)
      .pipe(catchError(this.errorHandler));
  }

  getKitchenUser(): Observable<IKitchenUser[]> {
    return this.http
      .get<IKitchenUser[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  getKitchenUserById(id: any): Observable<IKitchenUser[]> {
    return this.http
      .get<IKitchenUser[]>(this._url + "/kitchens/" + id + "/")
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  setName(name:any){
    this.name_ = name;
  }

  getName(){
    return this.name_;
  }

}
