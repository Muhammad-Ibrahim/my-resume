import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  headers: any;
  user: any;

  id:number = -1;
  
  getId() {
    return ++this.id;
  }

  constructor(private http:Http) {}

  getUsers() {
    return this.http.get('http://localhost:3000/users')
      .map(res => res.json());
  }
  
  push(userr:object) {
    this.user = JSON.stringify(userr);
    
    return this.http.post('http://localhost:3000/users',
      this.user,{})
      .map(res => res.json());
  }

}
