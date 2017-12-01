import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import  {ENV} from '../../../env'
  const httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }
  onGetAdmin(): Observable<any> {
  const url = `${ENV.mainApi}getAllCategories`;
  return this.http.get<any>(url)
        .pipe(
        tap(heroes => this.log(`get Category Test`)),
        catchError(this.handleError('get Category Test', []))
      
  );
  }
  login(data): Observable<any> {
    const url = `${ENV.mainApi}/login`;
    return this.http.post<any>(url,data,httpOptions)
    .pipe(
        tap(heroes => this.log(`get Category Test`)),
        catchError(this.handleError('get Category Test', []))
      
    );
  }
  updateProfile(data,flag): Observable<any> {
    const url = `${ENV.mainApi}/update/${flag}`;
    return this.http.post<any>(url,data,httpOptions)
    .pipe(
        tap(heroes => this.log(`get Category Test`)),
        catchError(this.handleError('get Category Test', []))
      
    );
  }
  updateUser(data): Observable<any> {
    const url = `${ENV.mainApi}/updateUser`;
    return this.http.post<any>(url,data,httpOptions)
    .pipe(
        tap(heroes => this.log(`get Category Test`)),
        catchError(this.handleError('get Category Test', []))
      
    );
  }
  forgot(data): Observable<any> {
    const url = `${ENV.mainApi}/forgot`;
    return this.http.post<any>(url,data,httpOptions)
    .pipe(
        tap(heroes => this.log(`get Category Test`)),
        catchError(this.handleError('get Category Test', []))
      
    );
  }
  getUserDetail(): Observable<any> {
    const url = `${ENV.mainApi}/users`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get Category Test`)),
          catchError(this.handleError('get Category Test', []))
        
    );
  }
  changeUserStatus(id): Observable<any> {
    const url = `${ENV.mainApi}/updateuserstatus/`+id;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get Category Test`)),
          catchError(this.handleError('get Category Test', []))
        
    );
  }
  getDealTypes(): Observable<any> {
    const url = `${ENV.mainApi}/dealtype`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get Category Test`)),
          catchError(this.handleError('get Category Test', []))
        
    );
  }
  changeDealtypeStatus(id): Observable<any> {
    const url = `${ENV.mainApi}/updatedealtypestatus/`+id;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get Category Test`)),
          catchError(this.handleError('get Category Test', []))
        
    );
  }
  updateDealType(data): Observable<any> {
    const url = `${ENV.mainApi}/updatedealtypename`;
    return this.http.post<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get Category Test`)),
          catchError(this.handleError('get Category Test', []))
        
    );
  }
  createdealtype(data): Observable<any> {
    const url = `${ENV.mainApi}/createdealtype`;
    return this.http.post<any>(url,data,httpOptions)
          .pipe(
          tap(heroes => this.log(`get Category Test`)),
          catchError(this.handleError('get Category Test', []))
        
    );
  }

  getDeal(): Observable<any> {
    const url = `${ENV.mainApi}/deals`;
    return this.http.get<any>(url,httpOptions)
          .pipe(
          tap(heroes => this.log(`get deal Test`)),
          catchError(this.handleError('get deal Test', []))
        
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
    console.log(message)
  }
}
