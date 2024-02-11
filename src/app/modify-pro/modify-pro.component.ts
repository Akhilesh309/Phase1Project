import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Projects } from '../projects';

@Component({
  selector: 'app-modify-pro',
  templateUrl: './modify-pro.component.html',
  styleUrls: ['./modify-pro.component.css']
})
export class ModifyProComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute, private cliServ:ClientService,
    private router:Router){}

    pro:Projects=new Projects(0,"","",0);
    prono:number=0;

    ngOnInit(): void {
        this.prono=this.activateRoute.snapshot.params["pno"];
        this.cliServ.getProBasedOnProId(this.prono).subscribe(data=>{
          this.pro=data;
        });
      }

    updatepro()
    {
      this.cliServ.updateProject(this.prono, this.pro).subscribe(data=>{
        this.router.navigate(['/viewpro']);
      })
    }

}
