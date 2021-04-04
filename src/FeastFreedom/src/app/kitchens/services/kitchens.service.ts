import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IKitchen } from '../interfaces/kitchen';
import { Kitchen } from '../models/kitchen';

@Injectable({
  providedIn: 'root'
})
export class KitchensService {
  private _url: string = "http://127.0.0.1:8000/kitchens/"
  
  constructor(private http: HttpClient) { }

  getKitchens(): Observable<IKitchen[]> {
    return this.http.get<IKitchen[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getKitchen(id: number): Observable<IKitchen[]> {
    return this.http.get<IKitchen[]>(this._url + id + "/")
    .pipe(catchError(this.errorHandler));
  }

  createKitchen(kitchen: any): Observable<Kitchen[]> {
    return this.http.post<IKitchen[]>(this._url + "create/", kitchen)
    .pipe(catchError(this.errorHandler));
  }

  updateKitchen(id: number, kitchen: any): Observable<IKitchen[]> {
    return this.http.put<IKitchen[]>(this._url + id + "/update/", kitchen)
    .pipe(catchError(this.errorHandler));
  }

  deleteKitchen(id: number): any {
    return this.http.delete(this._url + id + "/delete/");
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
