import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiURL = 'http://localhost:8090';

  constructor(private http: HttpClient) {
  }

  get(path: string): Observable<any> {
    return this.http.get<any>(this.apiURL + path)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  handleError(error: any) {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
