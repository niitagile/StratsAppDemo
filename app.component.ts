import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'oauthApp';
  //oauthUrl:string = "http://localhost:8080/oauth/authorize";

  constructor(private http : HttpClient,private service:EmployeeServiceService){}
  
  onSubmit(contactForm : any){
    //let apiUrl = `${this.oauthUrl}`;
    console.log(contactForm.value);
    this.service.getDetails(contactForm.value).subscribe((res)=>{console.log(res)});
    
  }
  ngOnInit():void{
    
  }


}
