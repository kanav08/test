import { Component } from '@angular/core';
import{ User } from './user-details/user';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic';
params:String="Demo";
  /*
  user:User;
  constructor(){
this.user= new User();
this.user.name="Vanya";
this.user.gender="Female";
this.user.dob="03-Jun-2019";

this.user.mobile=['99887766','99886644'];
this.user.address="Ludhiana";
  }
  */

 constructor(private serv:TestService, private http:HttpClient){
   serv.printToConsole("Hello Kanav");

   }
   
}
