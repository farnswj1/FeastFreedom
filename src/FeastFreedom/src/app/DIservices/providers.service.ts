import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
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

  // json-server url
  private url = 'http://localhost:3000/';
  private djangoUrl = 'http://127.0.0.1:8000/';

  public order: [] | undefined;

  private logger = new Subject<boolean>();

  private loggedIn = false;

  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  logIn(username: string, password: string): void {
    this.http.post(this.djangoUrl + 'login/', { username, password }).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
      },
      (error) => console.log(error),
      () => {
        console.log('logged in');
        this.loggedIn = true;
        this.logger.next(this.loggedIn);
      }
    );
  }

  logOut(): void {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }

  getUser(): Observable<{}> {
    const id = this.jwt.decodeToken(localStorage.getItem('access') || '')
      .user_id;
    return this.http.get(this.url + 'users/' + '');
  }

  getUserId(): number {
    const token = localStorage.getItem('access');
    return this.jwt.decodeToken(token || '').user_id;
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
}
