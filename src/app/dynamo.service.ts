import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamoService {
  constructor(private httpClient: HttpClient) {}

  public loadEngineer(name: string):  Observable<any>{
    let body = { engname: name}
    return this.httpClient.post<any>('https://ogjadk2fqa.execute-api.eu-central-1.amazonaws.com/production/readeng',body);
  }

}
