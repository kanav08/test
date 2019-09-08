import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { TestService } from './test.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UserDetailsComponent,
    HomeComponent,
    SettingsComponent,
    ErrorComponent,
    ProfileComponent,
    UpdateComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    GetEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
