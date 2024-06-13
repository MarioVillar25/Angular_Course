import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private http = inject(HttpClient);
  private baseURL = 'https://reqres.in/api/users/';

  //https://reqres.in/api/users/50

  getUserById(id: number): Observable<User> {
    return this.http.get<SingleUserResponse>(`${this.baseURL}${id}`).pipe(
      map((response) => response.data),
      tap(console.log)
    );
  }
}
