import {NgModule} from '@angular/core';
import {Route,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
const routes:Route[]=[
    //{path:'',redirectTo:'/home',pathMatch:'full' },
    {path:'home',component:HomeComponent},
    {path:'settings',component:SettingsComponent,
    children:[
        {path:'profile',component:ProfileComponent},
        {path:'update',component:UpdateComponent}
    ]            
},
{path:'addEmployee',component:AddEmployeeComponent},
{path:'edit',component:GetEmployeeComponent},
{path:'getEmployee',component:GetEmployeeComponent},
    //{path:'**',component:ErrorComponent}
];
@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)
export class AppRoutingModule{

}