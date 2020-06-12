import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Rest} from '../domain/rest';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private testUrl = 'assets/data/test.json';

  private baseUrl = 'http://localhost:8095/rest/report';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${this.testUrl}`);
  }

  getAllRecords() {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
} 
