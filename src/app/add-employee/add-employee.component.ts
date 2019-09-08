import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../user-details/employee';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form:FormGroup;
employee:Employee=new Employee();
addResponse:boolean=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient) {
   
   }

  ngOnInit() {
    this.form=this.formBuilder.group({
      name:[null,Validators.required],
      address:[null,Validators.required],
      salary:[null,Validators.required],
    });
  }

  addEmployee(){
    let obs=this.http.post('http://localhost:8090/save/',this.employee);
    obs.subscribe((response)=>{
      this.addResponse=true;
    });
    location.reload();
     }

   
}
