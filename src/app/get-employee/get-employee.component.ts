import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
response:any;
employeeid:Number;
editResponse:boolean=false;
editFormDiv:boolean=false;
employee:Employee=new Employee();
deleteResponse:boolean=false;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.search();
  }

  search(){
    let obs=this.http.get('http://localhost:8090/employees');
    obs.subscribe((response)=>{
    this.response=response;
   
    });
}
  deleteRecord(id:number){
   var count=0;
  let obs=this.http.delete('http://localhost:8090/employees/'+id);
  obs.subscribe(()=>{
    
  });
  debugger
  
  
var index = this.response.findIndex(obj => obj.id==id);
this.response.splice(index,1);

   this.deleteResponse=true;
 }

editRecord(id:Number){
  this.employeeid=id;
  this.editFormDiv=true;
  this.editResponse=false;
  this.deleteResponse=false;
  this.employee=new Employee();
}
editEmployee(id:number){
  this.editResponse=true;
  this.editFormDiv=false;
  this.employee.id=id;
  let obs=this.http.put('http://localhost:8090/employee/',this.employee);
    obs.subscribe((response)=>{
     
    });
    for (var i in this.response) {
      if (this.response[i].id == id) {
        this.response[i].name = this.employee.name;
        this.response[i].address = this.employee.address;
        this.response[i].salary = this.employee.salary;
         break; 
      }
    }
}
}