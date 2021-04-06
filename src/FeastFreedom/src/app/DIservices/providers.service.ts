import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IKitchenUser } from './providers';
import { kitchen, Kitchen } from './kitchen';
import { catchError } from 'rxjs/operators';

// Angular-jwt
import { JwtHelperService } from '@auth0/angular-jwt';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  private _url: string = 'http://localhost:8000/kitchens/';
  private _url1: string = 'http://localhost:8000/users';
  name_:any;

  // json-server url
  private url = 'http://localhost:3000/';
  private djangoUrl = 'http://127.0.0.1:8000/';

  public order: [] | undefined;

  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  login(username: string, password: string): Observable<{}> {
    return this.http
      .post(this.djangoUrl + 'login/', {
        username,
        password,
      })
      .pipe(catchError(this.errorHandler));
  }

  getUser(): any {
    return this.jwt.decodeToken(
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3NjMyNzM5LCJqdGkiOiJmNDA3M2NhODFmYjI0Njg2YWQyOTA3YWJlZThlNjFlNCIsInVzZXJfaWQiOjJ9.K61b274YGmU1x1mW-qr_g_WocdZEPiNOfWiRLycyD9I'
    ).user_id;
  }

  getKitchen(id?: number): Observable<{}> {
    return id
      ? this.http
          .get<Kitchen>(this.url + 'kitchens/' + id)
          .pipe(catchError(this.errorHandler))
      : this.http
          .get<Kitchen[]>(this.url + 'kitchens/')
          .pipe(catchError(this.errorHandler));
  }

  getKitchen1(): Observable<Kitchen[]> {
    return this.http
      .get<Kitchen[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  postKitchen(KitchenData: any): Observable<kitchen> {
    return this.http
      .post<kitchen>(this._url + 'create/', KitchenData)
      .pipe(catchError(this.errorHandler));
  }

  getKitchenUser(): Observable<IKitchenUser[]> {
    return this.http
      .get<IKitchenUser[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  getKitchenUserById(id: any): Observable<IKitchenUser[]> {
    return this.http
      .get<IKitchenUser[]>(this._url + '/kitchens/' + id + '/')
      .pipe(catchError(this.errorHandler));
  }

  postOrder(order: Order): Observable<{}> {
    return this.http
      .post(this.url + 'orders/', order)
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
