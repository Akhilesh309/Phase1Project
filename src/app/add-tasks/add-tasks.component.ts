import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { ProjectTasks } from '../project-tasks';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  constructor(private cliServ: ClientService, private router:Router){}
  pt: ProjectTasks=new ProjectTasks(0,"","",0);
  msg:string="";

  TaskSaving(){
    this.cliServ.addNewTask(this.pt).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/viewtask']);
      this.msg="task is saved";
    })
  }

}
