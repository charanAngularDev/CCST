import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
url = 'http://localhost:50040/api/authenticate?username=Ram&password=Ram123';
  constructor(private _httpClient: HttpClient) { }

        checkIn(username: string, password: string ) {
              return this._httpClient.post<any>(this.url, {username: username, password: password })
              .map(user => {
                // login succesful if there's a jwt token in response
                if (user && user.name) {
                   // store user details and jwt token in local storage to keep user logged in between page refreshes
                   localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
              });
        }
}
