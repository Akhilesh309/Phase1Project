import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Projects } from '../projects';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  constructor(private CliServ: ClientService, private router:Router){}
  pro:Projects = new Projects(0,"","",0);
  msg:string="";

  ProjectSaving(){
    this.CliServ.addNewPro(this.pro).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/viewpro']);
    this.msg="Student is saved..";
    })
  }

}
