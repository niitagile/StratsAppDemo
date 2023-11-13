import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  oauthUrl:string = "http://localhost:8080/oauth/authorize";
  
  constructor(private http : HttpClient) { }
//headers = new HttpHeaders().set('Content-Type','application/json');
  getDetails(data : any){
    let apiUrl = `${this.oauthUrl}`;

    return this.http.post(apiUrl,data);
    
  }
}
