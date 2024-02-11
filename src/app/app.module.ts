import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { AddClientComponent } from './add-client/add-client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewAllCliComponent } from './view-all-cli/view-all-cli.component';
import { ModifyCliComponent } from './modify-cli/modify-cli.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ModifyProComponent } from './modify-pro/modify-pro.component';
import { AddMeetingsComponent } from './add-meetings/add-meetings.component';
import { ViewAllMeetingsComponent } from './view-all-meetings/view-all-meetings.component';
import { ModifyMeetingComponent } from './modify-meeting/modify-meeting.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingleClientComponent } from './single-client/single-client.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ModTaskComponent } from './mod-task/mod-task.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ViewAllCliComponent,
    ModifyCliComponent,
    AddProjectComponent,
    ViewProjectsComponent,
    ModifyProComponent,
    AddMeetingsComponent,
    ViewAllMeetingsComponent,
    ModifyMeetingComponent,
    LoginComponent,
    HomeComponent,
    SingleClientComponent,
    AddTasksComponent,
    ViewTasksComponent,
    ModTaskComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
