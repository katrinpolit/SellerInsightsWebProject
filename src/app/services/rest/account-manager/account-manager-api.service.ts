import { Injectable } from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountManagerAPIService {
//this service was created separately from basic API service as an example
// of similar services in a large enterprise application
// where it is important to separate services by theme
  constructor(private apiService:RestApiService) {}

  getAccountManagerDataByName(accountManager: string):Observable<any>{
    return this.apiService.get("/statistic/"+accountManager);
  }

}
