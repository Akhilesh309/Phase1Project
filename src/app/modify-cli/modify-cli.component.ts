import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';

import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-modify-cli',
  templateUrl: './modify-cli.component.html',
  styleUrls: ['./modify-cli.component.css']
})
export class ModifyCliComponent implements OnInit {


  constructor(private activateRoute:ActivatedRoute,private cliServ:ClientService, private router:Router){}

  cli:Clients = new Clients(0,"","","","");
  clino:number=0;

  ngOnInit(): void {
      this.clino=this.activateRoute.snapshot.params["cno"];
      this.cliServ.getCliInfobasedOnCliId(this.clino).subscribe(data=>{
        this.cli=data;
      });
  }

  updateclient()
  {
    this.cliServ.updateClient(this.clino,this.cli).subscribe(data=>{
      this.router.navigate(['/viewall']);


    });
  }

}
