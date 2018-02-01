import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
  constructor(private _http: Http) { }
    getLoginDetails(usename, password) {
      return this._http.get('http://localhost:50040/api/authenticate?username=+this.username+&password=+this.password+');
    }
}
