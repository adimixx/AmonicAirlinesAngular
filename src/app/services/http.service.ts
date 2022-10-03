import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  protected baseURL: string = '/api/';

  constructor(private http: HttpClient) {}

  getAsync(path: string): Observable<any> {
    return this.http.get(this.baseURL + path);
  }

  postAsync(path: string, body: JSON): Observable<any> {
    return this.http.post(path, body);
  }
}
