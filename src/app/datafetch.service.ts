import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import{Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DatafetchService {

  constructor(private http: Http) { }

  getUsersAPI():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
                    .map((res:Response)=>res.json())
                    .catch((error:any)=>Observable.throw(error.json().error||'server error'));
    }
  createUser(newID:number,newName:string,newEmail:string,newPhone:number,newJobType:string): Observable<any>{
    return this.http.post("https://jsonplaceholder.typicode.com/users",{id:newID,name:newName,email:newEmail,phone:newPhone,job:newJobType});
  }
  updateUser(newID:number,newName:string,newEmail:string,newPhone:number,newJobType:string):Observable<any>{
    return this.http.put("https://jsonplaceholder.typicode.com/users"+newID,{
      id:newID,
      name:newName,
      email:newEmail,      
      phone:newPhone,
      job:newJobType

    })
  }
}


// return this.http.get(this.url).map((res:Response) =>res.json())
//                               .catch((error:any)=>Observable.throw(error.json().error ||'server error'))