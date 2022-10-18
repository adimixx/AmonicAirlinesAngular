import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  protected baseURL: string = '/api/';

  constructor(private http: HttpClient) {}

  getAsync(path: string): Observable<any> {
    return this.http.get(this.baseURL + path);
  }

  postAsync(path: string, body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    let httpParams = new HttpParams({ fromObject: body });

    return this.http.post(this.baseURL + path, httpParams.toString(), {
      headers: headers,
    });
  }

  put(path: string, body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    let httpParams = new HttpParams({ fromObject: body });

    return this.http.put(this.baseURL + path, httpParams.toString(), {
      headers: headers,
    });
  }
}
