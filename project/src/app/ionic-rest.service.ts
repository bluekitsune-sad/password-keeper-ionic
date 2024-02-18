import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, catchError, take } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IonicRestService {
  private baseURL: string = 'http://127.0.0.1:5000';

  constructor(private httpClient: HttpClient) {}

  setBaseURL(url: string) {
    this.baseURL = url;
  }

  async getUser(username: string): Promise<any> {
    const url = `${this.baseURL}/getUser/${username}`;
    let request = this.httpClient.get(url).pipe(
      take(1),
      catchError((error) => {
        console.error('Error fetching user data:', error);
        return throwError(error);
      })
    );

    return await lastValueFrom<any>(request);
  }

  async addUser(user: any): Promise<any> {
    const url = `${this.baseURL}/addUser`;
    let request = this.httpClient.post(url, user).pipe(
      take(1),
      catchError((error) => {
        console.error('Error adding user:', error);
        return throwError(error);
      })
    );

    return await lastValueFrom<any>(request);
  }
}
