import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectTasks } from '../project-tasks';
import { Projects } from '../projects';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  constructor(private cliServ:ClientService, private router:Router){}
  allTask:ProjectTasks[]=[];
  allProjects: Projects[] = [];
  selectedProjectId: number=1;

  ngOnInit(): void {
      this.ShowAllTasks();
      this.cliServ.showallPros().subscribe(data => {
        this.allProjects = data;
      });
  }



  getModTaskPage(ptno:number){
    this.router.navigate(['/modtask', ptno]);
  }

  ShowAllTasks(){
    if (this.selectedProjectId) {
      this.cliServ.getTasksByProjectId(this.selectedProjectId).subscribe(data => {
        this.allTask = data;
        console.log(data);
      });
        } else {
      this.cliServ.showallTasks().subscribe(data=>{
      this.allTask=data;
      console.log(data);
    })
  }
}

  delTask(ptno:number){
    if(confirm("Are you sure to delete")==true){
      this.cliServ.DeleteTask(ptno).subscribe(data=>{
        this.ShowAllTasks();
      })
    }
  }

  onProjectSelect() {
    // This method is triggered when a project is selected from the dropdown
    this.ShowAllTasks();
  }


}
