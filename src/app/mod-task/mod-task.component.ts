import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { ProjectTasks } from '../project-tasks';

@Component({
  selector: 'app-mod-task',
  templateUrl: './mod-task.component.html',
  styleUrls: ['./mod-task.component.css']
})
export class ModTaskComponent implements OnInit{
  constructor(private activateRoute:ActivatedRoute,private cliServ:ClientService, private router:Router){}

  pt:ProjectTasks=new ProjectTasks(0,"","",0);
  ptno:number=0;

  ngOnInit(): void {
      this.ptno=this.activateRoute.snapshot.params["ptno"];
      this.cliServ.getTaskByprojectId(this.ptno).subscribe(data=>{
        this.pt=data;
      })

  }

  updatetasks(){
    this.cliServ.updateTask(this.ptno,this.pt).subscribe(data=>{
      this.router.navigate(['/viewtask']);
    })
  }


}
