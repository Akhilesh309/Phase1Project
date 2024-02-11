import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Projects } from '../projects';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  constructor(private cliServ:ClientService, private router:Router){}

  allPros:Projects[]=[];
  ngOnInit(): void {
      this.Showallpros();
  }

  getModProPage(pno:number){

    this.router.navigate(['/modpro', pno]);
  }

  Showallpros()
  {
    this.cliServ.showallPros().subscribe(data=>{
      this.allPros = data;
      console.log(data);
    });

  }

  delpro(pno:number){
    if(confirm("Are you sure to delete")==true){
      this.cliServ.DeleteProInfoBasedOnProId(pno).subscribe(data=>{
        this.Showallpros();
      });
  }
}
}
