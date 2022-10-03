import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpService) {}

  createUser(data: user): user {
    // this.http.postAsync('users', )
  }
}
