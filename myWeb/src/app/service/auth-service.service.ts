import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private baseUrl = 'http://localhost:8080/api/auth';
  //private currentUserId: number = 1;
  private currentUserId: number | null = null;

  constructor(private http: HttpClient) {}

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user).pipe(
      tap((res: any) => {
        this.currentUserId = res.id;
        this.loggedIn.next(true);
      })
    );
  }

  logout() {
    this.loggedIn.next(false);
    this.currentUserId=null;
  }

  getCurrentUserId(): number | null {
    return this.currentUserId;
  }
}