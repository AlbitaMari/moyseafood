import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  user:any;

  apiUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getUser(){
    return new Promise(resolve => {
      this.http.get<any>(this.apiUrl + 'users',{
        headers: new HttpHeaders().set('Authorization', 'Bearer ')
      })
      .subscribe(data => {
        this.user = data;
        console.log(this.user);
        resolve(data)})
    })
  }

  editUser(email,phone){
      return new Promise(resolve => {
        this.http.post<any>(this.apiUrl + 'users',{
          email: email,
          phone: phone,
        },
        {
          headers: new HttpHeaders().set('Authorization', 'Bearer '),
        })
          .subscribe(data => {
            resolve(data)
          })
      })
  }
}
