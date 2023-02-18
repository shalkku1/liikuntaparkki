import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataModel } from '../models/DataModel';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private httpclient: HttpClient
  ) { }

  getData(): Observable<dataModel[]> {
    return this.httpclient.get<dataModel[]>("http://localhost:8081/api/getdata");
  }
}
