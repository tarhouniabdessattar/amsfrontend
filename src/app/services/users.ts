import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Users {

  constructor(private http: HttpClient) { } // injection de dépendence Objet de type HttpClient

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}
