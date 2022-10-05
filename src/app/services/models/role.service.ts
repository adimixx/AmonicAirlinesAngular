import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { role } from 'src/app/models/role';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpService) {}

  getRoles(): Observable<role[]> {
    return this.http.getAsync('roles');
  }
}
