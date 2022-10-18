import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { user } from 'src/app/models/user';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userDataState: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpService) {}

  getAllUsers(officeId: number = 0): Observable<user[]> {
    let params = new HttpParams();
    if (officeId != 0) {
      params = params.append('office_id', officeId);
    }

    return this.http.getAsync('users?' + params.toString());
  }

  createUser(data: user): Promise<user> {
    return new Promise((resolve, reject) => {
      try {
        this.http.postAsync('users', data).subscribe((x) => {
          this.userDataState.next(true);
          resolve(x);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  updateUser(id: number, data: user): Observable<user> {
    return this.http.put('users/' + id, data);
  }
}
