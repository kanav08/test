import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';
import {Employee} from './employee'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  username: String;
  response:any;
  showAddButtonDetails:boolean=false;
  showEditButtonDetails:boolean=false;
user:any;
@Input('name') myname :String;

IsCollapsed:boolean=true;
//@Input('user') myname :User;

  constructor(private servic:TestService,private http:HttpClient) { 
   
      servic.printToConsole("Hello Eshana!!");


    }
    

  toggleCollapse(){
    this.IsCollapsed=!this.IsCollapsed;
  }
  ngOnInit() {
    
    
    this.user={
     name:this.myname,
      gender:"Male",
      dob:"03-06-1992",
      address:"Punjab",
      mobile:[8975746,9768769]
      /*
      name:this.myname.name,
      gender:this.myname.gender,
      dob:this.myname.dob,
      address:this.myname.address,
      mobile:this.myname.mobile*/
  }
  }
 search(){
  //let obs=this.http.get('https://api.github.com/users/'+this.username);
  let obs=this.http.get('http://localhost:8088/employees');
  obs.subscribe((response)=>{
  //  console.log(response);
    this.response=response;
  });

 
    
  
}

deleteRecord(id:number){
  debugger
  let obs=this.http.delete('http://localhost:8088/employees/'+id);
  obs.subscribe((response)=>{
    //console.log(response);
    this.response=response;


  });
  this.search();
}

addEmployee(){
  debugger
  let obs=this.http.post('http://localhost:8088/save/',this.employee);
  obs.subscribe((response)=>{
    //console.log(response);
    //this.response=response;
  });
  this.search();
}

add(){
this.showAddButtonDetails=!this.showAddButtonDetails;
}
employee:Employee=new Employee();
}