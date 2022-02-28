import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  private headers=new HttpHeaders().set('Content-Type','application/json');
  httpOptions={
    headers:this.headers
  }

  constructor( private http:HttpClient) { }
  getUserList(query:any){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/5',{headers:this.headers});

  }
}
