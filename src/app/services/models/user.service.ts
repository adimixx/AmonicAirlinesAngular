import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpService) {}
  

  getAllUsers(officeId: number): void{

  }

  createUser(data: user): Promise<user> {
    return new Promise((resolve, reject) => {
      try {
        this.http.postAsync('users', data).subscribe((x) => resolve(x));
      } catch (error) {
        reject(error);
      }
    });
  }
}
