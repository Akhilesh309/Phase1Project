import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewAllCliComponent } from './view-all-cli/view-all-cli.component';
import { ModifyCliComponent } from './modify-cli/modify-cli.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ModifyProComponent } from './modify-pro/modify-pro.component';
import { AddMeetingsComponent } from './add-meetings/add-meetings.component';
import { ViewAllMeetingsComponent } from './view-all-meetings/view-all-meetings.component';
import { ModifyMeetingComponent } from './modify-meeting/modify-meeting.component';
import { combineLatest } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingleClientComponent } from './single-client/single-client.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ModTaskComponent } from './mod-task/mod-task.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"addcli",component:AddClientComponent},
  {path:"viewall",component:ViewAllCliComponent},
  {path:"modcli/:cno",component:ModifyCliComponent},
  {path:"addpro",component:AddProjectComponent},
  {path:"viewpro",component:ViewProjectsComponent},
  {path:"modpro/:pno",component:ModifyProComponent},
  {path:"addmeet",component:AddMeetingsComponent},
  {path:"viewmeet",component:ViewAllMeetingsComponent},
  {path:"modmeet/:mno",component:ModifyMeetingComponent},
  {path:"singleclient/:id",component:SingleClientComponent},
  {path:"addtask",component:AddTasksComponent},
  {path:"viewtask",component:ViewTasksComponent},
  {path:"modtask/:ptno",component:ModTaskComponent},
  {path:"welcome",component:WelcomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
